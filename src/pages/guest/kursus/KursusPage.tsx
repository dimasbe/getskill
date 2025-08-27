import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
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

        {/* Konten tengah */}
        <div className="max-w-6xl mx-auto px-4 2xl:px-2 xl:px-18 lg:px-35 md:px-30 sm:px-30 text-center sm:text-left relative z-10">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">Kursus</h1>
          <p className="mt-2 flex items-center text-gray-800 text-xs sm:text-sm">
            <a href="/" className="text-xs">Beranda</a>
            <FiChevronRight className="mx-1 text-gray-500" />
            <span className="text-purple-600 text-xs">Kursus</span>
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-5 lg:px-8 py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SidebarFilter filters={filters} setFilters={setFilters} />
        </motion.div>

        {/* Daftar Kursus */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <CourseList filters={filters} page={page} setPage={setPage} />
        </motion.div>
      </div>
    </div>
  );
}
