"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import Skills from "./components/Skills";

export default function HomePage() {
  const name = 'Syed Ali Asar'
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="flex flex-col">
      <section className="flex flex-col sm:flex-row justify-center md:gap-8 my-24 max-w-full">
        <div className={`flex justify-center rounded-full overflow-hidden object-cover mx-auto min-h-[250px] min-w-[250px] border-4 border-green-300
          ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
          <Image
            src={"/me.JPG"}
            alt="Me"
            width={250}
            height={250}
          />
        </div>
        <div className={`flex flex-col mt-8 md:mt-0 justify-center text-center md:text-left
          ${isVisible ? 'opacity-100' : 'opacity-0 -translate-x-20'} transition-opacity transition-transform duration-1000`}>
          <div className="flex text-4xl font-semibold justify-center md:justify-start">{name}</div>
          <div className="flex text-xl pt-8 italic justify-center md:justify-start ">I help businesses establish a digital footprint by creating websites and software as a service.</div>
        </div>
      </section>
      <Skills />
    </main>
  );
}
