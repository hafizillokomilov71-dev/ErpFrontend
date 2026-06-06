import SectionHeading from "./SectionHeading";
import { teachers } from "../../data/home.data";

const Teachers = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        label="Jamoamiz"
        title="Bizning o'qituvchilar"
        subtitle="Soha mutaxassislari sizga bilim va tajriba ulashishga tayyor."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teachers.map((t) => (
          <div
            key={t.name}
            className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
          >
            <img
              src={t.img}
              alt={t.name}
              className="mx-auto h-20 w-20 rounded-full object-cover"
            />
            <h3 className="mt-4 font-bold text-slate-900">{t.name}</h3>
            <p className="text-sm font-medium text-blue-600">{t.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              {t.bio}
            </p>

            <div className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
              {t.stats.map(([value, label]) => (
                <div key={label}>
                  <p className="font-bold text-slate-900">{value}</p>
                  <p className="text-xs text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teachers;
