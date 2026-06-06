import type { ButtonHTMLAttributes, ReactNode } from "react";
import Spinner from "./Spinner";

type Variant = "primary" | "secondary" | "outline" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700",
  secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
  outline: "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
  danger: "bg-red-50 text-red-600 hover:bg-red-100",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  rightIcon,
  loading = false,
  disabled,
  className = "",
  type = "button",
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 ${
        variants[variant]
      } ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...rest}
    >
      {loading ? <Spinner /> : leftIcon}
      {children}
      {!loading && rightIcon}
    </button>
  );
};
export default Button;