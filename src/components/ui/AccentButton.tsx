import * as React from "react";

interface AccentButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "lime" | "ghost";
  href?: string;
  children: React.ReactNode;
}

export function AccentButton({
  variant = "lime",
  href,
  children,
  className = "",
  ...props
}: AccentButtonProps) {
  const base =
    "inline-flex items-center justify-center uppercase text-[11px] font-bold tracking-wider px-5 py-3.5 min-w-[200px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bb-lime/60 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    lime: "bg-bb-lime text-bb-dark hover:bg-[#b8e600] active:scale-[0.98]",
    ghost:
      "border border-bb-border text-bb-cream hover:border-bb-border-hover hover:text-bb-cream/90 bg-transparent active:scale-[0.98]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
