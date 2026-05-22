"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export default function CookiesHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center bg-zinc-900 px-6 text-center overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

      <div
        className={`relative z-10 flex flex-col items-center gap-6 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-zinc-500 uppercase tracking-[0.5em] text-xs">
          Small batch · Handcrafted
        </p>

        <h1 className="text-white font-bold tracking-[0.15em] uppercase text-7xl md:text-[9rem] leading-none">
          ALIBIS
        </h1>

        <p className="text-zinc-300 tracking-[0.3em] uppercase text-sm md:text-base">
          no excuses just alibis.
        </p>

        <div className="mt-6 h-px w-16 bg-zinc-600" />

        <p className="max-w-md text-zinc-400 text-sm md:text-base leading-relaxed">
          Freshly baked, made-to-order cookies. Once a month. Delivered to your door.
        </p>

        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <a
            href="#order"
            className="bg-white text-zinc-900 uppercase tracking-[0.25em] text-xs px-8 py-4 font-semibold hover:bg-zinc-200 transition-colors duration-300"
          >
            Place an Order
          </a>
          <a
            href="#flavors"
            className="border border-zinc-600 text-white uppercase tracking-[0.25em] text-xs px-8 py-4 hover:border-white transition-colors duration-300"
          >
            Explore Flavors
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 animate-bounce">
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
