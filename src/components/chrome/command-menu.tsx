"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, m } from "framer-motion";
import { ArrowRight, FileText, Search, Sparkles, Wrench } from "lucide-react";
import { allPages, services, blogPosts } from "@/lib/site";

type Item = {
  label: string;
  href: string;
  group: string;
};

export function CommandMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const items: Item[] = useMemo(
    () => [
      ...allPages.map((p) => ({ label: p.label, href: p.href, group: "Pages" })),
      ...services.map((s) => ({
        label: s.title,
        href: `/services#${s.slug}`,
        group: "Services",
      })),
      ...blogPosts.map((b) => ({
        label: b.title,
        href: `/blog/${b.slug}`,
        group: "Insights",
      })),
    ],
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items.slice(0, 12);
    return items
      .filter((i) => i.label.toLowerCase().includes(q))
      .slice(0, 12);
  }, [items, query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 60);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  const go = (href: string) => {
    onClose();
    router.push(href);
  };

  const groupIcon = (group: string) =>
    group === "Services" ? (
      <Wrench className="size-3.5" aria-hidden />
    ) : group === "Insights" ? (
      <FileText className="size-3.5" aria-hidden />
    ) : (
      <Sparkles className="size-3.5" aria-hidden />
    );

  return (
    <AnimatePresence>
      {open && (
        <m.div
          className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[14vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Command menu"
        >
          <div
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <m.div
            initial={{ opacity: 0, scale: 0.97, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -10 }}
            transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative z-10 w-full max-w-xl overflow-hidden rounded-3xl border border-border bg-card shadow-lift"
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((a) => Math.min(a + 1, filtered.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((a) => Math.max(a - 1, 0));
              } else if (e.key === "Enter" && filtered[active]) {
                go(filtered[active].href);
              } else if (e.key === "Escape") {
                onClose();
              }
            }}
          >
            <div className="flex items-center gap-3 border-b border-border px-5 py-4">
              <Search className="size-4 text-muted" aria-hidden />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, services, insights…"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted/70"
                aria-label="Search"
              />
              <kbd className="rounded-md border border-border px-1.5 py-0.5 text-[10px] text-muted">
                ESC
              </kbd>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-4 py-8 text-center text-sm text-muted">
                  Nothing found. Try “audit”, “AI”, or “pricing”.
                </p>
              )}
              {filtered.map((item, i) => (
                <button
                  key={item.group + item.href + item.label}
                  onClick={() => go(item.href)}
                  onMouseEnter={() => setActive(i)}
                  className={`flex w-full items-center justify-between gap-4 rounded-xl px-4 py-3 text-left text-sm transition-colors ${
                    i === active ? "bg-surface" : ""
                  }`}
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="shrink-0 text-muted">{groupIcon(item.group)}</span>
                    <span className="truncate">{item.label}</span>
                  </span>
                  <span className="flex shrink-0 items-center gap-2 text-[11px] uppercase tracking-wider text-muted">
                    {item.group}
                    {i === active && <ArrowRight className="size-3.5" aria-hidden />}
                  </span>
                </button>
              ))}
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
