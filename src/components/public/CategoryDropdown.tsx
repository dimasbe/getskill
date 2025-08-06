import { useState } from "react";
import { LayoutGrid } from "lucide-react";
import { HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";

type SubItem = string | { name: string; to: string };

const categories: { name: string; sub: SubItem[] }[] = [
  {
    name: "Software Development",
    sub: [
      { name: "Github", to: "/github" },
      "Pemrograman Website",
      "Pemrograman Android",
      "Pemrograman Dekstop"
    ]
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

const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center pl-5 pr-3 text-gray-500 cursor-pointer select-none"
      >
        <LayoutGrid size={20} />
        <span className="text-sm ml-2">Pilih Kategori</span>
        <HiChevronDown
          className={`ml-1 size-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute left-0 mt-5 w-52 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          {categories.map((category, index) => (
            <li
              key={index}
              className="group relative px-4 py-2 hover:bg-gray-100 text-sm text-gray-700 cursor-pointer whitespace-nowrap"
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
                      className="px-4 py-2 hover:bg-purple-100 text-sm text-purple-600 whitespace-nowrap"
                      onClick={() => setIsOpen(false)}
                    >
                      {typeof sub === "string" ? (
                        sub
                      ) : (
                        <Link to={sub.to} className="block w-full h-full">
                          {sub.name}
                        </Link>
                      )}
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
