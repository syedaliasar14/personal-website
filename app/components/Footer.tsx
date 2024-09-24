import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons/faSquareEnvelope";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-row items-center justify-between w-full md:w-[48rem] p-2 px-8 gap-2 mt-24 mb-4">
      <div className="hover:text-green-300 transition-colors duration-300 cursor-default">© {new Date().getFullYear()} Syed Ali Asar</div>
      <div className="flex flex-row gap-4">
        <Link href={'https://github.com/syedaliasar14'}>
          <FontAwesomeIcon 
            className="hover:-translate-y-1 hover:text-green-300 transition-all duration-300 ease-in-out"
            icon={faGithub} size="xl"
          />
        </Link>
        <Link href={'https://www.linkedin.com/in/syed-ali-asar-1914b516a/'}>
          <FontAwesomeIcon 
            className="hover:-translate-y-1 hover:text-green-300 transition-all duration-300 ease-in-out"
            icon={faLinkedin} size="xl"
          />
        </Link>
        <Link href='mailto:sa.asar14@gmail.com' target="_blank">
          <FontAwesomeIcon 
            className="hover:-translate-y-1 hover:text-green-300 transition-all duration-300 ease-in-out"
            icon={faSquareEnvelope} size="xl"
          />
        </Link>
      </div>
    </footer>
  );
}