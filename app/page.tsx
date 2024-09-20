"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import Skills from "./components/Skills";

export default function HomePage() {
  const name = 'SYED ALI ASAR'
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="flex flex-col">
      <div className="flex flex-col sm:flex-row justify-center mx-auto mt-0 md:mt-8 max-w-full">
        <div className={`relative flex justify-center rounded-full overflow-hidden object-cover mx-auto h-[300px] w-[300px] ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
          <Image
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
      <Skills />
    </main>
  );
}
