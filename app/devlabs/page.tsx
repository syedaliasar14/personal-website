import Link from "next/link";

export const metadata = {
  title: "Asar Dev Labs",
  description: "Asar Dev Labs is a web development service by Ali Asar. I design and develop custom web experiences that don't just look great, but help you attract users, validate your idea, and grow.",
};

export default function DevLabsPage() {
  return (
    <div className="flex flex-col w-full md:max-w-5xl items-center justify-center px-4">
      <h2 className="text-4xl font-bold text-center mt-20">
        What do you need?
      </h2>

      <div className="flex flex-col items-center mt-16 gap-6">
        <Link href="/devlabs/business-websites" className="btn-outline">
          I need a website for my business
        </Link>
        <Link href="/devlabs/startup-mvp" className="btn-outline">
          I'm building a startup
        </Link>
      </div>
    </div>
  )
}