// src/pages/KursusPage.tsx
import { useState } from 'react'
import CourseList from '../../../components/course/CourseList'
import SidebarFilter from '../../../components/course/SidebarFilter'

export default function KursusPage() {
  const [filters, setFilters] = useState({
    categories: [] as string[],
    priceMin: '',
    priceMax: '',
  })

  return (
    <div className="min-h-screen bg-white">
      <div className="px-6 py-8 bg-gradient-to-r from-purple-100 to-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-gray-500">Home &gt; <span className="text-purple-600">Kursus</span></p>
          <h1 className="text-3xl font-bold text-gray-800 mt-2">Kursus</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <SidebarFilter filters={filters} setFilters={setFilters} />
        <div className="md:col-span-3">
          <CourseList filters={filters} />
        </div>
      </div>
    </div>
  )
}
