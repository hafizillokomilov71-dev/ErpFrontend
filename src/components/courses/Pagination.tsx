import { useState } from "react";
import Icon from "../ui/Icon";

interface Props {
  totalPages?: number;
}

const Pagination = ({ totalPages = 8 }: Props) => {
  const [page, setPage] = useState(1);

  const pages: (number | "...")[] = [1, 2, 3, "...", totalPages];

  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={page === 1}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Icon.chevronLeft className="h-4 w-4" />
      </button>

      {pages.map((p, i) =>
        p === "..." ? (
          <span
            key={`dots-${i}`}
            className="flex h-9 w-9 items-center justify-center text-sm text-slate-400"
          >
            ...
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => setPage(p)}
            className={`flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-medium transition ${
              page === p
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            {p}
          </button>
        ),
      )}

      <button
        type="button"
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        disabled={page === totalPages}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Icon.chevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Pagination;
