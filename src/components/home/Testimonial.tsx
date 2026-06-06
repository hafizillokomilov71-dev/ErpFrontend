import Icon from "../ui/Icon";
import SectionHeading from "./SectionHeading";
import { testimonials } from "../../data/home.data";

const Testimonials = () => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Sharhlar"
          title="Talabalarimiz fikri"
          subtitle="5000+ bitiruvchi o'z fikrini bildirdi. Mana, ulardan ba'zilari."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon.star key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                "{t.text}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-6 rounded-full bg-blue-600" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
