interface Props {
  label: string;
  title: string;
  subtitle: string;
}

const SectionHeading = ({ label, title, subtitle }: Props) => {
  return (
    <div className="text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold text-slate-900">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-slate-500">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;
