// CourseReviews.tsx
import type { Course } from '../../../types/Course';

interface CourseReviewsProps {
  courseData: Course;
}

const renderStarRating = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <span
      key={i + 1}
      className={`text-2xl ${i + 1 <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
    >
      ★
    </span>
  ));
};

const renderRatingBars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => {
    const starLevel = 5 - i;
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
          <div className="bg-yellow-400 h-full" style={{ width: `${percentage}%` }}></div>
        </div>
        <span className="text-sm text-gray-600">0</span>
      </div>
    );
  });
};

export default function CourseReviews({ courseData }: CourseReviewsProps) {
  return (
    <section className="flex gap-8">
      <div className="text-center p-8 bg-gray-50 rounded-lg flex-shrink-0 w-64">
        <p className="text-4xl font-bold mb-2 text-gray-800">{courseData.rating.toFixed(1)}</p>
        <div className="flex justify-center mb-2 text-yellow-400">
          {renderStarRating(courseData.rating)}
        </div>
        <p className="text-gray-500">0 Ratings</p>
      </div>
      <div className="flex-grow">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Ulasan</h3>
        <div className="space-y-2">{renderRatingBars(courseData.rating)}</div>
      </div>
    </section>
  );
}
