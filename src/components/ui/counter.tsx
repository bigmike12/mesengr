"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.6,
  className,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration,
      ease: [0.21, 0.47, 0.32, 0.98],
      onUpdate: (v) => {
        node.textContent = `${prefix}${v.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, prefix, suffix, decimals, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
