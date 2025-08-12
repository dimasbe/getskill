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
      className="bg-white/70 backdrop-blur-md shadow-md rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <button
        className="w-full flex justify-between items-center px-5 py-4 text-left focus:outline-none"
        onClick={onToggle}
      >
        <span className="font-medium text-gray-900">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <FaChevronDown className={isOpen ? "text-purple-600" : "text-gray-500"} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-5 pb-4 text-gray-600"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
