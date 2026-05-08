import { ArrowRight, Globe, Rocket } from "lucide-react";
import Link from "next/link";

export default function ServicesOptions() {
  return (
    <section className="mt-10 grid w-full gap-6 md:grid-cols-2">
      <Link
        href="/devlabs/business-websites"
        className="radial-card group p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-green-300/60"
      >
        <Globe className="text-green-300" size={26} strokeWidth={1.5} />
        <h2 className="mt-3 text-xs tracking-[0.26em] text-green-300 uppercase">Get more customers with a site that actually converts</h2>
        <h3 className="mt-8 font-bold text-4xl md:text-5xl">Business Websites</h3>
        <p className="mt-3 text-sm text-slate-300">
          Best for business owners who need stronger messaging, a sharper brand presentation, and a website built to turn visitors into customers.
        </p>
        <div className="mt-8 inline-flex items-center gap-2 font-medium btn-outline text-sm group-hover:bg-primary group-hover:text-background">
          Explore business websites
          <ArrowRight size={16} strokeWidth={1.75} />
        </div>
      </Link>

      <Link
        href="/devlabs/startup-mvp"
        className="radial-card group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-300/60 md:p-8"
      >
        <Rocket className="text-green-300" size={26} strokeWidth={1.5} />
        <h2 className="mt-3 text-xs tracking-[0.26em] text-green-300 uppercase">Turn your startup idea into a real product</h2>
        <h3 className="mt-8 font-bold text-4xl md:text-5xl">Startup MVPs</h3>
        <p className="mt-3 text-sm text-slate-300">
          Best for founders who need help building something from the ground up, thinking through features, infrastructure, and what version one actually looks like.
        </p>
        <div className="mt-8 inline-flex items-center gap-2 font-medium btn-outline text-sm group-hover:bg-primary group-hover:text-background">
          Explore startup MVPs
          <ArrowRight size={16} strokeWidth={1.75} />
        </div>
      </Link>
    </section>
  );
}