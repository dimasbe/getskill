// src/pages/Faq/Faq.tsx
import { useEffect, useState } from "react";
import {
  fetchFaqs,
  fetchFaqCategories,
} from "../../features/faq/_service/faq_service";
import type { Faq, FaqCategory } from "../../features/faq/_faq";

export default function FaqPage() {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [categories, setCategories] = useState<FaqCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | "all">("all");
  const [activeId, setActiveId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [faqData, categoryData] = await Promise.all([
          fetchFaqs(),
          fetchFaqCategories(),
        ]);
        setFaqs(faqData);
        setCategories(categoryData);
      } catch (error) {
        console.error("Gagal mengambil data FAQ:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const toggleFaq = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  const filteredFaqs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.faq_category?.id === activeCategory);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Memuat FAQ...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Pertanyaan yang Sering Diajukan
      </h1>

      {/* Filter kategori */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
            activeCategory === "all"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          Semua
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
              activeCategory === cat.id
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* List FAQ */}
      <div className="space-y-4">
        {filteredFaqs.length === 0 && (
          <p className="text-gray-500 text-center">
            Tidak ada FAQ untuk kategori ini.
          </p>
        )}

        {filteredFaqs.map((faq) => (
          <div
            key={faq.id}
            className="border border-gray-200 rounded-2xl shadow-sm"
          >
            <button
              onClick={() => toggleFaq(faq.id)}
              className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-gray-700 hover:bg-gray-50 rounded-2xl transition"
            >
              <span>{faq.question}</span>
              <span
                className={`transition-transform ${
                  activeId === faq.id ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>

            {activeId === faq.id && (
              <div className="px-5 pb-4 text-gray-600 border-t border-gray-100">
                {/* karena answer ada kemungkinan berupa HTML dari API */}
                <div
                  className="prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
