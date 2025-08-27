import { useState } from "react";
import { ChevronDown, ChevronUp, Trophy, FileText } from "lucide-react";
import type { Course } from "../../../types/Course";

interface CourseSyllabusProps {
  courseData: Course;
}

export default function CourseSyllabus({ courseData }: CourseSyllabusProps) {
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenModuleIndex(openModuleIndex === index ? null : index);
  };

  // Render daftar subtopik -> tanpa warna teks biar ikut wrapper
  const renderSubtopics = (subtopics: string[]) => (
    <ul className="space-y-0 mt-3 border border-gray-300 rounded-lg overflow-hidden">
      {subtopics.map((subtopic, subIndex) => (
        <li
          key={subIndex}
          className="flex items-start pl-9 pr-4 py-3 relative border-b border-gray-200 last:border-b-0 group bg-gray-100 transition-colors duration-200"
        >
          <span className="absolute left-4 top-4 w-2 h-2 bg-gray-400 rounded-full group-hover:bg-yellow-500 transition-colors duration-200"></span>
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
            className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all hover:shadow-sm"
          >
            {/* Header Modul */}
            <div
              className="flex items-start justify-between p-5 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div className="flex gap-4 w-full">
                {/* Nomor bulat */}
                <div className="bg-yellow-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                  {index + 1}
                </div>

                {/* Konten utama */}
                <div className="flex-1 ">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-black text-lg text-left">{item.title}</h3>
                    <button className="text-gray-500">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>

                  {item.description && (
                    <p className="text-gray-600 text-sm mt-3 text-left ">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>



            {/* Konten modul yang dapat diperluas */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] pb-4 px-5" : "max-h-0"
                }`}
            >
              {/* Metadata modul: kuis, tugas */}
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

              <div className="pl-0 text-[13px] text-gray-500">
                {item.subtopics && renderSubtopics(item.subtopics)}

                {item.quiz_questions && (
                  <div className="flex justify-between items-center text-purple-600 mt-4 font-medium bg-purple-50 p-3 rounded-lg border border-purple-100">
                    <span className="flex items-center gap-2">
                      <Trophy size={16} />
                      Quiz
                    </span>
                    <span>{item.quiz_questions} Soal</span>
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
