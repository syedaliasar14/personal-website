import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BriefcaseBusiness, Rocket } from "lucide-react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ServicesOptions from "../../components/services-options";

export const metadata = {
  title: "Asar Dev Labs",
  description: "Asar Dev Labs is a web development service by Ali Asar. I design and develop custom web experiences that don't just look great, but help you attract users, validate your idea, and grow.",
};

export default function DevLabsPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full max-w-6xl items-center px-4 pb-24 pt-16 flex-grow mx-auto">
        <section className="relative w-full my-10">
          <div className="relative flex md:flex-row flex-col-reverse items-start gap-8">
            <div className="max-w-4xl space-y-4 flex flex-col">
              <span className="inline-flex self-center md:self-start rounded-full border border-green-300/40 bg-green-300/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-green-200">
                Services
              </span>
              <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
                What Can I Build For You?
              </h1>
              <p className="text-lg leading-8 text-slate-300 md:text-xl">
                Whether you need a business website that actually converts or a startup MVP that goes beyond just looking good, the work is custom, strategic, and built to help you move forward with confidence.
              </p>
            </div>
            <Image src={"/devlabs-logo-full-dark.svg"} alt="Asar Dev Labs Logo" width={120} height={120} className="self-center"/>
          </div>
        </section>

        <ServicesOptions />

      </main>
      <Footer />
    </>
  )
}