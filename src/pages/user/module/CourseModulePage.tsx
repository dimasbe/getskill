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
} from "../../../features/module/_service/module_service";
import type {
  ModuleType,
  SubModuleDetailType,
  ContentType,
  ContentBlock,
} from "../../../features/module/_module";
import { motion, AnimatePresence } from "framer-motion";

export default function CourseModulePage() {
  const { slug } = useParams<{ slug: string }>();
  const [modules, setModules] = useState<ModuleType[]>([]);
  const [activeSub, setActiveSub] = useState<SubModuleDetailType | null>(null);
  const [parsedContent, setParsedContent] = useState<ContentType | null>(null);
  const [loadingModules, setLoadingModules] = useState(true);
  const [loadingContent, setLoadingContent] = useState(false);

  const [progressMap, setProgressMap] = useState<Record<string, number>>({});
  const [openModules, setOpenModules] = useState<number[]>([]);

  // Load saved progress
  useEffect(() => {
    if (!slug) return;
    try {
      const raw = localStorage.getItem(`course_progress_${slug}`);
      if (raw) setProgressMap(JSON.parse(raw));
    } catch (err) {
      console.warn("Gagal baca progress dari localStorage", err);
    }
  }, [slug]);

  // Ambil semua modul
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
        if (slug)
          localStorage.setItem(
            `course_progress_${slug}`,
            JSON.stringify(next)
          );
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
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingContent(false);
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-80 bg-white h-screen sticky top-0 overflow-y-auto scrollbar-hide">
        <div className="pt-4">
          <h2 className="text-left text-base font-bold px-4 py-3 bg-gray-50 border-b border-gray-300">
            Konten Kursus
          </h2>

          {loadingModules ? (
            <p className="px-4">Loading modules...</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {modules.map((mod, idx) => {
                const maxStep = progressMap[mod.slug] || 0;
                const isOpen = openModules.includes(idx);

                return (
                  <li key={mod.id}>
                    {/* Header modul */}
                    <button
                      onClick={() => toggleModule(idx)}
                      className={`flex justify-between items-center w-full px-5 py-3 text-sm font-sans transition-colors
    border-b border-gray-200
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
                            {/* Submodules*/}
                            {mod.sub_modules.map((sub) => {
                              const isActive = activeSub?.id === sub.id;
                              const isDone = sub.step <= maxStep;
                              const isUnlocked = sub.step === 0 || (sub.step - 0) <= maxStep;

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
                                  // Tugas hanya bisa diakses jika semua submodul selesai
                                  disabled={maxStep < mod.sub_modules.length}
                                  onClick={() => {
                                    // anggap loadSubmodule tugas atau pindah ke page tugas
                                    console.log("Masuk ke halaman Tugas");
                                  }}
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
                                    {/* tampilkan jumlah soal hanya jika halaman aktif */}
                                    {activeSub?.title === "Tugas" && (
                                      <span className="text-gray-500">{mod.module_tasks.length} Soal</span>
                                    )}

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
                                    onClick={() => {
                                      // anggap loadSubmodule quiz atau pindah ke page quiz
                                      console.log("Masuk ke halaman Quiz");
                                    }}
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
                                      {/* tampilkan jumlah soal hanya jika halaman aktif */}
                                      {activeSub?.title === "Quiz" && (
                                        <span className="text-gray-500">{quiz.total_question} Soal</span>
                                      )}

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
          )}
        </div>
      </aside>

      {/* Konten utama */}
      <main className="flex-1 p-6 overflow-y-auto">
        {loadingContent ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : activeSub ? (
          <div className="max-w-full mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-lg text-left font-bold mb-2">{activeSub.title}</h1>
            <p className="text-xs text-left text-gray-600 mb-4 border-b border-gray-300 pb-3">{activeSub.sub_title}</p>
  
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

            {/* Navigasi submodul */}
            {activeSub && (
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
            )}
          </div>

        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <BookOpen className="w-16 h-16 mb-4 opacity-50" />
            <p className="text-xl">Pilih modul di sidebar untuk memulai</p>
          </div>
        )}
      </main>
    </div>
  );
}