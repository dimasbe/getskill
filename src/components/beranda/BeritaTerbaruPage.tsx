import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewsCard from '../public/CardNews/NewsCard';
import { newsArticles } from '../../data/newsData';

const BeritaTerbaruPage: React.FC = () => {
  const navigate = useNavigate();
  // Ambil 5 berita pertama
  const latestFiveArticles = newsArticles.slice(0, 5);

  return (
    <div className="min-h-screen bg-white font-sans antialiased p-2">
      <section className="py-2 bg-white rounded-lg">
        <div className="container mx-auto px-20 text-center">
          <span className="px-2 py-1 text-sm font-semibold border border-gray-200 bg-gray-100 text-purple-600 rounded-full">
            Berita
          </span>
          <h1 className="text-3xl font-bold text-gray-800 mt-5 mb-2">
            Berita Terbaru
          </h1>
          <p className="text-md text-gray-600 mb-6">
            Kumpulan berita terbaru dari getskill
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {latestFiveArticles.map((article, index) => (
              <NewsCard key={index} {...article} />
            ))}
          </div>

          {/* Tombol lihat semua berita */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => navigate('/berita')}
              className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-[20px] flex items-center gap-2 transition-all duration-200 shadow-[4px_4px_0_rgba(0,0,0,0.2)] border border-purple-500 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            >
              Lihat Semua Berita
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeritaTerbaruPage;
