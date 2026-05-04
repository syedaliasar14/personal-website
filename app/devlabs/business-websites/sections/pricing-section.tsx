import Link from "next/link";
import { ArrowRight, Check, CircleDollarSign } from "lucide-react";

const pricingTiers = [
  {
    name: "Base Website",
    price: "$500",
    summary: "A clean, modern website for businesses that need a credible online presence fast.",
    features: ["Custom landing page design", "Core business pages", "Mobile-friendly layout", "Contact call-to-action setup"],
  },
  {
    name: "Business Package",
    price: "$1200",
    summary: "Built for businesses that want stronger lead flow, more insight, and more serious conversion support.",
    features: ["Everything in Base Website", "Advanced lead forms", "Analytics setup", "Conversion-focused page structure", "More tailored page strategy"],
  },
  {
    name: "Add-On",
    price: "Custom",
    summary: "Optional upgrades when your business needs functionality beyond a marketing site.",
    features: ["Payment processor integration", "Booking or inquiry workflows", "Extra pages", "Custom scoped enhancements"],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="mt-16">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.28em] text-green-200">Pricing</p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Package options for any stage of your business</h2>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {pricingTiers.map((tier, index) => (
          <article
            key={tier.name}
            className={`rounded-[1.75rem] border p-6 ${index === 1 ? "border-green-300 bg-[linear-gradient(180deg,rgba(134,239,172,0.12),rgba(15,23,42,0.9))]" : "border-slate-800 bg-slate-900/70"}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold">{tier.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{tier.summary}</p>
              </div>
              <CircleDollarSign className="text-green-300" size={24} strokeWidth={1.5} />
            </div>
            <p className="mt-6 text-4xl font-bold">{tier.price}</p>
            <div className="mt-6 space-y-3 text-sm text-slate-200">
              {tier.features.map((feature) => (
                <p key={feature} className="flex items-start gap-3 leading-7">
                  <Check className="mt-1 shrink-0 text-green-300" size={16} strokeWidth={2} />
                  <span>{feature}</span>
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 rounded-[1.75rem] border border-slate-800 bg-slate-900/70 p-6 md:p-8">
        <p className="text-base leading-8 text-slate-300">
          Need something between these options or want a custom quote based on your exact goals? Reach out and I can scope the right setup for your business.
        </p>
        <div className="mt-5">
          <Link href="/contact" className="btn inline-flex items-center gap-2">
            Talk about your website
            <ArrowRight size={16} strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </section>
  );
}