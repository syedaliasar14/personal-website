import { Check } from "lucide-react";

const tiers = [
  {
    name: "Half Dozen",
    count: "6 Cookies",
    price: "$14",
    perCookie: "$2.33 / cookie",
    description: "Perfect for a personal treat or a small gift.",
    features: [
      "6 freshly baked cookies",
      "Choice of available flavors",
      "Next-day delivery",
      "Packaged in signature box",
    ],
    highlight: false,
  },
  {
    name: "The Dozen",
    count: "12 Cookies",
    price: "$24",
    perCookie: "$2.00 / cookie",
    description: "Our most popular box. Great for sharing — or not.",
    features: [
      "12 freshly baked cookies",
      "Mix & match available flavors",
      "Next-day delivery",
      "Packaged in signature box",
      "One free limited flavor add-on",
    ],
    highlight: true,
  },
  {
    name: "Double Down",
    count: "24 Cookies",
    price: "$44",
    perCookie: "$1.83 / cookie",
    description: "For the serious cookie lover. Stock up while you can.",
    features: [
      "24 freshly baked cookies",
      "Mix & match available flavors",
      "Priority next-day delivery",
      "Packaged in signature box",
      "All available limited flavors included",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full bg-white py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="text-zinc-400 uppercase tracking-[0.4em] text-xs mb-4">Pricing</p>
          <h2 className="text-zinc-900 font-bold tracking-tight text-4xl md:text-5xl uppercase">
            Pick Your Box
          </h2>
          <div className="mx-auto mt-6 h-px w-12 bg-zinc-300" />
          <p className="mt-6 text-zinc-500 text-sm max-w-md mx-auto">
            All boxes are baked to order and delivered fresh. No subscriptions. No commitments. Just cookies.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-8 fade-in ${
                tier.highlight
                  ? "bg-zinc-900 text-white"
                  : "bg-white text-zinc-900 border border-zinc-200"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-zinc-900 text-xs uppercase tracking-[0.2em] px-4 py-1 font-semibold">
                  Most Popular
                </span>
              )}

              <div className="flex flex-col gap-1 mb-6">
                <p className="uppercase tracking-[0.3em] text-xs text-zinc-400">
                  {tier.count}
                </p>
                <h3
                  className={`font-bold uppercase tracking-[0.1em] text-xl ${
                    tier.highlight ? "text-white" : "text-zinc-900"
                  }`}
                >
                  {tier.name}
                </h3>
              </div>

              <div className="mb-6">
                <span
                  className={`font-bold text-5xl ${
                    tier.highlight ? "text-white" : "text-zinc-900"
                  }`}
                >
                  {tier.price}
                </span>
                <p
                  className={`text-xs mt-1 ${
                    tier.highlight ? "text-zinc-500" : "text-zinc-400"
                  }`}
                >
                  {tier.perCookie}
                </p>
              </div>

              <p
                className={`text-sm mb-8 ${
                  tier.highlight ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                {tier.description}
              </p>

              <ul className="flex flex-col gap-3 mb-10 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      size={14}
                      className={`mt-0.5 flex-shrink-0 ${
                        tier.highlight ? "text-white" : "text-zinc-900"
                      }`}
                    />
                    <span className={tier.highlight ? "text-zinc-300" : "text-zinc-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#order"
                className={`text-center uppercase tracking-[0.25em] text-xs px-6 py-4 font-semibold transition-colors duration-300 ${
                  tier.highlight
                    ? "bg-white text-zinc-900 hover:bg-zinc-200"
                    : "border border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                Order Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
