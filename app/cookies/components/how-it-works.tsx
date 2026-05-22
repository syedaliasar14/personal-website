const steps = [
  {
    number: "01",
    title: "Orders Open",
    description:
      "Once a month, a limited ordering window opens. We announce the date in advance so you can mark your calendar. Quantities are limited — first come, first served.",
  },
  {
    number: "02",
    title: "Place Your Order",
    description:
      "Choose your box size, select any available limited-time flavors, and submit your order before the window closes. Simple. No accounts required.",
  },
  {
    number: "03",
    title: "Baked Fresh",
    description:
      "After orders close, every cookie is baked to order the very next day — never frozen, never sitting on a shelf. Just fresh, hot-from-the-oven goodness.",
  },
  {
    number: "04",
    title: "Delivered to You",
    description:
      "Your cookies are delivered the same day they're baked. Expect a knock at the door with something worth staying home for.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-white py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="text-zinc-400 uppercase tracking-[0.4em] text-xs mb-4">The Process</p>
          <h2 className="text-zinc-900 font-bold tracking-tight text-4xl md:text-5xl uppercase">
            How It Works
          </h2>
          <div className="mx-auto mt-6 h-px w-12 bg-zinc-300" />
        </div>

        <div className="grid gap-0 md:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative flex flex-col gap-4 px-6 py-8 fade-in ${
                i % 2 === 0 ? "bg-zinc-50" : "bg-white"
              } md:bg-transparent`}
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 right-0 w-px h-6 bg-zinc-200 translate-x-0 z-10" />
              )}

              <span className="text-zinc-200 font-bold text-5xl leading-none select-none">
                {step.number}
              </span>
              <h3 className="text-zinc-900 font-semibold uppercase tracking-[0.15em] text-sm">
                {step.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border border-zinc-200 p-8 text-center">
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xl mx-auto">
            Want to be the first to know when orders open?{" "}
            <a
              href="#order"
              className="text-zinc-900 underline underline-offset-4 hover:text-zinc-600 transition-colors"
            >
              Join the list
            </a>{" "}
            and we'll notify you before the window opens each month.
          </p>
        </div>
      </div>
    </section>
  );
}
