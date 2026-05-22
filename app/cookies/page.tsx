import type { Metadata } from "next";
import CookiesHeader from "./components/cookies-header";
import CookiesHero from "./components/cookies-hero";
import HowItWorks from "./components/how-it-works";
import Flavors from "./components/flavors";
import Pricing from "./components/pricing";
import OrderCta from "./components/order-cta";
import CookiesFooter from "./components/cookies-footer";

export const metadata: Metadata = {
  title: "ALIBIS — Small Batch Cookies",
  description:
    "Handcrafted, made-to-order cookies. Small batch. Once a month. Delivered fresh to your door.",
};

export default function CookiesPage() {
  return (
    <div className="w-full min-h-screen bg-zinc-900">
      <CookiesHeader />
      <main className="flex flex-col w-full">
        <CookiesHero />
        <HowItWorks />
        <Flavors />
        <Pricing />
        <OrderCta />
      </main>
      <CookiesFooter />
    </div>
  );
}
