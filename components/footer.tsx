import { config } from "@/config";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons/faSquareEnvelope";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-row items-center bg-slate-900 pt-10 pb-2 w-full mt-48">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 text-center md:text-left w-full justify-between">

          {/* Logo and About */}
          <Link href="/devlabs" className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 md:mb-0 justify-center md:justify-start">
            <Image src="/devlabs-logo-full-dark.svg" alt="Asar Dev Labs Logo" width={100} height={100} className="w-24" />
          </Link>

          {/* Navigation Links */}
          <div className='px-4 px-4 md:columns-2 space-y-2 gap-x-12 text-sm uppercase tracking-[0.24em]'>
            <Link href="/devlabs" className="block w-max mx-auto md:mx-0 hover:text-green-300 transition-colors">
              Dev Labs
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

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4">
            <Link href={config.github} target="_blank">
              <FontAwesomeIcon className="hover:text-green-300 transition-all ease-in-out"
                icon={faGithub} size="xl"
              />
            </Link>
            <Link href={config.linkedin} target="_blank">
              <FontAwesomeIcon className="hover:text-green-300 transition-all ease-in-out"
                icon={faLinkedin} size="xl"
              />
            </Link>
            <Link href={`mailto:${config.email}`} target="_blank">
              <FontAwesomeIcon className="hover:text-green-300 transition-all ease-in-out"
                icon={faSquareEnvelope} size="xl"
              />
            </Link>
          </div>
        </div>

        <p className="text-xs text-balance text-center mt-8">
          © {new Date().getFullYear()} Asar Dev Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}