import { cn } from "@/lib/utils";
import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

const fieldBase =
  "w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/70 transition-colors focus:border-gold focus:outline-none";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldBase, className)} {...props} />;
}

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(fieldBase, "min-h-32 resize-y", className)} {...props} />;
}

export function Select({
  className,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cn(fieldBase, "appearance-none", className)} {...props} />;
}

export function Label({
  className,
  htmlFor,
  children,
}: {
  className?: string;
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("mb-2 block text-sm font-medium text-foreground", className)}
    >
      {children}
    </label>
  );
}

export function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs text-red-500">{message}</p>;
}
