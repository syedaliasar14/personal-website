import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projects } from "./data";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col w-full md:w-[48rem] items-center">
      <div className="relative">
        <h1 className="text-6xl font-bold text-center mt-20 mb-12">
          Portfolio
        </h1>
      </div>
      <div className="relative flex flex-col w-full gap-16 px-4">
        {projects.map((project, index) => (
          <Link href={project.link || project.github || "#"} target="_blank" key={project.name} className="relative group flex flex-col w-full items-center rounded-lg overflow-hidden border border-slate-800 hover:border-green-300 transition-colors duration-300">
            <div className={`absolute top-0 relative flex justify-center overflow-hidden flex w-full h-[220px] md:min-h-[400px]`}>
              <Image className="absolute object-cover group-hover:scale-105 transition-transform duration-300" src={project.img} alt={project.name} fill sizes=""/>
            </div>

            <div className="self-start w-full p-4 bg-slate-900">
              <h2 className="text-3xl font-bold my-2">{project.name}</h2>
              <p className="text-slate-400 mb-4">{project.desc}</p>
              <p className="font-semibold italic p-2">{project.tech}</p>
            </div>

            {/* <div className={`md:absolute -bottom-8 ${index % 2 === 0 ? 'md:right-0 md:text-right' : 'left-0 text-left'} z-10 w-full md:w-[20rem] p-4 group-hover:scale-105 transition-transform duration-300
              bg-slate-900 border border-slate-800 rounded-lg shadow-md shadow-slate-800`}>
              <h2 className="text-2xl font-bold mb-2 group-hover:text-green-300 transition-colors duration-300">{project.name}</h2>
              <p className="text-slate-400 mb-4">{project.desc}</p>
              <p className="font-semibold italic p-2">{project.tech}</p>
              {project.github && (
                <Link href={project.github} target="_blank">
                  <FontAwesomeIcon icon={faGithub} size="lg" className="px-2 text-slate-400 hover:text-green-300 transition-colors duration-300 hover:cursor-pointer" />
                </Link>
              )}
              {project.link && (
                <Link href={project.link} target="_blank">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" className="px-2 text-slate-400 hover:text-green-300 transition-colors duration-300 hover:cursor-pointer" />
                </Link>
              )}
            </div> */}
          </Link>
        ))}
      </div>
    </main>
  );
}