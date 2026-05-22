export default function CookiesFooter() {
  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-800 py-12 px-6">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-white tracking-[0.3em] uppercase font-bold text-lg">ALIBIS</span>
          <span className="text-zinc-600 text-xs tracking-[0.3em] uppercase">
            no excuses just alibis.
          </span>
        </div>

        <nav className="flex items-center gap-8">
          {[
            { label: "Flavors", href: "#flavors" },
            { label: "How It Works", href: "#how-it-works" },
            { label: "Pricing", href: "#pricing" },
            { label: "Order", href: "#order" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-600 hover:text-white uppercase tracking-[0.2em] text-xs transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto max-w-5xl mt-10 pt-6 border-t border-zinc-900">
        <p className="text-center text-zinc-700 text-xs uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} ALIBIS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
