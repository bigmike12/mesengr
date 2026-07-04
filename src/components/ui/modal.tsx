"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, type ReactNode } from "react";

export function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative z-10 max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-border bg-card p-8 shadow-lift"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 rounded-full border border-border p-2 text-muted transition-colors hover:text-foreground"
            >
              <X className="size-4" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
