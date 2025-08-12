import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaStar } from "react-icons/fa";

interface CourseCardProps {
  id: string
  image: string
  title: string
  author: string
  price: string
  rating?: number
  isFree?: boolean
}

export default function CourseCard({
  id,
  image,
  title,
  author,
  price,
  rating = 0,
  isFree = false,
}: CourseCardProps) {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
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
      <div className="p-4 flex flex-col flex-grow text-left space-y-2">
        
        {/* Judul */}
        <h3 className="font-semibold text-gray-900 leading-snug line-clamp-2 min-h-[48px]">
          {title}
        </h3>

        {/* Penulis */}
        <p className="text-sm text-gray-500">By {author}</p>

        {/* Spacer biar rating & harga selalu di bawah */}
        <div className="flex-grow" />

        {/* Rating */}
        <div className="flex items-center text-yellow-500 text-sm">
          <FaStar className="mr-1" /> {rating.toFixed(1)}
        </div>

        {/* Harga */}
        <p
          className={`font-bold text-lg ${
            isFree ? 'text-yellow-500' : 'text-green-600'
          }`}
        >
          {isFree ? 'Gratis' : `Rp ${price}`}
        </p>
      </div>
    </motion.div>
  )
}
