import Icon from "../ui/Icon";
import Stats from "./Stats";

const Hero = () => {
  return (
    <section className="bg-linear-to-b from-blue-50/70 via-indigo-50/40 to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Yangi guruhlar — 1-iyundan
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Kelajak kasbingizni
            <br />
            <span className="text-blue-600">bugun boshlang.</span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500">
            Toshkentdagi yetakchi IT va dizayn ta'lim markazi. Tajribali
            o'qituvchilar, zamonaviy dasturlar va kafolatlangan natija. 5000+
            talabamiz IT sohada ishlamoqda.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/register"
              className="rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700"
            >
              Ro'yxatdan o'tish
            </a>
            <a
              href="/courses"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Kurslarni ko'rish
              <Icon.arrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-500">
            {["Sertifikat", "Ish ta'minoti", "Bo'lib to'lash"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Icon.check
                  className="h-4 w-4 text-green-500"
                  strokeWidth={3}
                />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src="https://picsum.photos/seed/heroteam/720/520"
            alt="O'quv jarayoni"
            className="aspect-7/5 w-full rounded-2xl object-cover shadow-2xl shadow-slate-300/50"
          />
        </div>
      </div>

      <Stats />
    </section>
  );
};

export default Hero;
