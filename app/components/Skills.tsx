import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Skills() {
  const skills = [
    { name: "Next.js", heart: true, desc: "Web Development", src: "/skills/nextjs-icon.svg" },
    { name: "React", heart: true, desc: "Web Development", src: "/skills/React-icon.svg" },
    { name: "Typescript", heart: true, desc: "Web Development", src: "/skills/Typescript_logo_2020.svg" },
    { name: "AWS", heart: true, desc: "Cloud Services", src: "/skills/Amazon_Web_Services_Logo.svg" },
    { name: "Python", heart: true, desc: "Programming Language", src: "/skills/Python-logo-notext.svg" },
    { name: "Tailwind CSS", heart: true, desc: "UI/UX", src: "/skills/Tailwind_CSS_Logo.svg" },
    { name: "SQL", heart: true, desc: "Database", src: "/skills/Sql_data_base_with_logo.svg" },
    { name: "PostgreSQL", heart: true, desc: "Database", src: "/skills/Postgresql_elephant.svg" },
    { name: "Javascript", heart: true, desc: "Programming Language", src: "/skills/Unofficial_JavaScript_logo_2.svg" },
    { name: "HTML", heart: false, desc: "Web Development", src: "/skills/HTML5_Badge.svg" },
    { name: "CSS", heart: false, desc: "Web Development", src: "/skills/CSS3_logo.svg" },
    { name: "Git", heart: false, desc: "Version Control", src: "/skills/Git_icon.svg" },
    { name: "MongoDB", heart: false, desc: "Database", src: "/skills/mongodb.svg" },
    { name: "Convex", heart: false, desc: "Database", src: "/skills/default_f1d33b63d360437ba28c8ac981dd68d7d2478b22.png" },
    { name: "NextAuth", heart: false, desc: "Authentication", src: "/skills/logo-sm.png" },
    { name: "Clerk", heart: false, desc: "Authentication", src: "/skills/9d8bc340-e63d-11ee-b074-b5c8fe3ef189-clerk.avif" },
    { name: "Stripe", heart: false, desc: "Payment Gateway", src: "/skills/498440.webp" },
    { name: "React Native", heart: true, desc: "Mobile Development", src: "/skills/react-native-1.svg" },
    { name: "Guidewire", heart: false, desc: "Insurance Software", src: "/skills/664e008f9b0dc9096b60f152_aba581be-beae-5ac8-b583-da7620f71628.svg" },
    { name: "C/C++", heart: false, desc: "Programming Language", src: "/skills/ISO_C++_Logo.svg.png" },
    { name: "Java", heart: false, desc: "Programming Language", src: "/skills/181_Java_logo_logos-512.webp" },
    { name: "PHP", heart: false, desc: "Programming Language", src: "/skills/php.svg" },
    { name: "REST/SOAP", heart: false, desc: "API", src: "/skills/1579816811751.png" },
    { name: "Lua", heart: false, desc: "Programming Language", src: "/skills/Lua-Logo.svg" },
  ];


  return (
    <section className="flex flex-col w-full items-center gap-8 my-24 px-8 text-center text-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-full relative hover:scale-105 hover:bg-slate-800 hover:text-green-300 transition-transform duration-200 ease-in-out flex items-center justify-start gap-4 p-4 border border-slate-800 rounded-lg shadow-md shadow-slate-800"
          >
            {/* {skill.heart && (
              <span className="absolute top-2 right-2 z-20">
                <FontAwesomeIcon icon={faHeart} />
              </span>
            )} */}
            <span className="min-w-16 min-h-16 rounded-lg bg-slate-600 flex items-center justify-center">
              <Image src={skill.src} alt={skill.name} width={48} height={48} />
            </span>
            <div className="flex flex-col w-full text-left">
              <span className="font-semibold">{skill.name}</span>
              <span className="text-slate-400">{skill.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}