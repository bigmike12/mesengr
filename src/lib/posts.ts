// Full article bodies for the Insights blog.
// Listing metadata (title, excerpt, category, date) lives in site.ts → blogPosts;
// the slugs here must match those entries.

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string };

export const postBodies: Record<string, PostBlock[]> = {
  "why-smes-need-more-than-a-website": [
    {
      type: "p",
      text: "Somewhere in your city right now, a business owner is paying for a website the way people pay for a framed certificate: it exists, it looks official, and it does absolutely nothing all day. If that stings a little, this article is for you — not to sell you a bigger website, but to explain what the businesses winning online actually have, because it isn't 'a website'.",
    },
    { type: "h2", text: "A website is a door, not a shop" },
    {
      type: "p",
      text: "Think about what happens after someone finds your site. They have a question — do you deliver to their area, how much does a consultation cost, are you open Saturdays. If the site answers it, they take a step closer to buying. If it doesn't, they leave and ask your competitor. The website is only the door; what matters is everything wired behind it.",
    },
    {
      type: "p",
      text: "The businesses that grow online treat their digital presence as a system with jobs: get found (search, maps, social), earn trust (design, content, reviews), convert (booking, ordering, enquiry forms that work), and follow up (email, WhatsApp, reminders). A beautiful homepage that does none of these jobs is decoration.",
    },
    { type: "h2", text: "The five pieces most SMEs are missing" },
    {
      type: "ul",
      items: [
        "Search presence — being the answer when someone types 'dentist in Surulere' or 'haulage company Lagos'. Most SME sites are technically invisible to Google through no fault of the owner.",
        "A conversion path — a way for a ready customer to act right now: book, order, pay, or get an instant quote. 'Call us' is a conversion path that only works when someone is free to answer.",
        "Follow-up — most visitors aren't ready today. Without email or WhatsApp capture, tomorrow's customer is lost the moment they close the tab.",
        "Measurement — if you can't say what your website did for you last month, it's probably doing very little. Analytics turn opinions into decisions.",
        "Maintenance — sites decay. Software ages, forms silently break, speed drifts. The most expensive website problems are the ones nobody notices for six months.",
      ],
    },
    { type: "h2", text: "Why this matters more for small businesses, not less" },
    {
      type: "p",
      text: "A large company can waste money on a bad website and survive. For an SME, the website is often the single highest-leverage asset available: it works around the clock, costs less than one junior employee, and scales without complaining. When it's set up as a system, it routinely does the work of a receptionist, a sales rep and a brochure at once.",
    },
    {
      type: "p",
      text: "That's also why the 'cheap website' trap is so costly. The ₦300k site that has no search presence, no booking and no analytics isn't cheaper than the proper build — it just moves the cost from your invoice to your missed revenue, where it compounds quietly every month.",
    },
    { type: "h2", text: "Where to start" },
    {
      type: "p",
      text: "Don't start with design. Start with two questions: how do customers currently find you, and what do you want more of — calls, bookings, orders, or bigger clients? Every good digital decision falls out of those answers. If you want a structured version of this exercise, our free Digital Assessment walks you through it in five minutes and hands you a prioritized plan.",
    },
    {
      type: "callout",
      text: "The honest summary: you don't need a website. You need customers, and a website is one part of the machine that produces them. Build the machine.",
    },
  ],

  "seo-guide-for-small-business": [
    {
      type: "p",
      text: "SEO has a reputation problem. Half the industry sells it as magic, the other half as a scam, and small business owners are left paying monthly invoices for reports they don't understand. Here is the version we give our own clients — what actually moves rankings for a small business, and what's a waste of your money.",
    },
    { type: "h2", text: "First, the honest news" },
    {
      type: "p",
      text: "SEO is slow. Real results take three to six months, sometimes longer in competitive niches. Anyone promising page one in two weeks is either lying or about to do something Google will punish you for. But SEO is also the only marketing channel that compounds: the article that ranks today keeps sending you customers for years, free, while ads stop the moment you stop paying.",
    },
    { type: "h2", text: "The 20% that produces 80% of results" },
    {
      type: "ul",
      items: [
        "Google Business Profile — for local businesses this is the highest-return hour you will ever spend online. Complete every field, add real photos monthly, and answer reviews. 'Near me' searches convert astonishingly well.",
        "Technical basics — your site must load fast, work on phones, and be crawlable. No amount of content rescues a site Google can't read. This is a one-time fix a competent developer does at build time.",
        "Pages that match real searches — one page per service, per location, written to answer what people actually type. 'Dental clinic in Surulere' should land on a Surulere page, not your homepage.",
        "Answering real questions — the questions customers ask you on the phone every day are the exact content Google wants. Price ranges, comparisons, 'how long does X take'. Write them down honestly.",
        "Reviews — volume, recency, and your responses all matter. Build the ask into your process: after every happy customer, one polite request.",
      ],
    },
    { type: "h2", text: "What to stop paying for" },
    {
      type: "ul",
      items: [
        "Bulk backlink packages — cheap links from irrelevant sites do nothing at best; at worst they earn a penalty that takes months to escape.",
        "Keyword-stuffed copy — Google stopped rewarding 'best plumber Lagos best plumber cheap plumber' a decade ago. It now actively ranks it down.",
        "Monthly reports without actions — a ranking chart is not a service. Every report should end with 'here is what we're changing next month and why'.",
        "SEO on a broken site — if the site takes six seconds to load on a phone, fix that before paying anyone for content.",
      ],
    },
    { type: "h2", text: "A realistic 90-day plan" },
    {
      type: "p",
      text: "Month one: fix technical foundations and claim your Google Business Profile properly. Month two: build out one page per core service, written from real customer questions. Month three: start the review engine and publish your first two honest articles. That sequence, done well, outperforms most agency retainers — because it's the actual work, not the theatre around it.",
    },
    {
      type: "callout",
      text: "Rule of thumb: if an SEO activity would still make sense with Google switched off — clear pages, honest answers, happy reviewers — it's probably good SEO. If it only makes sense as a trick, it isn't.",
    },
  ],

  "ai-for-sme-customer-service": [
    {
      type: "p",
      text: "Every SME owner has now seen an AI chatbot demo. Fewer have seen one that actually helps a small business without embarrassing it. We've deployed these for clinics, restaurants and logistics firms — here's the honest playbook: where AI assistants genuinely earn their keep, where they don't, and how to deploy one safely.",
    },
    { type: "h2", text: "The problem AI actually solves" },
    {
      type: "p",
      text: "It isn't 'replacing staff'. It's the 9pm problem: most enquiries arrive when nobody is working. A customer messages at 9:14pm asking if you deliver to Lekki. By morning, they've ordered from whoever answered — and somebody always answers. Speed-to-response is the single most underrated growth lever in small business, and it's exactly what machines are good at.",
    },
    { type: "h2", text: "Where assistants genuinely earn their keep" },
    {
      type: "ul",
      items: [
        "Repetitive questions — opening hours, prices, delivery zones, insurance accepted. Typically 60–80% of all enquiries, answerable instantly from your approved content.",
        "Lead qualification — greeting every enquiry, asking the three questions your sales process needs, and handing your team a summary instead of a cold name.",
        "Appointment booking — checking real availability and confirming, without the four-message WhatsApp dance.",
        "After-hours coverage — the assistant takes the 9pm enquiry, answers what it can, and books the callback for 9am.",
      ],
    },
    { type: "h2", text: "Where they don't (and shouldn't)" },
    {
      type: "ul",
      items: [
        "Complaints — an upset customer needs a human, fast. A good assistant recognises frustration and escalates immediately; a bad one loops them through menus.",
        "Anything medical, legal or financial beyond published facts — the assistant should state your published information and offer the professional, never improvise advice.",
        "Negotiation — pricing exceptions and custom deals are human work. The assistant's job is to hand them over warm.",
      ],
    },
    { type: "h2", text: "How to deploy one without embarrassing your brand" },
    {
      type: "p",
      text: "The failures you've seen — bots inventing prices, promising refunds that don't exist — come from one mistake: letting the model improvise. A properly built assistant is trained only on your approved content, constrained to your topics, and given one graceful exit: 'Let me connect you with the team.' You review its behaviour before launch, and its conversations after, the way you'd supervise a new hire.",
    },
    {
      type: "p",
      text: "Start narrow. Launch with your top ten questions and booking, measure for a month, then widen. An assistant that does five things reliably beats one that does fifty things badly — and customers genuinely don't mind talking to a bot when it's fast, accurate and honest about being one.",
    },
    {
      type: "callout",
      text: "The metric that matters isn't 'conversations handled'. It's captured leads that would otherwise have gone cold. Measure that, and the business case usually writes itself within the first month.",
    },
  ],

  "true-cost-of-a-cheap-website": [
    {
      type: "p",
      text: "The ₦300k website is the most expensive purchase many small businesses ever make. Not because of the invoice — because of everything that happens after. Here's the arithmetic nobody shows you at the point of sale.",
    },
    { type: "h2", text: "Where the real costs hide" },
    {
      type: "p",
      text: "A cheap build isn't cheap because the builder found efficiencies. It's cheap because things were skipped — and every skipped thing has a price that lands later, on you. The site loads in six seconds, so half your mobile visitors leave before seeing anything. There's no technical SEO, so Google sends the searchers to your competitors. The contact form was never tested, and it's been failing silently since March.",
    },
    {
      type: "p",
      text: "Put small numbers on it and it stops being abstract. Say your website could realistically bring 20 enquiries a month, you close a quarter of them, and an average customer is worth ₦50,000. That's ₦250,000 a month the site should produce. A cheap site delivering half of that is quietly costing ₦125,000 every month — ₦1.5m a year, forever. The 'savings' on the build were consumed in the first eight weeks.",
    },
    { type: "h2", text: "The six failure modes" },
    {
      type: "ul",
      items: [
        "Slow pages — attention on mobile is measured in seconds. Speed is a feature customers feel before they read a single word.",
        "Invisible on Google — no page structure, no metadata, no local SEO. The site exists, but only for people who already have the link.",
        "Broken forms — the most expensive bug in small business, because it fails silently. Leads bounce off it for months while the site 'looks fine'.",
        "No maintenance — unpatched software gets hacked, and a hacked site costs more to rescue than years of maintenance would have.",
        "Poor mobile experience — most of your visitors are on a phone. A site that fights their thumbs sends them straight back to the search results.",
        "No measurement — without analytics you can't see any of the above happening. The leak stays invisible until the year-end numbers ask hard questions.",
      ],
    },
    { type: "h2", text: "How to buy a website properly" },
    {
      type: "p",
      text: "The fix isn't 'spend more' — it's 'buy different things'. Judge proposals by what happens after launch: Is hosting and security handled? Will forms be monitored? Is there analytics, and will a human explain them to you monthly? Is anyone responsible for the site still working in a year? A builder who can't answer those isn't selling a business asset; they're selling a file.",
    },
    {
      type: "callout",
      text: "A website is the only employee that works 24/7 without complaining. Pay it accordingly — or accept that it will produce accordingly.",
    },
  ],

  "smile-point-case-study": [
    {
      type: "p",
      text: "Smile Point is a two-chair family dental clinic in Surulere, Lagos, run by Dr. Kemi Adeyemi since 2016. This is the full teardown of how their online presence went from a 2021-era Wix page to a system that books 58% of all appointments without a phone call — including the parts that didn't work first try.",
    },
    { type: "h2", text: "The starting point" },
    {
      type: "p",
      text: "Every appointment came through one receptionist's phone. Blessing fielded 40+ calls a day, and our two days of shadowing the front desk showed 60% of them were the same three questions: the price of scaling and polishing, Saturday hours, and which HMOs the clinic accepts. Calls during procedures went to voicemail — and a voicemail, for a new patient, means calling the next clinic on the list.",
    },
    {
      type: "p",
      text: "The second problem was quieter: roughly one in five booked patients didn't show up. In a two-chair clinic, an empty 45-minute slot is pure lost revenue that no amount of marketing recovers.",
    },
    { type: "h2", text: "What we built, and why" },
    {
      type: "ul",
      items: [
        "Treatment pages with honest price ranges — the industry habit of hiding prices generates calls, not customers. Publishing ranges filtered out mismatched patients and pre-sold the rest.",
        "Real-time online booking — synced with the clinic calendar, confirming in one screen. No 'we'll call you back to confirm', which is where most clinic booking flows quietly die.",
        "WhatsApp reminders at 24 hours and 2 hours — with a one-tap reschedule link. The goal wasn't punishing no-shows; it was rescuing the slot in time to refill it.",
        "Local SEO — a rebuilt Google Business Profile and a site structured around 'dentist in Surulere' searches, because that's how new patients actually look.",
      ],
    },
    { type: "h2", text: "What didn't work first try" },
    {
      type: "p",
      text: "Honesty file: our first reminder message was too formal and patients ignored it. Rewriting it in the clinic's own warm voice — the way Blessing actually talks — nearly doubled reschedule-link usage. We also initially buried HMO information on an insurance page; call logs showed it needed to be in the header. Case studies that skip this part are marketing, not teaching.",
    },
    { type: "h2", text: "The results, six months in" },
    {
      type: "ul",
      items: [
        "58% of appointments booked online — most placed outside clinic hours, i.e. patients who previously couldn't get through at all.",
        "No-shows down from 19% to 11% — roughly 14 recovered appointments a month, which alone covered the care plan several times over.",
        "About 9 front-desk hours freed weekly — Blessing now runs the clinic floor and treatment-plan follow-ups instead of the phone.",
        "First-page Google ranking for the clinic's core local searches.",
      ],
    },
    {
      type: "callout",
      text: "The pattern to steal: log what customers actually ask, answer it on the website, automate the repetitive path, and keep the humans for human work. It transfers to almost any service business.",
    },
  ],

  "website-speed-revenue": [
    {
      type: "p",
      text: "Website speed sounds like a technical detail — something developers argue about while the business waits for real marketing. The data says otherwise: speed is a revenue line, and for most SMEs it's the cheapest one to improve. Here's the case, with numbers you can show your accountant.",
    },
    { type: "h2", text: "The evidence, briefly" },
    {
      type: "ul",
      items: [
        "Google's research on mobile sites found the probability of a visitor bouncing rises 32% as load time goes from 1 to 3 seconds — and 90% by 5 seconds.",
        "Large-scale retail studies (Amazon, Walmart, Deloitte's 'Milliseconds Make Millions') consistently find single-digit conversion gains from every 100ms of improvement.",
        "Google uses page experience signals in ranking — a slow site fights uphill for the same keywords a fast competitor gets cheaply.",
      ],
    },
    { type: "h2", text: "Why this hits Nigerian SMEs harder" },
    {
      type: "p",
      text: "Much of your traffic is on mid-range Android phones over variable mobile data. A site that feels 'fine' on your office WiFi and laptop can take eight seconds and ₦50 of someone's data plan to load in the real world. Every unnecessary megabyte is a small tax you charge visitors before they've read a word — and they respond exactly as you'd expect.",
    },
    { type: "h2", text: "Back-of-envelope maths for your own site" },
    {
      type: "p",
      text: "Take your monthly visitors, your enquiry rate, and your average customer value. A site getting 2,000 visits with a 2% enquiry rate and ₦50,000 average value produces ₦2m of pipeline monthly. The bounce-rate research suggests a genuinely slow site suppresses that by 20–30%. That's ₦400k–₦600k a month — from a problem that's usually fixed once, in a week, for less than one month of the loss.",
    },
    { type: "h2", text: "What actually makes sites slow (and the fixes)" },
    {
      type: "ul",
      items: [
        "Oversized images — the #1 culprit on SME sites. Modern formats and lazy-loading routinely cut page weight by 70%.",
        "Cheap shared hosting — a slow server delays every single page view before your code even runs. Edge hosting fixes this globally.",
        "Plugin and script bloat — every chat widget, tracker and slider is a toll booth. Most sites carry several nobody remembers installing.",
        "No caching or CDN — without them, every visitor rebuilds the page from scratch, continents away from your server.",
      ],
    },
    {
      type: "callout",
      text: "Run your site through our free health check — it uses Google's own Lighthouse test and takes thirty seconds. If your performance score is under 70, you now know exactly which revenue line to fix first.",
    },
  ],
};
