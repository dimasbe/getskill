// src/pages/KursusPage.tsx
import CourseList from '../../../../components/course/kursus/CourseList'

export default function KursusPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Bagian heading yang diganti */}
      <div className="bg-white font-sans antialiased p-4">
        <div className="container mx-auto py-12 px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="px-2 py-1 text-sm font-semibold border border-gray-200 bg-gray-100 text-purple-600 rounded-full">
              Kursus Terlaris
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
            Kursus Terlaris Di Getskill
          </h1>
          <p className="text-md text-gray-600 text-center -mb-22">
            daftar kursus yang paling laris di getskill
          </p>
        </div>
      </div>

      <div className="mx-auto px-6 py-14 bg-white">
        <CourseList limit={4} columns={4} />
      </div>
    </div>
  )
}