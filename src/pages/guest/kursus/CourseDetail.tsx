import { useParams } from 'react-router-dom';
import { useState } from 'react';
import dummyCourses from '../../../data/dummyCourses';
import type { Course } from '../../../types/Course';
import CourseDescription from '../../../components/course/CourseDescription';
import CourseSyllabus from '../../../components/course/CourseSyllabus';
import CourseReviews from '../../../components/course/CourseReviews';

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const courseData = dummyCourses.find((course: Course) => course.id === id);
  const [activeTab, setActiveTab] = useState('deskripsi');

  if (!courseData) {
    return <div className="p-8">Kursus tidak ditemukan.</div>;
  }

  const renderStarRating = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`text-2xl ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <p className="text-sm text-gray-500">
            Beranda &gt; Kursus &gt; <span className="text-purple-600">{courseData.title}</span>
          </p>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* COURSE IMAGE & TITLE */}
          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            <div className="lg:w-2/3 w-full">
              <div className="rounded-lg overflow-hidden relative">
                <img src={`/images/${courseData.image}`} alt={courseData.title} className="w-full h-auto" />
                
              </div>
            </div>
            <div className="lg:w-1/3 w-full flex flex-col justify-end">
              <h1 className="text-3xl font-bold text-gray-800">{courseData.title}</h1>
              <p className="text-sm text-gray-500 mt-2">
                <span className="font-semibold text-gray-700">{courseData.category}</span>
              </p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-yellow-400">
                  {renderStarRating(courseData.rating)}
                </div>
                <span className="text-gray-500 text-sm">
                  ({courseData.rating.toFixed(1)} Ulasan)
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Oleh <span className="font-semibold text-gray-700">{courseData.author}</span>
              </p>
              <div className="flex items-center gap-4 mt-4 text-gray-500 text-sm">
                {courseData.students && (
                  <div className="flex items-center gap-1">
                    <span className="text-xl">👤</span>
                    <span>{courseData.students} Siswa</span>
                  </div>
                )}
                {courseData.date && (
                  <div className="flex items-center gap-1">
                    <span className="text-xl">📅</span>
                    <span>{courseData.date}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* TABS NAVIGATION */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveTab('deskripsi')}
              className={`py-3 px-6 text-lg font-medium transition-colors duration-200 ${
                activeTab === 'deskripsi'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Deskripsi
            </button>
            <button
              onClick={() => setActiveTab('konten-kursus')}
              className={`py-3 px-6 text-lg font-medium transition-colors duration-200 ${
                activeTab === 'konten-kursus'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Konten Kursus
            </button>
            <button
              onClick={() => setActiveTab('ulasan')}
              className={`py-3 px-6 text-lg font-medium transition-colors duration-200 ${
                activeTab === 'ulasan'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Ulasan
            </button>
          </div>

          {/* TAB CONTENT */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {activeTab === 'deskripsi' && <CourseDescription courseData={courseData} />}
            {activeTab === 'konten-kursus' && <CourseSyllabus courseData={courseData} />}
            {activeTab === 'ulasan' && <CourseReviews courseData={courseData} />}
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm sticky top-4">
            <div className="mb-4">
              <span className="font-semibold text-gray-700">Harga Kursus:</span>
              <p className="text-2xl font-bold text-purple-700 mt-1">
                {courseData.isFree ? 'Gratis!' : `Rp ${courseData.price}`}
              </p>
            </div>
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg mb-4 flex items-center justify-center gap-2">
              Beli Sekarang
              <span className="text-xl">→</span>
            </button>
            <div className="space-y-3 text-sm">
              <h4 className="font-semibold text-gray-700 mb-2">Kursus ini mencakup:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span>✅</span>
                  <span>7 Modul</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span>
                  <span>10 Kuis</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span>
                  <span>Akses penuh seumur hidup</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span>
                  <span>Sertifikat penyelesaian</span>
                </li>
              </ul>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-700 mb-2">Metode Pembayaran:</h4>
                <div className="flex flex-wrap gap-2">
                  <img src="https://via.placeholder.com/40x20" alt="Bank BRI" />
                  <img src="https://via.placeholder.com/40x20" alt="Bank BCA" />
                  <img src="https://via.placeholder.com/40x20" alt="Gopay" />
                  <img src="https://via.placeholder.com/40x20" alt="OVO" />
                  <img src="https://via.placeholder.com/40x20" alt="Mastercard" />
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-700 mb-2">Bagikan kursus ini:</h4>
                <div className="flex gap-2">
                  <button className="bg-gray-200 text-gray-600 hover:bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-lg">f</span>
                  </button>
                  <button className="bg-gray-200 text-gray-600 hover:bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-lg">t</span>
                  </button>
                  <button className="bg-gray-200 text-gray-600 hover:bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-lg">w</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}