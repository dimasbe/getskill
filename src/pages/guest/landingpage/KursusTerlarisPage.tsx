import React from 'react';

// Interface untuk data kursus
interface CourseCardProps {
  image: string;
  category: string;
  title: string;
  reviews: string;
  author: string;
  price: string;
}

// Komponen Course Card (dapat digunakan kembali dari KursusTerpopulerPage)
const CourseCard: React.FC<CourseCardProps> = ({ image, category, title, reviews, author, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="relative h-48 bg-purple-600 flex items-center justify-center p-4">
        {/* Placeholder for course image/icon */}
        <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" onError={(e) => { e.currentTarget.src = 'https://placehold.co/200x150/8B5CF6/FFFFFF?text=Course'; }} />
        <div className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{reviews}</p>
        <p className="text-sm text-gray-600 mb-3">By {author}</p>
        <p className="text-xl font-bold text-purple-700">{price}</p>
      </div>
    </div>
  );
};

// Komponen KursusTerlarisPage
const KursusTerlarisPage: React.FC = () => {
  // Dummy data untuk kursus terlaris (contoh, bisa berbeda dari terpopuler)
  const topSellingCourses = [
    {
      image: 'https://placehold.co/200x150/4F46E5/FFFFFF?text=GITHUB',
      category: 'Github',
      title: 'Tutorial dasar menggunakan Github',
      reviews: '4.0 Reviews',
      author: 'admin',
      price: 'Gratis!',
    },
    {
      image: 'https://placehold.co/200x150/F59E0B/FFFFFF?text=SCRATCH',
      category: 'Scratch',
      title: 'Belajar Coding Untuk Anak Menggunakan Scratch',
      reviews: '4.5 Reviews',
      author: 'admin',
      price: 'Rp. 250.000',
    },
    {
      image: 'https://placehold.co/200x150/8B5CF6/FFFFFF?text=BOOTSTRAP',
      category: 'Pemrograman Frontend',
      title: 'Pemrograman Front End Web dengan Bootstrap',
      reviews: '4.8 Reviews',
      author: 'admin',
      price: 'Rp. 300.000',
    },
    {
      image: 'https://placehold.co/200x150/EF4444/FFFFFF?text=LARAVEL',
      category: 'Pemrograman Web',
      title: 'Pemrograman Web menggunakan Framework LARAVEL',
      reviews: '5.0 Reviews',
      author: 'admin',
      price: 'Rp. 300.000',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased p-4">
      {/* Tailwind CSS dan style kustom diasumsikan diatur di konfigurasi proyek atau file CSS global */}
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-sm font-semibold text-purple-600 text-center mb-2">Kursus Terlaris</h2>
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">Kursus Terlaris Di Getskill</h1>
        <p className="text-lg text-gray-600 text-center mb-10">daftar kursus yang paling laris di GetSkill</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {topSellingCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KursusTerlarisPage;
