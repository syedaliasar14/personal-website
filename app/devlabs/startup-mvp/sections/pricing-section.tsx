import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-foreground w-full text-background">
      <div className="max-w-6xl mx-auto px-4">
        <p className="pill-solid">Pricing</p>
        <h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">Starting at $5k</h2>
        <p className="mt-5 max-w-3xl text-base leading-8">
          MVPs start at $5k, with final pricing depending on the features, workflows, and integrations you need. Reach out and we'll work together to create a plan that fits your budget and goals.
        </p>
        <div className="mt-8 flex flex-col gap-3 md:flex-row">
          <Link href="/contact" className="btn inline-flex items-center justify-center gap-2">
            Let's discuss pricing
            <ArrowRight size={16} strokeWidth={1.75} />
          </Link>
          <Link href="#features" className="btn-outline text-green-400 hover:text-background inline-flex items-center justify-center gap-2">
            See features
          </Link>
        </div>
      </div>
    </section>
  );
}