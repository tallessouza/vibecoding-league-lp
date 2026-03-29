import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-semibold transition-all focus-visible:outline-none focus-visible:[box-shadow:var(--focus-brand)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-bb-lime text-bb-dark hover:bg-[#b8e600] shadow-[var(--neon-glow)] hover:shadow-[var(--lime-glow)]",
        secondary:
          "border border-border bg-bb-surface text-bb-cream hover:bg-bb-surface-alt hover:border-bb-lime",
        ghost:
          "text-bb-cream hover:bg-bb-surface hover:text-bb-lime",
      },
      size: {
        sm: "h-8 rounded-md px-3 text-sm gap-1.5",
        md: "h-10 rounded-md px-4 text-sm gap-2",
        lg: "h-12 rounded-lg px-6 text-base gap-2.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href, children, ...props }, ref) => {
    if (href) {
      return (
        <a
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </a>
      );
    }

    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
