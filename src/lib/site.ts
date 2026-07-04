export const site = {
  name: "Mesengr",
  tagline: "We build digital experiences that grow businesses.",
  description:
    "Mesengr is a digital growth partner for SMEs. Strategy, design, development, automation, hosting and continuous optimization — everything your business needs to win online.",
  url: "https://mesengr.com",
  email: "hello@mesengr.com",
  phone: "+234 906 713 3485",
  whatsapp: "https://wa.me/2349067133485",
};

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "AI Solutions", href: "/ai-solutions" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
];

export const allPages = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "Free Website Audit", href: "/audit" },
  { label: "Contact", href: "/contact" },
  { label: "Book Consultation", href: "/book" },
  { label: "Care Plans", href: "/care-plans" },
  { label: "AI Solutions", href: "/ai-solutions" },
  { label: "Digital Assessment", href: "/assessment" },
  { label: "Careers", href: "/careers" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export type Service = {
  slug: string;
  title: string;
  icon: string; // lucide icon name key
  short: string;
  detail: string;
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "website-design",
    title: "Website Design",
    icon: "PenTool",
    short: "Interfaces that feel effortless and convert deliberately.",
    detail:
      "Every design decision is made against a business goal. We research your customers, map their journey, and design an experience that moves them from curiosity to action — beautifully.",
    outcomes: ["Conversion-focused UX", "Design system you own", "Accessible by default"],
  },
  {
    slug: "business-websites",
    title: "Business Websites",
    icon: "Building2",
    short: "A credible, fast home for your business online.",
    detail:
      "Your website is the first employee most customers ever meet. We build sites that load instantly, explain your value clearly, and are effortless to keep up to date.",
    outcomes: ["Sub-second load times", "CMS you can actually use", "Built to rank"],
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    icon: "Rocket",
    short: "Campaign pages engineered for a single outcome.",
    detail:
      "One page, one goal. We design landing pages around a single conversion event, test the message, and iterate until the numbers agree with the design.",
    outcomes: ["Message-tested copy", "A/B ready structure", "Analytics wired in"],
  },
  {
    slug: "ecommerce",
    title: "Ecommerce",
    icon: "ShoppingBag",
    short: "Storefronts that make buying feel effortless.",
    detail:
      "From catalogue to checkout, we remove every ounce of friction. Payments, inventory, shipping and email flows — assembled into one coherent selling machine.",
    outcomes: ["Frictionless checkout", "Payment & shipping integrations", "Abandon-cart recovery"],
  },
  {
    slug: "booking-systems",
    title: "Booking Systems",
    icon: "CalendarCheck",
    short: "Let customers book you while you sleep.",
    detail:
      "Appointments, reservations, consultations — synced to your calendar, confirmed automatically, and reminded on schedule so no-shows stop costing you money.",
    outcomes: ["Calendar sync", "Automated reminders", "Deposits & payments"],
  },
  {
    slug: "dashboards",
    title: "Dashboards",
    icon: "LayoutDashboard",
    short: "See your whole business on one screen.",
    detail:
      "We pull your scattered data — sales, traffic, operations — into a single live dashboard, so decisions get made on numbers instead of hunches.",
    outcomes: ["Live business metrics", "Role-based access", "Custom reports"],
  },
  {
    slug: "customer-portals",
    title: "Customer Portals",
    icon: "Users",
    short: "Give customers a self-serve home base.",
    detail:
      "Order history, documents, invoices, support — a secure portal that answers questions before they become support tickets.",
    outcomes: ["Secure authentication", "Self-serve account tools", "Fewer support tickets"],
  },
  {
    slug: "web-applications",
    title: "Web Applications",
    icon: "AppWindow",
    short: "Custom software, without enterprise overhead.",
    detail:
      "When off-the-shelf tools stop fitting, we design and build the exact application your operation needs — scoped tightly, shipped iteratively.",
    outcomes: ["Tailored to your workflow", "Scales with you", "You own the code"],
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbots",
    icon: "Bot",
    short: "Answer every customer, instantly, around the clock.",
    detail:
      "Trained on your business — your services, policies and tone. It answers questions, qualifies leads and books appointments while your team focuses on delivery.",
    outcomes: ["24/7 first response", "Trained on your content", "Hands off to humans gracefully"],
  },
  {
    slug: "automation",
    title: "Automation",
    icon: "Workflow",
    short: "Delete the busywork from your week.",
    detail:
      "Invoices, follow-ups, data entry, notifications — we map your repetitive processes and automate them end to end, reclaiming hours every single week.",
    outcomes: ["Hours saved weekly", "Fewer manual errors", "Systems that talk to each other"],
  },
  {
    slug: "business-email",
    title: "Business Email Setup",
    icon: "Mail",
    short: "you@yourbusiness.com — configured properly.",
    detail:
      "Professional email on your own domain with deliverability done right: SPF, DKIM, DMARC, shared inboxes and signatures that match your brand.",
    outcomes: ["Your own domain", "Deliverability configured", "Team inboxes"],
  },
  {
    slug: "seo",
    title: "SEO",
    icon: "Search",
    short: "Be the answer when customers go looking.",
    detail:
      "Technical SEO, content strategy and local search — a compounding channel that keeps sending you customers long after the invoice is paid.",
    outcomes: ["Technical foundations", "Content that ranks", "Local search presence"],
  },
  {
    slug: "hosting",
    title: "Hosting",
    icon: "Server",
    short: "Fast, secure, monitored — and not your problem.",
    detail:
      "Global edge hosting with automatic scaling, SSL, daily backups and uptime monitoring. Your site stays fast and online; you stay focused on the business.",
    outcomes: ["99.9% uptime", "Automatic backups", "Edge performance worldwide"],
  },
  {
    slug: "maintenance",
    title: "Maintenance",
    icon: "Wrench",
    short: "A website is a garden, not a statue.",
    detail:
      "Updates, security patches, content changes and monthly health reports. We keep everything current so small issues never become expensive ones.",
    outcomes: ["Security patches", "Content updates", "Monthly reports"],
  },
  {
    slug: "website-audits",
    title: "Website Audits",
    icon: "SearchCheck",
    short: "Find out exactly why your site underperforms.",
    detail:
      "A forensic review of performance, SEO, accessibility, UX and conversion paths — delivered as a prioritized action plan, not a wall of jargon.",
    outcomes: ["Prioritized fixes", "Competitor comparison", "Plain-English report"],
  },
  {
    slug: "performance",
    title: "Performance Optimization",
    icon: "Gauge",
    short: "Every 100ms of delay costs you customers.",
    detail:
      "We profile, measure and tune until your site loads in the blink of an eye — because speed is a feature customers feel before they read a word.",
    outcomes: ["Core Web Vitals in the green", "Image & code optimization", "Measurable before/after"],
  },
];

