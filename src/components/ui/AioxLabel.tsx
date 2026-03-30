import * as React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export function Label({ className, children, required, ...props }: LabelProps) {
  return (
    <label
      className={cn("block text-sm font-medium mb-1", className)}
      style={{ color: "var(--bb-cream)" }}
      {...props}
    >
      {children}
      {required && (
        <span className="ml-1" style={{ color: "var(--bb-lime)" }} aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
}
