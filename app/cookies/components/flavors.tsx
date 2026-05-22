const staple = {
  tag: "The Staple",
  name: "The Classic",
  description:
    "Our signature cookie. The recipe is a secret — and it stays that way. All we'll say is: once you try it, you'll understand why there are no excuses not to order.",
  available: "Available every month",
  badge: "★ Best Seller",
};

const limitedFlavors = [
  {
    name: "Matcha Piccu",
    description: "Ceremonial grade matcha, roasted pistachios, and premium white chocolate chips. Earthy, nutty, sweet.",
    tags: ["Matcha", "Pistachio", "White Chocolate"],
  },
  {
    name: "Midnight Mocha",
    description: "Single-origin dark chocolate chunks folded into an espresso-spiked dough. Bold, bitter, unapologetic.",
    tags: ["Dark Chocolate", "Espresso"],
  },
  {
    name: "Brown Butter Bliss",
    description: "Browned butter dough with a ribbon of salted caramel and fleur de sel on top. Simple perfection.",
    tags: ["Brown Butter", "Salted Caramel", "Sea Salt"],
  },
  {
    name: "The Diplomat",
    description: "Hazelnut praline, dark chocolate, and a generous pinch of sea salt. Sophisticated and indulgent.",
    tags: ["Hazelnut", "Dark Chocolate", "Sea Salt"],
  },
  {
    name: "Citrus Dream",
    description: "Meyer lemon zest brightened with white chocolate chips and a touch of vanilla bean. Light and refreshing.",
    tags: ["Lemon", "White Chocolate", "Vanilla"],
  },
];

export default function Flavors() {
  return (
    <section id="flavors" className="w-full bg-zinc-900 py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="text-zinc-500 uppercase tracking-[0.4em] text-xs mb-4">The Menu</p>
          <h2 className="text-white font-bold tracking-tight text-4xl md:text-5xl uppercase">
            Our Flavors
          </h2>
          <div className="mx-auto mt-6 h-px w-12 bg-zinc-700" />
        </div>

        {/* Staple cookie */}
        <div className="mb-12 border border-zinc-700 p-8 md:p-12 relative overflow-hidden fade-in">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.04),_transparent_60%)]" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 border border-zinc-700 px-3 py-1">
                  {staple.tag}
                </span>
                <span className="text-xs uppercase tracking-[0.3em] text-white border border-white px-3 py-1">
                  {staple.badge}
                </span>
              </div>
              <h3 className="text-white font-bold text-3xl md:text-4xl uppercase tracking-[0.1em]">
                {staple.name}
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg">
                {staple.description}
              </p>
            </div>
            <div className="flex-shrink-0">
              <p className="text-zinc-600 uppercase tracking-[0.2em] text-xs text-right">
                {staple.available}
              </p>
            </div>
          </div>
        </div>

        {/* Limited time flavors */}
        <div className="mb-8">
          <p className="text-zinc-500 uppercase tracking-[0.4em] text-xs mb-6">
            Limited Time Flavors
          </p>
          <p className="text-zinc-500 text-sm mb-8">
            Each month features one or two rotating limited-time flavors. Once they're gone, they're gone.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {limitedFlavors.map((flavor) => (
            <div
              key={flavor.name}
              className="border border-zinc-800 p-6 flex flex-col gap-3 hover:border-zinc-600 transition-colors duration-300 fade-in"
            >
              <h3 className="text-white font-semibold uppercase tracking-[0.15em] text-sm">
                {flavor.name}
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed flex-1">{flavor.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {flavor.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-zinc-600 text-xs uppercase tracking-[0.1em] border border-zinc-800 px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
