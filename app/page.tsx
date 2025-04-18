"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Skills from "./components/Skills";
import Link from "next/link";

export default function HomePage() {
  const name = 'Syed Ali Asar'
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="flex flex-col w-full items-center px-8">
      <section className="flex flex-col md:flex-row justify-center md:gap-12 my-24 max-w-full w-full md:w-[48rem]">
        <div className={`flex justify-center rounded-full overflow-hidden object-cover mx-auto min-h-[250px] min-w-[250px] border-4 border-green-300
          ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
          <Image
            src="/me.JPG"
            alt="Me"
            width={300}
            height={300}
          />
        </div>
        <div className={`flex flex-col mt-8 md:mt-0 justify-center text-center md:text-left
          ${isVisible ? 'opacity-100' : 'opacity-0 -translate-x-20'} transition-opacity transition-transform duration-1000`}>
          <div className="flex text-4xl md:text-6xl font-bold justify-center md:justify-start">{name}</div>
          <div className="flex pt-6 italic justify-center md:justify-start ">
            Here to help streamline, scale, and succeed with thoughtful and high-quality software solutions.
          </div>
          <div className="flex pt-6 font-medium justify-center md:justify-start items-center">
            <Link href={'/projects'} className="border-2 rounded-full border-green-300 px-4 py-2 text-green-300 hover:bg-green-300 hover:text-slate-800 transition-colors duration-300">
              View Portfolio
            </Link>
            <Link href={'/contact'} className="ml-4 border-2 border-green-300 bg-green-300 rounded-full px-4 py-2 text-slate-800 hover:bg-transparent hover:text-green-300 transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      </section>
      <Skills />
    </main>
  );
}
