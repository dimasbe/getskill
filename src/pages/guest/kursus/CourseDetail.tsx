import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { FaUser, FaCalendarAlt, FaUsers, FaStar } from 'react-icons/fa';
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaBook,
  FaQuestionCircle,
  FaInfinity,
  FaCertificate,
  FaTag
} from 'react-icons/fa';

import dummyCourses from '../../../data/dummyCourses';
import type { Course } from '../../../types/Course';

import CourseDescription from '../../../components/course/CourseDescription';
import CourseSyllabus from '../../../components/course/CourseSyllabus';
import CourseReviews from '../../../components/course/CourseReviews';
import BackgroundShapes from '../../../components/public/BackgroundShapes';

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const courseData = dummyCourses.find((course: Course) => course.id === id);
  const [activeTab, setActiveTab] = useState('deskripsi');

  if (!courseData) {
    return <div className="p-8 text-gray-600">Kursus tidak ditemukan.</div>;
  }

  const totalModul = courseData.syllabus?.length || 0;
  const totalKuis = courseData.syllabus?.reduce(
    (total, modul) => total + (modul.quizzes || 0),
    0
  ) || 0;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= HEADER ================= */}
      <div className="relative px-6 py-10 bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 overflow-hidden">
        <BackgroundShapes />
        <div className="max-w-6xl mx-auto relative z-10 text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-indigo-900">Kursus</h1>
          <p className="mt-2 text-sm text-gray-600">
            <a href="/" className="hover:underline">Beranda</a> &gt;{' '}
            <a href="/kursus" className="hover:underline">Kursus</a> &gt;{' '}
            <span className="text-indigo-900 font-medium">{courseData.title}</span>
          </p>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ---------- LEFT CONTENT ---------- */}
        <div className="lg:col-span-2 space-y-8">

          {/* Gambar Kursus */}
          <div className="w-full rounded-xl overflow-hidden shadow-lg">
            <img
              src={`/images/${courseData.image}`}
              alt={courseData.title}
              className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Info Kursus */}
          <div className="space-y-2 max-w-6xl mx-auto px-6 text-left">
            <h1 className="text-xl md:text-4xl font-bold text-gray-900 leading-snug">
              {courseData.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-1 text-yellow-500 text-sm">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={i < courseData.rating ? 'text-yellow-500' : 'text-gray-300'}
                  size={14}
                />
              ))}
              <span className="text-gray-500 ml-1">
                ({courseData.rating.toFixed(1)} Review)
              </span>
            </div>

            {/* Info Penulis */}
            <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
              <span className="flex items-center gap-1">
                <FaUser className="text-purple-500" size={14} /> {courseData.author}
              </span>
              <span className="flex items-center gap-1">
                <FaCalendarAlt className="text-purple-500" size={14} /> {courseData.date}
              </span>
              <span className="flex items-center gap-1">
                <FaUsers className="text-purple-500" size={14} /> {courseData.students} Siswa
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            {[
              { key: 'deskripsi', label: 'Deskripsi' },
              { key: 'konten-kursus', label: 'Konten Kursus' },
              { key: 'ulasan', label: 'Ulasan' },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`py-3 px-6 text-lg font-medium text-left transition-colors ${
                  activeTab === tab.key
                    ? 'text-purple-700 border-b-2 border-purple-700'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {activeTab === 'deskripsi' && <CourseDescription courseData={courseData} />}
            {activeTab === 'konten-kursus' && <CourseSyllabus courseData={courseData} />}
            {activeTab === 'ulasan' && <CourseReviews courseData={courseData} />}
          </div>
        </div>

        {/* ---------- SIDEBAR ---------- */}
        <div className="lg:col-span-1">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl sticky top-6 space-y-6 border border-gray-100">

            {/* Harga */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center shadow-sm">
              <div className="flex items-center justify-center gap-2 text-purple-700 font-semibold">
                <FaTag size={18} /> <span>Harga Kursus</span>
              </div>
              <p className="text-3xl font-extrabold text-purple-800 mt-1">Rp 250.000</p>
            </div>

            {/* Tombol Beli */}
            <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300">
              Beli Sekarang →
            </button>

            {/* Informasi Kursus */}
            <div className="text-left">
              <h4 className="font-semibold text-gray-700 mb-3">Kursus ini mencakup:</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-center gap-3">
                  <FaBook className="text-purple-600" /> <span>{totalModul} Modul</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaQuestionCircle className="text-purple-600" /> <span>{totalKuis} Kuis</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaInfinity className="text-purple-600" /> <span>Akses penuh seumur hidup</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCertificate className="text-purple-600" /> <span>Sertifikat penyelesaian</span>
                </li>
              </ul>
            </div>

            {/* Metode Pembayaran */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-3 text-left">Metode Pembayaran:</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {['bri.png', 'bca.png', 'gopay.png', 'ovo.png', 'mastercard.jpeg'].map((img, i) => (
                  <img
                    key={i}
                    src={`/images/payments/${img}`}
                    alt={img}
                    className="w-10 h-auto object-contain hover:scale-110 transition-transform duration-200"
                  />
                ))}
              </div>
            </div>

            {/* Share */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-3 text-left">Bagikan kursus ini:</h4>
              <div className="flex justify-center gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href={`https://wa.me/?text=${window.location.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}