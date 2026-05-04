import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="mt-16 rounded-[2rem] border border-slate-800 bg-[linear-gradient(135deg,rgba(15,23,42,0.92),rgba(2,6,23,0.96))] p-6 md:p-10">
      <p className="text-sm uppercase tracking-[0.28em] text-green-200">Pricing</p>
      <h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">MVP pricing depends on product complexity, features, and infrastructure needs.</h2>
      <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
        Startup builds may vary too much to gauge pricing accurately. A lightweight dashboard with login is different from an app with payments, onboarding, admin tooling, and cloud infrastructure. The right price depends on what version you truly need.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/contact" className="btn inline-flex items-center justify-center gap-2">
          Let&apos;s discuss pricing
          <ArrowRight size={16} strokeWidth={1.75} />
        </Link>
      </div>
    </section>
  );
}