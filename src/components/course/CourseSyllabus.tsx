// CourseSyllabus.tsx
import type { Course } from '../../types/Course';
import { useState } from 'react';

interface CourseSyllabusProps {
  courseData: Course;
}

export default function CourseSyllabus({ courseData }: CourseSyllabusProps) {
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenModuleIndex(openModuleIndex === index ? null : index);
  };

  return (
    <section className="space-y-4">
      {courseData.syllabus?.map((item, index) => (
        <div key={index} className="border rounded-lg overflow-hidden">
          <div
            className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => handleToggle(index)}
          >
            <div className="flex items-start gap-3">
              <div className="bg-yellow-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {index + 1}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                {item.description && (
                  <p className="text-gray-600 text-sm">{item.description}</p>
                )}
                <div className="flex gap-4 mt-2 text-sm text-gray-500">
                  {item.quizzes > 0 && (
                    <span className="flex items-center gap-1">
                      <span className="text-yellow-500">🏆</span>
                      {item.quizzes} Kuis
                    </span>
                  )}
                  {item.tasks > 0 && (
                    <span className="flex items-center gap-1">
                      <span className="text-blue-500">📝</span>
                      {item.tasks} Tugas
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <span className="text-2xl">{openModuleIndex === index ? '−' : '+'}</span>
            </button>
          </div>

          {openModuleIndex === index && (
            <div className="bg-gray-50 p-4 border-t">
              {item.subtopics && (
                <ul className="space-y-2 text-gray-700">
                  {item.subtopics.map((subtopic, subIndex) => (
                    <li
                      key={subIndex}
                      className="pl-6 border-l-2 border-gray-300 relative"
                    >
                      <span className="absolute left-0 top-0 mt-1 w-2 h-2 bg-gray-400 rounded-full"></span>
                      {subtopic}
                    </li>
                  ))}
                </ul>
              )}

              {item.quiz_questions && (
                <div className="flex justify-between items-center text-sm text-purple-600 mt-4">
                  <span>Quiz</span>
                  <span>{item.quiz_questions} Soal</span>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
