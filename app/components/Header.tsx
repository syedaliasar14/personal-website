import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-center w-full bg-slate-800 shadow ">
      <div className="flex flex-row w-full md:w-[48rem] items-center justify-center p-2">
        <Link href="/" className="text-xl px-3 scale-75 hover:scale-100 transition-transform duration-300">
          <Image
            className="rounded-full"
            src="/avatar.jpg"
            alt="Avatar"  
            width={48}
            height={48}
          />
        </Link>
        <div>
          <Link href="/projects" className="text-xl p-2 mx-2 rounded-lg hover:bg-slate-700 hover:text-green-300 transition-all duration-300">
            Projects
          </Link>
          <Link href="/contact" className="text-xl p-2 mx-2 rounded-lg hover:bg-slate-700 hover:text-green-300 transition-all duration-300">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}