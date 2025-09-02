import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { formatRupiah } from "../../utils/formatPrice";
import dummyCourses from "../../data/dummyCourses";
import type { Course } from "../../types/Course";
import CourseSkeleton from "../../components/course/PageCourse/CourseSkeleton";

// --- Course Card Component ---
interface CourseCardProps {
  id: string;
  image: string;
  category: string;
  level?: string;
  badge?: string;
  title: string;
  author: string;
  price: string;
  rating?: number;
  isFree?: boolean;
}

const CourseCard = ({
  id,
  image,
  category,
  level,
  badge,
  title,
  author,
  price,
  rating = 0,
  isFree = false,
}: CourseCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/kursus/${id}`)}
      className="card-shine w-full max-w-[260px] h-full flex flex-col bg-white rounded-xl border border-gray-400 shadow-sm
        transition-all duration-300 cursor-pointer overflow-hidden min-h-[280px]
        hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,0.3)] hover:-translate-y-1"
    >
      {/* Bagian Gambar */}
      <div className="relative w-full aspect-video flex items-center justify-center p-2 sm:p-3 overflow-hidden">
        <div className="relative overflow-hidden rounded-md shine__animate">
          <img
            src={`/images/${image}`}
            alt={title}
            className="w-full h-full object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/placeholder-course.jpg";
            }}
          />
        </div>
        {/* Badge */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-30">
          {level && (
            <span className="bg-white text-[9px] font-semibold font-sans px-1.5 py-0.5 rounded-full shadow">
              {level}
            </span>
          )}
          {badge && (
            <span className="bg-white text-[9px] font-semibold font-sans px-1.5 py-0.5 rounded-full shadow">
              {badge}
            </span>
          )}
        </div>
      </div>

      {/* Konten Bagian Bawah */}
      <div className="flex-1 px-3 py-2 text-left flex flex-col">
        {/* Kategori dan Rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="bg-gray-100 font-semibold text-gray-800 font-sans text-[9px] px-1.5 py-0.5 rounded-full leading-none transition-all duration-300 ease-in-out hover:bg-purple-700 hover:text-white hover:shadow-md">
            {category}
          </span>
          <div className="flex items-center text-gray-500 text-[10px]">
            <FaStar
              size={11}
              className="text-yellow-500 mr-1"
              style={{
                stroke: "black",
                strokeWidth: 20,
              }}
            />
            <span>({rating.toFixed(1)} Reviews)</span>
          </div>
        </div>
        {/* Judul */}
        <h3 className="group relative text-[14px] font-sans text-black font-semibold mb-2 leading-snug line-clamp-2">
          <span
            className="inline bg-[linear-gradient(black,black),linear-gradient(black,black)]
            bg-[length:0%_2px,0_2px]
            bg-[position:100%_100%,0_100%]
            bg-no-repeat
            transition-[background-size] duration-900
            hover:bg-[length:0_2px,100%_2px]"
          >
            {title}
          </span>
        </h3>
        {/* Author */}
        <p className="text-xs text-gray-500 mb-3 line-clamp-1">
          By{" "}
          <span className="font-semibold text-gray-700 font-sans">
            {author}
          </span>
        </p>
        {/* Footer */}
        <div className="mb-2 mt-auto flex flex-row items-center justify-between gap-1">
          <button
            className="bg-yellow-400 text-gray-900 text-[10px] font-sans font-bold px-3 py-1.5 rounded-full border border-black
              transition-all duration-300 ease-in-out
              shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-none active:translate-y-0.5"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/kursus/${id}`);
            }}
          >
            Detail Course →
          </button>
          <p
            className={`font-bold font-sans text-sm ${isFree ? "text-purple-500" : "text-purple-700"
              }`}
          >
            {isFree ? "Free" : formatRupiah(price)}
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Course List ---
const PopularCourseList = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Simulasi fetch data
    const timer = setTimeout(() => {
      setCourses(dummyCourses.slice(0, 4));
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const gridClass =
    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 w-full";

  return (
    <div className="flex flex-col">
      <div className={gridClass}>
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <CourseSkeleton key={i} viewMode="grid" />
          ))
        ) : (
          <AnimatePresence mode="popLayout">
            {courses.map((course) => (
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
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

// --- Komponen Utama PopularCourse ---
export default function PopularCourse() {
  return (
    <div className="py-[1vh] sm:py-[2vh] md:py-[2vh] lg:py-[1vh] xl:py-[1vh] 2xl:py-[1vh] bg-gray-50">
      <div className="font-sans antialiased px-4 pt-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="px-3 py-2 text-[10px] sm:text-xs font-semibold bg-[#F6EEFE] text-[#9425FE] rounded-full">
              Kursus Terlaris
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
            Kursus Terlaris Di Getskill
          </h1>
          <p className="text-md text-gray-600 text-center -mb-6">
            Daftar kursus yang paling laris di getskill
          </p>
        </div>
        <div className="px-4 py-14 bg-gray-50 mx-0 sm:mx-24 md:mx-24 lg:mx-28 xl:mx-30 2xl:mx-60">
          <PopularCourseList />
        </div>
      </div>
    </div>
  );
}
