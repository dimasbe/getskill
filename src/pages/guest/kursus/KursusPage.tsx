import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import SidebarFilter from '../../../components/course/kursus/SidebarFilter';
import CourseList from '../../../components/course/kursus/CourseList';
import Header from '../../../components/course/kursus/Header';

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
      <Header />

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