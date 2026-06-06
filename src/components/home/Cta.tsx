const Cta = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 via-indigo-600 to-purple-600 px-8 py-12 lg:px-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="text-white">
            <h2 className="text-3xl font-extrabold leading-tight">
              Hoziroq o'z kelajagingizni boshlang
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
              Ro'yxatdan o'ting va tegin birinchi darsga taklif olib,
              o'qituvchilarimiz va kursimiz dasturi bilan tanishing.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/register"
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-lg transition hover:bg-blue-50"
              >
                Bepul ro'yxatdan o'tish
              </a>
              <a
                href="/contact"
                className="rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Konsultatsiya olish
              </a>
            </div>
          </div>
          <img
            src="https://picsum.photos/seed/ctastudents/620/380"
            alt="Talabalar"
            className="hidden aspect-8/5 w-full rounded-2xl object-cover shadow-2xl lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Cta;
