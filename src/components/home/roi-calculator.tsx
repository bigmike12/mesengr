"use client";

import { useMemo, useState } from "react";
import { Calculator, Clock, TrendingUp, Users } from "lucide-react";
import { Container, Eyebrow, Heading, Lead, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Label, Select } from "@/components/ui/field";
import { formatNaira } from "@/lib/utils";

const businessTypes = [
  { label: "Service business (clinic, salon, firm…)", uplift: 0.35, hours: 10 },
  { label: "Restaurant / hospitality", uplift: 0.45, hours: 8 },
  { label: "Retail / ecommerce", uplift: 0.4, hours: 12 },
  { label: "B2B / logistics", uplift: 0.3, hours: 14 },
  { label: "Other", uplift: 0.3, hours: 8 },
];

const goals = [
  { label: "Get more leads & enquiries", factor: 1.1 },
  { label: "Sell online / take bookings", factor: 1.25 },
  { label: "Automate admin work", factor: 1.0 },
  { label: "All of the above", factor: 1.35 },
];

function SliderRow({
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <Label className="mb-0">{label}</Label>
        <span className="rounded-full bg-gold-soft px-3 py-1 font-display text-sm font-semibold text-gold">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full outline-none [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(212,175,55,0.5)]"
        style={{
          background: `linear-gradient(to right, var(--gold) ${pct}%, var(--border-strong) ${pct}%)`,
        }}
      />
    </div>
  );
}

export function RoiCalculator() {
  const [type, setType] = useState(0);
  const [customers, setCustomers] = useState(80);
  const [sale, setSale] = useState(50000);
  const [goal, setGoal] = useState(0);

  const result = useMemo(() => {
    const t = businessTypes[type];
    const g = goals[goal];
    const extraCustomers = Math.round(customers * t.uplift * g.factor);
    const revenue = Math.round(extraCustomers * sale * 12);
    const hours = Math.round(t.hours * (goal === 2 || goal === 3 ? 1.5 : 1));
    return { extraCustomers, revenue, hours };
  }, [type, customers, sale, goal]);

  return (
    <Section id="roi" className="bg-surface">
      <Container>
        <Reveal className="text-center">
          <div className="flex justify-center">
            <Eyebrow>ROI calculator</Eyebrow>
          </div>
          <Heading>What would a real digital presence be worth to you?</Heading>
          <Lead className="mx-auto">
            Rough numbers, honest assumptions — based on typical results across
            our client base.
          </Lead>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 lg:grid-cols-[1.1fr_1fr]">
            {/* Inputs */}
            <div className="space-y-7 rounded-3xl border border-border bg-card p-8 shadow-soft">
              <div>
                <Label htmlFor="roi-type">Business type</Label>
                <Select
                  id="roi-type"
                  value={type}
                  onChange={(e) => setType(Number(e.target.value))}
                >
                  {businessTypes.map((b, i) => (
                    <option key={b.label} value={i}>
                      {b.label}
                    </option>
                  ))}
                </Select>
              </div>

              <SliderRow
                label="Monthly customers"
                value={customers}
                min={10}
                max={1000}
                step={10}
                format={(v) => v.toLocaleString()}
                onChange={setCustomers}
              />

              <SliderRow
                label="Average sale value"
                value={sale}
                min={1000}
                max={1000000}
                step={1000}
                format={formatNaira}
                onChange={setSale}
              />

              <div>
                <Label htmlFor="roi-goal">Primary goal</Label>
                <Select
                  id="roi-goal"
                  value={goal}
                  onChange={(e) => setGoal(Number(e.target.value))}
                >
                  {goals.map((g, i) => (
                    <option key={g.label} value={i}>
                      {g.label}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col justify-between gap-4 rounded-3xl border border-gold/30 bg-ink p-8 text-white shadow-lift dark:bg-card">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                <Calculator className="size-4" aria-hidden />
                Estimated annual impact
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <span className="rounded-2xl bg-gold/15 p-3">
                    <Users className="size-5 text-gold" aria-hidden />
                  </span>
                  <div>
                    <p key={`c-${result.extraCustomers}`} className="font-display text-2xl font-bold">
                      +{result.extraCustomers.toLocaleString()} / mo
                    </p>
                    <p className="text-sm text-white/60">Potential additional customers</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="rounded-2xl bg-gold/15 p-3">
                    <TrendingUp className="size-5 text-gold" aria-hidden />
                  </span>
                  <div>
                    <p className="font-display text-2xl font-bold text-gold">
                      +{formatNaira(result.revenue)} / yr
                    </p>
                    <p className="text-sm text-white/60">Potential revenue increase</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="rounded-2xl bg-gold/15 p-3">
                    <Clock className="size-5 text-gold" aria-hidden />
                  </span>
                  <div>
                    <p className="font-display text-2xl font-bold">
                      {result.hours}h / week
                    </p>
                    <p className="text-sm text-white/60">Admin time saved via automation</p>
                  </div>
                </div>
              </div>

              <div>
                <ButtonLink href="/book" variant="gold" size="md" className="w-full">
                  Make these numbers real
                </ButtonLink>
                <p className="mt-3 text-center text-[11px] text-white/50">
                  Estimates based on aggregate client results. Your strategy call
                  turns them into a concrete plan.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
