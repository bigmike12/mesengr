"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/field";

const slots = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

function nextBusinessDays(count: number) {
  const days: Date[] = [];
  const d = new Date();
  while (days.length < count) {
    d.setDate(d.getDate() + 1);
    const day = d.getDay();
    if (day !== 0 && day !== 6) days.push(new Date(d));
  }
  return days;
}

export function Booking() {
  const days = useMemo(() => nextBusinessDays(10), []);
  const [offset, setOffset] = useState(0);
  const [dayIdx, setDayIdx] = useState<number | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [bookError, setBookError] = useState<string | null>(null);

  const visible = days.slice(offset, offset + 5);

  const confirm = async () => {
    if (dayIdx === null || !slot || !name.trim() || !email.trim()) return;
    setSubmitting(true);
    setBookError(null);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          date: days[dayIdx].toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          }),
          time: slot,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error);
      setConfirmed(true);
    } catch {
      setBookError(
        "Couldn't confirm the booking just now. Please try again, or message us on WhatsApp and we'll lock the slot in manually.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (confirmed && dayIdx !== null && slot) {
    const day = days[dayIdx];
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 rounded-3xl border border-gold/40 bg-gold-soft p-12 text-center"
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-gold text-ink">
          <Check className="size-6" aria-hidden />
        </span>
        <h3 className="font-display text-2xl font-semibold">You&apos;re booked.</h3>
        <p className="max-w-md text-muted">
          {day.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}{" "}
          at {slot} — a calendar invite and video link are on their way to{" "}
          <span className="font-medium text-foreground">{email}</span>.
        </p>
        <p className="flex items-center gap-2 text-sm text-muted">
          <Video className="size-4 text-gold" aria-hidden />
          30 minutes · Google Meet · genuinely free
        </p>
      </motion.div>
    );
  }

  return (
    <div className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10">
      {/* Step 1: day */}
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-semibold">1 · Pick a day</p>
        <div className="flex gap-1">
          <button
            onClick={() => setOffset((o) => Math.max(0, o - 5))}
            disabled={offset === 0}
            aria-label="Earlier days"
            className="rounded-full border border-border p-2 text-muted transition-colors hover:text-foreground disabled:opacity-40"
          >
            <ChevronLeft className="size-4" aria-hidden />
          </button>
          <button
            onClick={() => setOffset((o) => Math.min(5, o + 5))}
            disabled={offset >= 5}
            aria-label="Later days"
            className="rounded-full border border-border p-2 text-muted transition-colors hover:text-foreground disabled:opacity-40"
          >
            <ChevronRight className="size-4" aria-hidden />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {visible.map((day, i) => {
          const realIdx = offset + i;
          const selected = dayIdx === realIdx;
          return (
            <button
              key={day.toISOString()}
              onClick={() => setDayIdx(realIdx)}
              className={`rounded-2xl border p-3 text-center transition-all ${
                selected
                  ? "border-gold bg-gold-soft"
                  : "border-border hover:border-border-strong"
              }`}
            >
              <span className="block text-[11px] uppercase text-muted">
                {day.toLocaleDateString("en-US", { weekday: "short" })}
              </span>
              <span className={`block font-display text-lg font-semibold ${selected ? "text-gold" : ""}`}>
                {day.getDate()}
              </span>
              <span className="block text-[11px] text-muted">
                {day.toLocaleDateString("en-US", { month: "short" })}
              </span>
            </button>
          );
        })}
      </div>

      {/* Step 2: time */}
      <motion.div
        animate={{ opacity: dayIdx !== null ? 1 : 0.35 }}
        className="mt-8"
      >
        <p className="mb-3 text-sm font-semibold">2 · Pick a time</p>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
          {slots.map((s) => (
            <button
              key={s}
              disabled={dayIdx === null}
              onClick={() => setSlot(s)}
              className={`rounded-2xl border py-2.5 text-sm transition-all disabled:cursor-not-allowed ${
                slot === s
                  ? "border-gold bg-gold-soft font-semibold text-gold"
                  : "border-border hover:border-border-strong"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Step 3: details */}
      <motion.form
        animate={{ opacity: slot !== null ? 1 : 0.35 }}
        className="mt-8"
        onSubmit={(e) => {
          e.preventDefault();
          confirm();
        }}
      >
        <p className="mb-3 text-sm font-semibold">3 · Your details</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="bk-name">Name</Label>
            <Input
              id="bk-name"
              required
              disabled={slot === null}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Smith"
            />
          </div>
          <div>
            <Label htmlFor="bk-email">Email</Label>
            <Input
              id="bk-email"
              type="email"
              required
              disabled={slot === null}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@company.com"
            />
          </div>
        </div>
        {bookError && (
          <p className="mt-4 rounded-2xl border border-red-300/40 bg-red-500/10 px-5 py-3 text-sm text-red-500">
            {bookError}
          </p>
        )}
        <Button
          type="submit"
          variant="gold"
          size="lg"
          className="mt-6 w-full"
          disabled={slot === null || submitting}
        >
          {submitting ? "Confirming…" : "Confirm free strategy call"}
        </Button>
        <p className="mt-3 text-center text-xs text-muted">
          30 minutes · video call · no obligation, no pressure
        </p>
      </motion.form>
    </div>
  );
}
