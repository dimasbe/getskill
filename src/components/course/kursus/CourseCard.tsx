import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { formatRupiah } from "../../../utils/formatPrice";

interface CourseCardProps {
  id: string;
  image: string;
  category: string;
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
  title,
  author,
  price,
  rating = 0,
  isFree = false,
}: CourseCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      className="cursor-pointer rounded-2xl shadow-md hover:shadow-lg bg-white overflow-hidden transition-all flex flex-col"
      onClick={() => navigate(`/kursus/${id}`)}
    >
      {/* Gambar */}
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={`/images/${image}`}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Konten */}
      <div className="p-4 flex flex-col flex-grow text-left">
        {/* Badge kategori */}
        <span className="px-2 py-0.5 text-[11px] font-medium bg-gray-100 text-gray-600 rounded-md inline-flex w-fit mb-2">
  {category}
</span>


        {/* Rating */}
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <FaStar className="text-yellow-500 mr-1" size={14} />
          <span>{rating.toFixed(1)} Reviews</span>
        </div>

        {/* Judul */}
        <h3 className="font-semibold text-gray-900 leading-snug line-clamp-2 mb-1">
          {title}
        </h3>

        {/* Author */}
        <p className="text-sm text-gray-500 mb-3">By {author}</p>

        {/* Harga */}
        <p
          className={`font-bold text-lg mt-auto ${
            isFree ? "text-yellow-500" : "text-purple-600"
          }`}
        >
          {isFree ? "Gratis" : formatRupiah(price)}
        </p>
      </div>
    </motion.div>
  );
}
