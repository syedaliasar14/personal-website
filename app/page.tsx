"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const name = 'Syed Ali Asar'
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="flex flex-col w-full items-center justify-center px-4">
      <section className="flex flex-col md:flex-row justify-center items-start md:gap-12 my-24 max-w-full w-full md:max-w-5xl">
        <div className={`flex rounded-full overflow-hidden object-cover mx-auto min-h-[300px] min-w-[300px] border-4 border-green-300 overflow-hidden relative
          ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
          <Image src="/me.JPG" alt="Syed Ali Asar" className="flex-shrink-0 absolute object-cover" 
            width={500} height={500}
          />
          {/* <div className="absolute inset-0 bg-green-300/75 opacity-0 hover:opacity-100 text-4xl font-bold text-center items-center justify-center flex transition-opacity duration-300">Syed Ali Asar</div> */}
        </div>

        <div className={`flex flex-col mt-8 md:mt-0 justify-center ${isVisible ? 'opacity-100' : 'opacity-0 -translate-x-20'} transition-opacity transition-transform duration-1000`}>
          {/* <div className="flex text-4xl md:text-6xl font-bold justify-center md:justify-start">{name}</div> */}
          <h1 className="text-5xl md:text-6xl font-bold">
            Web developer for your <span className="text-green-500">business</span>
          </h1>
          <p className="mt-8 text-2xl">
            If you're a business owner who needs a high-converting website or a startup founder building your MVP, I design and develop custom web experiences that don't just look great, but help you attract users, validate your idea, and grow.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-12 justify-start w-max">
            <Link href={'/devlabs'} className="btn-outline w-max">Work With Me</Link>
            <Link href={'/portfolio'} className="btn w-max">View Portfolio</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
