// CourseDescription.tsx
import type { Course } from '../../../types/Course';

interface CourseDescriptionProps {
  courseData: Course;
}

export default function CourseDescription({ courseData }: CourseDescriptionProps) {
  return (
    <section className="text-justify">
      <p
        className="whitespace-pre-line text-gray-700 leading-relaxed"
        style={{ textAlign: 'justify' }}
      >
        {courseData.description}
      </p>
    </section>
  );
}
