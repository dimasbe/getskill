import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { RiFilter3Fill } from "react-icons/ri";

type Option = {
    label: string;
    value: string;
};

type SortDropdownProps = {
    selected: string;
    onChange: (value: string) => void;
};

const sortOptions: Option[] = [
    { label: "Aktif - Berakhir", value: "terbaru" },
    { label: "Berakhir - Aktif", value: "terlama" }
];

const SortDropdown: React.FC<SortDropdownProps> = ({ selected, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const selectedLabel = sortOptions.find(opt => opt.value === selected)?.label || sortOptions[0].label;

    return (
        <div className="relative w-full md:w-1/3 transition-all duration-300 ease-in-out hover:scale-[1.02] z-30">
            {/* Toggle Button */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md cursor-pointer text-sm
        ${isOpen ? "text-purple-500 border-purple-400" : "text-gray-700"}
        hover:text-purple-500 hover:border-purple-400 focus:ring-3 focus:ring-purple-500`}
            >
                <RiFilter3Fill size={25} />
                <span>{selectedLabel}</span>
                <HiChevronDown
                    className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}
                />
            </div>

            {/* Dropdown Menu */}
            <div
                className={`absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50 transform transition-all duration-300 ease-in-out origin-top
                ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"}`}
                style={{ transformOrigin: "top" }}
            >
                <ul>
                    {sortOptions.map((option) => (
                        <li key={option.value}>
                            <button
                                onClick={() => {
                                    onChange(option.value);
                                    setIsOpen(false);
                                }}
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
