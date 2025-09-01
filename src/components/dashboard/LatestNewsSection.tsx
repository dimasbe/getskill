import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NewsCard from '../public/CardNews/NewsCard';
import { newsArticles, type NewsArticle } from '../../data/newsData';

const SkeletonCard: React.FC = () => {
  return (
    <div className="relative block bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm animate-pulse">
      {/* Thumbnail */}
      <div className="relative h-58 p-5 bg-white z-10">
        <div className="w-full h-full rounded-lg overflow-hidden relative">
          <div className="bg-gray-200 w-full h-full rounded-lg"></div>

          {/* Badge "Berita" */}
          <div className="absolute top-2 left-2 h-5 w-14 bg-gray-300 rounded-full"></div>

          {/* Watermark logo (bulat di bawah) */}
          <div className="absolute -bottom-[-6px] left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-md">
            <div className="bg-gray-200 w-14 h-4 rounded"></div>
          </div>
        </div>
      </div>

      {/* Konten */}
      <div className="relative z-10 p-6">
        {/* Tanggal */}
        <div className="mb-3 -mt-6 flex items-center gap-2">
          <div className="bg-gray-200 h-4 w-4 rounded"></div>
          <div className="bg-gray-200 h-4 w-20 rounded"></div>
        </div>

        {/* Judul (2 baris) */}
        <div className="bg-gray-200 h-5 w-5/6 rounded mb-2"></div>
        <div className="bg-gray-200 h-5 w-2/3 rounded mb-4"></div>

        {/* Ringkasan (3 baris) */}
        <div className="bg-gray-200 h-4 w-full rounded mb-2"></div>
        <div className="bg-gray-200 h-4 w-5/6 rounded mb-2"></div>
        <div className="bg-gray-200 h-4 w-4/5 rounded"></div>
      </div>
    </div>
  );
};

const BeritaTerbaruPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [latestFourArticles, setLatestFourArticles] = useState<NewsArticle[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setLatestFourArticles(newsArticles.slice(0, 4));
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <section className="py-0 pb-16 bg-white rounded-lg">
        <div className="container mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <span className="px-3 py-2 text-[10px] sm:text-xs font-semibold bg-[#F6EEFE] text-[#9425FE] rounded-full">
            Berita Terbaru
          </span>
          <h1 className="text-3xl font-bold text-gray-800 mt-5 mb-2">
            Berita Terbaru
          </h1>
          <p className="text-md text-gray-600 mb-6">
            Kumpulan berita terbaru dari getskill
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {isLoading
              ? [...Array(4)].map((_, index) => <SkeletonCard key={index} />)
              : latestFourArticles.map((article, index) => (
                <NewsCard key={index} {...article} />
              ))}
          </div>
          {/* Tombol */}
          <div className="mt-6 flex justify-center" data-aos="fade" data-aos-delay="700">
            <button
              onClick={() => navigate("/berita")}
              className="group bg-[#9425FE] text-white font-semibold py-2 px-4 
              rounded-full flex items-center justify-center mx-auto md:mx-0 gap-1
              transition-all duration-500 ease-in-out
              shadow-[4px_4px_0_#0A0082] 
              hover:bg-yellow-400 hover:shadow-none
              active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
              focus:outline-none"
            >
              <span className="transition-colors duration-500 group-hover:text-[#0A0082]">
                Lihat Semua
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 transition-colors duration-500 text-white group-hover:text-[#0A0082]"
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