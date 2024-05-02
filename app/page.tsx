import Image from "next/image";

export default function HomePage() {
  const name = 'SYED ALI ASAR';
  const letters = name.split('').map((letter, index) => (
    <span key={index} className="flex hover:-translate-y-5 transition-transform min-w-5 duration-300 cursor-default">{letter}</span>
  ));

  return (
    <main className="flex flex-col w-screen gap-4">
      <div className="flex flex-row">
        <div className="flex w-full">
          <Image
            className="hover:opacity-50 transition-opacity duration-300"
            src={"/me.JPG"}
            alt="Me"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col pt-16 mx-8">
          <div className="flex tracking-widest text-6xl uppercase inline-block justify-center">{letters}</div>
          <div className="flex tracking-widest text-center text-xl pt-16">Innovative Agile Software Engineer with a proven track record of delivering robust solutions for diverse projects, specializing in front-end development and integration. Skilled in leveraging React & Next.js to create intuitive user interfaces. Excels in cross-functional collaboration and problem-solving to drive project success.</div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="uppercase tracking-widest py-16 text-4xl">Skills</span>
        <div className="flex flex-row">

        </div>
      </div>
    </main>
  );
}
