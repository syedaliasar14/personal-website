"use client";

import { useState } from "react";

export default function OrderCta() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <section id="order" className="w-full bg-zinc-900 py-24 px-6">
      <div className="mx-auto max-w-3xl text-center flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <p className="text-zinc-500 uppercase tracking-[0.4em] text-xs">Next Drop</p>
          <h2 className="text-white font-bold tracking-tight text-4xl md:text-5xl uppercase">
            Don&apos;t Miss Out
          </h2>
          <div className="h-px w-12 bg-zinc-700" />
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md">
            Orders open once a month for a limited window. Drop your email and we&apos;ll let you
            know the moment the next batch opens for orders.
          </p>
        </div>

        {submitted ? (
          <div className="border border-zinc-700 px-8 py-6 text-center">
            <p className="text-white uppercase tracking-[0.2em] text-sm font-semibold">
              You&apos;re on the list.
            </p>
            <p className="text-zinc-500 text-xs mt-2">
              We&apos;ll reach out when the next drop is ready.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 w-full max-w-md">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-zinc-800 border border-zinc-700 text-white text-sm px-5 py-4 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500"
            />
            <button
              type="submit"
              className="bg-white text-zinc-900 uppercase tracking-[0.2em] text-xs px-6 py-4 font-semibold hover:bg-zinc-200 transition-colors duration-300 whitespace-nowrap"
            >
              Notify Me
            </button>
          </form>
        )}

        <p className="text-zinc-600 text-xs uppercase tracking-[0.2em]">
          No spam. Unsubscribe any time.
        </p>
      </div>
    </section>
  );
}
