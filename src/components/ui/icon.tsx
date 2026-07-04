"use client";

import {
  AppWindow,
  BookOpen,
  Bot,
  Briefcase,
  Building2,
  CalendarCheck,
  CalendarClock,
  Code2,
  Compass,
  FileSearch,
  Filter,
  Gauge,
  GitBranch,
  Globe,
  Headset,
  LayoutDashboard,
  Mail,
  MessageCircleQuestion,
  Palette,
  PenTool,
  Rocket,
  Search,
  SearchCheck,
  Server,
  ShieldCheck,
  ShoppingBag,
  TrendingUp,
  Users,
  Workflow,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const registry: Record<string, LucideIcon> = {
  AppWindow,
  BookOpen,
  Bot,
  Briefcase,
  Building2,
  CalendarCheck,
  CalendarClock,
  Code2,
  Compass,
  FileSearch,
  Filter,
  Gauge,
  GitBranch,
  Globe,
  Headset,
  LayoutDashboard,
  Mail,
  MessageCircleQuestion,
  Palette,
  PenTool,
  Rocket,
  Search,
  SearchCheck,
  Server,
  ShieldCheck,
  ShoppingBag,
  TrendingUp,
  Users,
  Workflow,
  Wrench,
  Zap,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = registry[name] ?? Compass;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}
