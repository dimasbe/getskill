// src/components/SidebarFilter.tsx
import type { Dispatch, SetStateAction } from 'react'

interface FiltersState {
  categories: string[]
  priceMin: string
  priceMax: string
}

interface SidebarFilterProps {
  filters: FiltersState
  setFilters: Dispatch<SetStateAction<FiltersState>>
}

export default function SidebarFilter({ filters, setFilters }: SidebarFilterProps) {
  const handleCheckbox = (category: string) => {
    setFilters((prev: FiltersState) => {
      const categories = prev.categories.includes(category)
        ? prev.categories.filter((c: string) => c !== category)
        : [...prev.categories, category]
      return { ...prev, categories }
    })
  }

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
      <h3 className="font-semibold text-gray-700 mb-4">Kategori</h3>
      <div className="text-sm text-gray-600 space-y-1">
        <label className="block">
          <input type="checkbox" onChange={() => handleCheckbox('Github')} /> Github
        </label>
        <label className="block">
          <input type="checkbox" onChange={() => handleCheckbox('Pemrograman Website')} /> Pemrograman Website
        </label>
        <label className="block">
          <input type="checkbox" onChange={() => handleCheckbox('Pemrograman Android')} /> Pemrograman Android
        </label>
        <label className="block">
          <input type="checkbox" onChange={() => handleCheckbox('Pemrograman Desktop')} /> Pemrograman Desktop
        </label>
      </div>

      <h3 className="font-semibold text-gray-700 mt-6 mb-2">Harga</h3>
      <div className="flex flex-col gap-2">
        <input
          type="number"
          placeholder="Rp Harga Minimum"
          className="border px-3 py-1 rounded"
          value={filters.priceMin}
          onChange={e => setFilters(prev => ({ ...prev, priceMin: e.target.value }))}
        />
        <input
          type="number"
          placeholder="Rp Harga Maksimum"
          className="border px-3 py-1 rounded"
          value={filters.priceMax}
          onChange={e => setFilters(prev => ({ ...prev, priceMax: e.target.value }))}
        />
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 rounded mt-2"
          onClick={() => console.log('Terapkan filter:', filters)}
        >
          Terapkan
        </button>
      </div>
    </div>
  )
}
