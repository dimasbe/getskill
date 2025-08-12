// pages/Faq/Faq.tsx
import { useState } from "react";
import FaqHeader from "../../components/faq/FaqHeader";
import FaqCategoryFilter from "../../components/faq/FaqCategoryFilter";
import FaqList from "../../components/faq/FaqList";
import { faqData } from "../../components/faq/faqData";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const categories = ["Semua", ...new Set(faqData.map((item) => item.category))];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs =
    selectedCategory === "Semua"
      ? faqData
      : faqData.filter((faq) => faq.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50 to-purple-100 relative overflow-hidden">
      {/* Shape Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 top-10 left-[-50px]" />
        <div className="absolute w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-30 bottom-0 right-[-100px]" />
      </div>

      <FaqHeader />

      <div className="container mx-auto px-4 py-14 max-w-4xl relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800 tracking-tight drop-shadow-sm">
          Temukan Pertanyaanmu
        </h2>

        <FaqCategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <FaqList faqs={filteredFaqs} openIndex={openIndex} onToggle={toggleFAQ} />
      </div>
    </div>
  );
}
