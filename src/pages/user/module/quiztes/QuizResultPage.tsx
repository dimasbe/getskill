import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchQuizResult } from "../../../../features/module/quiztes/_service/quiz_service";
import { fetchQuizDetail } from "../../../../features/module/_service/module_service"; // Import service baru
import type { QuizResult, QuizResultResponse } from "../../../../features/module/quiztes/_quiz";
import type { QuizType } from "../../../../features/module/_module";

const QuizResultPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [result, setResult] = useState<QuizResult | null>(null);
  const [quizDetail, setQuizDetail] = useState<QuizType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);

  // Fungsi untuk mendapatkan detail quiz berdasarkan module_slug
  const loadQuizDetail = useCallback(async (moduleSlug: string) => {
    try {
      const detail: QuizType = await fetchQuizDetail(moduleSlug);
      setQuizDetail(detail);
      return detail;
    } catch (error) {
      console.error("Gagal memuat detail quiz:", error);
      return null;
    }
  }, []);

  // Ambil detail quiz
  const loadQuizDetail = useCallback(async (moduleSlug: string) => {
    try {
      const detail: QuizType = await fetchQuizDetail(moduleSlug);
      setQuizDetail(detail);
      return detail;
    } catch (error) {
      console.error("Gagal memuat detail quiz:", error);
      return null;
    }
  }, []);

  // Ambil hasil quiz dan status kelulusan
  const loadResult = useCallback(async () => {
    if (!id) {
      setError("ID quiz tidak valid");
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      const response: QuizResultResponse = await fetchQuizResult(id);
      
      if (response.meta.code !== 200) {
        throw new Error(response.meta.message);
      }
      
      setResult(response.data);
      
      // Load detail quiz untuk mendapatkan course_slug dan quiz_slug
      if (response.data.module_slug) {
        await loadQuizDetail(response.data.module_slug);
      }
    } finally {
      setLoading(false);
    }
  }, [id, loadQuizDetail]);

  // Fungsi untuk handle navigasi ke halaman quiz
  const handleNavigateToQuiz = async () => {
    if (!quizDetail) {
      console.error("Detail quiz tidak tersedia");
      return;
    }

    try {
      setIsNavigating(true);
      
      // Navigasi ke route: /course/:courseSlug/quiz/:quizSlug
      navigate(`/course/${quizDetail.course_slug}/quiz/${quizDetail.module_slug}`);
    } catch (error) {
      console.error("Gagal navigasi:", error);
      setError("Gagal melakukan navigasi");
    } finally {
      setIsNavigating(false);
    }
  };

  // Fallback navigation jika quizDetail tidak tersedia
  const handleFallbackNavigation = () => {
    if (result?.module_slug) {
      navigate(`/module/${result.module_slug}`);
    } else {
      navigate(-1); // Kembali ke halaman sebelumnya
    }
  };

  useEffect(() => {
    loadResult();
  }, [loadResult]);

  if (loading)
    return <div className="p-6 text-center text-gray-600">Memuat hasil quiz...</div>;
  if (error)
    return (
      <div className="p-6 text-center">
        <div className="text-red-500 mb-4">{error}</div>
        <button 
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Kembali
        </button>
      </div>
    );
  if (!result) 
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500 mb-4">Data hasil quiz tidak ditemukan.</p>
        <button 
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Kembali
        </button>
      </div>
    );

  const date = new Date(result.updated_at).toLocaleString("id-ID", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="min-h-screen bg-gray-100 pb-15 dark:bg-[#141427] transition-colors duration-500">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-500 to-purple-700 py-6 px-6">
        <h1 className="text-white font-semibold text-left ml-13 2xl:ml-51 xl:ml-38 lg:ml-23 md:ml-32 sm:ml-15">
          Quiz - {courseTitle || "Tanpa Judul"}
        </h1>
      </div>

      <div className="2xl:max-w-6xl xl:max-w-5xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-md mx-auto mt-8">
        {/* Card Intro */}
        <div className="relative min-h-37 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl shadow p-6 mb-6 flex flex-col md:flex-row items-center md:items-center justify-between">
          <div className="text-left px-5 mb-4 md:mb-0 md:flex-1">
            <h3 className="text-xl font-semibold text-white">
              Test selesai
            </h3>
            <h2 className="text-2xl font-bold text-white">
              {headerMessage || "Selamat anda telah menyelesaikan test"}
            </h2>
            <p className="text-white mt-1 sm:text-base md:text-base">
              Hasil test anda akan tampilan dibawah ini
            </p>
            <p><strong>Jumlah Soal :</strong> {result.total_question}</p>
            <p><strong>Soal Benar :</strong> {result.total_correct}</p>
            <p><strong>Soal Salah :</strong> {result.total_fault}</p>
            {quizDetail && (
              <>
                <p><strong>Course :</strong> {quizDetail.course_title}</p>
                <p><strong>Module :</strong> {quizDetail.module_title}</p>
              </>
            )}
          </div>
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <img
              src={imgBook}
              alt="Ilustrasi Ujian"
              className="w-80 sm:w-80 md:w-60 mx-8 mt-6 md:mt-0 2xl:absolute xl:absolute lg:absolute 2xl:right-2 2xl:-bottom-0 xl:right-2 xl:-bottom-0 lg:right-2 lg:-bottom-0"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="2xl:max-w-6xl xl:max-w-5xl lg:max-w-5xl md:max-w-2xl sm:max-w-xl max-w-md mx-auto mt-8 grid grid-cols-1 2xl:grid-cols-[0.7fr_2fr] xl:grid-cols-[0.7fr_2fr] lg:grid-cols-3 items-start gap-6">
          {/* Card Hasil (Kiri) */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6 dark:bg-[#0D0D1A] dark:border-2 dark:border-white transition-colors duration-500">
              <h2 className="text-2xl font-semibold mb-4 text-start">Hasil Test</h2>

            {/* Tombol Navigasi yang Diupdate */}
            <button
              onClick={quizDetail ? handleNavigateToQuiz : handleFallbackNavigation}
              disabled={isNavigating}
              className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-yellow-300 text-gray-800 font-medium py-2 rounded border-b-4 border-yellow-700 transition-colors"
            >
              {isNavigating ? "Memuat..." : "Kembali ke Quiz"}
            </button>

            {/* Tombol alternatif untuk kembali ke course */}
            {quizDetail && (
              <button
                onClick={() => navigate(`/course/${quizDetail.course_slug}`)}
                className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded transition-colors"
              >
                Kembali ke Course
              </button>
            )}
          </div>
        </div>

        {/* Panel Kanan - Question List */}
        <div className="md:w-2/3 p-6 space-y-5 bg-gray-50">
          {result.questions.map((q, index) => (
            <div
              key={index}
              className="relative p-5 rounded-lg border border-gray-200 bg-white shadow-sm"
            >
              {/* Status Benar / Salah */}
              <div
                className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full ${
                  q.correct
                    ? "bg-purple-100 text-purple-700 border border-purple-300"
                    : "bg-red-100 text-red-600 border border-red-300"
                }`}
              >
                {q.correct ? "✓ Benar" : "✗ Salah"}
              </div>

              {/* Status Lulus/Tidak Lulus */}
              <div className="mb-4">
                {result.status === "Lulus" ? (
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200">
                    Selamat Anda Lulus
                  </button>
                ) : (
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200">
                    Maaf Anda Tidak Lulus
                  </button>
                )}
              </div>
            </div>
            
            <div className="mb-6">
              <button
                onClick={quizDetail ? handleNavigateToQuiz : handleFallbackNavigation}
                disabled={isNavigating}
                className="w-full bg-yellow-400 shadow-[4px_4px_0px_0px_#0B1367] hover:bg-purple-600 hover:shadow-none active:translate-y-0.5 transition-all duration-200 ease-out text-white font-semibold py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isNavigating ? "Memuat..." : "Selesai"}
              </button>
            </div>
          </div>

              {/* Pilihan */}
              <div className="space-y-2 mt-2">
                {["a", "b", "c", "d", "e"].map((key) => {
                  const optionKey = `option_${key}` as keyof typeof q;
                  const value = q[optionKey];
                  const isUserAnswer = q.user_answer === `option_${key}`;
                  const isCorrectAnswer = q.correct_answer === `option_${key}`;

                  if (!value) return null;

                  return (
                    <div
                      key={key}
                      className={`p-3 rounded-md border transition-colors ${
                        isCorrectAnswer
                          ? "bg-green-50 border-green-500 text-green-800"
                          : isUserAnswer && !isCorrectAnswer
                          ? "bg-red-50 border-red-500 text-red-800"
                          : "bg-gray-50 border-gray-200 text-gray-700"
                      }`}
                    >
                      <div className="flex items-start">
                        <span className="font-medium mr-2">{key.toUpperCase()}.</span>
                        <div dangerouslySetInnerHTML={{ __html: String(value) }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizResultPage;