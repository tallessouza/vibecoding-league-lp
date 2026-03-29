"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  variant?: "default" | "smooth";
  className?: string;
}

export function Tabs({ tabs, defaultTab, variant = "default", className }: TabsProps) {
  const [active, setActive] = React.useState(defaultTab ?? tabs[0]?.id ?? "");

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight") {
      const next = (index + 1) % tabs.length;
      setActive(tabs[next].id);
    } else if (e.key === "ArrowLeft") {
      const prev = (index - 1 + tabs.length) % tabs.length;
      setActive(tabs[prev].id);
    }
  };

  const activeContent = tabs.find((t) => t.id === active)?.content;

  return (
    <div className={cn("flex flex-col", className)}>
      {/* Tab list */}
      <div
        role="tablist"
        aria-label="Tabs"
        className={cn(
          "flex relative",
          variant === "default"
            ? "border-b"
            : "rounded-lg p-1 gap-1",
        )}
        style={{
          borderColor: variant === "default" ? "var(--bb-border)" : undefined,
          backgroundColor: variant === "smooth" ? "var(--bb-surface)" : undefined,
        }}
      >
        {tabs.map((tab, index) => {
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-all focus-visible:[box-shadow:var(--focus-brand)] rounded-sm",
                variant === "smooth" && isActive && "rounded-md",
              )}
              style={{
                color: isActive ? "var(--bb-lime)" : "var(--bb-dim)",
                ...(variant === "default"
                  ? {
                      borderBottom: isActive ? "2px solid var(--bb-lime)" : "2px solid transparent",
                      marginBottom: "-1px",
                    }
                  : {
                      backgroundColor: isActive ? "var(--bb-surface-alt)" : "transparent",
                    }),
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab panels */}
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={tab.id !== active}
          className="pt-4"
        >
          {tab.id === active && activeContent}
        </div>
      ))}
    </div>
  );
}
