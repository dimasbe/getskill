// src/components/public/CardNews/MiniNewsCard.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoGetskill from "../../../assets/img/logo/get-skill/landscape.png";

interface MiniNewsCardProps {
    id: string;
    image: string;
    date: string;
    title: string;
    summary?: string;
}

const MiniNewsCard: React.FC<MiniNewsCardProps> = ({ id, image, date, title, summary }) => {
    const [isHover, setIsHover] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <Link
            to={`/berita/${id}`}
            tabIndex={0}
            className="relative block bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm transition-transform duration-500 hover:scale-[1.02] cursor-pointer
       hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.15)]"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onFocus={() => setIsHover(true)}
            onBlur={() => setIsHover(false)}
        >
            {/* Thumbnail */}
            <div className="relative h-32 bg-white">
                <div className="w-full h-full rounded-md overflow-hidden relative">
                    {/* ✅ Skeleton Loader */}
                    {!isLoaded && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md" />
                    )}

                    <img
                        src={image}
                        alt={title}
                        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"
                            }`}
                        onLoad={() => setIsLoaded(true)}
                        onError={(e) => {
                            e.currentTarget.src =
                                "https://placehold.co/300x150/EAB308/FFFFFF?text=News";
                            setIsLoaded(true);
                        }}
                    />

                    <span className="absolute top-1 left-1 bg-yellow-400 text-white text-[9px] font-semibold px-1.5 py-0.5 rounded-full">
                        Berita
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-600/60 via-transparent to-transparent" />

                    {/* Shine effect */}
                    {isHover && (
                        <div className="absolute inset-0 rounded-md overflow-hidden pointer-events-none z-20">
                            <div
                                className="absolute w-[200%] h-[200%]"
                                style={{
                                    background:
                                        "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                                    transform: "translate(-150%, -150%)",
                                    animation: "shineDiagonal 1s linear forwards",
                                }}
                            />
                        </div>
                    )}

                    {/* ✅ Watermark logo GetSkill */}
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-0.5 shadow">
                        <img
                            src={logoGetskill}
                            alt="GetSkill Logo"
                            className="w-12 h-3 object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Konten */}
            <div className="relative z-10 p-3">
                {/* Tanggal */}
                <div className="flex items-center text-[11px] text-gray-500 mb-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1 text-purple-500 h-3 w-3"
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

                {/* ✅ Judul dengan animasi garis bawah */}
                <h4
                    className="group relative sm:text-[15px] font-sans text-black font-semibold mb-1 leading-snug line-clamp-2">
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
                </h4>

                {/* Ringkasan (opsional) */}
                {summary && (
                    <p className="text-[11px] text-gray-600 line-clamp-2 text-justify">
                        {summary}
                    </p>
                )}
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

export default MiniNewsCard;
