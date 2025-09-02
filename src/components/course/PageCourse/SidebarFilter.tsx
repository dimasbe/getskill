import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { ChevronDown, ChevronUp, SlidersHorizontal, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SidebarSkeleton from "./SidebarSkeleton";

interface FiltersState {
  categories: string[];
  priceMin: string;
  priceMax: string;
  search: string;
}

interface SidebarFilter{
  filters: FiltersState;
  setFilters: Dispatch<SetStateAction<FiltersState>>;
}

const CATEGORY_GROUPS = [
  {
    name: "Software Development",
    count: 5,
    subcategories: [
      { name: "Github", count: 1 },
      { name: "Pemrograman Website", count: 3 },
      { name: "Pemrograman Android", count: 0 },
      { name: "Pemrograman Desktop", count: 1 },
    ],
  },
  {
    name: "Multimedia",
    count: 0,
    subcategories: [],
  },
  {
    name: "Game Development",
    count: 1,
    subcategories: [
      { name: "Scratch", count: 1 },
      { name: "Unity", count: 0 },
    ],
  },
];

export default function SidebarFilter({ filters, setFilters }: SidebarFilter) {
  const [openGroups, setOpenGroups] = useState<string[]>(["Software Development"]);
  const [isOpen, setIsOpen] = useState(false);
  const [localFilters, setLocalFilters] = useState<FiltersState>(filters);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleGroup = (name: string) => {
    setIsInitialRender(false);
    setOpenGroups((prev) =>
      prev.includes(name) ? prev.filter((g) => g !== name) : [...prev, name]
    );
  };

  const handleCheckbox = (category: string) => {
    setLocalFilters((prev) => {
      const categories = prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category];
      return { ...prev, categories };
    });
  };

  const applyFilters = () => {
    setFilters(localFilters);
    setIsOpen(false);
  };

  // Gabungkan semua konten filter termasuk tombol dalam satu komponen untuk kerapian
  const SidebarContent = (
    <div className="flex flex-col h-full font-sans">
      <div className="space-y-6 pb-2 overflow-y-auto scrollbar-hide text-sm flex-grow">
        {/* Kategori */}
        <div className="bg-gray-100 rounded-lg shadow p-3 max-w-[220px]">
          <h3 className="text-[16px] font-semibold text-black mb-5 text-left">
            Kategori
          </h3>
          <div className="space-y-2 ml-1">
            {CATEGORY_GROUPS.map((group) => (
              <div key={group.name}>
                {/* Tombol grup kategori */}
                <button
                  className="flex items-center justify-between w-full text-left font-normal text-gray-700 px-2 py-2 rounded-lg hover:bg-gray-50 focus:outline-none text-[13px]"
                  onClick={() => toggleGroup(group.name)}
                >
                  <div className="flex items-center gap-1 text-[13px]">
                    <span>{group.name}</span>
                    <span className="text-gray-400 text-[11px]">({group.count})</span>
                  </div>
                  {openGroups.includes(group.name) ? (
                    <ChevronUp size={12} className="text-gray-400" />
                  ) : (
                    <ChevronDown size={12} className="text-gray-400" />
                  )}
                </button>
                {/* Subkategori */}
                <AnimatePresence initial={!isInitialRender}>
                  {openGroups.includes(group.name) && group.subcategories.length > 0 && (
                    <motion.div
                      key="subcategories"
                      initial={isInitialRender ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="pl-5 pr-3 pt-2 space-y-1">
                        {group.subcategories.map((subcategory) => (
                          <label
                            key={subcategory.name}
                            className="flex items-center gap-2 cursor-pointer text-[12px] text-gray-600"
                          >
                            <input
                              type="checkbox"
                              className="accent-purple-600 w-3 h-3 rounded"
                              checked={localFilters.categories.includes(subcategory.name)}
                              onChange={() => handleCheckbox(subcategory.name)}
                              disabled={subcategory.count === 0}
                            />
                            <span className="flex-1 text-left">{subcategory.name}</span>
                            <span className="text-gray-400 text-[11px]">
                              ({subcategory.count})
                            </span>
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
        {/* Harga */}
        <div className="bg-gray-100 rounded-lg shadow p-3 max-w-[220px]">
          <h3 className="text-[16px] font-semibold text-black mb-5 text-left">Harga</h3>
          <div className="flex flex-col gap-2">
            {/* Harga Minimum */}
            <div className="flex items-stretch border border-gray-300 rounded-md overflow-hidden bg-white">
              <span className="px-3 flex items-center justify-center text-gray-700 text-sm bg-gray-100">
                Rp
              </span>
              <input
                type="number"
                placeholder="Harga Minimum"
                className="flex-1 px-2 py-2 outline-none text-xs text-gray-800 placeholder-gray-700 font-normal"
                value={localFilters.priceMin}
                onChange={(e) =>
                  setLocalFilters((prev) => ({ ...prev, priceMin: e.target.value }))
                }
              />
            </div>

            {/* Harga Maksimum */}
            <div className="flex items-stretch border border-gray-300 rounded-md overflow-hidden bg-white">
              <span className="px-3 flex items-center justify-center text-gray-700 text-sm bg-gray-100">
                Rp
              </span>
              <input
                type="number"
                placeholder="Harga Maksimum"
                className="flex-1 px-2 py-2 outline-none text-xs text-gray-800 placeholder-gray-700 font-normal"
                value={localFilters.priceMax}
                onChange={(e) =>
                  setLocalFilters((prev) => ({ ...prev, priceMax: e.target.value }))
                }
              />
            </div>
          </div>
        </div>

      </div>
      {/* Tombol Terapkan */}
      <div className="pt-4 flex-shrink-0 mb-30">
        <button
          onClick={applyFilters}
          className="px-4 py-2 rounded-full align-text-top font-semibold font-sans text-black
                       transition-all duration-200 ease-out w-full text-center
                       bg-[#FBBF24] shadow-[4px_4px_0px_0px_#0B1367]
                       hover:shadow-none active:translate-y-0.5"
        >
          Terapkan
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Tombol buka filter di mobile */}
      <div className="md:hidden mb-3">
        <button
          className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-3 py-2 rounded-md text-sm"
          onClick={() => setIsOpen(true)}
        >
          <SlidersHorizontal size={16} /> Filter
        </button>
      </div>

      {/* Sidebar desktop */}
      <aside className="hidden md:block w-[220px] sticky top-20 bottom-20 h-fit p-2 text-sm">
        {loading ? <SidebarSkeleton /> : SidebarContent}
      </aside>
      {/* Drawer mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-end">
          <div className="bg-white w-64 sm:w-72 h-screen p-4 shadow-lg relative animate-slideInRight text-sm">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <X size={18} />
            </button>
            <div className="pt-8 h-full">
              {loading ? <SidebarSkeleton /> : SidebarContent}
            </div>
          </div>
        </div>
      )}
    </>
  );
}