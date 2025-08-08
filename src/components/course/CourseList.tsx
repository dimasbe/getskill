// src/components/course/CourseList.tsx

import CourseCard from './CourseCard'
import dummyCourses from '../../data/dummyCourses'
import type { Course } from '../../types/Course'

interface CourseListProps {
  filters?: { // Menjadikan filters opsional
    categories: string[]
    priceMin: string
    priceMax: string
  }
  page?: number // Menjadikan page opsional
  setPage?: (page: number) => void // Menjadikan setPage opsional
  limit?: number // Menambahkan properti limit
  columns?: number // Menambahkan properti columns
}

const COURSES_PER_PAGE = 6

export default function CourseList({
  filters,
  page = 1, // Memberikan nilai default
  setPage,
  limit,
  columns = 3, // Memberikan nilai default
}: CourseListProps) {
  // Filtering logic
  let filteredCourses = dummyCourses
  if (filters) {
    filteredCourses = dummyCourses.filter((course: Course) => {
      const price = parseInt(course.price.replace('.', '')) || 0
      const min = filters.priceMin ? parseInt(filters.priceMin) : 0
      const max = filters.priceMax ? parseInt(filters.priceMax) : Infinity

      const categoryMatch =
        filters.categories.length === 0 || filters.categories.includes(course.category)
      const priceMatch = price >= min && price <= max

      return categoryMatch && priceMatch
    })
  }

  // Apply limit if provided
  const coursesToDisplay = limit ? filteredCourses.slice(0, limit) : filteredCourses

  // Pagination logic
  const totalPages = Math.ceil(coursesToDisplay.length / COURSES_PER_PAGE)
  const startIndex = (page - 1) * COURSES_PER_PAGE
  const currentCourses = coursesToDisplay.slice(startIndex, startIndex + COURSES_PER_PAGE)

  const gridClass = `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columns} gap-5`;


  return (
    <div>
      {/* Course Cards */}
      <div className={gridClass}>
        {currentCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>

      {/* Pagination Buttons */}
      {setPage && totalPages > 0 && (
        <div className="flex justify-center mt-20">
          <div className="flex gap-3 mb-10">
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1
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
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}