import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NewsCard from '../public/CardNews/NewsCard';
// Ganti baris ini:
// import { newsArticles, NewsArticle } from '../../data/newsData';
// Menjadi baris ini:
import { newsArticles, type NewsArticle } from '../../data/newsData'; 

// --- Komponen Skeleton Card ---
const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 animate-pulse">
      <div className="bg-gray-200 h-40 w-full rounded-md mb-4"></div>
      <div className="flex items-center gap-2 mb-2">
        <div className="bg-gray-200 h-5 w-5 rounded-full"></div>
        <div className="bg-gray-200 h-4 w-24 rounded"></div>
      </div>
      <div className="bg-gray-200 h-5 w-3/4 rounded mb-2"></div>
      <div className="bg-gray-200 h-4 w-full rounded"></div>
      <div className="bg-gray-200 h-4 w-5/6 rounded"></div>
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
      <section className="py-0 bg-white rounded-lg">
        <div className="container mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <span className="px-2 py-1 text-sm font-semibold border border-gray-200 bg-gray-100 text-[#7063FF] rounded-full">
            Berita
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
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => navigate('/berita')}
              className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-[20px] flex items-center gap-2 transition-all duration-200 shadow-[4px_4px_0_rgba(0,0,0,0.2)] border border-purple-500 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            >
              Lihat Semua
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