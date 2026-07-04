"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Command, Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { useTheme } from "@/components/theme-provider";
import { ButtonLink } from "@/components/ui/button";
import { Wordmark } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

export function Navbar({ onOpenCommand }: { onOpenCommand: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[80] transition-all duration-500",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-500 lg:px-6",
            scrolled
              ? "glass border-border shadow-soft"
              : "border-transparent bg-transparent",
          )}
          aria-label="Main"
        >
          <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
            <Wordmark />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors",
                  pathname === link.href
                    ? "text-foreground"
                    : "text-muted hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCommand}
              className="hidden items-center gap-2 rounded-full border border-border px-3 py-2 text-xs text-muted transition-colors hover:border-border-strong hover:text-foreground md:flex"
              aria-label="Open command menu"
            >
              <Command className="size-3.5" aria-hidden />
              <kbd className="font-sans">⌘K</kbd>
            </button>
            <button
              onClick={toggle}
              className="rounded-full border border-border p-2.5 text-muted transition-colors hover:border-border-strong hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="size-4" aria-hidden />
              ) : (
                <Moon className="size-4" aria-hidden />
              )}
            </button>
            <div className="hidden md:block">
              <ButtonLink href="/book" variant="gold" size="sm">
                Book a Call
              </ButtonLink>
            </div>
            <button
              className="rounded-full border border-border p-2.5 lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="size-4" aria-hidden />
              ) : (
                <Menu className="size-4" aria-hidden />
              )}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="glass mt-2 overflow-hidden rounded-2xl border border-border p-3 shadow-lift lg:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-xl px-4 py-3 text-sm text-foreground transition-colors hover:bg-surface"
                >
                  {link.label}
                </Link>
              ))}
              <div className="p-2">
                <ButtonLink href="/book" variant="gold" size="sm" className="w-full">
                  Book Free Strategy Call
                </ButtonLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
