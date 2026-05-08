import { TextAlignJustify } from "lucide-react";
import { SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, Sheet } from "./ui/sheet";
import Link from "next/link";
import Image from "next/image";

export default function Menu() {
  return (
    <Sheet>
      <SheetTrigger>
        <TextAlignJustify strokeWidth={1.5} className="hover:text-green-300 transition-colors duration-300" />
      </SheetTrigger>
      <SheetContent className="bg-foreground flex flex-col items-center">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <Image src="/devlabs-logo-full.svg" alt="Asar Dev Labs Logo" width={100} height={100} className="w-24" />
        </SheetHeader>

        {/* Navigation Links */}
        <div className='px-4 mt-4 flex flex-col gap-4 uppercase tracking-[0.24em] text-background text-center whitespace-nowrap items-center'>
          <Link href="/devlabs" className="block w-max mx-auto md:mx-0 hover:text-green-300 transition-colors">
            Home
          </Link>
          <Link href="/devlabs/business-websites" className="block w-max mx-auto md:mx-0 hover:text-green-300 transition-colors">
            Business Websites
          </Link>
          <Link href="/devlabs/startup-mvp" className="block w-max mx-auto md:mx-0 hover:text-green-300 transition-colors">
            Startup MVPs
          </Link>
          <Link href="/portfolio" className="block w-max mx-auto md:mx-0 hover:text-green-300 transition-colors">
            Portfolio
          </Link>
          <Link href="/contact" className="block w-max mx-auto md:mx-0 hover:text-green-300 transition-colors">
            Contact
          </Link>
          <Link href="/" className="block w-max mx-auto md:mx-0 hover:text-green-300 transition-colors">
            About
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}