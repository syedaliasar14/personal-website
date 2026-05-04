import Link from "next/link";
import { ArrowRight, Database, Rocket, ServerCog } from "lucide-react";

const highlights = [
  {
    title: "Real infrastructure",
    description: "I help you set up the accounts, services, and deployment path so the product is built on something sustainable.",
    Icon: ServerCog,
  },
  {
    title: "Database-backed features",
    description: "If the product needs stored user data, onboarding, or app logic, we scope it properly instead of pretending a static site is enough.",
    Icon: Database,
  },
  {
    title: "Built to validate",
    description: "The aim is to launch something focused enough to learn from quickly, not overbuild before the market answers back.",
    Icon: Rocket,
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(134,239,172,0.18),_transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(2,6,23,0.95))] px-6 py-12 md:px-10 md:py-16">
      <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-green-300/10 blur-3xl" />
      <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-green-300/40 bg-green-300/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-green-200">
            Startup MVPs
          </span>
          <div className="space-y-4">
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
              Turn your startup idea into a real product.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              For founders, the work usually goes beyond a frontend. That means planning product scope, setting up accounts correctly, choosing infrastructure carefully, and building an MVP that is credible enough to test with users or show to investors.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn inline-flex items-center justify-center gap-2">
              Get in touch
              <ArrowRight size={16} strokeWidth={1.75} />
            </Link>
            <Link href="#pricing" className="btn-outline inline-flex items-center justify-center gap-2">
              See pricing
            </Link>
          </div>
        </div>

        <div className="grid gap-4 rounded-[1.75rem] border border-slate-800 bg-slate-950/60 p-5">
          {highlights.map(({ title, description, Icon }) => (
            <div key={title} className="rounded-[1.25rem] border border-slate-800 bg-slate-900/80 p-5">
              <Icon className="text-green-300" size={24} strokeWidth={1.5} />
              <h2 className="mt-4 text-xl font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}