import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-center w-full bg-slate-900 bg-opacity-75 shadow ">
      <div className="flex flex-row w-full items-center justify-between px-4 py-4">
        <Link href="/" className="px-3">
          <Image src="/devlabs-logo.svg" alt="Asar Dev Labs Logo" width={32} height={32} />
        </Link>

        <div>
          <Link href="/portfolio" className="text-xl p-2 mx-2 hover:text-green-300 transition-all duration-300">
            Portfolio
          </Link>
          <Link href="/contact" className="text-xl p-2 mx-2 hover:text-green-300 transition-all duration-300">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}