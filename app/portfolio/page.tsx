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
      <main className="flex flex-col w-full py-24 flex-grow items-center">
        <section className="relative mt-12 max-w-6xl px-4">
          <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-5">
              <div className="space-y-4">
                <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
                  The Portfolio
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
          <ChevronDown className="size-8 opacity-80 text-foreground mx-auto mt-20 mb-4 stroke-[1.5]" />
        </section>

        <section className="grid w-full px-4 py-24 bg-foreground text-secondary" id="projects">
          <div className="grid w-full gap-24 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <article key={project.slug} className="group relative overflow-hidden">
                <div className={`flex flex-col justify-between gap-8 md:p-8 lg:p-10 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="space-y-5">
                    <div className="space-y-3">
                      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{project.name}</h2>
                      <p className="text-xs uppercase tracking-[0.16em] text-secondary/90">{project.shortDesc}</p>
                    </div>

                    <Link href={`/portfolio/${project.slug}`} className={`grid relative rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.1)] min-h-[280px] overflow-hidden lg:min-h-[420px]`}>
                      <Image
                        className="object-cover transition-transform duration-700 object-top"
                        src={`/portfolio/${project.slug}/1.png`}
                        alt={project.name} fill sizes="(max-width: 1024px) 100vw"
                      />
                    </Link>

                    {/* {project.features && project.features.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.features.slice(0, 3).map((feature) => (
                          <span key={feature} className="pill-solid text-xs tracking-[0.16em] opacity-90">
                            {feature}
                          </span>
                        ))}
                      </div>
                    )} */}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link href={project.link} target="_blank" className="inline-flex items-center justify-center gap-2 btn text-sm">
                      Visit live site
                      <ExternalLink size={16} strokeWidth={1.5} />
                    </Link>
                    <Link href={`/portfolio/${project.slug}`} className="inline-flex items-center justify-center gap-2 btn-outline text-sm">
                      View details
                      <ArrowRight size={16} strokeWidth={1.75} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 text-center md:px-10">
          <Image src="/devlabs-logo.svg" alt="Asar Dev Labs Logo" width={48} height={48} className="mx-auto mb-3" />
          <p className="text-sm uppercase tracking-[0.26em] text-green-200">Like what you see?</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Ready to get started?</h2>
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