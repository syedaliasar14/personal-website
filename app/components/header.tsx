import Link from "next/link";

export default function Header() {
  return (
    <main className="flex flex-row justify-end w-full p-4 uppercase bg-gray-fav text-gray-100">
      <Link href="/" className="px-2">Home</Link>
      <Link href="/portfolio" className="px-2">Portfolio</Link>
      <Link href="/contact" className="px-2">Contact</Link>
    </main>
  );
}