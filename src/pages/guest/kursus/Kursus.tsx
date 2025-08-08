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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative px-6 py-11 bg-gradient-to-r from-indigo-100 via-stone-100 to-fuchsia-100 overflow-hidden">
        <BackgroundShapes />
        <div className="max-w-6xl mx-auto px-5 text-left relative z-10">
          <h1 className="text-3xl font-extrabold text-gray-800">Kursus</h1>
          <p className="mt-2 text-sm text-gray-800">
            <a href="/" className="hover:underline">Beranda</a> &gt; <span className="text-purple-600">Kursus</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <SidebarFilter filters={filters} setFilters={setFilters} />
        <div className="md:col-span-3">
          <CourseList filters={filters} page={page} setPage={setPage} />
        </div>
      </div>
    </div>
  );
}
