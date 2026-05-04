"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Rocket } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import ServicesOptions from "../components/services-options";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Header />
      <main className="flex flex-col w-full items-center px-4 pb-24 pt-16 max-w-6xl flex-grow">
        <section className="relative w-full max-w-6xl my-10">
          <div className="absolute -left-12 h-48 w-48 rounded-full bg-green-300/30 blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-14">
            <div className={`relative mx-auto h-[280px] w-[280px] overflow-hidden rounded-full border border-green-300/60 bg-slate-900 shadow-[0_20px_80px_rgba(16,185,129,0.14)] md:h-[340px] md:w-[340px] ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
              <Image
                src="/me.JPG"
                alt="Syed Ali Asar"
                className="object-cover"
                fill sizes="(max-width: 768px) 280px, 340px" priority
              />
            </div>

            <div className={`flex flex-col justify-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} transition-all duration-1000`}>
              <span className="inline-flex w-fit rounded-full border border-green-300/40 bg-green-300/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-green-200">
                Syed Ali Asar
              </span>
              <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
                Web developer for your <span className="text-green-400">business</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-2xl md:leading-10">
                If you're a business owner who needs a high-converting website or a startup founder building your MVP, I design and develop custom web experiences that don't just look great, but help you attract users, validate your idea, and grow.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="/devlabs" className="btn inline-flex w-fit items-center gap-2">
                  Explore services
                  <ArrowRight size={16} strokeWidth={1.75} />
                </Link>
                <Link href="/portfolio" className="btn-outline inline-flex w-fit items-center gap-2">
                  View portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ServicesOptions />

        <Link href="/devlabs" className="mt-12 inline-flex items-center justify-center p-6 opacity-80 transition-all duration-300 hover:opacity-100">
          <Image src="/devlabs-logo-full-dark.svg" alt="Asar Dev Labs Logo" width={160} height={48} />
        </Link>
      </main>
      <Footer />
    </>
  );
}
