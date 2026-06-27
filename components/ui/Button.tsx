import { ReactNode } from "react";

interface ButtonProps {
  variant: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

const variantStyles: Record<ButtonProps["variant"], string> = {
  primary: "bg-teal text-white hover:opacity-90",
  secondary: "bg-navy text-white hover:opacity-90",
  outline: "border-2 border-teal text-teal hover:bg-teal hover:text-white",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-3.5 text-base",
};

export function Button({
  variant,
  size = "md",
  href,
  children,
  className = "",
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-xl font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal";

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
