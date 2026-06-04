import { useForm } from "react-hook-form";
import Icon from "../components/ui/Icon";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const Login = () => {
  const form = useForm();
  return (
    <div className="flex min-h-screen bg-white">
      <aside className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-linear-to-br from-blue-600 via-indigo-600 to-purple-600 p-12 text-white lg:flex">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20 backdrop-blur">
            <Icon.logo className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold">ZorDoc Education</span>
        </div>

        <div className="max-w-md">
          <h1 className="text-4xl font-bold leading-tight">
            Bilim — kelajakka eng yaxshi sarmoyadir.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            5000+ bitiruvchi bizning oilamiz tarkibida. Endi navbat sizniki.
            Bilim olishni davom ettiring va karyera maqsadlaringizga yeting.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "Onlayn platforma — istalgan vaqtda darslar",
              "Mentor bilan to'g'ridan-to'g'ri aloqa",
              "Davlat tomonidan tan olingan sertifikat",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                  <Icon.check className="h-3 w-3" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between text-xs text-white/70">
          <span>© 2026 O'quv Markaz</span>
          <a href="#" className="transition hover:text-white">
            Yordam kerakmi?
          </a>
        </div>
      </aside>

      <main className="flex w-full flex-col overflow-y-auto px-6 py-8 lg:w-1/2 lg:px-16">
        <div className="flex justify-end">
          <a
            href="#"
            className="flex items-center gap-1.5 text-sm text-slate-500 transition hover:text-slate-700"
          >
            <Icon.arrowLeft className="h-4 w-4" />
            Bosh sahifa
          </a>
        </div>

        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Hisobingizga kiring
          </h2>
          <p className="mt-1.5 text-sm text-slate-500">
            Ma'lumotlaringizni kiriting va o'quv jarayonini davom ettiring.
          </p>

          <form className="mt-7 space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                form={form}
                name="email"
                leftIcon={<Icon.mail />}
                id="3"
                placeholder="Aziz@gmail.com"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700">
                Parol <span className="text-red-500">*</span>
              </label>
              <Input
                type="password"
                form={form}
                name="password"
                leftIcon={<Icon.password />}
                rightIcon={<Icon.eye />}
                id="5"
                placeholder="Kamida 8 ta belgi"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              Meni eslab qol
            </label>

            <Button
              className="flex cursor-pointer w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 active:scale-[0.98]"
              rightIcon={<Icon.arrowRight className="h-4 w-4" />}
            >
              Kirish
            </Button>

            <div className="flex items-center gap-3 py-1">
              <span className="h-px flex-1 bg-slate-200" />
              <span className="text-xs font-medium text-slate-400">YOKI</span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                className={
                  "flex items-center cursor-pointer justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700! transition hover:bg-slate-50"
                }
                leftIcon={<Icon.google className="h-4 w-4" />}
              >
                Google
              </Button>
              <Button
                className={
                  "flex items-center text-white! bg-black! cursor-pointer justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold  transition hover:bg-slate-50"
                }
                leftIcon={<Icon.apple className="h-4 w-4" />}
              >
                Apple
              </Button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Hisobingiz yo'qmi?{" "}
            <a href="#" className="font-semibold text-blue-600 hover:underline">
              Ro'yxatdan o'ting
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};
export default Login;
