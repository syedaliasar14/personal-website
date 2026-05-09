import Link from "next/link";
import { ArrowRight, Globe, MousePointerClick, PencilLine } from "lucide-react";

const highlights = [
  {
    title: "Professional design",
    description: "A site that looks polished, modern, and aligns with your brand identity to build trust.",
    Icon: MousePointerClick,
  },
  {
    title: "Easy content management",
    description: "Easily manage content like portfolios, services, or about info anytime without code.",
    Icon: PencilLine,
  },
  {
    title: "Strategic SEO",
    description: "Rank higher on search engines so customers can actually find you.",
    Icon: Globe,
  },
];

export default function HeroSection() {
  return (
    <section className="px-4">
      <div className="max-w-6xl mx-auto radial-card relative overflow-hidden">
        <div className="absolute -right-10 top-10 h-48 w-48 rounded-full bg-green-300/10 blur-3xl" />
        <div className="space-y-6">
          <span className="pill-primary">
            Business Websites
          </span>
          <div className="space-y-4">
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
              Get more customers with a website that actually converts.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              I build business websites that work for you. They help customers find you, quickly understand what you offer, and guide them to take action.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn inline-flex items-center justify-center gap-2">
              Get started
              <ArrowRight size={16} strokeWidth={1.75} />
            </Link>
            <Link href="#pricing" className="btn-outline inline-flex items-center justify-center gap-2">
              See pricing
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid gap-4 mt-10 md:grid-cols-3">
        {highlights.map(({ title, description, Icon }, index) => (
          <div key={title} className={`rounded-[1.25rem] radial-gradient-bg border border-slate-800 hover:border-green-300/70 transition-all duration-300 p-5 hover:cursor-default`}>
            <Icon className="text-green-300" size={24} strokeWidth={1.5} />
            <h2 className="mt-4 text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}