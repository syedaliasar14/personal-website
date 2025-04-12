import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Skills() {
  const skills = [
    { name: "Python", heart: true, desc: "Programming Language", src: "/skills/Python-logo-notext.svg" },
    { name: "Java", heart: false, desc: "Programming Language", src: "/skills/181_Java_logo_logos-512.webp" },
    { name: "Guidewire", heart: false, desc: "Insurance Software", src: "/skills/664e008f9b0dc9096b60f152_aba581be-beae-5ac8-b583-da7620f71628.svg" },
    { name: "AWS", heart: true, desc: "Cloud Services", src: "/skills/Amazon_Web_Services_Logo.svg" },
    { name: "React", heart: true, desc: "Web Development", src: "/skills/React-icon.svg" },
    { name: "Next.js", heart: true, desc: "Web Development", src: "/skills/nextjs-icon.svg" },
    { name: "Angular", heart: false, desc: "Web Development", src: "/skills/Angular_full_color_logo.svg.png" },
    { name: "Typescript", heart: true, desc: "Web Development", src: "/skills/Typescript_logo_2020.svg" },
    { name: "Javascript", heart: true, desc: "Programming Language", src: "/skills/Unofficial_JavaScript_logo_2.svg" },
    { name: "HTML", heart: false, desc: "Web Development", src: "/skills/HTML5_Badge.svg" },
    { name: "CSS", heart: false, desc: "Web Development", src: "/skills/CSS3_logo.svg" },
    { name: "Git", heart: false, desc: "Version Control", src: "/skills/Git_icon.svg" },
    { name: "Tailwind CSS", heart: true, desc: "UI/UX", src: "/skills/Tailwind_CSS_Logo.svg" },
    { name: "SQL", heart: true, desc: "Database", src: "/skills/Sql_data_base_with_logo.svg" },
    { name: "PostgreSQL", heart: true, desc: "Database", src: "/skills/Postgresql_elephant.svg" },
    { name: "MongoDB", heart: false, desc: "Database", src: "/skills/mongodb.svg" },
    { name: "REST/SOAP", heart: false, desc: "API", src: "/skills/1579816811751.png" },
    { name: "NextAuth", heart: false, desc: "Authentication", src: "/skills/logo-sm.png" },
    { name: "Stripe", heart: false, desc: "Payment Gateway", src: "/skills/498440.webp" },
    { name: "React Native", heart: true, desc: "Mobile Development", src: "/skills/react-native-1.svg" },
    { name: "C/C++", heart: false, desc: "Programming Language", src: "/skills/ISO_C++_Logo.svg.png" },
    { name: "PHP", heart: false, desc: "Programming Language", src: "/skills/php.svg" },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-8 my-24 md:px-8 text-center text-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-full relative hover:scale-105 hover:bg-slate-800 hover:text-green-300 transition-transform duration-200 ease-in-out flex items-center justify-start gap-4 p-4 border border-slate-800 rounded-lg shadow-md shadow-slate-800 cursor-default"
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