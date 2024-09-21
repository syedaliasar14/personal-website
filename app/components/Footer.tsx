import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-row items-center justify-between w-full md:w-[48rem] p-2 gap-2 mt-24 mb-4">
      <div>© {new Date().getFullYear()} Syed Ali Asar</div>
      <div className="flex flex-row gap-4">
        <Link href={'https://github.com/syedaliasar14'}>
          <FontAwesomeIcon 
            className="hover:-translate-y-1 transition-transform"
            icon={faGithub} size="xl"
          />
        </Link>
        <Link href={'https://www.linkedin.com/in/syed-ali-asar-1914b516a/'}>
          <FontAwesomeIcon 
            className="hover:-translate-y-1 transition-transform"
            icon={faLinkedin} size="xl"
          />
        </Link>
      </div>
    </footer>
  );
}