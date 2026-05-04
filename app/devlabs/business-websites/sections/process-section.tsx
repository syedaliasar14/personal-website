"use client";

import { Brush, Handshake, Lightbulb, Rocket, Settings2, Wrench } from "lucide-react";
import ProcessAccordion from "@/components/process-accordion";

const processSteps = [
  {
    title: "Brainstorming Call",
    description: "We talk through the pages you need, your brand direction, the user experience you want to create, and the conversion tactics that make the site pull its weight for your business.",
    icon: Lightbulb,
  },
  {
    title: "Kickoff",
    description: "Once the first invoice for half of the total project cost is paid, development officially starts and the project timeline is locked in.",
    icon: Handshake,
  },
  {
    title: "Design",
    description: "I build the visual direction in a shared Canva project so you can stay involved as much or as little as you want, whether you want hands-on input or prefer me to take the lead.",
    icon: Brush,
  },
  {
    title: "Development",
    description: "As the site is being built, I keep you updated on progress and make sure the structure, messaging, and pages stay aligned with the original business goals.",
    icon: Settings2,
  },
  {
    title: "Launch and Transfer Ownership",
    description: "After the final invoice is paid, we get on a call, make the site live, and I walk you through the handoff so you fully understand ownership and next steps.",
    icon: Rocket,
  },
  {
    title: "Revisions and Maintenance",
    description: "If small bugs or minor improvements show up after launch, I fix them at no cost. Larger redesigns or feature additions are scoped separately, and ongoing maintenance can be handled through a monthly plan.",
    icon: Wrench,
  },
];

export default function ProcessSection() {
  return (
    <section className="mt-16">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.28em] text-green-200">The Process</p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Here's what to expect</h2>
      </div>
      <ProcessAccordion items={processSteps} />
    </section>
  );
}