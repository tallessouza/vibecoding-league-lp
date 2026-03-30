import * as React from "react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <div className="relative flex flex-col gap-1">
        <select
          ref={ref}
          aria-invalid={error ? "true" : "false"}
          className={cn(
            "w-full appearance-none rounded-md px-3 py-2 pr-8 text-sm transition-all",
            "outline-none cursor-pointer",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            className,
          )}
          style={{
            backgroundColor: "var(--bb-surface)",
            color: "var(--bb-cream)",
            border: `1px solid ${error ? "var(--bb-error)" : "var(--bb-border-input)"}`,
          }}
          onFocus={(e) => {
            e.currentTarget.style.boxShadow = "var(--focus-brand)";
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            e.currentTarget.style.boxShadow = "none";
            props.onBlur?.(e);
          }}
          {...props}
        >
          {children}
        </select>
        {/* Chevron icon */}
        <svg
          className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4"
          style={{ color: "var(--bb-dim)" }}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        {error && (
          <p role="alert" className="text-xs" style={{ color: "var(--bb-error)" }}>
            {error}
          </p>
        )}
      </div>
    );
  },
);
Select.displayName = "Select";

export { Select };
