import Link from "next/link";
import { ArrowRight, Check, CircleDollarSign, Plus, PlusCircle } from "lucide-react";

const pricingTiers = [
  {
    name: "Business Website",
    price: "$800",
    summary: "The essentials you need to establish your online presence and turn visitors into customers.",
    features: [
      "Up to 8 pages",
      "Custom & mobile-friendly design",
      "Simple contact form",
      "Editable content (text, images, etc.)",
      "SEO optimization",
    ],
  },
];

const addOns = [
  {
    name: "Portfolio",
    price: "$200",
  },
  {
    name: "Blog",
    price: "$200",
  },
  {
    name: "Booking System",
    price: "$300",
  },
  {
    name: "5 Additional Pages",
    price: "$200",
  },
  {
    name: "E-commerce Integration",
    price: "$500",
  },
  {
    name: "Analytics Setup",
    price: "$100",
  },
];

export default function PricingSection() {
  return (
    <>
      <section id="pricing" className="py-20 bg-foreground w-full text-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="pill-solid">Pricing</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl text-balance">Pricing options for any stage of your business</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <article key={tier.name} className={`relative rounded-[1.75rem] border p-6 ${index === 1 ? "border-green-300" : "border-slate-200"}`}>
                <CircleDollarSign className="absolute top-6 right-6 text-green-500 flex-shrink-0" size={24} strokeWidth={1.5} />

                <p className="text-xs">Starting at</p>
                <p className="mt-2 text-5xl font-bold">{tier.price}</p>
                <h3 className="mt-2 text-2xl font-semibold">{tier.name}</h3>
                <p className="mt-3 text-sm leading-7">{tier.summary}</p>

                <div className="mt-6 space-y-3 text-sm">
                  {tier.features.map((feature) => (
                    <p key={feature} className="flex items-start gap-3 leading-7">
                      <Check className="mt-1 shrink-0 text-green-500" size={16} strokeWidth={2} />
                      <span>{feature}</span>
                    </p>
                  ))}
                </div>

                <Link href="/contact" className="btn mt-6 text-sm w-full inline-flex items-center justify-center gap-2">
                  Get started
                  <ArrowRight size={16} strokeWidth={1.75} />
                </Link>
              </article>
            ))}

            <article className={`flex flex-col relative rounded-[1.75rem] p-6 md:col-span-2`}>
              <h3 className="mt-2 text-3xl font-semibold">Add-on Features</h3>
              <p className="mt-2 text-sm leading-7">
                Every business needs something different. Make sure to mention any specific features or requirements you have when reaching out.
              </p>

              <div className="mt-6 grid gap-3 grid-cols-1 sm:grid-cols-2">
                {addOns.map((addOn) => (
                  <div key={addOn.name} className="flex items-center justify-between gap-3 px-3 py-2 border border-slate-200 rounded-full transition-colors">
                    <div className="flex items-center gap-2">
                      <PlusCircle className="shrink-0 text-green-500" size={18} strokeWidth={2} />
                      <span className="font-medium text-slate-900">{addOn.name}</span>
                    </div>
                    <span className="font-semibold">{addOn.price}</span>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground text-xs mt-6">
                Don't see what you're looking for? <Link href="/contact" className="text-green-500 underline">Let me know</Link> and we'll see what we can do.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="pt-12 w-full px-4 flex items-center justify-center">
        <div className="mt-8 max-w-3xl p-6 md:p-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Looking for something else?</h1>
          <p className="opacity-80 mt-4 leading-7">
            Need a more custom solution, or want to talk through what features would be best for your business? Reach out and we can discuss something that works for you.
          </p>
          <div className="mt-5 flex flex-col md:flex-row items-start gap-4">
            <Link href="/contact" className="btn inline-flex items-center gap-2">
              Let's discuss
              <ArrowRight size={16} strokeWidth={1.75} />
            </Link>
            <Link href="devlabs" className="btn-outline inline-flex items-center">
              Other services
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}