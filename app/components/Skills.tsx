export default function Skills() {
  return (
    <div className="flex flex-col items-center p-8">
      <div className="grid grid-cols-2 gap-5 justify-center items-center md:grid-cols-5">
        {skills.map((skill, index) => (
          <div key={index} 
            className={`w-full bg-beige-fav text-white p-2 rounded uppercase text-center opacity-80 cursor-default
              hover:-translate-y-1 hover:opacity-100 transition-all duration-500 ease-in-out `}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}

export const skills = [
  'javascript',
  'next.js',
  'react/native',
  'python',
  'aws',
  'git',
  'sql',
  'html',
  'css',
  'c/c++',
  'java',
  'php',
  'REST/SOAP',
  'tailwind css',
  'guidewire',
  'gosu',
  'lua',
];