export const processSteps = [
  {
    title: "Discover",
    text: "We learn your business, customers and goals before a single pixel moves.",
  },
  {
    title: "Strategy",
    text: "A clear plan: what to build, why, and how we'll measure success.",
  },
  {
    title: "Design",
    text: "Interfaces prototyped, tested and refined until they feel inevitable.",
  },
  {
    title: "Develop",
    text: "Fast, accessible, secure code — built on a modern, proven stack.",
  },
  {
    title: "Launch",
    text: "Zero-drama deployment with analytics, SEO and monitoring in place.",
  },
  {
    title: "Grow",
    text: "Monthly optimization, reporting and consulting. This is where value compounds.",
  },
];

export const comparison = {
  traditional: [
    "Website only",
    "Months to deliver",
    "No support after launch",
    "No optimization",
    "No analytics",
    "No automation",
  ],
  mesengr: [
    "Business strategy",
    "UX research",
    "Modern website",
    "Hosting & security",
    "Business email",
    "Analytics & reporting",
    "SEO",
    "AI chatbot",
    "Maintenance",
    "Monthly optimization",
    "Growth consulting",
  ],
};

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  location: string;
  timeline: string;
  problem: string;
  solution: string;
  results: { label: string; value: string }[];
  stack: string[];
  beforeNote: string;
  afterNote: string;
  story: {
    context: string[];
    approach: string[];
    outcome: string[];
  };
  quote: { text: string; name: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "smile-point-dental",
    client: "Smile Point Dental",
    industry: "Healthcare",
    location: "Surulere, Lagos",
    timeline: "5 weeks build · results measured over 6 months",
    problem:
      "A two-chair family clinic where every appointment came through one receptionist's phone. Calls went unanswered during procedures, and roughly one in five booked patients simply didn't show up.",
    solution:
      "A patient-first website with real-time online booking synced to the clinic calendar, WhatsApp appointment reminders, and clear treatment pages that answer the questions patients used to call about.",
    results: [
      { label: "Appointments now booked online", value: "58%" },
      { label: "No-show rate", value: "19% → 11%" },
      { label: "Front-desk hours freed / wk", value: "~9h" },
    ],
    stack: ["Next.js", "Supabase", "Vercel", "WhatsApp API"],
    beforeNote: "Phone-only booking · 2021-era Wix site",
    afterNote: "24/7 self-booking · auto reminders",
    story: {
      context: [
        "Dr. Kemi Adeyemi opened Smile Point in 2016 and built it the way most good clinics grow — referrals, word of mouth, and a receptionist named Blessing who held the whole schedule together by phone and WhatsApp.",
        "By 2025 that system was cracking. Blessing was fielding 40+ calls a day, most of them the same three questions: how much is scaling and polishing, are you open Saturdays, do you take my HMO. Calls that came in during procedures went to voicemail — and those patients usually just called the next clinic on Google.",
        "The website didn't help. It was a Wix page last touched in 2021 that took eight seconds to load on a phone and had no way to book anything.",
      ],
      approach: [
        "We spent two days at the front desk before designing anything, logging every call. Sixty percent were questions the website should have been answering; another quarter were bookings and reschedules that didn't need a human at all.",
        "The new site put the answers up front: treatment pages with honest price ranges, HMO information, opening hours in the header. A booking flow shows real availability from the clinic's calendar and confirms in one screen.",
        "No-shows got their own fix: automated WhatsApp reminders 24 hours and 2 hours before each appointment, with a one-tap reschedule link so a cancelled slot could be refilled instead of wasted.",
        "We also rebuilt their Google Business profile and local SEO around 'dentist in Surulere' searches, since that's how new patients actually look.",
      ],
      outcome: [
        "Six months in, 58% of all appointments are booked online — most of them outside clinic hours, which told us those were patients who previously couldn't get through at all.",
        "No-shows fell from 19% to 11%. That difference alone — roughly 14 recovered appointments a month — covered the cost of the care plan several times over.",
        "Blessing didn't lose her job to the website. She got the parts of it back that needed a human: greeting patients, managing the clinic, and following up on treatment plans.",
      ],
    },
    quote: {
      text: "For the first time since we opened, the phone is not the bottleneck. Patients book themselves in at 11pm and Blessing finally does the work we actually hired her for.",
      name: "Dr. Kemi Adeyemi",
      role: "Founder, Smile Point Dental",
    },
  },
  {
    slug: "kruxhaul-logistics",
    client: "KruxHaul Logistics",
    industry: "B2B / Haulage",
    location: "Isolo, Lagos",
    timeline: "8 weeks build · results measured over 4 months",
    problem:
      "A 14-truck interstate haulage firm quoting every job by phone call and WhatsApp. Quotes took a day or two to turn around, and corporate clients called dispatch constantly asking where their goods were.",
    solution:
      "An instant-quote calculator built from their real pricing logic, plus a client portal where dispatch updates shipment status from a phone and clients stop needing to call.",
    results: [
      { label: "Quote turnaround", value: "1–2 days → 5 min" },
      { label: "Quote requests / mo", value: "+45%" },
      { label: "Status-update calls", value: "−70%" },
    ],
    stack: ["Next.js", "Supabase", "Paystack", "Cloudflare"],
    beforeNote: "Quotes by phone · tracking by calling drivers",
    afterNote: "Instant quotes · live shipment portal",
    story: {
      context: [
        "Emeka Obi started KruxHaul in 2018 with two trucks and grew it to fourteen, moving goods between Lagos, Onitsha, Kano and Port Harcourt. Growth brought a problem trucks couldn't solve: paperwork.",
        "Every quote request meant a phone call, a check of fuel prices, a mental calculation of route and tonnage, and a call back — usually the next day. Procurement officers at bigger clients wouldn't wait; whoever quoted first usually won.",
        "Meanwhile, dispatch spent half of every day answering one question — 'where is my truck?' — by calling the driver and calling the client back.",
      ],
      approach: [
        "The first week was just interviews. We sat with Emeka and his operations lead and reverse-engineered how they actually price a job: route bands, tonnage brackets, a fuel index, return-load discounts. Rules they'd never written down.",
        "That logic became an instant-quote calculator on the new site. A prospect picks route, load type and tonnage and gets a real, honourable price in seconds — with a button to book it.",
        "For tracking, we deliberately avoided expensive GPS hardware. Dispatch updates each shipment's status — loaded, in transit, delivered — from a phone, and the client portal plus automatic WhatsApp notifications do the rest.",
      ],
      outcome: [
        "Quote turnaround went from a day or two to under five minutes, and quote volume rose 45% in four months — the calculator link gets forwarded around procurement teams, which never happened with a phone number.",
        "Status-update calls dropped by roughly 70%, giving dispatch back half their day.",
        "Two new corporate contracts came in during the measurement period, and both clients mentioned the portal in negotiations. In B2B, looking organised is a sales feature.",
      ],
    },
    quote: {
      text: "The calculator does in five minutes what used to take my ops team a full day, and it never forgets the fuel index. Clients think we are a much bigger company than we are. I'm fine with that.",
      name: "Emeka Obi",
      role: "Managing Director, KruxHaul Logistics",
    },
  },
  {
    slug: "orange-bowl",
    client: "Orange Bowl",
    industry: "Food & Hospitality",
    location: "Wuse 2, Abuja",
    timeline: "4 weeks build · results measured over 12 months",
    problem:
      "A beloved bowl-food kitchen doing 70% of its delivery volume through aggregator apps that took 25–30% commission on every order — and kept every customer's contact details to themselves.",
    solution:
      "A direct-ordering website with Paystack checkout, delivery zones, WhatsApp order updates and a loyalty programme — plus a deliberate campaign to move regulars off the apps.",
    results: [
      { label: "Delivery orders now direct", value: "55%" },
      { label: "Commissions saved, year one", value: "₦8.4m" },
      { label: "Repeat-order rate", value: "+38%" },
    ],
    stack: ["Next.js", "Paystack", "Supabase", "Google Analytics"],
    beforeNote: "70% aggregator orders · 25–30% commission",
    afterNote: "55% direct orders · 0% commission",
    story: {
      context: [
        "Maryann Abaniwu started Orange Bowl from her kitchen in 2021, selling through Instagram DMs. By the time she had a proper shop in Wuse 2, the delivery apps had become both her biggest channel and her biggest expense.",
        "The maths hurt: on a ₦6,500 bowl, the apps kept up to ₦1,950. Raising prices to cover it made her look expensive next to competitors; absorbing it ate the margin. Worse, she'd served thousands of customers and didn't have a single one's phone number — the apps did.",
        "Instagram DM orders were the other extreme: personal, commission-free, and total chaos to manage during lunch rush.",
      ],
      approach: [
        "We built ordering into her own site: full menu, Paystack checkout, delivery zones with honest fees, and WhatsApp notifications when an order is confirmed and out for delivery. Order management runs from a tablet in the kitchen.",
        "A simple loyalty programme — every eighth bowl free — gave customers a reason to create an account, which is how Orange Bowl finally started owning its customer list.",
        "Then the part most agencies skip: the migration campaign. Flyers in every aggregator delivery bag ('Order direct, get free delivery on your next bowl'), an Instagram bio link, and a small launch discount. You don't beat the apps by existing; you beat them by giving regulars a reason to switch.",
      ],
      outcome: [
        "Twelve months on, 55% of delivery volume comes through the site. At her volumes that translated to roughly ₦8.4m in commissions that stayed in the business — more than ten times what the project cost.",
        "The customer list is now 4,000+ strong. A single 'new menu drop' email or SMS produces a visible spike in orders — a lever she simply didn't have before.",
        "Repeat orders rose 38%, driven by the loyalty programme and re-order nudges. The apps still bring new customers; the difference is they no longer own the relationship afterwards.",
      ],
    },
    quote: {
      text: "I was paying the apps more than I was paying my chefs. Now more than half our orders come direct, and when I have a slow Tuesday I can actually do something about it — I message my own customers.",
      name: "Maryann Abaniwu",
      role: "Founder, Orange Bowl",
    },
  },
];

