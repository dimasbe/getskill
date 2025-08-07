import type { Course } from '../../types/Course';

interface CourseDescriptionProps {
  courseData: Course;
}

export default function CourseDescription({ courseData }: CourseDescriptionProps) {
  return (
    <section>
      <p className="whitespace-pre-line text-gray-700">{courseData.description}</p>
      <h3 className="font-semibold text-xl mt-6">Apa yang akan Anda pelajari:</h3>
      <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
        {/* Contoh item, sesuaikan dengan data aktual jika ada */}
        <li>Belajar membuat game sederhana</li>
        <li>Memahami dasar-dasar coding</li>
        <li>Mengembangkan kemampuan berpikir logis dan kreatif</li>
      </ul>
    </section>
  );
}