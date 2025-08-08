import type { Course } from '../../types/Course';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Trophy, FileText } from 'lucide-react';

interface CourseSyllabusProps {
  courseData: Course;
}

export default function CourseSyllabus({ courseData }: CourseSyllabusProps) {
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenModuleIndex(openModuleIndex === index ? null : index);
  };

  return (
    <section className="space-y-5">
      {courseData.syllabus?.map((item, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md"
        >
          {/* Header Modul */}
          <div
            className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => handleToggle(index)}
          >
            <div className="flex items-start gap-4">
              <div className="bg-yellow-400 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 shadow-sm">
                {index + 1}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                {item.description && (
                  <p className="text-gray-600 text-sm">{item.description}</p>
                )}
                <div className="flex gap-5 mt-2 text-sm text-gray-500">
                  {item.quizzes > 0 && (
                    <span className="flex items-center gap-1">
                      <Trophy size={16} className="text-yellow-500" />
                      {item.quizzes} Kuis
                    </span>
                  )}
                  {item.tasks > 0 && (
                    <span className="flex items-center gap-1">
                      <FileText size={16} className="text-blue-500" />
                      {item.tasks} Tugas
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              {openModuleIndex === index ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
            </button>
          </div>

          {/* Konten Modul */}
          <div
            className={`bg-gray-50 px-5 overflow-hidden transition-all duration-300 ease-in-out ${
              openModuleIndex === index ? 'max-h-[500px] py-4 border-t' : 'max-h-0 py-0'
            }`}
          >
            {item.subtopics && (
              <ul className="space-y-2 text-gray-700">
                {item.subtopics.map((subtopic, subIndex) => (
                  <li
                    key={subIndex}
                    className="pl-6 border-l-2 border-gray-300 relative hover:border-yellow-400 transition-colors"
                  >
                    <span className="absolute left-0 top-0 mt-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
                    {subtopic}
                  </li>
                ))}
              </ul>
            )}

            {item.quiz_questions && (
              <div className="flex justify-between items-center text-sm text-purple-600 mt-4 font-medium">
                <span>Quiz</span>
                <span>{item.quiz_questions} Soal</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
