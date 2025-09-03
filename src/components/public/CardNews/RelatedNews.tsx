import React from "react";
import MiniNewsCard from "./MiniNewsCard";

interface RelatedNewsProps {
  relatedArticles: {
    id: string;
    image: string;
    date: string;
    title: string;
    summary: string;
  }[];
}

const RelatedNews: React.FC<RelatedNewsProps> = ({ relatedArticles }) => {
  if (relatedArticles.length === 0) {
    return <p className="text-gray-500 text-sm">Tidak ada berita terbaru.</p>;
  }

  return (
    <div className="bg-gray-50 rounded-lg shadow p-4 space-y-4">
      <h2 className="font-bold text-lg mb-3 border-b pb-2">Berita Terbaru</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
        {relatedArticles.map((article) => (
          <MiniNewsCard
            key={article.id}
            id={article.id}
            image={article.image}
            date={article.date}
            title={article.title}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedNews;
