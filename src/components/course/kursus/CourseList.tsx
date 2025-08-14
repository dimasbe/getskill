import CourseCard from '../kursus/CourseCard';
import dummyCourses from '../../../data/dummyCourses';
import type { Course } from '../../../types/Course';

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
  filters = { categories: [], priceMin: '', priceMax: '', search: '' },
  page = 1,
  setPage,
  limit,
  columns = 3,
}: CourseListProps) {
  const filteredCourses = dummyCourses.filter((course: Course) => {
    const price = parseInt(course.price.replace(/\./g, '')) || 0;
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

  // Apply limit if provided
  const coursesToDisplay = limit ? filteredCourses.slice(0, limit) : filteredCourses;

  // Pagination logic
  const totalPages = Math.ceil(coursesToDisplay.length / COURSES_PER_PAGE);
  const startIndex = (page - 1) * COURSES_PER_PAGE;
  const currentCourses = coursesToDisplay.slice(startIndex, startIndex + COURSES_PER_PAGE);

  // Grid columns class
  const gridClass = `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columns} gap-5`;

  return (
    <div>
      {/* Course Cards */}
      <div className={gridClass}>
        {currentCourses.length > 0 ? (
          currentCourses.map((course) => <CourseCard key={course.id} {...course} />)
        ) : (
          <p className="text-center col-span-full text-gray-500">
            Tidak ada kursus yang ditemukan
          </p>
        )}
      </div>

      {/* Pagination Buttons */}
      {setPage && totalPages > 1 && (
        <div className="flex justify-center mt-20">
          <div className="flex gap-3 mb-10">
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                  className={`w-8 h-8 rounded-full text-sm font-medium transition ${
                    pageNumber === page
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-purple-100'
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
