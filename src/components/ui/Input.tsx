import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, disabled, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <input
          ref={ref}
          disabled={disabled}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${props.id}-error` : undefined}
          className={cn(
            "w-full rounded-md px-3 py-2 text-sm transition-all",
            "outline-none",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            className,
          )}
          style={{
            backgroundColor: "var(--bb-surface)",
            color: "var(--bb-cream)",
            border: `1px solid ${error ? "var(--bb-error)" : "var(--bb-border-input)"}`,
          }}
          onFocus={(e) => {
            e.currentTarget.style.boxShadow = error
              ? `0 0 0 2px var(--bb-error)`
              : "var(--focus-brand)";
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            e.currentTarget.style.boxShadow = "none";
            props.onBlur?.(e);
          }}
          {...props}
        />
        {error && (
          <p
            id={`${props.id}-error`}
            role="alert"
            className="text-xs"
            style={{ color: "var(--bb-error)" }}
          >
            {error}
          </p>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
