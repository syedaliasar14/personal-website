import Link from "next/link";

export default function Header() {
  return (
    <main className="flex flex-row items-center justify-center pt-8">
      <Link href="/" className="px-2">HOME</Link>
      <Link href="/portfolio" className="px-2">PORTFOLIO</Link>
      <Link href="/contact" className="px-2">CONTACT</Link>
    </main>
  );
}