import { categories } from "@/data/products";

interface CategoryFilterProps {
  active: string;
  onSelect: (id: string) => void;
}

const CategoryFilter = ({ active, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide px-1">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`category-pill whitespace-nowrap flex-shrink-0 ${
            active === cat.id ? "category-pill-active" : "category-pill-inactive"
          }`}
        >
          {cat.emoji} {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
