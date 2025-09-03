import { useState } from "react";
import { FaCalendarAlt, FaUsers, FaStar } from "react-icons/fa";
import CourseDescription from "./CourseDescription";
import CourseSyllabus from "./CourseSyllabus";
import CourseReviews from "./CourseReviews";
import type { Course } from "../../../types/Course";

interface Props {
  courseData: Course;
}

export default function CourseMain({ courseData }: Props) {
  const [activeTab, setActiveTab] = useState("deskripsi");

  return (
    <div className="max-w-5xl mx-auto">
      {/* Gambar Kursus */}
      <div className="rounded-xl overflow-hidden mb-5 w-full">
        <div className="w-full aspect-[16/9]">
          <img
            src={`/images/${courseData.image}`}
            alt={courseData.title}
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
      </div>

      {/* Info Kursus */}
      <div className="space-y-2 px-4 sm:px-0 text-left">
        {/* Judul */}
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 leading-snug break-words font-poppins">
          {courseData.title}
        </h1>
        {/* Kategori + Rating */}
        <div className="flex items-center mb-3 gap-4">
          {/* Kategori */}
          <button className="bg-gray-200 font-semibold text-gray-800 text-[11px] px-2 py-2 rounded-full leading-none transition-all duration-300 ease-in-out hover:bg-purple-700 hover:text-white hover:shadow-md">
            {courseData.category}
          </button>

          {/* Rating */}
          <div className="flex items-center text-gray-500 text-[12px]">
            <FaStar
              className="text-yellow-500 font-medium mr-1"
              size={12}
              style={{
                stroke: "black", // warna border
                strokeWidth: 20, // ketebalan border
              }}
            />
            <span>({courseData.rating.toFixed(1)} Reviews)</span>
          </div>
        </div>


        {/* Author + Info tambahan */}
        <div className="flex flex-col sm:flex-row sm:items-center w-full mt-5 mb-1 text-[13px] text-gray-500 gap-6">

          {/* Author */}
          <div className="flex items-center gap-2">
            <img
              src={new URL(
                `../../../assets/img/logo/get-skill/${courseData.authorImage}`,
                import.meta.url
              ).href}
              alt={courseData.author}
              className="rounded-full object-cover w-10 h-10"
            />
            <span className="text-gray-500">
              by{" "}
              <span className="font-semibold text-gray-700">
                {courseData.author}
              </span>
            </span>
          </div>

          {/* Info tambahan */}
          <div className="flex flex-wrap items-center gap-3 text-gray-500">
            <span className="flex items-center gap-1">
              <FaCalendarAlt size={14} /> {courseData.date}
            </span>
            <span className="flex items-center gap-1">
              <FaUsers size={14} /> {courseData.students} Siswa
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-10">
        <div className="flex gap-3">
          {[
            { key: "deskripsi", label: "Deskripsi" },
            { key: "konten-kursus", label: "Konten Kursus" },
            { key: "ulasan", label: "Ulasan" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
    relative py-1.5 px-4 sm:px-5 text-sm sm:text-[14px] font-semibold whitespace-nowrap
    transition-all duration-200 ease-out rounded-full
    ${activeTab === tab.key
                  ? "bg-purple-700 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.7)]"
                  : "bg-gray-200 text-gray-600 hover:bg-purple-700 hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.7)] hover:translate-y-0.5"
                }`}
            >
              {tab.label}
            </button>

          ))}
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-300 shadow-[0_2px_10px_rgba(0,0,0,0.05)] mt-7">
          {activeTab === "deskripsi" && <CourseDescription courseData={courseData} />}
          {activeTab === "konten-kursus" && <CourseSyllabus courseData={courseData} />}
          {activeTab === "ulasan" && <CourseReviews courseData={courseData} />}
        </div>

      </div>


    </div>
  );
}
