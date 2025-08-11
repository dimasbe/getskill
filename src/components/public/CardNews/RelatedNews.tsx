import React from "react";
import NewsCard from "./NewsCard";

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
    return <p className="text-gray-500 text-sm">Tidak ada berita terkait.</p>;
  }

  return (
    <div className="bg-gray-50 rounded-lg shadow p-4 space-y-4">
      <h2 className="font-bold text-lg mb-3 border-b pb-2">Berita Terkait</h2>
      <div className="flex flex-col space-y-4">
        {relatedArticles.map((article) => (
          <NewsCard
            key={article.id}
            id={article.id}
            image={article.image}
            date={article.date}
            title={article.title}
            summary={article.summary}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedNews;
