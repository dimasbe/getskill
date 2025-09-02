import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import dummyCourses from "../../../data/dummyCourses";
import type { Course } from "../../../types/Course";
import CourseHeader from "../../../components/course/DetailCourse/CourseHeader";
import CourseMain from "../../../components/course/DetailCourse/CourseMain";
import CourseSidebar from "../../../components/course/DetailCourse/CourseSidebar";

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const courseData = dummyCourses.find((course: Course) => course.id === id);

  if (!courseData) {
    return (
      <motion.div
        className="p-8 text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Kursus tidak ditemukan.
      </motion.div>
    );
  }

  const totalModul = courseData.syllabus?.length || 0;
  const totalKuis =
    courseData.syllabus?.reduce(
      (total, modul) => total + (modul.quizzes || 0),
      0
    ) || 0;

  return (
    <motion.div
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Header */}
      <CourseHeader title={courseData.title} />

      {/* Layout Utama */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Konten Utama */}
        <div className="lg:col-span-8">
          <CourseMain courseData={courseData} />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <CourseSidebar
            totalModul={totalModul}
            totalKuis={totalKuis}
            price={courseData.price || "0"}
            isFree={courseData.isFree || false}
          />
        </div>
      </div>

    </motion.div>
  );
}
