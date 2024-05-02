import Link from "next/link";

export default function Header() {
  return (
    <main className="flex flex-row justify-end w-full p-4 uppercase bg-gray-fav text-gray-100">
      <Link href="/" className="px-2 hover:-translate-y-1 transition-transform">Home</Link>
      <Link href="/portfolio" className="px-2 hover:-translate-y-1 transition-transform">Portfolio</Link>
      <Link href="/contact" className="px-2 hover:-translate-y-1 transition-transform">Contact</Link>
    </main>
  );
}