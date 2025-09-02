// CourseReviews.tsx
import type { Course } from '../../../types/Course';

interface CourseReviews {
  courseData: Course;
}

const renderStarRating = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <span
      key={i + 1}
      className={`text-xl ${i + 1 <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
    >
      ★
    </span>
  ));
};

const renderRatingBars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => {
    const starLevel = i + 1;
    const percentage =
      starLevel === Math.floor(rating)
        ? (rating % 1) * 100
        : starLevel < rating
        ? 100
        : 0;

    return (
      <div key={starLevel} className="flex items-center gap-2">
        <span className="text-sm font-medium">{starLevel}</span>
        <span className="text-yellow-400">★</span>
        <div className="bg-gray-200 h-2 w-full rounded-full overflow-hidden">
          <div
            className="bg-yellow-400 h-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <span className="text-sm text-gray-600">0</span>
      </div>
    );
  });
};

export default function CourseReviews({ courseData }: CourseReviews) {
  return (
    <div className="p-1">
      <h3 className="text-[24px] font-verdana font-semibold mb-4 text-black text-left">Reviews</h3>
      <div className="flex gap-8">
        {/* Kotak rata-rata rating */}
        <div className="text-center p-6 bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex-shrink-0 w-40">
          <p className="text-5xl font-bold mb-2 text-gray-800">
            {courseData.rating.toFixed(1)}
          </p>
          <div className="flex justify-center mb-2">
            {renderStarRating(courseData.rating)}
          </div>
          <p className="text-gray-500 text-sm">0 Ratings</p>
        </div>

        {/* Distribusi rating */}
        <div className="flex-grow flex flex-col justify-center gap-2">
          {renderRatingBars(courseData.rating)}
        </div>
      </div>
    </div>
  );
}
