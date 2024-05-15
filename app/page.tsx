"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomePage() {
  const name = 'SYED ALI ASAR';
  /* const letters = name.split('').map((letter, index) => (
    <span key={index} className="flex hover:-translate-y-5 transition-transform min-w-5 duration-300 cursor-default">{letter}</span>
  )); */
  const [isVisible, setIsVisible] = useState(false);
  const skills = [
    { key: 'react/native', url: '/skill_icons/react.png' },
    { key: 'next.js', url: '/skill_icons/nextjs.svg' },
    { key: 'javascript', url: '/skill_icons/javascript.png' },
    { key: 'html', url: '/skill_icons/html.png' },
    { key: 'css', url: '/skill_icons/css.png' },
    { key: 'python', url: '/skill_icons/python.webp' },
    { key: 'gosu', url: '/skill_icons/gosu.png' },
    { key: 'tailwind css', url: '/skill_icons/tailwind.svg' },
    { key: 'sql', url: '/skill_icons/sql.png' },
    { key: 'c/c++', url: '/skill_icons/c++.png' },
    { key: 'java', url: '/skill_icons/java.png' },
    { key: 'php', url: '/skill_icons/php.png' },
    { key: 'lua', url: '/skill_icons/lua.png' },
    { key: 'REST/SOAP', url: '' },
    { key: 'oracle', url: '' },
    { key: 'aws', url: '' },
    { key: 'git', url: '' },
    { key: 'figma', url: '' },
    { key: 'tealium', url: '' },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="flex flex-col">
      <div className="flex flex-col sm:flex-row min-w-500 justify-around">
        <div className={`relative flex justify-center overflow-hidden object-cover mx-2 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 h-[400px] w-[400px] inset-x-0 mx-auto`}>
          <Image
            className="hover:opacity-75 transition-opacity duration-300 object-contain md:h-[500px]"
            src={"/me.JPG"}
            alt="Me"
            fill
          />
        </div>
        <div className={`flex flex-col pt-8 mx-2 ${isVisible ? 'opacity-100 translate-x-10' : 'opacity-0'} transition-opacity transition-transform duration-1000 mx-auto`}>
          <div className="flex tracking-widest text-6xl uppercase inline-block justify-center text-center">{name}</div>
          {/* <div className="flex tracking-widest text-center text-xl pt-16">Innovative Agile Software Engineer with a proven track record of delivering robust solutions for diverse projects, specializing in front-end development and integration. Skilled in leveraging React & Next.js to create intuitive user interfaces. Excels in cross-functional collaboration and problem-solving to drive project success.</div> */}
          <div className="flex tracking-widest justify-center text-center text-xl pt-16">Make your software solutions a reality</div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="uppercase tracking-widest py-14 text-4xl">Skills</span>
        <div className="grid grid-cols-2 gap-5 justify-center items-center sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 sm:gap-10 mx-4">
          {skills.map((icon, index) => (
            /* <Image 
              className="w-[150px]"
              src={icon.url}
              key={index}
              alt={icon.key}
              width={100}
              height={100}
            /> */
            <div key={index} className="w-full bg-beige-fav text-white p-2 rounded uppercase text-center hover:-translate-y-1 transition-transform">{icon.key}</div>
          ))}
        </div>
      </div>
    </main>
  );
}
