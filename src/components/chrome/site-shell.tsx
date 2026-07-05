"use client";

import { useEffect, useState, type ReactNode } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/chrome/navbar";
import { Footer } from "@/components/chrome/footer";
import { CommandMenu } from "@/components/chrome/command-menu";
import { ScrollProgress } from "@/components/chrome/scroll-progress";
import { FloatingContact } from "@/components/chrome/floating-contact";

export function SiteShell({ children }: { children: ReactNode }) {
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <ThemeProvider>
      {/* LazyMotion + the m.* API loads a ~6kb animation core instead of the
          full framer-motion runtime on every page */}
      <LazyMotion features={domAnimation} strict>
        <ScrollProgress />
        <Navbar onOpenCommand={() => setCommandOpen(true)} />
        <main id="main">{children}</main>
        <Footer />
        <FloatingContact />
        <CommandMenu open={commandOpen} onClose={() => setCommandOpen(false)} />
      </LazyMotion>
    </ThemeProvider>
  );
}
