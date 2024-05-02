import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <main className="flex flex-col items-center justify-end w-full p-8 gap-2 bg-gray-fav text-gray-100">
      <div className="flex flex-row">
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
    </main>
  );
}