import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`
        fixed z-50 transition-opacity duration-300
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
        bg-purple-600 hover:bg-yellow-500 text-white hover:text-black
        shadow-md rounded-full
        bottom-4 right-4 sm:bottom-6 sm:right-9
        p-2 sm:p-2
      `}
            aria-label="Scroll to top"
        >
            <FaChevronUp size={13} />
        </button>
    );
};

export default ScrollToTopButton;
