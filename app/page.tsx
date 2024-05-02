import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col w-screen gap-4">
      <div className="flex flex-row">
        <div className="w-screen">
          <Image
            src={"/me.JPG"}
            alt="Me"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col pt-16 mx-8">
          <div className="tracking-widest text-6xl text-right uppercase">SYED ALI ASAR</div>
          <div className="tracking-widest text-xl text-right pt-16">Innovative Agile Software Engineer with a proven track record of delivering robust solutions for diverse projects, specializing in front-end development and integration. Skilled in leveraging React Next JS framework to create intuitive user interfaces and integrating complex systems for seamless functionality. Excels in cross-functional collaboration and problem-solving to drive project success.</div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="uppercase tracking-widest pt-16 text-4xl">Skills</span>
        <div className="flex flex-row">

        </div>
      </div>
    </main>
  );
}
