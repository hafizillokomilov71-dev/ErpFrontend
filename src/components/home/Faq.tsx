import { useState } from "react";
import Icon from "../ui/Icon";
import SectionHeading from "./SectionHeading";
import { faqs } from "../../data/home.data";

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <SectionHeading
        label="Tez-tez beriladigan savollar"
        title="Sizni qiziqtirgan savollar"
        subtitle="Topa olmagan savolingiz bo'lsa, biz bilan bog'laning."
      />

      <div className="mt-10 space-y-3">
        {faqs.map((faq, i) => {
          const open = openFaq === i;
          return (
            <div
              key={faq.q}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white"
            >
              <button
                onClick={() => setOpenFaq(open ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold text-slate-900">
                  {faq.q}
                </span>
                <Icon.chevronDown
                  className={`h-5 w-5 shrink-0 text-slate-400 transition ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open && (
                <p className="px-5 pb-5 text-sm leading-relaxed text-slate-500">
                  {faq.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;