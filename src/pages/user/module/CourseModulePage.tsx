import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CheckCircle,
  Lock,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  fetchModules,
  fetchSubModule,
  fetchQuizDetail,
  fetchModuleTasks,
  fetchCoursePostTest,
} from "../../../features/module/_service/module_service";
import type {
  ModuleType,
  SubModuleDetailType,
  ContentType,
  ContentBlock,
  QuizType,
  ModuleTaskType,
  CoursePostTest,
} from "../../../features/module/_module";
import { motion, AnimatePresence } from "framer-motion";

export default function CourseModulePage() {
  const { slug } = useParams<{ slug: string }>();

  /** ================== STATE ================== **/
  const [modules, setModules] = useState<ModuleType[]>([]);
  const [openModules, setOpenModules] = useState<number[]>([]);
  const [progressMap, setProgressMap] = useState<Record<string, number>>({});

  const [activeSub, setActiveSub] = useState<SubModuleDetailType | null>(null);
  const [parsedContent, setParsedContent] = useState<ContentType | null>(null);

  const [quiz, setQuiz] = useState<QuizType | null>(null);
  const [tasks, setTasks] = useState<ModuleTaskType[]>([]);
  const [postTest, setPostTest] = useState<CoursePostTest | null>(null);

  /** ================== NAVIGATION STATE ================== */
  const [currentModuleIndex, setCurrentModuleIndex] = useState<number | null>(null);
  const [currentSubModuleIndex, setCurrentSubModuleIndex] = useState<number | null>(null);

  /** ================== LOADING & ERROR STATE ================== */
  const [loadingModules, setLoadingModules] = useState(true);
  const [loadingContent, setLoadingContent] = useState(false);

  const [loadingQuiz, setLoadingQuiz] = useState(false);
  const [errorQuiz, setErrorQuiz] = useState<string | null>(null);

  const [loadingTask, setLoadingTask] = useState(false);
  const [errorTask, setErrorTask] = useState<string | null>(null);

  const [loadingPostTest, setLoadingPostTest] = useState(false);
  const [errorPostTest, setErrorPostTest] = useState<string | null>(null);

  /** ================== EFFECT: Load progress dari localStorage ================== */
  useEffect(() => {
    if (!slug) return;
    try {
      const raw = localStorage.getItem(`course_progress_${slug}`);
      if (raw) setProgressMap(JSON.parse(raw));
    } catch (err) {
      console.warn("Gagal baca progress dari localStorage", err);
    }
  }, [slug]);

  /** ================== EFFECT: Ambil semua modul ================== */
  useEffect(() => {
    if (!slug) return;
    const loadModules = async () => {
      try {
        const data = await fetchModules(slug);
        setModules(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingModules(false);
      }
    };
    loadModules();
  }, [slug]);

  /** ================== NAVIGATION FUNCTIONS ================== */
  // Fungsi untuk mendapatkan indeks modul dan submodul aktif
  const getCurrentIndices = (subSlug: string) => {
    for (let i = 0; i < modules.length; i++) {
      const module = modules[i];
      for (let j = 0; j < module.sub_modules.length; j++) {
        if (module.sub_modules[j].slug === subSlug) {
          return { moduleIndex: i, subModuleIndex: j };
        }
      }
    }
    return { moduleIndex: null, subModuleIndex: null };
  };

  // Fungsi untuk navigasi ke quiz/tugas dari submodul
  const navigateToQuizOrTask = () => {
    if (currentModuleIndex === null) return;
    
    const currentModule = modules[currentModuleIndex];
    
    // Prioritaskan quiz jika ada
    if (currentModule.quizzes.length > 0) {
      loadQuiz(currentModule.quizzes[0].module_slug);
    } 
    // Jika tidak ada quiz, coba tugas
    else if (currentModule.module_tasks.length > 0) {
      loadTask(currentModule.id);
    }
  };

  // Fungsi untuk navigasi ke modul berikutnya
  const navigateToNextModule = () => {
    if (currentModuleIndex === null || currentModuleIndex >= modules.length - 1) return;
    
    const nextModuleIndex = currentModuleIndex + 1;
    const nextModule = modules[nextModuleIndex];
    
    // Buka modul berikutnya di sidebar
    toggleModule(nextModuleIndex);
    
    // Load submodul pertama dari modul berikutnya
    if (nextModule.sub_modules.length > 0) {
      loadSubmodule(nextModule.sub_modules[0].slug);
    }
  };

  /** ================== HANDLER ================== */
  const toggleModule = (idx: number) => {
    setOpenModules((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const saveProgressForModule = (moduleSlug: string, step: number) => {
    setProgressMap((prev) => {
      const prevMax = prev[moduleSlug] || 0;
      const nextMax = Math.max(prevMax, step);
      const next = { ...prev, [moduleSlug]: nextMax };

      try {
        if (slug) {
          localStorage.setItem(`course_progress_${slug}`, JSON.stringify(next));
        }
      } catch (err) {
        console.warn("Gagal simpan progress ke localStorage", err);
      }

      return next;
    });
  };

  const loadSubmodule = async (subSlug: string) => {
    setLoadingContent(true);
    try {
      const data = await fetchSubModule(subSlug);
      setActiveSub(data);

      try {
        const parsed: ContentType = JSON.parse(data.content || "{}");
        setParsedContent(parsed);
      } catch (err) {
        console.error("Gagal parse content:", err);
        setParsedContent(null);
      }

      const parentModule = modules.find((m) =>
        m.sub_modules.some((s) => s.slug === subSlug)
      );
      if (parentModule) {
        saveProgressForModule(parentModule.slug, data.step);
      }

      // Set indeks modul dan submodul aktif untuk navigasi
      const indices = getCurrentIndices(subSlug);
      setCurrentModuleIndex(indices.moduleIndex);
      setCurrentSubModuleIndex(indices.subModuleIndex);

      // Reset state lainnya
      setQuiz(null);
      setTasks([]);
      setPostTest(null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingContent(false);
    }
  };

  const loadQuiz = async (quizSlug: string) => {
    setLoadingQuiz(true);
    try {
      const data = await fetchQuizDetail(quizSlug);
      setQuiz(data);
      setActiveSub(null);
      setTasks([]);
      setPostTest(null);
      setErrorQuiz(null);
    } catch (err) {
      console.error(err);
      setErrorQuiz("Gagal memuat quiz");
    } finally {
      setLoadingQuiz(false);
    }
  };

  const loadTask = async (moduleId: string) => {
    setLoadingTask(true);
    try {
      const data = await fetchModuleTasks(moduleId);
      setTasks(data);
      setActiveSub(null);
      setQuiz(null);
      setPostTest(null);
      setErrorTask(null);
    } catch (err) {
      console.error(err);
      setErrorTask("Gagal memuat tugas");
    } finally {
      setLoadingTask(false);
    }
  };

  const loadPostTest = async (courseTestId: string) => {
    setLoadingPostTest(true);
    try {
      const data = await fetchCoursePostTest(courseTestId);
      setPostTest(data.course_test);
      setActiveSub(null);
      setQuiz(null);
      setTasks([]);
      setErrorPostTest(null);
      setCurrentModuleIndex(-1); // Set indeks khusus untuk Final Audit
    } catch (err) {
      console.error(err);
      setErrorPostTest("Gagal memuat Final Audit");
    } finally {
      setLoadingPostTest(false);
    }
  };

  /** ================== RENDER ================== */
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar
        modules={modules}
        progressMap={progressMap}
        openModules={openModules}
        activeSub={activeSub}
        postTest={postTest}
        loadingModules={loadingModules}
        toggleModule={toggleModule}
        loadSubmodule={loadSubmodule}
        loadTask={loadTask}
        loadQuiz={loadQuiz}
        loadPostTest={loadPostTest}
      />

      {/* Konten utama */}
      <MainContent
        activeSub={activeSub}
        parsedContent={parsedContent}
        quiz={quiz}
        tasks={tasks}
        postTest={postTest}
        loadingContent={loadingContent}
        loadingQuiz={loadingQuiz}
        errorQuiz={errorQuiz}
        loadingTask={loadingTask}
        errorTask={errorTask}
        loadingPostTest={loadingPostTest}
        errorPostTest={errorPostTest}
        loadSubmodule={loadSubmodule}
        navigateToQuizOrTask={navigateToQuizOrTask}
        navigateToNextModule={navigateToNextModule}
        currentModuleIndex={currentModuleIndex}
        currentSubModuleIndex={currentSubModuleIndex}
        modules={modules}
      />
    </div>
  );
}

/** ================== SIDEBAR COMPONENT ================== */
type SidebarProps = {
  modules: ModuleType[];
  progressMap: Record<string, number>;
  openModules: number[];
  activeSub: SubModuleDetailType | null;
  postTest: CoursePostTest | null;
  loadingModules: boolean;
  toggleModule: (idx: number) => void;
  loadSubmodule: (subSlug: string) => void;
  loadTask: (moduleId: string) => void;
  loadQuiz: (quizSlug: string) => void;
  loadPostTest: (courseTestId: string) => void;
};

function Sidebar({
  modules,
  progressMap,
  openModules,
  activeSub,
  postTest,
  loadingModules,
  toggleModule,
  loadSubmodule,
  loadTask,
  loadQuiz,
  loadPostTest,
}: SidebarProps) {
  // Cek apakah course memiliki Final Audit
  const hasFinalAudit = modules.length > 0 && modules[0].course?.course_test_id;

  return (
    <aside className="w-80 bg-white h-screen sticky top-0 overflow-y-auto scrollbar-hide">
      <div className="pt-4">
        <h2 className="text-left text-base font-bold px-4 py-3 bg-gray-50 border-b border-gray-300">
          Konten Kursus
        </h2>

        {loadingModules ? (
          <p className="px-4">Loading modules...</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200">
              {modules.map((mod: ModuleType, idx: number) => {
                const maxStep = progressMap[mod.slug] || 0;
                const isOpen = openModules.includes(idx);

                return (
                  <li key={mod.id}>
                    {/* Header modul */}
                    <button
                      onClick={() => toggleModule(idx)}
                      className={`flex justify-between items-center w-full px-5 py-3 text-sm font-sans transition-colors border-b border-gray-200
                        ${isOpen ? "text-purple-600" : "text-gray-800 hover:text-purple-600"}`}
                    >
                      <span className="truncate">{mod.title}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {/* Isi modul */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <ul className="bg-gray-50">
                            {/* Submodules */}
                            {mod.sub_modules.map((sub) => {
                              const isActive = activeSub?.id === sub.id;
                              const isDone = sub.step <= maxStep;
                              const isUnlocked =
                                sub.step === 0 || sub.step <= maxStep;

                              return (
                                <li key={sub.id}>
                                  <button
                                    onClick={() =>
                                      isUnlocked && loadSubmodule(sub.slug)
                                    }
                                    disabled={!isUnlocked}
                                    className={`flex justify-between items-center w-full px-6 py-2 text-xs
                                      ${isActive
                                        ? "text-green-600 font-bold"
                                        : isDone
                                          ? "text-green-600"
                                          : isUnlocked
                                            ? "text-gray-700 hover:bg-purple-50"
                                            : "text-gray-400 cursor-not-allowed"
                                      }`}
                                  >
                                    <span className="truncate">{sub.title}</span>
                                    {isDone ? (
                                      <CheckCircle className="w-4 h-4 text-green-600" />
                                    ) : !isUnlocked ? (
                                      <Lock className="w-4 h-4 text-gray-400" />
                                    ) : null}
                                  </button>
                                </li>
                              );
                            })}

                            {/* Tugas */}
                            {mod.module_tasks.length > 0 && (
                              <li>
                                <button
                                  disabled={maxStep < mod.sub_modules.length}
                                  onClick={() => loadTask(mod.id)}
                                  className={`flex justify-between items-center w-full px-6 py-2 text-xs
                                    ${mod.module_tasks.every((t) => t.is_finish)
                                      ? "text-green-600 font-medium"
                                      : maxStep >= mod.sub_modules.length
                                        ? "text-gray-700 hover:bg-purple-50"
                                        : "text-gray-400 cursor-not-allowed"
                                    }`}
                                >
                                  <span className="truncate">Tugas</span>
                                  <span className="flex items-center space-x-2">
                                    <span className="text-gray-500">
                                      {mod.module_tasks.length} Soal
                                    </span>
                                    {mod.module_tasks.every((t) => t.is_finish) ? (
                                      <CheckCircle className="w-4 h-4 text-green-600" />
                                    ) : maxStep >= mod.sub_modules.length ? null : (
                                      <Lock className="w-4 h-4 text-gray-400" />
                                    )}
                                  </span>
                                </button>
                              </li>
                            )}

                            {/* Quiz */}
                            {mod.quizzes.map((quiz) => {
                              const lastStep = mod.sub_modules.length;
                              const quizUnlocked = maxStep >= lastStep;
                              const quizDone = !!quiz.user_latest_quiz;

                              return (
                                <li key={quiz.id}>
                                  <button
                                    disabled={!quizUnlocked}
                                    onClick={() => loadQuiz(quiz.module_slug)}
                                    className={`flex justify-between items-center w-full px-6 py-2 text-xs
                                      ${quizDone
                                        ? "text-green-600 font-medium"
                                        : quizUnlocked
                                          ? "text-gray-700 hover:bg-purple-50"
                                          : "text-gray-400 cursor-not-allowed"
                                      }`}
                                  >
                                    <span className="truncate">Quiz</span>
                                    <span className="flex items-center space-x-2">
                                      <span className="text-gray-500">
                                        {quiz.total_question} Soal
                                      </span>
                                      {quizDone ? (
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                      ) : !quizUnlocked ? (
                                        <Lock className="w-4 h-4 text-gray-400" />
                                      ) : null}
                                    </span>
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>

            {/* Final Audit / Post Test SAMAIN DENGAN MODUL */}
            {hasFinalAudit && (
              <li>
                <button
                  onClick={() => toggleModule(-1)} // pakai -1 biar beda dari index modul biasa
                  className={`flex justify-between items-center w-full px-5 py-3 text-sm font-sans transition-colors border-b border-gray-200
        ${openModules.includes(-1) ? "text-purple-600" : "text-gray-800 hover:text-purple-600"}`}
                >
                  <span className="truncate">Final Audit</span>
                  {openModules.includes(-1) ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {openModules.includes(-1) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="bg-gray-50">
                        <li>
                          <button
                            onClick={() => loadPostTest(modules[0].course.course_test_id!)}
                            className={`flex justify-between items-center w-full px-6 py-2 text-xs
                  ${postTest
                                ? "text-green-600 font-medium"
                                : "text-gray-700 hover:bg-purple-50"
                              }`}
                          >
                            <span className="truncate">Tugas Akhir</span>
                            <span className="flex items-center space-x-2">
                              {postTest ? (
                                <CheckCircle className="w-4 h-4 text-green-600" />
                              ) : (
                                <Lock className="w-4 h-4 text-gray-400" />
                              )}
                            </span>
                          </button>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )}
          </>
        )}
      </div>
    </aside>
  );
}

/** ================== MAIN CONTENT COMPONENT ================== */
type MainContentProps = {
  activeSub: SubModuleDetailType | null;
  parsedContent: ContentType | null;
  quiz: QuizType | null;
  tasks: ModuleTaskType[];
  postTest: CoursePostTest | null;
  loadingContent: boolean;
  loadingQuiz: boolean;
  errorQuiz: string | null;
  loadingTask: boolean;
  errorTask: string | null;
  loadingPostTest: boolean;
  errorPostTest: string | null;
  loadSubmodule: (subSlug: string) => void;
  navigateToQuizOrTask: () => void;
  navigateToNextModule: () => void;
  currentModuleIndex: number | null;
  currentSubModuleIndex: number | null;
  modules: ModuleType[];
};

function MainContent({
  activeSub,
  parsedContent,
  quiz,
  tasks,
  postTest,
  loadingContent,
  loadingQuiz,
  errorQuiz,
  loadingTask,
  errorTask,
  loadingPostTest,
  errorPostTest,
  loadSubmodule,
  navigateToQuizOrTask,
  navigateToNextModule,
  currentModuleIndex,
  currentSubModuleIndex,
  modules,
}: MainContentProps) {
  if (loadingContent) {
    return (
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </main>
    );
  }

  /** Konten Final Audit */
  if (postTest) {
    return (
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-full mx-auto bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-lg font-bold mb-2">
            Final Audit: {postTest.course.title}
          </h1>

          {loadingPostTest ? (
            <p>Loading Final Audit...</p>
          ) : errorPostTest ? (
            <p className="text-red-500">{errorPostTest}</p>
          ) : (
            <>
              <ul className="text-sm text-gray-800 space-y-1 mb-6">
                <li>Jumlah Soal: {postTest.total_question}</li>
                <li>Durasi Ujian: {postTest.duration} menit</li>
              </ul>

              <div className="mt-6">
                <button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                  Mulai Final Audit
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    );
  }

  /** Konten Submodule */
  if (activeSub) {
    return (
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-full mx-auto bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-lg text-left font-bold mb-2">{activeSub.title}</h1>
          <p className="text-xs text-left text-gray-600 mb-4 border-b border-gray-300 pb-3">
            {activeSub.sub_title}
          </p>

          <div className="prose prose-sm max-w-none leading-relaxed text-left space-y-4">
            {parsedContent?.blocks?.map((block: ContentBlock) => {
              if (block.type === "paragraph") {
                return (
                  <p
                    key={block.id}
                    className="text-sm leading-6"
                    dangerouslySetInnerHTML={{
                      __html: (block.data && block.data.text) || "",
                    }}
                  />
                );
              }
              if (block.type === "list") {
                return block.data.style === "ordered" ? (
                  <ol
                    key={block.id}
                    className="list-decimal list-inside space-y-1"
                  >
                    {block.data.items.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ol>
                ) : (
                  <ul
                    key={block.id}
                    className="list-disc list-inside space-y-1"
                  >
                    {block.data.items.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "image") {
                return (
                  <figure key={block.id} className="my-8">
                    <img
                      src={block.data.file.url}
                      alt={block.data.caption || "content"}
                      className="rounded-xl shadow-md mx-auto max-w-md"
                    />
                    {block.data.caption && (
                      <figcaption className="text-center text-sm text-gray-500 mt-3">
                        {block.data.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              return null;
            })}
          </div>

          {/* Navigasi submodul - TAMBAHKAN TOMBOL UNTUK KE QUIZ/TUGAS */}
          <div className="flex justify-between mt-10">
            {activeSub.prev ? (
              <button
                onClick={() => loadSubmodule(activeSub.prev!)}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                ← Sebelumnya
              </button>
            ) : (
              <span />
            )}
            
            <div className="flex gap-2">
              {/* Tombol untuk lanjut ke quiz/tugas jika ini adalah submodul terakhir */}
              {currentModuleIndex !== null && currentSubModuleIndex !== null && 
  modules[currentModuleIndex].sub_modules.length === currentSubModuleIndex + 1 && (
  <button
    onClick={navigateToQuizOrTask}
    className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
  >
    {modules[currentModuleIndex].quizzes.length > 0
      ? "Lanjut ke Quiz →"
      : modules[currentModuleIndex].module_tasks.length > 0
        ? "Lanjut ke Tugas →"
        : "Lanjut ke Tugas Akhir →"}
  </button>
)}

              
              {activeSub.next ? (
                <button
                  onClick={() => loadSubmodule(activeSub.next!)}
                  className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                >
                  Selanjutnya →
                </button>
              ) : (
                <span />
              )}
            </div>
          </div>
        </div>
      </main>
    );
  }

  /** Konten Quiz */
  if (quiz) {
    return (
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-full mx-auto bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-lg font-bold mb-2">Quiz: {quiz.module_title}</h1>

          {loadingQuiz ? (
            <p>Loading quiz...</p>
          ) : errorQuiz ? (
            <p className="text-red-500">{errorQuiz}</p>
          ) : (
            <>
              {/* Aturan */}
              <div
                className="text-sm text-gray-700 mb-6 prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: quiz.rules }}
              />

              {/* Info tambahan */}
              <ul className="text-sm text-gray-800 space-y-1 mb-6">
                <li>Jumlah Soal: {quiz.total_question}</li>
                <li>Syarat Nilai Kelulusan: {quiz.minimum_score}</li>
                <li>Durasi Ujian: {quiz.duration} menit</li>
                <li>Waktu tunggu ujian ulang: {quiz.retry_delay} menit</li>
              </ul>

              {/* Histori Quiz */}
              {quiz.user_latest_quiz && (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border px-4 py-2 text-left">Tanggal</th>
                        <th className="border px-4 py-2 text-left">Nilai</th>
                        <th className="border px-4 py-2 text-left">Status</th>
                        <th className="border px-4 py-2 text-left">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">
                          {new Date(
                            quiz.user_latest_quiz.created_at
                          ).toLocaleString()}
                        </td>
                        <td className="border px-4 py-2">
                          {quiz.user_latest_quiz.score}
                        </td>
                        <td className="border px-4 py-2">
                          {quiz.user_latest_quiz.score >= quiz.minimum_score ? (
                            <span className="text-green-600 font-medium">
                              Lulus
                            </span>
                          ) : (
                            <span className="text-red-600 font-medium">
                              Tidak Lulus
                            </span>
                          )}
                        </td>
                        <td className="border px-4 py-2">
                          <button className="px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                            Lihat Detail
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              <div className="mt-6">
                <button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                  Mulai Quiz
                </button>
              </div>

              {/* TAMBAHKAN TOMBOL UNTUK KEMBALI KE MATERI ATAU LANJUT */}
              <div className="flex justify-between mt-10">
                <button
                  onClick={() => {
                    // Kembali ke submodul terakhir dari modul ini
                    if (currentModuleIndex !== null) {
                      const module = modules[currentModuleIndex];
                      if (module.sub_modules.length > 0) {
                        loadSubmodule(module.sub_modules[module.sub_modules.length - 1].slug);
                      }
                    }
                  }}
                  className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                  ← Kembali ke Materi
                </button>
                
                {/* Tombol untuk lanjut ke modul berikutnya jika quiz sudah diselesaikan */}
                {(quiz.user_latest_quiz && (quiz.user_latest_quiz.score ?? 0) >= quiz.minimum_score) && (
                  <button
                    onClick={navigateToNextModule}
                    className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition-colors"
                  >
                    Lanjut ke Modul Selanjutnya →
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </main>
    );
  }

  /** Konten Tugas */
  if (tasks.length > 0) {
    return (
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-full mx-auto bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-lg font-bold mb-4">Tugas Modul</h1>

          {/* Aturan Tugas */}
          <div className="mb-6">
            <h2 className="text-base font-semibold mb-2">Aturan</h2>
            <ul className="list-decimal list-inside text-sm text-gray-700 space-y-1">
              <li>Dikerjakan secara individu</li>
              <li>File yang dikumpulkan berupa .zip, maksimal ukuran 5 MB</li>
              <li>Jangan sampai melebihi deadline yang telah diberikan</li>
              <li>
                Apabila tugas pada materi ini belum dikumpulkan semua, maka kamu
                tidak bisa lanjut ke materi berikutnya
              </li>
            </ul>
          </div>

          {loadingTask ? (
            <p>Loading tugas...</p>
          ) : errorTask ? (
            <p className="text-red-500">{errorTask}</p>
          ) : (
            <>
              <div className="overflow-x-auto border rounded-lg">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border px-4 py-2 text-left">No</th>
                      <th className="border px-4 py-2 text-left">Tugas</th>
                      <th className="border px-4 py-2 text-left">Status</th>
                      <th className="border px-4 py-2 text-left">Nilai</th>
                      <th className="border px-4 py-2 text-left">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasks.map((task, idx) => (
                      <tr key={task.id} className="hover:bg-gray-50">
                        <td className="border px-4 py-2">{idx + 1}</td>
                        <td className="border px-4 py-2 font-medium">
                          {task.question}
                        </td>
                        <td className="border px-4 py-2">
                          {task.is_finish ? (
                            <span className="text-green-600 font-semibold">
                              Sudah Dikumpulkan
                            </span>
                          ) : (
                            <span className="text-gray-500">Belum</span>
                          )}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {task.average_score ?? "-"}
                        </td>
                        <td className="border px-4 py-2 space-x-2">
                          <button
                            className="px-3 py-1 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
                            onClick={() => console.log("Detail task:", task.id)}
                          >
                            Detail
                          </button>
                          <button
                            className="px-3 py-1 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
                            onClick={() => console.log("Download task:", task.id)}
                          >
                            ⬇
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* TAMBAHKAN TOMBOL UNTUK KEMBALI KE MATERI ATAU LANJUT */}
              <div className="flex justify-between mt-10">
                <button
                  onClick={() => {
                    // Kembali ke submodul terakhir dari modul ini
                    if (currentModuleIndex !== null) {
                      const module = modules[currentModuleIndex];
                      if (module.sub_modules.length > 0) {
                        loadSubmodule(module.sub_modules[module.sub_modules.length - 1].slug);
                      }
                    }
                  }}
                  className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                  ← Kembali ke Materi
                </button>
                
                {/* Tombol untuk lanjut ke modul berikutnya jika semua tugas selesai */}
                {tasks.every(t => t.is_finish) && (
                  <button
                    onClick={navigateToNextModule}
                    className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition-colors"
                  >
                    Lanjut ke Modul Selanjutnya →
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </main>
    );
  }

  /** Default */
  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="flex flex-col items-center justify-center h-full text-gray-500">
        <BookOpen className="w-16 h-16 mb-4 opacity-50" />
        <p className="text-xl">Pilih modul di sidebar untuk memulai</p>
      </div>
    </main>
  );
}