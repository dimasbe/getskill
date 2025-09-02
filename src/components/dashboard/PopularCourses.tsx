import CourseList from '../course/kursus/CourseList'

export default function KursusPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="font-sans antialiased px-4 pt-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="px-3 py-2 text-[10px] sm:text-xs font-semibold bg-[#F6EEFE] text-[#9425FE] rounded-full">
              Kursus Terpopuler
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
            Jelajahi Kursus Teratas
          </h1>
          <p className="text-md text-gray-600 text-center -mb-6">
            Kelas kursus terbaik kami
          </p>
        </div>
        < div className="px-4 py-14 bg-gray-50 mx-0 sm:mx-24 md:mx-24 lg:mx-28 xl:mx-30 2xl:mx-60">
          <PopularCourseList />
        </div>
      </div>
    </div>
  );
}