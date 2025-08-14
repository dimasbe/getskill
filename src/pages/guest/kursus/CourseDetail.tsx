import { useParams } from "react-router-dom";
import dummyCourses from "../../../data/dummyCourses";
import type { Course } from "../../../types/Course";
import CourseHeader from "../../../components/course/detailkursus/CourseHeader";
import CourseMain from "../../../components/course/detailkursus/CourseMain";
import CourseSidebar from "../../../components/course/detailkursus/CourseSidebar";

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const courseData = dummyCourses.find((course: Course) => course.id === id);

  if (!courseData) {
    return <div className="p-8 text-gray-600">Kursus tidak ditemukan.</div>;
  }

  const totalModul = courseData.syllabus?.length || 0;
  const totalKuis =
    courseData.syllabus?.reduce((total, modul) => total + (modul.quizzes || 0), 0) || 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <CourseHeader title={courseData.title} />
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CourseMain courseData={courseData} />
        </div>
        <div className="lg:col-span-1">
          <CourseSidebar
  totalModul={totalModul}
  totalKuis={totalKuis}
  price={courseData.price || "0"}
  isFree={courseData.isFree || false}
/>

        </div>
      </div>
    </div>
  );
}