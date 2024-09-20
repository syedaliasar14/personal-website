export default function Skills() {
  return (
    <section className="flex flex-col w-full items-center gap-8 mt-10 text-center text-lg">
      <div className="flex flex-col max-w-[500px] items-center justify-center p-4 gap-8 cursor-default">
        <div className="flex flex-row w-full justify-around gap-4">
          <span className="skill-hover">Javascript</span>
          <span className="skill-hover">Next.js</span>
          <span className="skill-hover">React/Native</span>
          <span className="skill-hover">Python</span>
        </div>
        <div className="flex flex-row w-full justify-around gap-4">
          <span className="skill-hover">AWS</span>
          <span className="skill-hover">Git</span>
          <span className="skill-hover">SQL</span>
          <span className="skill-hover">HTML</span>
          <span className="skill-hover">CSS</span>
          <span className="skill-hover">C/C++</span>
        </div>
        <div className="flex flex-row w-full justify-around gap-4">
          <span className="skill-hover">Java</span>
          <span className="skill-hover">PHP</span>
          <span className="skill-hover">REST/SOAP</span>
          <span className="skill-hover">Tailwind CSS</span>
        </div>
        <div className="flex flex-row w-full justify-around gap-4">
          <span className="skill-hover">Guidewire</span>
          <span className="skill-hover">Gosu</span>
          <span className="skill-hover">Lua</span>
        </div>
      </div>
    </section>
  )
}