import { useState, type Dispatch, type SetStateAction } from 'react';
import { ChevronDown, ChevronUp, SlidersHorizontal, X } from 'lucide-react';

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

export default function SidebarFilter({ filters, setFilters }: SidebarFilterProps) {
  const [showCategories, setShowCategories] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckbox = (category: string) => {
    setFilters((prev) => {
      const categories = prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category];
      return { ...prev, categories };
    });
  };

  const SidebarContent = (
    <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 w-full md:w-64 h-fit">
      {/* Kategori */}
      <div>
        <button
          className="flex items-center justify-between w-full text-left font-semibold text-gray-700 mb-3"
          onClick={() => setShowCategories(!showCategories)}
        >
          <span>Kategori</span>
          {showCategories ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        {showCategories && (
          <div className="space-y-2">
            {['Github', 'Pemrograman Website', 'Pemrograman Android', 'Pemrograman Desktop'].map((category) => (
              <label key={category} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-yellow-400 w-4 h-4 rounded"
                  checked={filters.categories.includes(category)}
                  onChange={() => handleCheckbox(category)}
                />
                <span className="text-sm text-gray-600">{category}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Harga */}
      <div className="mt-6">
        <button
          className="flex items-center justify-between w-full text-left font-semibold text-gray-700 mb-3"
          onClick={() => setShowPrice(!showPrice)}
        >
          <span>Harga</span>
          {showPrice ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        {showPrice && (
          <div className="flex flex-col gap-3">
            <input
              type="number"
              placeholder="Rp Harga Minimum"
              className="border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none px-3 py-2 rounded-lg text-sm"
              value={filters.priceMin}
              onChange={(e) => setFilters((prev) => ({ ...prev, priceMin: e.target.value }))}
            />
            <input
              type="number"
              placeholder="Rp Harga Maksimum"
              className="border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 outline-none px-3 py-2 rounded-lg text-sm"
              value={filters.priceMax}
              onChange={(e) => setFilters((prev) => ({ ...prev, priceMax: e.target.value }))}
            />
            <button
              className="bg-yellow-400 hover:bg-yellow-500 transition-colors text-black font-semibold py-2 rounded-lg shadow-sm"
              onClick={() => console.log('Terapkan filter:', filters)}
            >
              Terapkan
            </button>
          </div>
        )}
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
      <div className="hidden md:block">{SidebarContent}</div>

      {/* Drawer mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-end">
          <div className="bg-white w-72 h-full p-5 shadow-lg relative animate-slideInRight">
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
