import * as React from "react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const MAX_LEVELS = 5;

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  const truncated = items.length > MAX_LEVELS;
  const visible = truncated
    ? [items[0], { label: "…" }, ...items.slice(-(MAX_LEVELS - 2))]
    : items;

  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center", className)}>
      <ol className="flex items-center gap-1 text-sm" role="list">
        {visible.map((item, index) => {
          const isLast = index === visible.length - 1;
          const isCurrent = isLast && item.label !== "…";

          return (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && (
                <span
                  className="select-none font-mono text-xs"
                  style={{ color: "var(--bb-dim)" }}
                  aria-hidden="true"
                >
                  /
                </span>
              )}

              {isCurrent || item.label === "…" || !item.href ? (
                <span
                  aria-current={isCurrent ? "page" : undefined}
                  className={cn(
                    "font-medium",
                    isCurrent
                      ? "cursor-default"
                      : "select-none",
                  )}
                  style={{
                    color: isCurrent ? "var(--bb-cream)" : "var(--bb-dim)",
                  }}
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="transition-colors rounded focus-visible:[box-shadow:var(--focus-brand)]"
                  style={{ color: "var(--bb-dim)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--bb-cream)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--bb-dim)";
                  }}
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
