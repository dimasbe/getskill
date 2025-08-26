import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoGetskill from '../../../assets/img/logo/get-skill/landscape.png'; // pakai logo asli PNG transparan

interface NewsCardProps {
    id: string;
    image: string;
    date: string;
    title: string;
    summary: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ id, image, date, title, summary }) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <Link
            to={`/berita/${id}`}
            tabIndex={0}
            className="relative block bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-transform duration-700 hover:scale-105 cursor-pointer
             hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.25)]"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onFocus={() => setIsHover(true)}
            onBlur={() => setIsHover(false)}
        >
            {/* Bagian Thumbnail dengan Shine */}
            <div className="relative h-58 p-5 bg-white z-10">
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
                    <span className="absolute top-2 left-2 bg-yellow-400 text-white text-[10px] font-semibold px-2 py-1 rounded-full">
                        Berita
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/70 via-transparent to-transparent" />

                    {/* Shine hanya di thumbnail */}
                    {isHover && (
                        <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none z-20">
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

                    {/* Logo watermark bawah thumbnail */}
                    <div className="absolute -bottom-[-6px] left-1/2 transform -translate-x-1/2 bg-white rounded-full p-1 shadow-md">
                        <img
                            src={logoGetskill}
                            alt="GetSkill Logo"
                            className="w-13 h-3 object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Konten */}
            <div className="relative z-10 p-6">
                {/* Tanggal */}
                <div className="mb-3 -mt-6 flex items-center text-sm text-gray-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 text-purple-500 h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="leading-none">{date}</span>
                </div>

                {/* Judul dengan underline animasi per baris */}
                <h3 className="group relative sm:text-[15px] font-sans text-black font-semibold mb-1 leading-snug line-clamp-2">
                    {title
                        .split(" ")
                        .reduce<string[][]>((lines, word) => {
                            if (!lines.length) return [[word]];
                            const lastLine = lines[lines.length - 1].join(" ");
                            if ((lastLine + " " + word).length > 25) lines.push([word]);
                            else lines[lines.length - 1].push(word);
                            return lines;
                        }, [])
                        .map((line, i) => (
                            <span
                                key={i}
                                className="relative block w-fit pb-0.5
                                after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:bg-black
                                after:w-0 group-hover:after:w-full
                                after:transition-all after:duration-500 after:[transition-delay:var(--delay)]"
                                style={{ ["--delay" as any]: `${i * 100}ms` }}
                            >
                                {line.join(" ")}
                            </span>
                        ))}
                </h3>

                {/* Ringkasan */}
                <p className="text-sm text-gray-600 line-clamp-3 text-justify">
                    {summary}
                </p>
            </div>

            {/* Keyframes */}
            <style>{`
                @keyframes shineDiagonal {
                    0% { transform: translate(-150%, -150%); }
                    100% { transform: translate(150%, 150%); }
                }
            `}</style>
        </Link>
    );
};

export default NewsCard;
