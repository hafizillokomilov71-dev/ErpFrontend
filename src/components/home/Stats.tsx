import { stats } from "../../data/home.data";

const Stats = () => {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-16">
      <div className="grid grid-cols-2 gap-6 rounded-2xl border border-slate-100 bg-white px-8 py-8 shadow-xl shadow-slate-200/60 md:grid-cols-4">
        {stats.map((s) => {
          const StatIcon = s.icon;
          return (
            <div key={s.label} className="flex items-center gap-4">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${s.color}`}
              >
                <StatIcon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-2xl font-extrabold text-slate-900">
                  {s.value}
                </p>
                <p className="text-sm text-slate-500">{s.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
