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
                  ? "bg-yellow-400 translate-y-[6px] shadow-none"
                  : "bg-purple-600 shadow-[0_6px_0_#4c1d95] hover:bg-yellow-400 hover:translate-y-[6px] hover:shadow-none"
              }
            `}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}