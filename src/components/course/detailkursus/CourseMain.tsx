import { useState } from "react";
import { FaUser, FaCalendarAlt, FaUsers, FaStar } from "react-icons/fa";
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
    <div className="space-y-8">
      {/* Gambar */}
      <div className="w-full rounded-xl overflow-hidden shadow-lg">
        <img
          src={`/images/${courseData.image}`}
          alt={courseData.title}
          className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="space-y-2 max-w-6xl mx-auto px-6 text-left">
        <h1 className="text-xl md:text-4xl font-bold text-gray-900 leading-snug">
          {courseData.title}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < courseData.rating ? "text-yellow-500" : "text-gray-300"}
              size={14}
            />
          ))}
          <span className="text-gray-500 ml-1">
            ({courseData.rating.toFixed(1)} Review)
          </span>
        </div>

        {/* Info penulis */}
        <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
          <span className="flex items-center gap-1">
            <FaUser className="text-black-500" size={14} /> {courseData.author}
          </span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-black-500" size={14} /> {courseData.date}
          </span>
          <span className="flex items-center gap-1">
            <FaUsers className="text-black-500" size={14} /> {courseData.students} Siswa
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div>
        <div className="flex border-b border-gray-200">
          {[
            { key: "deskripsi", label: "Deskripsi" },
            { key: "konten-kursus", label: "Konten Kursus" },
            { key: "ulasan", label: "Ulasan" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`py-3 px-6 text-lg font-medium text-left transition-colors ${
                activeTab === tab.key
                  ? "text-purple-700 border-b-2 border-purple-700"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          {activeTab === "deskripsi" && <CourseDescription courseData={courseData} />}
          {activeTab === "konten-kursus" && <CourseSyllabus courseData={courseData} />}
          {activeTab === "ulasan" && <CourseReviews courseData={courseData} />}
        </div>
      </div>
    </div>
  );
}
