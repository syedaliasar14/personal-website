import Link from "next/link";
import Image from "next/image";
import { projects } from "./data";
import Header from "../components/header";
import Footer from "../components/footer";
import { ExternalLink } from "lucide-react";

export const metadata = {
  title: "Asar Dev Labs | Portfolio",
  description: "Explore a selection of my recent projects, showcasing my expertise in web development and design. From dynamic web applications to sleek portfolio websites, discover how I bring ideas to life with innovative solutions and attention to detail.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col w-full items-center justify-center flex-grow">
      <Header />
      <main className="flex flex-col w-full md:max-w-5xl items-center px-4 flex-grow">
        <div className="self-start mb-12 mt-20">
          <h1 className="text-6xl font-bold self-start">
            Portfolio
          </h1>
        </div>

        <div className="relative flex flex-col w-full gap-16 ">
          {projects.map((project) => (
            <div key={project.slug} className="relative">
              <Link href={`/portfolio/${project.slug}`} className="relative group flex flex-col w-full items-center rounded-lg overflow-hidden border border-slate-800 hover:border-green-300 transition-colors duration-300 ease-in-out">
                <div className={`absolute top-0 relative flex justify-center overflow-hidden flex w-full h-[220px] md:min-h-[400px]`}>
                  <Image className="absolute object-cover group-hover:scale-105 transition-transform duration-300"
                    src={`/portfolio/${project.slug}/1.png`} alt={project.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw" />
                </div>

                <div className="self-start w-full p-4 bg-slate-900">
                  <h2 className="text-3xl font-bold mt-2">{project.name}</h2>
                  <p className="text-xl mb-4">{project.shortDesc}</p>
                  {project.features && (
                    <p className="text-sm line-clamp-2">Features: {project.features.slice(0, 5).join(", ")}</p>
                  )}
                </div>


              </Link>
              <Link href={project.link} target="_blank" className="absolute top-4 right-4 text-sm bg-slate-800 rounded-md px-4 py-1 border border-slate-700 hover:border-green-300 transition-colors duration-300 flex items-center justify-center">
                Visit <ExternalLink className="inline-block ml-2" size={16} strokeWidth={1.25} />
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}