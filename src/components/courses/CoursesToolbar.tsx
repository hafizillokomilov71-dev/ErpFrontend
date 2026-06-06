import Icon from "../ui/Icon";
import { sortOptions } from "../../data/courses.data";

interface Props {
  total: number;
}

const CoursesToolbar = ({ total }: Props) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full sm:max-w-md">
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
          <Icon.search className="h-4 w-4" />
        </span>
        <input
          type="text"
          placeholder="Kurs nomi yoki yo'nalish..."
          className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 transition outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div className="flex items-center gap-4">
        <span className="whitespace-nowrap text-sm text-slate-500">
          {total} ta kurs topildi
        </span>
        <div className="relative">
          <select
            defaultValue={sortOptions[0]}
            className="appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pl-4 pr-10 text-sm font-medium text-slate-700 transition outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
            <Icon.chevronDown className="h-4 w-4" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoursesToolbar;
