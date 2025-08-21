import { useState, type Dispatch, type SetStateAction } from "react";
import { ChevronDown, ChevronUp, SlidersHorizontal, X } from "lucide-react";

interface FiltersState {
  categories: string[];
  priceMin: string;
  priceMax: string;
  search: string;
}

interface SidebarFilterProps {
  filters: FiltersState;
  setFilters: Dispatch<SetStateAction<FiltersState>>;
}

const CATEGORY_GROUPS = [
  {
    name: "Software Development",
    count: 5,
    subcategories: ["Github", "Pemrograman Website", "Pemrograman Android", "Pemrograman Desktop"],
  },
  {
    name: "Multimedia",
    count: 0,
    subcategories: [], // kosong
  },
  {
    name: "Game Development",
    count: 1,
    subcategories: [], // kosong
  },
];

export default function SidebarFilter({ filters, setFilters }: SidebarFilterProps) {
  const [openGroups, setOpenGroups] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // state lokal supaya perubahan baru berlaku setelah klik "Terapkan"
  const [localFilters, setLocalFilters] = useState<FiltersState>(filters);

  const toggleGroup = (name: string) => {
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
    setFilters(localFilters); // update parent state
    console.log("Terapkan filter:", localFilters);
    setIsOpen(false); // tutup drawer di mobile
  };

  const SidebarContent = (
    <div className="space-y-6 pb-6 overflow-y-auto scrollbar-hide">
      {/* Card Kategori */}
      <div className="bg-gray-100 rounded-xl shadow p-4">
        <h3 className="font-semibold text-gray-700 mb-3">Kategori</h3>
        <div className="space-y-3">
          {CATEGORY_GROUPS.map((group) => (
            <div key={group.name}>
              <button
                className="flex items-center justify-between w-full text-left font-medium text-gray-700 border border-gray-200 rounded-md px-3 py-2 hover:border-blue-400 focus:border-blue-400"
                onClick={() => toggleGroup(group.name)}
              >
                <span>
                  {group.name}{" "}
                  <span className="text-gray-400 text-sm">({group.count})</span>
                </span>
                {openGroups.includes(group.name) ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>

              {/* Sub-kategori hanya muncul kalau ada isinya */}
              {openGroups.includes(group.name) && group.subcategories.length > 0 && (
                <div className="pl-4 mt-2 space-y-2">
                  {group.subcategories.map((subcategory) => (
                    <label
                      key={subcategory}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="accent-yellow-400 w-4 h-4 rounded"
                        checked={localFilters.categories.includes(subcategory)}
                        onChange={() => handleCheckbox(subcategory)}
                      />
                      <span className="text-sm text-gray-600">{subcategory}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Card Harga */}
      <div className="bg-gray-100 rounded-xl shadow p-4">
        <h3 className="font-semibold text-black-700 mb-3">Harga</h3>
        <div className="flex flex-col gap-3">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <span className="px-2 text-gray-500 text-sm">Rp</span>
            <input
              type="number"
              placeholder="Harga Minimum"
              className="flex-1 px-2 py-2 outline-none text-sm"
              value={localFilters.priceMin}
              onChange={(e) =>
                setLocalFilters((prev) => ({ ...prev, priceMin: e.target.value }))
              }
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <span className="px-2 text-gray-500 text-sm">Rp</span>
            <input
              type="number"
              placeholder="Harga Maksimum"
              className="flex-1 px-2 py-2 outline-none text-sm"
              value={localFilters.priceMax}
              onChange={(e) =>
                setLocalFilters((prev) => ({ ...prev, priceMax: e.target.value }))
              }
            />
          </div>
        </div>
      </div>

      {/* Tombol Terapkan */}
<div>
  <button
    onClick={applyFilters}
    className={`
      px-6 py-2 rounded-full text-sm font-semibold text-white
      transition-all duration-200 ease-out
      transform select-none w-full
      bg-purple-600 hover:bg-yellow-400
      shadow-[0_6px_0_#4c1d95] hover:shadow-[0_6px_0_#b45309]
      active:scale-95
    `}
    style={{
      boxShadow: "0 6px 0 #4c1d95",
    }}
  >
    Terapkan
  </button>
</div>

    </div>
  );

  return (
    <>
      {/* Tombol buka filter di mobile */}
      <div className="md:hidden mb-4">
        <button
          className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg shadow-sm transition-colors"
          onClick={() => setIsOpen(true)}
        >
          <SlidersHorizontal size={18} /> Filter
        </button>
      </div>

      {/* Sidebar desktop */}
      <aside className="hidden md:block lg:sticky top-6 h-[calc(100vh-2rem)] p-2">
        {SidebarContent}
      </aside>

      {/* Drawer mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-end">
          <div className="bg-white w-72 h-screen p-5 shadow-lg relative animate-slideInRight overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>
            {SidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
