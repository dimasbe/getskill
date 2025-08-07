// CourseCard.tsx
import { useNavigate } from 'react-router-dom';

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
  isFree = false
}: CourseCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/kursus/${id}`);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
      onClick={handleClick}
    >
      <img src={`/images/${image}`} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <span className="inline-block bg-gray-100 text-xs text-gray-600 rounded-full px-2 py-1 mb-2">
          {category}
        </span>
        <p className="text-yellow-500 text-sm">⭐ ({rating.toFixed(1)} Ulasan)</p>
        <h3 className="font-semibold text-gray-800 mt-1 leading-snug">{title}</h3>
        <p className="text-sm text-gray-500 mb-3">Oleh {author}</p>
        <p className="text-purple-700 font-semibold">{isFree ? 'Gratis!' : `Rp ${price}`}</p>
      </div>
    </div>
  );
}
