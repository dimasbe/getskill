import React from 'react';
import NewsCard from '../public/CardNews/NewsCard';
import { newsArticles } from '../../data/newsData';

const BeritaTerbaruPage: React.FC = () => {
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
            {newsArticles.map((article, index) => (
              <NewsCard key={index} {...article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeritaTerbaruPage;
