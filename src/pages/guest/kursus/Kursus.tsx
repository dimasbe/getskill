import { useEffect, useState } from 'react';
import SidebarFilter from '../../../components/course/SidebarFilter';
import CourseList from '../../../components/course/CourseList';
import BackgroundShapes from '../../../components/public/BackgroundShapes';

export default function KursusPage() {
  const [filters, setFilters] = useState({
    categories: [] as string[],
    priceMin: '',
    priceMax: '',
  });

  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1); // Reset ke halaman 1 jika filter berubah
  }, [filters]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* ================= HEADER ================= */}
      <div className="relative px-6 py-14 bg-gradient-to-r from-indigo-100 via-stone-100 to-fuchsia-100 overflow-hidden shadow-sm">
        <BackgroundShapes />

        {/* Konten Tengah */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center sm:text-left relative z-10 animate-fadeIn">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight">
            Jelajahi Kursus
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-700">
            <a href="/" className="hover:underline hover:text-indigo-600 transition-colors duration-200">
              Beranda
            </a>
            <span className="mx-1">&gt;</span>
            <span className="text-purple-600 font-medium">Kursus</span>
          </p>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Sidebar */}
        <div className="animate-slideInLeft">
          <SidebarFilter filters={filters} setFilters={setFilters} />
        </div>

        {/* Daftar Kursus */}
        <div className="md:col-span-3 animate-fadeIn">
          <CourseList filters={filters} page={page} setPage={setPage} />
        </div>
      </div>
    </div>
  );
}
