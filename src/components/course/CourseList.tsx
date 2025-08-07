import CourseCard from './CourseCard';
import dummyCourses from '../../data/dummyCourses';
import type { Course } from '../../types/Course';

interface CourseListProps {
  filters: {
    categories: string[];
    priceMin: string;
    priceMax: string;
  };
  page: number;
  setPage: (page: number) => void;
}

const COURSES_PER_PAGE = 6;

export default function CourseList({ filters, page, setPage }: CourseListProps) {
  // Filtering logic
  const filteredCourses = dummyCourses.filter((course: Course) => {
    const price = parseInt(course.price.replace('.', '')) || 0;
    const min = filters.priceMin ? parseInt(filters.priceMin) : 0;
    const max = filters.priceMax ? parseInt(filters.priceMax) : Infinity;

    const categoryMatch =
      filters.categories.length === 0 || filters.categories.includes(course.category);
    const priceMatch = price >= min && price <= max;

    return categoryMatch && priceMatch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
  const startIndex = (page - 1) * COURSES_PER_PAGE;
  const currentCourses = filteredCourses.slice(startIndex, startIndex + COURSES_PER_PAGE);

  return (
    <div>
      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>

      {/* Pagination Buttons */}
      {totalPages > 0 && (
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
