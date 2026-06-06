import SectionHeading from "./SectionHeading";
import { features } from "../../data/home.data";

const Features = () => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Nima uchun biz?"
          title="O'quv markazimizning afzalliklari"
          subtitle="Eng yaxshi natijaga erishish uchun barcha imkoniyatlarni sizga taqdim etamiz."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const FeatureIcon = f.icon;
            return (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl text-white ${f.color}`}
                >
                  <FeatureIcon className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <h3 className="mt-4 font-bold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
