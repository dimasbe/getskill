import { useState } from "react";
import { ChevronDown, ChevronUp, Trophy, FileText } from "lucide-react";
import type { Course } from "../../../types/Course";

interface CourseSyllabusProps {
  courseData: Course;
}

export default function CourseSyllabus({ courseData }: CourseSyllabusProps) {
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(null);

  // Toggle buka/tutup modul
  const handleToggle = (index: number) => {
    setOpenModuleIndex(openModuleIndex === index ? null : index);
  };

  // Render daftar subtopik
  const renderSubtopics = (subtopics: string[]) => (
    <ul className="mt-3 border border-gray-300 rounded-lg overflow-hidden">
      {subtopics.map((subtopic, i) => (
        <li
          key={i}
          className="relative flex items-start pl-9 pr-4 py-3 border-b border-gray-200 last:border-b-0 group bg-purple-200 transition-colors duration-200"
        >
          {/* Bulatan kecil */}
          <span className="absolute left-4 top-4 w-2 h-2 bg-gray-400 rounded-full group-hover:bg-purple-700 transition-colors duration-200" />
          <span className="flex-1 text-left">{subtopic}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section className="space-y-5 font-sans">
      {courseData.syllabus?.map((item, index) => {
        const isOpen = openModuleIndex === index;

        return (
          <div
            key={index}
            className="bg-purple-100 border border-gray-200 rounded-lg overflow-hidden transition-all hover:shadow-sm"
          >
            {/* === Header Modul === */}
            <div
              className="flex items-start justify-between p-5 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div className="flex gap-4 w-full">
                {/* Nomor bulat */}
                <div className="bg-yellow-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                  {index + 1}
                </div>

                {/* Judul + deskripsi */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-black text-lg text-left">
                      {item.title}
                    </h3>
                    <button className="text-gray-500">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>

                  {item.description && (
                    <p className="mt-3 text-sm text-gray-600 text-left">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* === Konten Modul Expand === */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[500px] pb-4 px-5" : "max-h-0"
              }`}
            >
              {/* Metadata: jumlah kuis & tugas */}
              <div className="flex flex-wrap gap-5 mt-1 text-sm text-gray-500">
                {item.quizzes > 0 && (
                  <span className="flex items-center gap-1">
                    <Trophy size={12} className="text-yellow-500" />
                    {item.quizzes} Kuis
                  </span>
                )}

                {item.tasks > 0 && (
                  <span className="flex items-center gap-1">
                    <FileText size={12} className="text-blue-500" />
                    {item.tasks} Tugas
                  </span>
                )}
              </div>

              {/* Subtopik & Quiz */}
              <div className="pl-0 text-[13px] text-gray-500">
                {item.subtopics && renderSubtopics(item.subtopics)}

                {item.quiz_questions && (
                  <div className="flex justify-between items-center mt-4 font-medium bg-purple-200 p-3 rounded-lg border border-purple-100">
                    <span className="flex items-center gap-2 text-gray-500">
                      <Trophy size={16} className="text-yellow-500" />
                      Quiz
                    </span>
                    <span className="text-gray-500">
                      {item.quiz_questions} Soal
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
