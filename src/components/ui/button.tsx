import { clsx } from "clsx";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "gold" | "green" | "forest" | "ghost";
type ButtonSize = "sm" | "lg" | "xl";

const variantClasses: Record<ButtonVariant, string> = {
  gold: "bg-gold-grad text-forest-900 shadow-gold hover:shadow-lg",
  green: "bg-wa-green text-white hover:bg-wa-green-d",
  forest: "bg-green-grad text-cream-50 shadow-soft hover:brightness-110",
  ghost: "border border-forest-700/25 bg-transparent text-forest-700 hover:bg-forest-700/5",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
  xl: "px-9 py-4 text-lg",
};

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  external?: boolean;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

/** Pill button reutilizável (ver seção 4 do design system). */
export function Button({
  variant = "forest",
  size = "lg",
  icon,
  external,
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const isExternal = external ?? (typeof href === "string" && href.startsWith("http"));

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={clsx(
        "font-body inline-flex items-center justify-center gap-2 rounded-full font-semibold",
        "ease-brand transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97]",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {icon}
      {children}
    </a>
  );
}
