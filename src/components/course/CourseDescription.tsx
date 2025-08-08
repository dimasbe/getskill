// CourseDescription.tsx
import type { Course } from '../../types/Course';

interface CourseDescriptionProps {
  courseData: Course;
}

export default function CourseDescription({ courseData }: CourseDescriptionProps) {
  return (
    <section>
      <p className="whitespace-pre-line text-gray-700">{courseData.description}</p>
    </section>
  );
}