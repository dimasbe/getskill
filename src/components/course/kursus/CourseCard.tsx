import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { formatRupiah } from "../../../utils/formatPrice";

interface CourseCardProps {
  id: string;
  image: string;
  category: string;
  level?: string;
  badge?: string;
  title: string;
  author: string;
  price: string;
  rating?: number;
  isFree?: boolean;
}

export default function CourseCard({
  id,
  image,
  category,
  level,
  badge,
  title,
  author,
  price,
  rating = 0,
  isFree = false,
}: CourseCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/kursus/${id}`)}
      className="card-shine w-full h-full flex flex-col bg-white rounded-xl border border-gray-400 shadow-sm 
                 transition-all duration-300 cursor-pointer overflow-hidden min-h-[300px]
                 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,0.3)] hover:-translate-y-1 "
    >
      {/* Bagian Gambar */}
      <div className="relative w-full aspect-video flex items-center justify-center p-2 sm:p-3 overflow-hidden">
        <div className="relative overflow-hidden rounded-md shine__animate">
          <img
            src={`/images/${image}`}
            alt={title}
            className="w-full h-full object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/placeholder-course.jpg";
            }}
          />
        </div>

        {/* Badge */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-30">
          {level && (
            <span className="bg-white text-[10px] font-semibold font-sans px-2 py-0.5 rounded-full shadow">
              {level}
            </span>
          )}
          {badge && (
            <span className="bg-white text-[10px] font-semibold font-sans px-2 py-0.5 rounded-full shadow">
              {badge}
            </span>
          )}
        </div>
      </div>

      {/* Konten Bagian Bawah */}
      <div className="flex-1 px-4 py-3 text-left flex flex-col">
        {/* Kategori dan Rating */}
        <div className="flex items-center justify-between mb-3">
          <span className="bg-gray-100 font-semibold text-gray-800 font-sans text-[10px] px-2 py-0.5 rounded-full leading-none transition-all duration-300 ease-in-out hover:bg-purple-700 hover:text-white hover:shadow-md">
            {category}
          </span>

          <div className="flex items-center text-gray-400 text-[11px]">
            <FaStar className="text-yellow-500 font-medium mr-1" size={12} />
            <span>({rating.toFixed(1)} Reviews)</span>
          </div>
        </div>

        {/* Judul dengan clamp + underline animasi */}
        <h3 className="group relative sm:text-[15px] font-sans text-black font-semibold mb-3 leading-snug line-clamp-2">
          <a className="inline bg-[linear-gradient(black,black),linear-gradient(black,black)]
                                                    bg-[length:0%_2px,0_2px]
                                                    bg-[position:100%_100%,0_100%]
                                                    bg-no-repeat
                                                    transition-[background-size] duration-900
                                                    hover:bg-[length:0_2px,100%_2px]">{title}</a>

        </h3>

        {/* Author */}
        <p className="text-xs text-gray-500 mb-4 line-clamp-1">
          By{" "}
          <span className="font-semibold text-gray-700 font-sans">{author}</span>
        </p>

        {/* Footer */}
        <div className="mb-2 mt-auto flex flex-row items-center justify-between gap-2">
          <button
            className="bg-yellow-400 text-gray-900 text-xs font-sans font-bold px-4 py-2 rounded-full border border-black 
                       transition-all duration-300 ease-in-out 
                       shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-none active:translate-y-0.5"
            onClick={(e) => e.stopPropagation()}
          >
            Enroll Now →
          </button>
          <p
            className={`font-bold font-sans ${isFree ? "text-yellow-500" : "text-green-600"}`}
          >
            {isFree ? "Free" : formatRupiah(price)}
          </p>
        </div>
      </div>
    </div>
  );
}