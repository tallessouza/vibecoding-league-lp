import * as React from "react";
import { cn } from "@/lib/utils";

export type AlertVariant = "info" | "success" | "warning" | "error";

const VARIANT_STYLES: Record<AlertVariant, { border: string; bg: string; icon: string; iconColor: string }> = {
  info: {
    border: "var(--bb-blue)",
    bg: "rgba(0, 153, 255, 0.08)",
    icon: "ℹ",
    iconColor: "var(--bb-blue)",
  },
  success: {
    border: "var(--bb-lime)",
    bg: "rgba(209, 255, 0, 0.06)",
    icon: "✓",
    iconColor: "var(--bb-lime)",
  },
  warning: {
    border: "var(--warning-border)",
    bg: "var(--warning-bg)",
    icon: "⚠",
    iconColor: "var(--bb-flare)",
  },
  error: {
    border: "var(--bb-error)",
    bg: "rgba(239, 68, 68, 0.08)",
    icon: "✕",
    iconColor: "var(--bb-error)",
  },
};

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: React.ReactNode;
  className?: string;
  onDismiss?: () => void;
}

export function Alert({
  variant = "info",
  title,
  children,
  className,
  onDismiss,
}: AlertProps) {
  const styles = VARIANT_STYLES[variant];

  return (
    <div
      role="alert"
      className={cn("flex gap-3 rounded-md p-4 text-sm", className)}
      style={{
        backgroundColor: styles.bg,
        border: `1px solid ${styles.border}`,
      }}
    >
      <span
        className="flex-shrink-0 font-bold text-base leading-none mt-0.5"
        style={{ color: styles.iconColor }}
        aria-hidden="true"
      >
        {styles.icon}
      </span>
      <div className="flex-1">
        {title && (
          <p className="font-semibold mb-0.5" style={{ color: "var(--bb-cream)" }}>
            {title}
          </p>
        )}
        <p style={{ color: "var(--color-text-secondary)" }}>{children}</p>
      </div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="flex-shrink-0 rounded focus-visible:[box-shadow:var(--focus-brand)]"
          aria-label="Fechar alerta"
          style={{ color: "var(--bb-dim)" }}
        >
          ✕
        </button>
      )}
    </div>
  );
}
