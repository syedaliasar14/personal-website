"use client";

import { Brush, Handshake, Lightbulb, Rocket, ServerCog, Settings2, VectorSquare, } from "lucide-react";
import ProcessAccordion from "@/components/process-accordion";

const processSteps = [
  {
    title: "Strategy Call",
    description:
      "We identify the problem your product is solving, define features for the smallest viable version, and come up with a reasonable timeline for development.",
    icon: Lightbulb,
  },
  {
    title: "Kickoff",
    description: "Once the first invoice (half of the total project cost) is paid, development officially starts.",
    icon: Handshake,
  },
  {
    title: "Design",
    description:
      "The user interface is designed with a shared Figma/Canva project, focused on the core user journey so the product feels coherent enough to test with real users and not like a demo.",
    icon: Brush,
  },
  {
    title: "Infrastructure",
    description:
      "I help you create the accounts and foundational setup so the app is deployed on services you actually own instead of something fragile or temporary.",
    icon: VectorSquare,
  },
  {
    title: "Development",
    description:
      "As development moves forward, I keep you updated, validate technical decisions against the product goals, and adjust the scope when needed.",
    icon: Settings2,
  },
  {
    title: "Launch",
    description:
      "When the MVP is ready and the final invoice is paid, we make it live to the public. Infrastructure and ownership is reviewed, ensuring you have what you need to build after real validation.",
    icon: Rocket,
  },
];

export default function ProcessSection() {
  return (
    <section className="mt-16 py-24 bg-foreground w-full text-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl">
          <p className="pill-solid">The Process</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Here's what to expect</h2>
        </div>
        <ProcessAccordion items={processSteps} />
      </div>
    </section>
  );
}