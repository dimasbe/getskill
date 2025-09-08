import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchCourseDetail } from "../../../features/course/_service/course_service";
import type { DetailCourse } from "../../../features/course/_course";
import CourseHeader from "../../../components/course/DetailCourse/CourseHeader";
import CourseMain from "../../../components/course/DetailCourse/CourseMain";
import CourseSidebar from "../../../components/course/DetailCourse/CourseSidebar";
import CourseDetailSkeleton from "../../../components/course/DetailCourse/CourseDetailSkeleton";

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const [courseData, setCourseData] = useState<DetailCourse| null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchCourseDetail(id)
        .then((data) => {
          setCourseData(data);
        })
        .catch((err) => {
          console.error("Error fetching course:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <CourseDetailSkeleton />;
  }

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

  const totalModul = courseData.modules?.length || 0;
  const totalKuis =
    courseData.modules?.reduce(
      (total, modul) => total + (modul.quizz_count || 0),
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
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-12 gap-1">
        {/* Konten Utama */}
        <div className="lg:col-span-8">
          <CourseMain courseData={courseData} />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <CourseSidebar
            totalModul={totalModul}
            totalKuis={totalKuis}
            price={courseData.price}
            isFree={courseData.promotional_price === 0}
          />
        </div>
      </div>
    </motion.div>
  );
}