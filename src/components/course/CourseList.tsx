import CourseCard from './CourseCard'
import dummyCourses from '../../data/dummyCourses'
import type { Course } from '../../types/Course'

interface CourseListProps {
  filters: {
    categories: string[]
    priceMin: string
    priceMax: string
  }
}

export default function CourseList({ filters }: CourseListProps) {
  const filteredCourses = dummyCourses.filter((course: Course) => {
    const price = parseInt(course.price.replace('.', '')) || 0
    const min = filters.priceMin ? parseInt(filters.priceMin) : 0
    const max = filters.priceMax ? parseInt(filters.priceMax) : Infinity
    const categoryMatch =
      filters.categories.length === 0 || filters.categories.includes(course.category)
    const priceMatch = price >= min && price <= max
    return categoryMatch && priceMatch
  })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCourses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  )
}
