"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarPlus, Mail, MessageCircle, Phone, X } from "lucide-react";
import { site } from "@/lib/site";

const actions = [
  { label: "Book a call", href: "/book", icon: CalendarPlus, external: false },
  { label: "WhatsApp", href: site.whatsapp, icon: Phone, external: true },
  { label: "Email us", href: `mailto:${site.email}`, icon: Mail, external: true },
];

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[85] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open &&
          actions.map((action, i) => (
            <motion.div
              key={action.label}
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { delay: (actions.length - 1 - i) * 0.05 },
              }}
              exit={{ opacity: 0, y: 12, scale: 0.9, transition: { delay: i * 0.03 } }}
            >
              {action.external ? (
                <a
                  href={action.href}
                  target={action.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="glass flex items-center gap-2.5 rounded-full border border-border px-4 py-2.5 text-sm shadow-soft transition-colors hover:border-gold"
                >
                  <action.icon className="size-4 text-gold" aria-hidden />
                  {action.label}
                </a>
              ) : (
                <Link
                  href={action.href}
                  onClick={() => setOpen(false)}
                  className="glass flex items-center gap-2.5 rounded-full border border-border px-4 py-2.5 text-sm shadow-soft transition-colors hover:border-gold"
                >
                  <action.icon className="size-4 text-gold" aria-hidden />
                  {action.label}
                </Link>
              )}
            </motion.div>
          ))}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        aria-expanded={open}
        className="relative flex size-14 items-center justify-center rounded-full bg-ink text-white shadow-lift dark:bg-white dark:text-ink"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-gold/30 [animation-duration:3s]" aria-hidden />
        {open ? (
          <X className="size-5" aria-hidden />
        ) : (
          <MessageCircle className="size-5" aria-hidden />
        )}
      </motion.button>
    </div>
  );
}
