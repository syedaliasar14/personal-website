import { Layers3 } from "lucide-react";

const features = [
  "User authentication and account flows",
  "Dashboards and admin panels",
  "Database-backed product features",
  "Forms, onboarding, and lead capture",
  "API integrations and external services",
  "Payments and subscriptions",
  "Role-based experiences",
  "Internal tools for operations",
  "Analytics and early product instrumentation",
];

export default function FeaturesSection() {
  return (
    <section className="mt-10 rounded-[1.75rem] border border-slate-800 bg-slate-900/70 p-6 md:p-8">
      <p className="text-sm uppercase tracking-[0.28em] text-green-200">What this can include</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">MVP features I can help scope and build.</h2>
      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <div key={feature} className="rounded-[1rem] border border-slate-800 bg-slate-950/70 px-4 py-4 text-sm leading-7 text-slate-200">
            <div className="flex items-start gap-3">
              <Layers3 className="mt-1 shrink-0 text-green-300" size={18} strokeWidth={1.75} />
              <span>{feature}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}