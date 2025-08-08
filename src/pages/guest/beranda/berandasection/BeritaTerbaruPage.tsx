import React from 'react';
import NewsCard from '../../../../components/beranda/NewsCard';
import { newsArticles } from '../../../../data/newsData';

const BeritaTerbaruPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased p-2">
      <section className="py-16 bg-white rounded-lg">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Berita Terbaru
          </h1>
          <p className="text-lg text-gray-600 mb-10">
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
