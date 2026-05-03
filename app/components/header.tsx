import Link from "next/link";
import Image from "next/image";

export default function Header({addPricingLink = false}: {addPricingLink?: boolean}) {
  return (
    <header className="flex justify-center w-full bg-slate-800 shadow ">
      <div className="flex flex-row w-full items-center justify-between px-4 py-4">
        <Link href="/" className="px-3">
          <Image src="/devlabs-logo.svg" alt="Asar Dev Labs Logo" width={32} height={32} />
        </Link>

        <div className="flex items-center gap-8 uppercase tracking-[0.24em] ">
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

        <div></div>
      </div>
    </header>
  );
}