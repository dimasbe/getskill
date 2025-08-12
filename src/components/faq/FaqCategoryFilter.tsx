interface Props {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export default function FaqCategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: Props) {
  return (
    <div className="flex justify-center gap-4 flex-wrap mb-10">
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat;

        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`
              px-6 py-2 rounded-full text-sm font-semibold text-white
              transition-all duration-200 ease-out
              transform select-none
              ${
                isSelected
                  ? "bg-yellow-400 shadow-[0_4px_0_#b45309] scale-95"
                  : "bg-purple-600 hover:bg-yellow-400 shadow-[0_6px_0_#4c1d95] hover:shadow-[0_6px_0_#b45309]"
              }
            `}
            style={{
              boxShadow: isSelected
                ? "inset 0 2px 4px rgba(0,0,0,0.2)"
                : "0 6px 0 #4c1d95",
            }}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
