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
    { key: 'javascript', type: 'essential' },
    { key: 'next.js', type: 'essential' },
    { key: 'react/native', type: 'essential' },
    { key: 'python', type: 'essential' },
    { key: 'aws', type: 'essential' },
    { key: 'git', type: 'essential' },
    { key: 'sql', type: 'essential' },
    { key: 'html', type: 'essential' },
    { key: 'css', type: 'essential' },
    { key: 'c/c++', type: 'essential' },
    { key: 'java', type: 'essential' },
    { key: 'php', type: 'essential' },
    { key: 'REST/SOAP', type: 'essential' },
    { key: 'tailwind css', type: 'essential' },
    { key: 'guidewire', type: 'specialized' },
    { key: 'gosu', type: 'specialized' },
    { key: 'tealium', type: 'specialized' },
    { key: 'lua', type: 'specialized' },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="flex flex-col">
      <div className="flex flex-col sm:flex-row justify-center mx-auto mt-0 sm:mt-8 max-w-full">
        <div className={`relative flex justify-center overflow-hidden object-cover w-full sm:mx-auto h-[400px] sm:w-[400px] ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
          <Image
            className="hover:opacity-75 transition-opacity duration-300 object-contain md:h-[500px]"
            src={"/me.JPG"}
            alt="Me"
            fill
            objectFit='cover'
          />
        </div>
        <div className={`flex flex-col mx-auto sm:mx-8 xl:ml-14 mt-8 justify-center ${isVisible ? 'opacity-100' : 'opacity-0 -translate-x-20'} transition-opacity transition-transform duration-1000`}>
          <div className="flex tracking-widest text-6xl uppercase justify-center text-center">{name}</div>
          <div className="flex tracking-widest justify-center text-center text-xl pt-8">Make your software solutions a reality</div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="uppercase tracking-widest py-14 text-4xl">Skills</span>
        <div className="grid grid-cols-2 gap-5 justify-center items-center sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 sm:gap-10 mx-4">
          {skills.map((skill, index) => (
            <div key={index} className="w-full bg-beige-fav text-white p-2 rounded uppercase text-center hover:-translate-y-1 transition-transform cursor-default">{skill.key}</div>
          ))}
        </div>
      </div>
    </main>
  );
}
