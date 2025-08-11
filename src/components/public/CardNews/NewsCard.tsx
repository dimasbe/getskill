import React, { useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';

interface NewsCardProps {
    image: string;
    date: string;
    title: string;
    summary: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, date, title, summary }) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div
            className="relative bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-transform duration-300 hover:scale-105"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {/* Shine Diagonal Sekali Jalan */}
            {isHover && (
                <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none z-20">
                    <div
                        className="absolute w-[200%] h-[200%]"
                        style={{
                            background:
                                'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)',
                            transform: 'translate(-150%, -150%)',
                            animation: 'shineDiagonal 1s linear forwards',
                        }}
                    />
                </div>
            )}

            {/* Bagian Gambar dengan Border Putih */}
            <div className="relative h-44 p-2 bg-white z-10">
                <div className="w-full h-full rounded-lg overflow-hidden relative">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.currentTarget.src =
                                'https://placehold.co/400x200/EAB308/FFFFFF?text=News';
                        }}
                    />
                    <span className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded">
                        Berita
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/70 via-transparent to-transparent" />
                </div>
            </div>

            {/* Konten */}
            <div className="p-3 z-10 relative">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                    <FaRegCalendarAlt className="mr-2 text-purple-500" />
                    {date}
                </div>
                <h3 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2 text-left">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 text-justify">{summary}</p>
            </div>

            {/* Keyframes */}
            <style>{`
        @keyframes shineDiagonal {
          0% { transform: translate(-150%, -150%); }
          100% { transform: translate(150%, 150%); }
        }
      `}</style>
        </div>
    );
};

export default NewsCard;
