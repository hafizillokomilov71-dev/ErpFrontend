import Icon from "../ui/Icon";
import { footerColumns } from "../../data/home.data";

const socialIcons = [Icon.chat, Icon.send, Icon.users, Icon.book];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Icon.logo className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold text-white">O'quv Markaz</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Toshkent shahridagi yetakchi IT va dizayn ta'lim markazi.
              2015-yildan beri faoliyat yuritamiz va 5000+ talabani bilim bilan
              ta'minladik.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-slate-400 transition hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Aloqa
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Icon.location className="mt-0.5 h-4 w-4 shrink-0" />
                Amir Temur ko'chasi 108, Toshkent
              </li>
              <li className="flex items-center gap-3">
                <Icon.phone className="h-4 w-4 shrink-0" />
                +998 71 123 45 67
              </li>
              <li className="flex items-center gap-3">
                <Icon.mail className="h-4 w-4 shrink-0" />
                info@oquv.uz
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 O'quv Markaz. Barcha huquqlar himoyalangan.</p>
          <div className="flex gap-3">
            {socialIcons.map((SocialIcon, i) => (
              <span
                key={i}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition hover:bg-slate-700 hover:text-white"
              >
                <SocialIcon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
