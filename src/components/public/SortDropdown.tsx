import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

type Option = {
    label: string;
    value: string;
};

const sortOptions: Option[] = [
    { label: "Aktif - Berakhir", value: "terbaru" },
    { label: "Berakhir - Aktif", value: "terlama" }
];

const SortDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<Option>(sortOptions[0]);

    const handleSelect = (option: Option) => {
        setSelected(option);
        setIsOpen(false);
    };

    return (
        <div className="relative w-full md:w-1/3 transition-all duration-300 ease-in-out hover:scale-[1.02] z-30">
            {/* Toggle Button */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md cursor-pointer text-sm
        ${isOpen ? "text-purple-500 border-purple-400" : "text-gray-700"}
        hover:text-purple-500 hover:border-purple-400 focus:ring-3 focus:ring-purple-500`}
            >

                <span>{selected.label}</span>
                <HiChevronDown
                    className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}
                />
            </div>

            {/* Dropdown Menu dengan animasi */}
            <div
                className={`absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50 transform transition-all duration-300 ease-in-out origin-top
                ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}
                style={{ transformOrigin: "top" }}
            >
                <ul>
                    {sortOptions.map((option) => (
                        <li key={option.value}>
                            <button
                                onClick={() => handleSelect(option)}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-100 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
                            >
                                {option.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SortDropdown;
