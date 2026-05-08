import Link from "next/link";
import Image from "next/image";
import Menu from "./menu";

export default function Header({addPricingLink = false}: {addPricingLink?: boolean}) {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full justify-center bg-slate-800 shadow">
      <div className="flex flex-row w-full items-center justify-between px-4 py-4">
        <Link href="/devlabs" className="px-3">
          <Image src="/devlabs-logo.svg" alt="Asar Dev Labs Logo" width={32} height={32} />
        </Link>

        <div className="hidden md:flex items-center gap-8 uppercase tracking-[0.24em]">
          {addPricingLink && (
            <Link href={"#pricing"} className="hover:text-green-300 transition-all duration-300">
              Pricing
            </Link>
          )}
          <Link href="/portfolio" className="hover:text-green-300 transition-all duration-300">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:text-green-300 transition-all duration-300">
            Contact
          </Link>
        </div>

        <Menu />
      </div>
    </header>
  );
}