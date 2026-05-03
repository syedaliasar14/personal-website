import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import Footer from "../components/footer";
import Header from "../components/header";
import { projects } from "./data";

export const metadata = {
  title: "Asar Dev Labs | Portfolio",
  description: "Explore a selection of my recent projects, showcasing my expertise in web development and design. From dynamic web applications to sleek portfolio websites, discover how I bring ideas to life with innovative solutions and attention to detail.",
};

export default function ProjectsPage() {
  const totalFeatures = projects.reduce((count, project) => count + (project.features?.length ?? 0), 0);

  return (
    <div className="flex flex-col w-full items-center justify-center flex-grow">
      <Header />
      <main className="flex flex-col w-full max-w-6xl px-4 pb-20 pt-20 flex-grow">
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(134,239,172,0.2),_transparent_35%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(2,6,23,0.92))] px-6 py-10 md:px-10 md:py-14">
          <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[linear-gradient(180deg,rgba(134,239,172,0.14),transparent)] blur-3xl md:block" />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-5">
              <span className="inline-flex rounded-full border border-green-300/40 bg-green-300/10 px-4 py-2 text-sm uppercase tracking-[0.24em] text-green-200">
                Portfolio Work
              </span>
              <div className="space-y-4">
                <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-7xl">
                  Websites and products delivered for growth
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                  A mix of startup products, business sites, and portfolio builds focused on strong visual direction, clear user flow, and smart lead generation.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 rounded-[1.5rem] border border-slate-800 bg-slate-950/50 p-4 text-sm text-slate-300 md:min-w-[240px]">
              <div>
                <p className="text-3xl font-semibold text-white">{projects.length}+</p>
                <p className="mt-1">Projects featured</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">{totalFeatures}+</p>
                <p className="mt-1">Key features shipped</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid w-full gap-8">
          {projects.map((project, index) => (
            <article key={project.slug} className="group relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/75 transition-all duration-300 hover:border-green-300/60 hover:shadow-[0_18px_80px_rgba(16,185,129,0.8)]">
              <div className="grid gap-0">
                <Link href={`/portfolio/${project.slug}`} className={`relative min-h-[280px] overflow-hidden lg:min-h-[420px]`}>
                  <Image
                    className="object-cover transition-transform duration-700 object-top"
                    src={`/portfolio/${project.slug}/1.png`}
                    alt={project.name} fill sizes="(max-width: 1024px) 100vw"
                  />
                  <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-200">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </Link>

                <div className={`flex flex-col justify-between gap-8 p-6 md:p-8 lg:p-10 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="space-y-5">
                    <div className="space-y-3">
                      <p className="text-sm uppercase tracking-[0.24em] text-green-200/90">{project.shortDesc}</p>
                      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{project.name}</h2>
                    </div>

                    {project.features && project.features.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.features.slice(0, 6).map((feature) => (
                          <span key={feature} className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs uppercase tracking-[0.15em] text-slate-200 whitespace-nowrap">
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link href={`/portfolio/${project.slug}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-green-300 bg-green-300 px-5 py-3 text-sm font-medium text-slate-900 transition-colors duration-300 hover:bg-transparent hover:text-green-300">
                      View details
                      <ArrowRight size={16} strokeWidth={1.75} />
                    </Link>
                    <Link href={project.link} target="_blank" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm text-slate-200 transition-colors duration-300 hover:border-green-300 hover:text-green-300">
                      Visit live site
                      <ExternalLink size={16} strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-20 rounded-3xl border border-slate-800 bg-slate-900/60 px-6 py-8 text-center md:px-10">
          <Image src="/devlabs-logo.svg" alt="Asar Dev Labs Logo" width={48} height={48} className="mx-auto mb-3" />
          <p className="text-sm uppercase tracking-[0.26em] text-green-200">Need something custom?</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">I design and build sites that give your product a stronger first impression.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            If you want a business website, startup MVP, or portfolio that feels more deliberate than template work, let's connect.
          </p>
          <div className="mt-6 flex justify-center">
            <Link href="/contact" className="btn">
              Get in touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}