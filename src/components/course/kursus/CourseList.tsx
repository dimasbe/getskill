// components/course/kursus/CourseList.tsx
import { useEffect, useState } from "react";
import CourseCard from "../kursus/CourseCard";
import CourseSkeleton from "../kursus/CourseSkeleton";
import dummyCourses from "../../../data/dummyCourses";
import type { Course } from "../../../types/Course";
import { motion, AnimatePresence } from "framer-motion";

interface CourseListProps {
  filters?: {
    categories: string[];
    priceMin: string;
    priceMax: string;
    search: string;
  };
  page?: number;
  setPage?: (page: number) => void;
  limit?: number;
  columns?: number;
}

const COURSES_PER_PAGE = 6;

export default function CourseList({
  filters = { categories: [], priceMin: "", priceMax: "", search: "" },
  page = 1,
  setPage,
  limit,
  columns = 3,
}: CourseListProps) {
  const [loading, setLoading] = useState(true);

  // ✅ Loading hanya saat pertama kali mount
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800); // lebih cepat
    return () => clearTimeout(timer);
  }, []);

  // 🔍 Filter data
  const filteredCourses = dummyCourses.filter((course: Course) => {
    const price = parseInt(course.price.replace(/\./g, "")) || 0;
    const min = filters.priceMin ? parseInt(filters.priceMin) : 0;
    const max = filters.priceMax ? parseInt(filters.priceMax) : Infinity;

    const matchCategory =
      filters.categories.length === 0 ||
      filters.categories.includes(course.category);

    const matchPriceMin = price >= min;
    const matchPriceMax = price <= max;

    const matchSearch =
      !filters.search.trim() ||
      course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      course.author.toLowerCase().includes(filters.search.toLowerCase()) ||
      course.category.toLowerCase().includes(filters.search.toLowerCase());

    return matchCategory && matchPriceMin && matchPriceMax && matchSearch;
  });

  // 🔄 Data yang ditampilkan
  let currentCourses: Course[] = [];
  let totalPages = 1;

  if (limit) {
    currentCourses = filteredCourses.slice(0, limit);
  } else {
    totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
    const startIndex = (page - 1) * COURSES_PER_PAGE;
    currentCourses = filteredCourses.slice(
      startIndex,
      startIndex + COURSES_PER_PAGE
    );
  }

  // ✅ Mapping kolom agar Tailwind bisa compile
  const columnsClass =
    columns === 2
      ? "lg:grid-cols-2"
      : columns === 4
        ? "lg:grid-cols-4"
        : "lg:grid-cols-2 xl:grid-cols-3";

  const gridClass = `grid grid-cols-1 ${columnsClass} gap-5 items-stretch`;

  return (
    <div className="flex flex-col min-h-[500px]">
      {/* Grid courses */}
      <div className={gridClass}>
        <AnimatePresence mode="popLayout">
          {loading ? (
            Array.from({ length: limit || COURSES_PER_PAGE }).map((_, idx) => (
              <motion.div
                key={`skeleton-${idx}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <CourseSkeleton />
              </motion.div>
            ))
          ) : currentCourses.length > 0 ? (
            currentCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <CourseCard {...course} />
              </motion.div>
            ))
          ) : (
            <motion.p
              key="no-course"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center col-span-full text-gray-500 py-8"
            >
              Tidak ada kursus yang ditemukan
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Pagination hanya muncul kalau tidak ada limit */}
      {!loading && !limit && setPage && totalPages > 1 && (
        <div className="mt-auto pt-6 sm:pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center"
          >
            <div className="flex gap-2 sm:gap-3">
              {Array.from({ length: totalPages }).map((_, index) => {
                const pageNumber = index + 1;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm font-medium transition ${pageNumber === page
                        ? "bg-purple-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-purple-100"
                      }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
