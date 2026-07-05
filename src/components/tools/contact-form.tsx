"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FieldError, Input, Label, Select, Textarea } from "@/components/ui/field";

const schema = z.object({
  name: z.string().min(2, "Please tell us your name."),
  email: z.email("That email doesn't look right."),
  company: z.string().optional(),
  interest: z.string().min(1, "Pick the closest match."),
  budget: z.string().min(1, "A rough range helps us scope honestly."),
  message: z.string().min(10, "A sentence or two helps us prepare."),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSendError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error);
    } catch {
      setSendError(
        "Something went wrong sending your message. Please try again, or reach us on WhatsApp — it goes to the same people.",
      );
      return;
    }
    setSent(true);
  };

  if (sent) {
    return (
      <div
        className="anim-fade-up flex flex-col items-center gap-4 rounded-3xl border border-gold/40 bg-gold-soft p-12 text-center"
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-gold text-ink">
          <Check className="size-6" aria-hidden />
        </span>
        <h3 className="font-display text-2xl font-semibold">Message received.</h3>
        <p className="max-w-sm text-muted">
          A real person will reply within one business day — usually much
          faster.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="cf-name">Name</Label>
          <Input id="cf-name" placeholder="Jane Smith" {...register("name")} />
          <FieldError message={errors.name?.message} />
        </div>
        <div>
          <Label htmlFor="cf-email">Email</Label>
          <Input
            id="cf-email"
            type="email"
            placeholder="jane@company.com"
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="cf-company">Company (optional)</Label>
          <Input id="cf-company" placeholder="Acme Inc." {...register("company")} />
        </div>
        <div>
          <Label htmlFor="cf-interest">What do you need?</Label>
          <Select id="cf-interest" defaultValue="" {...register("interest")}>
            <option value="" disabled>
              Choose the closest match…
            </option>
            <option>New website</option>
            <option>Redesign / rebuild</option>
            <option>Ecommerce or bookings</option>
            <option>AI chatbot / automation</option>
            <option>SEO & growth</option>
            <option>Maintenance & care</option>
            <option>Not sure yet</option>
          </Select>
          <FieldError message={errors.interest?.message} />
        </div>
      </div>

      <div>
        <Label htmlFor="cf-budget">Budget range</Label>
        <Select id="cf-budget" defaultValue="" {...register("budget")}>
          <option value="" disabled>
            Select a range…
          </option>
          <option>Under ₦500,000</option>
          <option>₦500,000 – ₦1.5m</option>
          <option>₦1.5m – ₦5m</option>
          <option>₦5m+</option>
          <option>Monthly retainer</option>
        </Select>
        <FieldError message={errors.budget?.message} />
      </div>

      <div>
        <Label htmlFor="cf-message">Tell us about your business</Label>
        <Textarea
          id="cf-message"
          placeholder="What do you do, and what would you like your digital presence to achieve?"
          {...register("message")}
        />
        <FieldError message={errors.message?.message} />
      </div>

      {sendError && (
        <p className="rounded-2xl border border-red-300/40 bg-red-500/10 px-5 py-3 text-sm text-red-500">
          {sendError}
        </p>
      )}

      <Button type="submit" variant="gold" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <Loader2 className="size-4 animate-spin" aria-hidden />
        ) : (
          <Send className="size-4" aria-hidden />
        )}
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>
      <p className="text-center text-xs text-muted">
        We reply within one business day. Your details stay private — see our
        privacy policy.
      </p>
    </form>
  );
}
