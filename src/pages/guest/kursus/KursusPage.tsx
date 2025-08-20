import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SidebarFilter from '../../../components/course/kursus/SidebarFilter';
import CourseList from '../../../components/course/kursus/CourseList';
import BackgroundShapes from '../../../components/public/BackgroundShapes';

export default function KursusPage() {
  const location = useLocation();

  const [filters, setFilters] = useState({
    categories: [] as string[],
    priceMin: '',
    priceMax: '',
    search: '',
  });

  const [page, setPage] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get('search') || '';
    const category = params.get('category') || '';

    setFilters(prev => ({
      ...prev,
      search: searchQuery,
      categories: category ? [category] : prev.categories,
    }));
  }, [location.search]);

  useEffect(() => {
    setPage(1);
  }, [filters]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* HEADER */}
      <div className="relative px-6 py-11 bg-gradient-to-r from-indigo-100 via-stone-100 to-fuchsia-100 overflow-hidden">
        <BackgroundShapes />
        <div className="max-w-6xl mx-auto px-4 2xl:px-2 xl:px-18 lg:px-35 md:px-30 sm:px-30 text-center sm:text-left relative z-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">Jelajahi Kursus</h1>
          <p className="mt-2 text-sm sm:text-base text-gray-800">
            <a href="/" className="hover:underline">Beranda</a>
            <span className="mx-1">&gt;</span>
            <span className="text-purple-600">Kursus</span>
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="animate-slideInLeft">
          <SidebarFilter filters={filters} setFilters={setFilters} />
        </div>

        {/* Daftar Kursus */}
        <div className="lg:col-span-3 animate-fadeIn">
          <CourseList filters={filters} page={page} setPage={setPage} />
        </div>
      </div>
    </div>
  );
}
