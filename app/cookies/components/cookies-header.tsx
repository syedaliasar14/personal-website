"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";

export default function CookiesHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Flavors", href: "#flavors" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-zinc-900 border-b border-zinc-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link href="/cookies" className="text-white tracking-[0.3em] uppercase font-bold text-lg">
          ALIBIS
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-400 hover:text-white uppercase tracking-[0.2em] text-xs transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#order"
            className="border border-white text-white uppercase tracking-[0.2em] text-xs px-5 py-2.5 hover:bg-white hover:text-zinc-900 transition-colors duration-300"
          >
            Order Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 px-6 pb-6 flex flex-col gap-5 pt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-zinc-400 hover:text-white uppercase tracking-[0.2em] text-xs transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#order"
            onClick={() => setMobileOpen(false)}
            className="border border-white text-white uppercase tracking-[0.2em] text-xs px-5 py-2.5 text-center hover:bg-white hover:text-zinc-900 transition-colors duration-300"
          >
            Order Now
          </a>
        </div>
      )}
    </header>
  );
}
