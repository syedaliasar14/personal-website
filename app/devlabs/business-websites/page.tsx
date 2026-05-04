import Footer from "../../../components/footer";
import Header from "../../../components/header";
import HeroSection from "./sections/hero-section";
import PricingSection from "./sections/pricing-section";
import ProcessSection from "./sections/process-section";

export const metadata = {
  title: "Business Websites | Asar Dev Labs",
  description: "Get more customers with a website that actually converts. Custom business websites built for clarity, trust, and lead generation.",
};

export default function BusinessWebsitesPage() {
  return (
    <>
      <Header addPricingLink />
      <main className="flex flex-col w-full max-w-6xl px-4 pb-24 pt-16 flex-grow mx-auto">
        <HeroSection />
        <ProcessSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}