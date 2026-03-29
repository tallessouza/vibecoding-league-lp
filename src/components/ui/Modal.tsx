"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

export function Modal({ open, onClose, title, children, actions, className }: ModalProps) {
  const titleId = React.useId();

  // Close on Escape key
  React.useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Prevent body scroll when open
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ zIndex: "var(--layer-modal)" }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={cn(
          "relative w-full max-w-lg rounded-lg shadow-lg",
          "flex flex-col max-h-[90vh]",
          className,
        )}
        style={{
          backgroundColor: "var(--bb-surface-panel)",
          border: "1px solid var(--bb-border)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: "1px solid var(--bb-border)" }}
        >
          <h2
            id={titleId}
            className="font-bold text-lg"
            style={{ color: "var(--bb-cream)" }}
          >
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 transition-colors focus-visible:[box-shadow:var(--focus-brand)]"
            style={{ color: "var(--bb-dim)" }}
            aria-label="Fechar modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div
          className="flex-1 overflow-y-auto px-6 py-4 text-sm"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {children}
        </div>

        {/* Actions */}
        {actions && (
          <div
            className="flex items-center justify-end gap-3 px-6 py-4"
            style={{ borderTop: "1px solid var(--bb-border)" }}
          >
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}
