import Link from "next/link";
import { ArrowRight, Globe, Megaphone, MousePointerClick } from "lucide-react";

const highlights = [
  {
    title: "Conversion-first structure",
    description: "Clear offers, stronger calls to action, and page layouts that help visitors know what to do next.",
    Icon: MousePointerClick,
  },
  {
    title: "Brand clarity",
    description: "A site that makes your business look established, intentional, and much easier to trust.",
    Icon: Megaphone,
  },
  {
    title: "Built for ownership",
    description: "You get a real handoff process, launch support, and a site you can confidently keep using after delivery.",
    Icon: Globe,
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(134,239,172,0.2),_transparent_35%),linear-gradient(135deg,rgba(15,23,42,0.98),rgba(2,6,23,0.94))] px-6 py-12 md:px-10 md:py-16">
      <div className="absolute -right-10 top-10 h-48 w-48 rounded-full bg-green-300/10 blur-3xl" />
      <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-end">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-green-300/40 bg-green-300/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-green-200">
            Business Websites
          </span>
          <div className="space-y-4">
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
              Get more customers with a website that actually converts.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              I build business websites that do more than sit online looking decent. The goal is to make your offer clearer, build trust faster, and guide visitors toward contacting you, booking you, or buying from you.
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

        <div className="grid gap-4 rounded-[1.75rem] border border-slate-800 bg-slate-950/60 p-5 md:grid-cols-2 lg:grid-cols-1">
          {highlights.map(({ title, description, Icon }, index) => (
            <div
              key={title}
              className={`rounded-[1.25rem] border border-slate-800 bg-slate-900/80 p-5 ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
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