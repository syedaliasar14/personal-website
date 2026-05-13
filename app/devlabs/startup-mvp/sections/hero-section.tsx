import Link from "next/link";
import { ArrowRight, Database, ServerCog, Users, BarChart3, Mail, CreditCard, ShieldCheck, ChartNoAxesCombined } from "lucide-react";

const highlights = [
  {
    title: "User Accounts",
    description: "Set up sign-up and login so each user has their own space and data stays private.",
    Icon: Users,
  },
  {
    title: "Payment Processing",
    description: "Accept payments from users with a trusted, secure payment system integrated.",
    Icon: CreditCard,
  },
  {
    title: "Email Notifications",
    description: "Send users emails for sign-ups, updates, and important events automatically.",
    Icon: Mail,
  },
  {
    title: "Admin Dashboard",
    description: "Get a control panel to manage users, view stats, and run your product smoothly.",
    Icon: BarChart3,
  },
  {
    title: "Security & Compliance",
    description: "Your app gets encrypted passwords, secure connections, and data protection.",
    Icon: ShieldCheck,
  },
  {
    title: "Database Management",
    description: "Safe storage for all your data and fast performance.",
    Icon: Database,
  }
];

export default function HeroSection() {
  return (
    <section className="px-4">
      <div className="max-w-6xl mx-auto radial-card relative overflow-hidden">
        <div className="absolute -right-10 top-10 h-48 w-48 rounded-full bg-green-300/10 blur-3xl" />
        <div className="space-y-6">
          <span className="pill-primary">
            Startup MVPs
          </span>
          <div className="space-y-4">
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
              Turn your startup idea into a real product.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Need a web app or SaaS product? I build from the ground up, setting up databases, infrastructure, and user accounts so that your MVP will be ready to test with users and show to investors.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn inline-flex items-center justify-center gap-2">
              Get started
              <ArrowRight size={16} strokeWidth={1.75} />
            </Link>
            <Link href="#pricing" className="btn-outline inline-flex items-center justify-center gap-2">
              See pricing
            </Link>
          </div>
        </div>
      </div>

      <div id="features" className="max-w-6xl mx-auto grid gap-4 pt-16 md:grid-cols-3">
        {highlights.map(({ title, description, Icon }, index) => (
          <div key={title} className={`rounded-[1.25rem] radial-gradient-bg border border-slate-800 hover:border-green-300/70 transition-all duration-300 p-5 hover:cursor-default`}>
            <Icon className="text-green-300" size={24} strokeWidth={1.5} />
            <h2 className="mt-4 text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}