export const engagementModels = [
  {
    name: "Launch",
    audience: "Perfect for startups and new businesses.",
    blurb:
      "Everything needed to go from idea to a credible, high-performing online presence — fast.",
    features: [
      "Discovery workshop",
      "Strategy & positioning",
      "Design & development",
      "Hosting & business email",
      "Analytics & SEO foundations",
      "30 days of launch support",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    audience: "For established SMEs ready to scale.",
    blurb:
      "A deeper engagement: research, custom features, automation, and structured optimization after launch.",
    features: [
      "Everything in Launch",
      "UX research & customer interviews",
      "Booking / ecommerce / portals",
      "AI chatbot integration",
      "Marketing automation",
      "Quarterly growth reviews",
    ],
    highlight: true,
  },
  {
    name: "Partner",
    audience: "Your ongoing digital team.",
    blurb:
      "We operate as your outsourced digital department — continuous design, development, optimization and consulting.",
    features: [
      "Everything in Growth",
      "Dedicated senior team",
      "Continuous development",
      "Monthly optimization sprints",
      "Priority support SLA",
      "Executive growth consulting",
    ],
    highlight: false,
  },
];

export type CarePlan = {
  slug: string;
  name: string;
  blurb: string;
  features: string[];
  highlight?: boolean;
  detail: {
    audience: string;
    promise: string;
    includes: { title: string; text: string }[];
    response: string;
    idealFor: string[];
  };
};

export const carePlans: CarePlan[] = [
  {
    slug: "essential-care",
    name: "Essential Care",
    blurb: "Keep your site secure, updated and online.",
    features: [
      "Hosting & SSL",
      "Weekly backups",
      "Security patches & updates",
      "Uptime monitoring",
      "Monthly health report",
      "Email support",
    ],
    detail: {
      audience:
        "The baseline every website needs. If your site is a brochure and a contact point — and downtime or a hack would embarrass you rather than bankrupt you — Essential Care keeps it healthy without you thinking about it.",
      promise:
        "Your site stays fast, secure and online, and you get proof of it every month in plain English.",
      includes: [
        {
          title: "Managed hosting & SSL",
          text: "Global edge hosting with automatic scaling and an always-valid SSL certificate. Renewals, configuration and server headaches are ours, not yours.",
        },
        {
          title: "Weekly backups",
          text: "Full site and database backups every week, stored off-server. If anything ever goes wrong, we roll back — you don't rebuild.",
        },
        {
          title: "Security patches & software updates",
          text: "Framework, dependency and platform updates applied promptly. Most hacked SME sites are hacked through updates nobody ran.",
        },
        {
          title: "Uptime monitoring",
          text: "Your site is checked around the clock. If it goes down, we usually know — and act — before your customers notice.",
        },
        {
          title: "Monthly health report",
          text: "One email a month: uptime, speed, visitors, what we updated, anything to watch. No jargon, no dashboard homework.",
        },
        {
          title: "Email support",
          text: "A real person answers questions about your site within one business day.",
        },
      ],
      response: "Support answered within 1 business day · critical outages worked immediately",
      idealFor: [
        "Brochure and portfolio sites",
        "Businesses whose leads come mainly offline",
        "Sites we've just launched, as the minimum safety net",
      ],
    },
  },
  {
    slug: "growth-care",
    name: "Growth Care",
    blurb: "Maintenance plus continuous improvement.",
    features: [
      "Everything in Essential",
      "2h content changes / month",
      "Performance monitoring & tuning",
      "SEO monitoring",
      "Analytics review call",
      "Priority support",
    ],
    highlight: true,
    detail: {
      audience:
        "For websites that are a real lead channel. When enquiries, bookings or orders come through your site, 'still online' isn't the bar — 'getting better every month' is.",
      promise:
        "Everything in Essential Care, plus a team actively watching your numbers and improving the site every month.",
      includes: [
        {
          title: "Everything in Essential Care",
          text: "Hosting, SSL, backups, updates, monitoring and the monthly report — all included.",
        },
        {
          title: "2 hours of content changes monthly",
          text: "New prices, new photos, a new team member, a seasonal banner — send it over and it's live, usually same week. Unused hours don't expire within the quarter.",
        },
        {
          title: "Performance monitoring & tuning",
          text: "We track Core Web Vitals continuously and tune whatever drifts — because every second of load time measurably costs conversions.",
        },
        {
          title: "SEO monitoring",
          text: "Rankings for your key search terms tracked monthly, with fixes applied when something slips and honest notes on what competitors are doing.",
        },
        {
          title: "Monthly analytics review call",
          text: "Fifteen minutes on what the numbers say: where visitors came from, what they did, and what we recommend changing next.",
        },
        {
          title: "Priority support",
          text: "You jump the queue. Same-day response on business days.",
        },
      ],
      response: "Same-day response on business days · critical issues worked immediately",
      idealFor: [
        "Clinics, firms and restaurants taking bookings or orders online",
        "Businesses investing in SEO or running ads to their site",
        "Anyone who wants a number to improve, not just a site to exist",
      ],
    },
  },
  {
    slug: "growth-partner",
    name: "Growth Partner",
    blurb: "A standing team improving your numbers monthly.",
    features: [
      "Everything in Growth Care",
      "Monthly optimization sprint",
      "Conversion rate experiments",
      "AI chatbot tuning",
      "Quarterly strategy session",
      "Same-day response SLA",
    ],
    detail: {
      audience:
        "For businesses where the website drives revenue directly. This is the closest thing to having your own digital team: a monthly sprint dedicated to moving your numbers, backed by a strategy rhythm.",
      promise:
        "Everything in Growth Care, plus a dedicated improvement sprint every month and a seat at your strategy table.",
      includes: [
        {
          title: "Everything in Growth Care",
          text: "The full maintenance and monitoring stack, content changes, SEO tracking and the analytics call.",
        },
        {
          title: "Monthly optimization sprint",
          text: "A planned block of senior design and engineering time each month spent on the highest-impact improvement — a new landing page, a checkout tweak, a speed overhaul.",
        },
        {
          title: "Conversion rate experiments",
          text: "We form a hypothesis, change one thing, measure the result, and keep what wins. Compounding gains, backed by data instead of taste.",
        },
        {
          title: "AI chatbot & automation tuning",
          text: "If you run an AI assistant or automations with us, they're reviewed and retrained monthly — new questions, new answers, better handoffs.",
        },
        {
          title: "Quarterly strategy session",
          text: "Every quarter we zoom out: what happened, what the market is doing, and where your digital investment should go next.",
        },
        {
          title: "Same-day SLA",
          text: "Guaranteed same-day response, seven days a week for critical issues.",
        },
      ],
      response: "Same-day SLA · critical issues worked immediately, any day",
      idealFor: [
        "Ecommerce and ordering businesses",
        "Companies where the website is the primary sales channel",
        "Teams that want continuous improvement without hiring in-house",
      ],
    },
  },
];

export const aiSolutions = [
  {
    title: "AI Customer Support",
    icon: "Headset",
    text: "Resolve the majority of routine questions instantly, any hour, in your brand voice — and hand complex cases to your team with full context.",
  },
  {
    title: "Knowledge Base Chatbots",
    icon: "BookOpen",
    text: "Turn your docs, policies and FAQs into an assistant that always gives the current, correct answer.",
  },
  {
    title: "Appointment Booking",
    icon: "CalendarClock",
    text: "Conversational booking that checks real availability, confirms, and reminds — no back-and-forth emails.",
  },
  {
    title: "Lead Qualification",
    icon: "Filter",
    text: "Every enquiry greeted instantly, qualified with the right questions, and routed to sales with a summary.",
  },
  {
    title: "Internal Assistants",
    icon: "Briefcase",
    text: "Give your team a private assistant trained on your processes, so answers stop living in one person's head.",
  },
  {
    title: "Document Search",
    icon: "FileSearch",
    text: "Ask questions across contracts, manuals and reports in plain language — get cited answers in seconds.",
  },
  {
    title: "Customer FAQs",
    icon: "MessageCircleQuestion",
    text: "An always-current FAQ that answers conversationally instead of making customers dig through pages.",
  },
  {
    title: "CRM Automation",
    icon: "GitBranch",
    text: "Notes summarized, follow-ups drafted, records updated automatically. Your CRM finally maintains itself.",
  },
];

export const testimonials = [
  {
    quote:
      "For the first time since we opened, the phone is not the bottleneck. Patients book themselves in at 11pm and my receptionist finally does the work we actually hired her for.",
    name: "Dr. Kemi Adeyemi",
    role: "Founder, Smile Point Dental",
  },
  {
    quote:
      "The quote calculator does in five minutes what used to take my ops team a full day. Clients think we're a much bigger company than we are — I'm fine with that.",
    name: "Emeka Obi",
    role: "MD, KruxHaul Logistics",
  },
  {
    quote:
      "I was paying the delivery apps more than I was paying my chefs. Now more than half our orders come direct, and I finally own my own customer list.",
    name: "Maryann Abaniwu",
    role: "Founder, Orange Bowl",
  },
  {
    quote:
      "Monthly reports in plain English, real recommendations, and a team that actually picks up the phone. It feels like having a digital department without the payroll.",
    name: "Tunde Bakare",
    role: "Principal Partner, Bakare & Co",
  },
];

export const faqs = [
  {
    q: "What exactly does Mesengr do?",
    a: "We're a digital growth partner for small and medium businesses. That means strategy, design, development, hosting, email, SEO, AI automation and ongoing optimization — everything required to establish and grow your business online, under one roof.",
  },
  {
    q: "How are you different from a web design agency?",
    a: "Agencies hand over a website and disappear. We stay. Your website is the start of the engagement, not the end — we host it, maintain it, measure it and improve it every month against your business goals.",
  },
  {
    q: "How long does a project take?",
    a: "A focused launch typically takes 3–6 weeks. Larger builds with ecommerce, portals or custom applications run 8–12 weeks. You'll get a concrete timeline after the discovery call — and we hit it.",
  },
  {
    q: "How much does a website cost?",
    a: "We price by engagement, not by page. Launch engagements suit startups; Growth suits established SMEs; Partner is a continuous relationship. After a free strategy call we'll give you a fixed, transparent proposal — no surprises, ever.",
  },
  {
    q: "Do you work with businesses outside your city?",
    a: "Yes — most of our clients work with us remotely. Our process is built around clear async communication, scheduled calls and a shared project dashboard.",
  },
  {
    q: "I already have a website. Can you improve it?",
    a: "Absolutely. Start with our free website health check or a full audit. Sometimes the right move is targeted fixes; sometimes it's a rebuild. We'll tell you honestly which one you need.",
  },
  {
    q: "What is a 'digital growth partner'?",
    a: "One team accountable for your entire online presence. Instead of juggling a designer, a developer, a hosting company and an SEO freelancer, you have a single partner measured on one thing: your growth.",
  },
  {
    q: "Do I own my website?",
    a: "Yes. Code, content, domain, data — all yours. If we ever part ways, you take everything with you. We keep clients with results, not lock-in.",
  },
  {
    q: "What technology do you build with?",
    a: "A modern, proven stack: Next.js, React, TypeScript, Tailwind CSS, Supabase and Vercel, with Stripe or Paystack for payments and Anthropic or OpenAI models for AI features. Fast, secure and maintainable for years.",
  },
  {
    q: "Will my website be fast?",
    a: "Speed is a requirement, not a hope. We target top Lighthouse scores and green Core Web Vitals on every build, and we monitor performance continuously after launch.",
  },
  {
    q: "Will my website work on phones?",
    a: "Over 60% of your visitors are on a phone, so we design mobile-first. Every layout, form and interaction is built and tested for touch before desktop.",
  },
  {
    q: "Do you handle hosting?",
    a: "Yes — global edge hosting with SSL, daily backups, uptime monitoring and automatic scaling is included in every care plan. You'll never think about servers again.",
  },
  {
    q: "Can you set up my business email?",
    a: "Yes. Professional addresses on your own domain, with deliverability (SPF, DKIM, DMARC) configured correctly so your messages land in inboxes, not spam folders.",
  },
  {
    q: "What's included in maintenance?",
    a: "Software updates, security patches, backups, uptime monitoring, content changes and a monthly plain-English report. Higher tiers add performance tuning, SEO monitoring and optimization sprints.",
  },
  {
    q: "What happens if my site goes down?",
    a: "Monitoring alerts us before most customers notice. Care plan clients get guaranteed response times — and because we build on resilient infrastructure, downtime is genuinely rare.",
  },
  {
    q: "Do you do SEO?",
    a: "Yes — technical SEO is built into every site, and our Growth and Partner engagements include ongoing content and local SEO. We report rankings and traffic monthly so you can see the compounding effect.",
  },
  {
    q: "How do AI chatbots actually help a small business?",
    a: "They answer instantly at 2am, qualify leads while you sleep, book appointments without phone tag and deflect repetitive questions. Clients typically see faster response times and more captured leads within the first month.",
  },
  {
    q: "Will an AI chatbot say wrong things to my customers?",
    a: "We train assistants only on your approved content, constrain what they can discuss, and give them a graceful handoff to humans. You review and approve behaviour before anything goes live.",
  },
  {
    q: "Can you automate my admin work?",
    a: "Usually, yes. Invoicing, follow-up emails, review requests, data entry between tools — we map your repetitive processes in discovery and automate the ones with the highest payoff first.",
  },
  {
    q: "What analytics will I get?",
    a: "A clean dashboard showing visitors, sources, conversions and revenue impact — plus a monthly summary in plain English. You'll always know what your website did for you last month.",
  },
  {
    q: "Do you write the content?",
    a: "We can. Our copy is written to be clear and persuasive, informed by your customers' actual questions. You review everything; nothing ships without your approval.",
  },
  {
    q: "Can you migrate my existing site?",
    a: "Yes — content, SEO equity, email and domains, migrated carefully with redirects in place so you keep your rankings. Downtime during migration is typically zero.",
  },
  {
    q: "Do you build online stores?",
    a: "Yes — full ecommerce with payments, inventory, shipping and email flows, or lightweight order systems for restaurants and service businesses that want to escape commission platforms.",
  },
  {
    q: "Can customers book appointments through my site?",
    a: "Yes. Real-time availability, calendar sync, deposits, reminders and rescheduling — booking systems are one of our most requested builds because they pay for themselves quickly.",
  },
  {
    q: "What is the Digital Assessment?",
    a: "A guided 5-minute questionnaire about your business and its online presence. You get an instant personalized report — digital maturity level, top recommended improvements and a suggested roadmap — before we've ever spoken.",
  },
  {
    q: "What does the free website health check measure?",
    a: "Performance, SEO signals and accessibility, summarized as scores with plain-English suggestions. It's a quick pulse check; a full audit goes much deeper.",
  },
  {
    q: "How do we start?",
    a: "Book a free strategy call. We'll discuss your goals, review your current presence and tell you honestly what we'd do — whether or not you hire us for it.",
  },
  {
    q: "What if I'm not sure what I need?",
    a: "That's exactly what the free strategy call and Digital Assessment are for. Most clients arrive with a symptom ('the website is old') and leave with a plan for the actual problem.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes — most engagements are split across milestones, and Partner engagements are simple monthly retainers. We'll structure payments around your cash flow.",
  },
  {
    q: "Who will I actually work with?",
    a: "A small senior team — the people on the strategy call are the people doing the work. No account-manager telephone games.",
  },
  {
    q: "What industries do you specialize in?",
    a: "Healthcare, professional services, hospitality, logistics and local services are our deepest experience — but our process is built to learn any SME's customers quickly.",
  },
  {
    q: "Can I update the website myself?",
    a: "Yes — every build includes an editor-friendly CMS and a training session. Change text, images and pages without touching code. And if you'd rather not, content changes are included in care plans.",
  },
];

export const blogPosts = [
  {
    slug: "why-smes-need-more-than-a-website",
    title: "Why Your SME Needs More Than a Website in 2026",
    excerpt:
      "A website that just sits there is a business card. Here's what separates a digital presence that costs money from one that makes it.",
    category: "Business Growth",
    readTime: 7,
    date: "2026-06-12",
  },
  {
    slug: "seo-guide-for-small-business",
    title: "The Honest SEO Guide for Small Businesses",
    excerpt:
      "No tricks, no jargon. What actually moves rankings for local and small businesses — and what's a waste of your budget.",
    category: "SEO",
    readTime: 9,
    date: "2026-05-28",
  },
  {
    slug: "ai-for-sme-customer-service",
    title: "AI Customer Service for SMEs: A Practical Playbook",
    excerpt:
      "Where AI assistants genuinely help small businesses, where they don't, and how to deploy one without embarrassing your brand.",
    category: "AI",
    readTime: 8,
    date: "2026-05-14",
  },
  {
    slug: "true-cost-of-a-cheap-website",
    title: "The True Cost of a Cheap Website",
    excerpt:
      "The ₦300k website that costs ₦30 million: how slow load times, broken forms and invisible SEO quietly drain small businesses.",
    category: "Digital Transformation",
    readTime: 6,
    date: "2026-04-30",
  },
  {
    slug: "smile-point-case-study",
    title: "Case Study: How Smile Point Dental Moved 58% of Bookings Online",
    excerpt:
      "A complete teardown of the strategy, design and automation behind a Lagos clinic's move from phone-only bookings to a self-booking front desk.",
    category: "Case Studies",
    readTime: 10,
    date: "2026-04-16",
  },
  {
    slug: "website-speed-revenue",
    title: "Website Speed Is a Revenue Line",
    excerpt:
      "Every 100ms of delay measurably reduces conversions. The business case for performance, with numbers you can show your accountant.",
    category: "Digital Transformation",
    readTime: 5,
    date: "2026-04-02",
  },
];

export const trustedTech = [
  "Next.js",
  "React",
  "Supabase",
  "Vercel",
  "Cloudflare",
  "OpenAI",
  "Anthropic",
  "Google",
  "Stripe",
  "Paystack",
  "Google Analytics",
];

export const whyCards = [
  {
    title: "Strategy",
    icon: "Compass",
    text: "We start with your business model, not a template. Every build begins with goals, customers and numbers.",
  },
  {
    title: "Design",
    icon: "Palette",
    text: "Premium, purposeful interfaces that earn trust in the first five seconds and guide visitors to act.",
  },
  {
    title: "Development",
    icon: "Code2",
    text: "Modern, fast, secure engineering on a stack that will still be excellent in five years.",
  },
  {
    title: "Automation",
    icon: "Zap",
    text: "AI assistants and workflow automation that reclaim hours of admin every single week.",
  },
  {
    title: "Hosting",
    icon: "Globe",
    text: "Edge infrastructure, SSL, backups and monitoring — handled completely, invisible to you.",
  },
  {
    title: "Maintenance",
    icon: "ShieldCheck",
    text: "Continuous updates and security so small issues never grow into expensive emergencies.",
  },
  {
    title: "Growth",
    icon: "TrendingUp",
    text: "Monthly measurement, optimization and honest consulting. The engagement starts at launch.",
  },
];
