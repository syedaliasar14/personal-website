import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, ExternalLink } from "lucide-react";
import Footer from "../../components/footer";
import Header from "../../components/header";
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
      <main className="flex flex-col w-full max-w-6xl px-4 py-24 flex-grow">
        <section className="relative my-12">
          <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-5">
              <Link href="#projects" className="text-pill flex items-center w-max">
                Portfolio
                <ChevronDown className="ml-2 text-green-200" size={16} strokeWidth={1.5} />
              </Link>
              <div className="space-y-4">
                <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
                  Delivered for your growth
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                  A collection of business sites, web applications and SaaS products focused on client engagement, clear user flow, and smart lead generation.
                </p>
              </div>
            </div>

            <div className="radial-card grid min-w-0 grid-cols-2 gap-3 rounded-[1.5rem] bg-slate-950/50 p-4 text-sm text-slate-300 md:min-w-[240px]">
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

        <section className="my-10 grid w-full gap-24" id="projects">
          {projects.map((project, index) => (
            <article key={project.slug} className="group relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900/75 transition-all duration-300 hover:border-green-300/60 hover:shadow-[0_18px_80px_rgba(16,185,129,0.8)]">
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
                    <Link href={`/portfolio/${project.slug}`} className="inline-flex items-center justify-center gap-2 rounded-full btn text-sm">
                      View project
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

        <section className="mt-20 text-center md:px-10">
          <Image src="/devlabs-logo.svg" alt="Asar Dev Labs Logo" width={48} height={48} className="mx-auto mb-3" />
          <p className="text-sm uppercase tracking-[0.26em] text-green-200">Like what you see?</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Ready to get started?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">
            If you want a custom site, web application or SaaS product built and tailored to your vision, let's connect.
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