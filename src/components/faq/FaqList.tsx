import FaqItem from "./FaqItem";
import type { FaqItem as FaqType } from "./faqData";

interface Props {
  faqs: FaqType[];
  openIndex: number | null;
  onToggle: (index: number) => void;
}

export default function FaqList({ faqs, openIndex, onToggle }: Props) {
  if (faqs.length === 0) {
    return <p className="text-center text-gray-500">Tidak ada pertanyaan untuk kategori ini.</p>;
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() => onToggle(index)}
        />
      ))}
    </div>
  );
}
