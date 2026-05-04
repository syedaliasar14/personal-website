"use client";

import { Boxes, DraftingCompass, Rocket, ServerCog, Settings2, Waypoints } from "lucide-react";
import ProcessAccordion from "@/components/process-accordion";

const processSteps = [
  {
    title: "Product Strategy Call",
    description:
      "We map the problem your startup is solving, define the smallest version worth building, and sort through which features belong in version one versus what can wait.",
    icon: Boxes,
  },
  {
    title: "Technical Planning",
    description:
      "We work through the architecture together, including the accounts and services needed to run the product properly, such as cloud infrastructure, environment setup, and database planning.",
    icon: Waypoints,
  },
  {
    title: "AWS and Database Setup",
    description:
      "If the MVP needs backend infrastructure, I help you create the accounts and foundational setup so the app is deployed on services you actually own instead of something fragile or temporary.",
    icon: ServerCog,
  },
  {
    title: "Design and Product Flow",
    description:
      "The interface is designed around the core user journey so the MVP feels coherent enough to test with real users and not just like a stitched-together demo.",
    icon: DraftingCompass,
  },
  {
    title: "Build and Iterate",
    description:
      "As development moves forward, I keep you updated, validate technical decisions against the product goals, and adjust the scope when needed so momentum stays high.",
    icon: Settings2,
  },
  {
    title: "Launch and Next Steps",
    description:
      "Once the MVP is ready, we launch it, review the infrastructure and ownership setup, and talk through the most sensible next iteration based on feedback and traction.",
    icon: Rocket,
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