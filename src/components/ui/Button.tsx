import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aiox-primary focus-visible:ring-offset-2 focus-visible:ring-offset-aiox-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-aiox-primary text-aiox-primary-foreground hover:bg-aiox-primary-hover shadow-aiox-glow hover:shadow-aiox-glow",
        secondary:
          "border border-aiox-border bg-aiox-surface text-aiox-foreground hover:bg-aiox-surface-elevated hover:border-aiox-primary",
        ghost:
          "text-aiox-foreground hover:bg-aiox-surface hover:text-aiox-primary",
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
