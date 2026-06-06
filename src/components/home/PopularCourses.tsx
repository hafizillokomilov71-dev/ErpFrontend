import Icon from "../ui/Icon";
import SectionHeading from "./SectionHeading";
import { courses } from "../../data/home.data";

const PopularCourses = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        label="Mashhur kurslar"
        title="Eng yaxshi ko'riladigan kurslarimiz"
        subtitle="Mehnat bozorida eng talab qilinadigan zamonaviy yo'nalishlar bo'yicha amaliy ta'lim."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((c) => (
          <article
            key={c.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-lg"
          >
            <div className="relative overflow-hidden">
              <img
                src={c.img}
                alt={c.title}
                className="aspect-5/3 w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <span
                className={`absolute left-3 top-3 rounded-md px-2.5 py-1 text-xs font-semibold ${c.tagColor}`}
              >
                {c.tag}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-slate-900">{c.title}</h3>
                <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-slate-700">
                  <Icon.star className="h-4 w-4 text-amber-400" />
                  {c.rating}
                  <span className="font-normal text-slate-400">
                    ({c.reviews})
                  </span>
                </span>
              </div>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                {c.desc}
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                <span className="h-6 w-6 rounded-full bg-slate-100" />
                O'qituvchi: {c.teacher}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="font-bold text-slate-900">{c.price}</span>
                <a
                  href="/courses"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
                >
                  Batafsil
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="/courses"
          className="rounded-xl border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Barcha kurslarni ko'rish
        </a>
      </div>
    </section>
  );
};

export default PopularCourses;
