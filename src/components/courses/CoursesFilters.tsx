import Button from "../ui/Button";
import { categories, durations, levels } from "../../data/courses.data";

interface FilterTitleProps {
  children: string;
  className?: string;
}

const FilterTitle = ({ children, className = "" }: FilterTitleProps) => (
  <h3
    className={`text-xs font-semibold uppercase tracking-wider text-slate-500 ${className}`}
  >
    {children}
  </h3>
);

const CoursesFilters = () => {
  return (
    <aside className="h-fit rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      {/* Kategoriya */}
      <FilterTitle>Kategoriya</FilterTitle>
      <div className="mt-4 space-y-3">
        {categories.map((c) => (
          <label
            key={c.label}
            className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-600"
          >
            <input
              type="checkbox"
              defaultChecked={c.label === "Frontend"}
              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            {c.label}
            <span className="text-slate-400">({c.count})</span>
          </label>
        ))}
      </div>

      {/* Daraja */}
      <FilterTitle className="mt-6">Daraja</FilterTitle>
      <div className="mt-4 space-y-3">
        {levels.map((level) => (
          <label
            key={level}
            className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-600"
          >
            <input
              type="radio"
              name="level"
              defaultChecked={level === "Barchasi"}
              className="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            {level}
          </label>
        ))}
      </div>

      {/* Narx oralig'i */}
      <FilterTitle className="mt-6">Narx oralig'i (so'm)</FilterTitle>
      <div className="mt-4 flex items-center gap-2">
        <input
          type="text"
          defaultValue="400 000"
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
        <span className="text-slate-400">—</span>
        <input
          type="text"
          defaultValue="2 000 000"
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Davomiyligi */}
      <FilterTitle className="mt-6">Davomiyligi</FilterTitle>
      <div className="mt-4 space-y-3">
        {durations.map((d) => (
          <label
            key={d}
            className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-600"
          >
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            {d}
          </label>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3">
        <Button size="sm" className="flex-1 cursor-pointer">
          Filtrlash
        </Button>
        <button
          type="button"
          className="cursor-pointer text-sm font-medium text-slate-500 transition hover:text-slate-700"
        >
          Tozalash
        </button>
      </div>
    </aside>
  );
};

export default CoursesFilters;
