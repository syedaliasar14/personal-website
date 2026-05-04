import { ArrowRight, BriefcaseBusiness, Rocket } from "lucide-react";
import Link from "next/link";

export default function ServicesOptions() {
  return (
    <section className="mt-10 grid w-full gap-6 lg:grid-cols-2">
      <Link href="/devlabs/business-websites"
        className="group rounded-[1.75rem] border border-slate-800 bg-slate-900/70 p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-green-300/60 radial-gradient-bg"
      >
        <BriefcaseBusiness className="text-green-300" size={26} strokeWidth={1.5} />
        <p className="mt-5 text-sm uppercase tracking-[0.26em] text-green-200">Business websites</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Get more customers with a site that feels credible and converts.</h2>
        <p className="mt-4 text-base leading-8 text-slate-300">
          Best for business owners who need stronger messaging, a sharper brand presentation, and a website built to turn visitors into real inquiries.
        </p>
        <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-green-200 group-hover:text-green-300">
          Explore business websites
          <ArrowRight size={16} strokeWidth={1.75} />
        </div>
      </Link>

      <Link
        href="/devlabs/startup-mvp"
        className="group rounded-[1.75rem] border border-slate-800 bg-slate-900/70 p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-green-300/60 radial-gradient-bg"
      >
        <Rocket className="text-green-300" size={26} strokeWidth={1.5} />
        <p className="mt-5 text-sm uppercase tracking-[0.26em] text-green-200">Startup MVPs</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Build the first version of your product with real structure behind it.</h2>
        <p className="mt-4 text-base leading-8 text-slate-300">
          Best for founders who need more than design polish and want help thinking through product scope, infrastructure, and what version one actually needs.
        </p>
        <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-green-200 group-hover:text-green-300">
          Explore startup MVPs
          <ArrowRight size={16} strokeWidth={1.75} />
        </div>
      </Link>
    </section>
  );
}