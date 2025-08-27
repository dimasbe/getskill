import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FaqItem({ question, answer, isOpen, onToggle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white/80 backdrop-blur-sm shadow-md rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 mb-4"
    >
      {/* Tombol pertanyaan */}
      <button
        className="w-full flex justify-between items-center px-5 py-4 text-left focus:outline-none border-b border-gray-300 pb-4"
        onClick={onToggle}
      >
        <span className="font-semibold text-gray-900 text-[15px]">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown
            className={`transition-colors duration-300 ${
              isOpen ? "text-purple-600" : "text-gray-500"
            }`}
          />
        </motion.div>
      </button>

      {/* Jawaban */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 mt-5 text-gray-600 leading-relaxed text-[13px] text-left">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
