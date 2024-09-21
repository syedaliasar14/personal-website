import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-end w-full p-8 gap-2 bg-gray-fav text-gray-100 mt-10">
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
    </div>
  );
}