import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      name: "Nimbus", 
      desc: "A personal AI therapist, utilizing ChatGPT's API.",
      img: "/projects/nimbus.png",
      tech: "Next.js, OpenAI, Typescript",
      link: "https://www.my-nimbus.com/",
    },
    {
      name: "Sokaina Asar Portfolio Website",
      desc: "My sister's architecture and studio art portfolio website.",
      img: "/projects/sokainawebsite.png",
      tech: "Next.js, React, Typescript",
      link: "https://sokainaasar.com/",
    }
  ]

  return (
    <main className="flex flex-col w-full items-center p-8">
      <div className="text-4xl my-20 font-bold text-center">My Projects</div>
      <div className="relative flex flex-col w-full gap-12 mt-8 px-4">
        {projects.map((project, index) => (
          <Link href={project.link} target="_blank" key={project.name} className="relative group flex flex-col w-full items-center">
            <div className={`absolute top-0 ${index % 2 === 0 ? 'left-0' : 'right-0'} relative flex justify-center overflow-hidden hidden md:flex w-full md:w-[40rem] min-h-[400px] 
              rounded-lg border border-slate-800 opacity-50 group-hover:opacity-90 transition-opacity duration-300`}>
              <Image 
                className="absolute"
                src={project.img}
                alt={project.name} 
                fill
                objectFit="cover"
              />
            </div>

            <div className={`md:absolute bottom-0 ${index % 2 === 0 ? 'md:right-0 md:text-right' : 'left-0 text-left'} w-full md:w-[20rem] p-4 group-hover:scale-105 transition-transform duration-300
              bg-slate-900 border border-slate-800 rounded-lg shadow-md shadow-slate-800`}>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-green-300 transition-colors duration-300">{project.name}</h3>
              <p className="text-slate-400 mb-4">{project.desc}</p>
              <p className="font-semibold italic p-2">{project.tech}</p>
              <Link href={project.link} target="_blank">
                <FontAwesomeIcon 
                  icon={faArrowUpRightFromSquare} 
                  size="lg"
                  className="px-2 text-slate-400 hover:text-green-300 transition-colors duration-300 hover:cursor-pointer"
                />
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}