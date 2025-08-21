import { useState } from "react";
import { HiChevronDown, HiOutlineViewGridAdd } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

type SubItem = string | { name: string; to: string };

const categories: { name: string; sub: SubItem[] }[] = [
  {
    name: "Software Development",
    sub: ["Github", "Pemrograman Website", "Pemrograman Android", "Pemrograman Desktop"]
  },
  {
    name: "Multimedia",
    sub: ["Desain Grafis", "Video Editing", "Fotografi"]
  },
  {
    name: "Game Development",
    sub: ["Unity", "Unreal Engine", "Godot"]
  }
];

interface CategoryDropdownProps {
  setFilters: React.Dispatch<React.SetStateAction<{
    categories: string[];
    priceMin: string;
    priceMax: string;
    search: string;
  }>>;
}

const CategoryDropdown = ({ setFilters }: CategoryDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    setFilters(prev => ({
      ...prev,
      categories: [category]
    }));
    navigate(`/kursus?category=${encodeURIComponent(category)}`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center pl-5 pr-3 text-gray-500 cursor-pointer select-none"
      >
        <HiOutlineViewGridAdd size={20} className="text-purple-600" />
        <span className="text-sm ml-2">Pilih Kategori</span>
        <HiChevronDown
          className={`ml-1 size-4 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute left-0 mt-5 w-52 bg-white border text-left border-gray-200 rounded-md shadow-lg z-50">
          {categories.map((category, index) => (
            <li
              key={index}
              className="group relative py-2 pl-4 pr-2 hover:bg-gray-100 text-sm text-gray-700 cursor-pointer whitespace-nowrap"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {category.name}

              {/* Submenu */}
              {hoveredIndex === index && (
                <ul className="absolute top-0 left-full ml-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  {category.sub.map((sub, subIndex) => (
                    <li
                      key={subIndex}
                      className="py-2 pl-4 pr-2 hover:bg-purple-100 text-sm text-purple-600 whitespace-nowrap"
                      onClick={() =>
                        typeof sub === "string"
                          ? handleCategoryClick(sub)
                          : handleCategoryClick(sub.name)
                      }
                    >
                      {typeof sub === "string" ? sub : sub.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryDropdown;
