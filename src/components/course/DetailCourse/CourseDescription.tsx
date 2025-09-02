// CourseDescription.tsx
import type { Course } from '../../../types/Course';

interface CourseDescription {
  courseData: Course;
}

export default function CourseDescription({ courseData }: CourseDescription) {
  return (
    <section className="text-justify font-sans text-[14px]">
      <p
        className="whitespace-pre-line text-gray-700 leading-relaxed"
        style={{ textAlign: 'justify' }}
      >
        {courseData.description}
      </p>
    </section>
  );
}
