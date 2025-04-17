import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjectsPage() {
  const projects = [
    {
      name: "Acharii Market",
      desc: "E-commerce website for ordering homemade Pakistani delicacies.",
      img: "/projects/acharii.png",
      tech: "Stripe, Next.js, MongoDB, AWS, Typescript",
      link: "https://www.achariimarket.com/",
      github: "https://github.com/syedaliasar14/acharii",
    },
    {
      name: "Nimbus",
      desc: "AI therapist for personalized advice, progress tracking, and journaling.",
      img: "/projects/nimbus.png",
      tech: "Next.js, OpenAI, MongoDB, AWS, Typescript",
      link: "https://www.my-nimbus.com/",
    },
    {
      name: "FinExPro",
      desc: "AI Fintech tool for bank examiners.",
      img: "/projects/finexpro.png",
      tech: "Next.js, OpenAI, UBPR Bank API",
      link: "https://finexpro.vercel.app/",
    },
    {
      name: "Todo App",
      desc: "Simple todo list app for creating, retrieving, updating, and deleting tasks.",
      img: "/projects/todoapp.png",
      tech: "Next.js, Express.js, Prisma, MySQL, Tailwind CSS",
      //link: "https://todo-list-frontend-teal.vercel.app/",
      github: "https://github.com/syedaliasar14/todo-list-frontend",
    },
    {
      name: "Studio Art Portfolio Website",
      desc: "Architecture and studio art portfolio website.",
      img: "/projects/sokainawebsite.png",
      tech: "Next.js, React, Typescript",
      link: "https://sokainaasar.com/",
      github: "https://github.com/syedaliasar14/sokaina-website",
    },
    {
      name: "Monster Jobs",
      desc: "Hackathon challenge - AI-powered job board for integrating monsters into the real world.",
      img: "/projects/monsterjobs.png",
      tech: "Next.js, OpenAI, Typescript",
      link: "https://monster-jobs-chi.vercel.app/",
      github: "https://github.com/syedaliasar14/monster-jobs",
    },
  ]

  return (
    <main className="flex flex-col w-full md:w-[48rem] items-center p-8">
      <div className="text-4xl my-20 font-bold text-center">My Projects</div>
      <div className="relative flex flex-col w-full gap-12 mt-8 px-4">
        {projects.map((project, index) => (
          <Link href={project.link || project.github || "#"} target="_blank" key={project.name} className="relative group flex flex-col w-full items-center">
            <div className={`absolute top-0 ${index % 2 === 0 ? 'left-0' : 'right-0'} relative flex justify-center overflow-hidden md:flex w-full md:w-[40rem] h-[120px] md:min-h-[400px] translate-y-8 md:translate-y-0
              rounded-lg border border-slate-800 opacity-90 md:opacity-50 group-hover:opacity-90 transition-opacity duration-300`}>
              <Image
                className="absolute object-cover"
                src={project.img}
                alt={project.name}
                fill
              />
            </div>

            <div className={`md:absolute bottom-0 ${index % 2 === 0 ? 'md:right-0 md:text-right' : 'left-0 text-left'} z-10 w-full md:w-[20rem] p-4 group-hover:scale-105 transition-transform duration-300
              bg-slate-900 border border-slate-800 rounded-lg shadow-md shadow-slate-800`}>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-green-300 transition-colors duration-300">{project.name}</h3>
              <p className="text-slate-400 mb-4">{project.desc}</p>
              <p className="font-semibold italic p-2">{project.tech}</p>
              {project.github && (
                <Link href={project.github} target="_blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="lg"
                    className="px-2 text-slate-400 hover:text-green-300 transition-colors duration-300 hover:cursor-pointer"
                  />
                </Link>
              )}
              {project.link && (
                <Link href={project.link} target="_blank">
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    size="lg"
                    className="px-2 text-slate-400 hover:text-green-300 transition-colors duration-300 hover:cursor-pointer"
                  />
                </Link>
              )}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}