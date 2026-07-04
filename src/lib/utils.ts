import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ₦12,500 below a million, ₦2.4m / ₦1.2b above — keeps big figures readable
export function formatNaira(value: number): string {
  if (value >= 1_000_000_000) {
    return `₦${(value / 1_000_000_000).toFixed(value % 1_000_000_000 === 0 ? 0 : 1)}b`;
  }
  if (value >= 1_000_000) {
    return `₦${(value / 1_000_000).toFixed(value % 1_000_000 === 0 ? 0 : 1)}m`;
  }
  return `₦${value.toLocaleString()}`;
}
