import Footer from "../../../components/footer";
import Header from "../../../components/header";
import FeaturesSection from "./sections/features-section";
import HeroSection from "./sections/hero-section";
import PricingSection from "./sections/pricing-section";
import ProcessSection from "./sections/process-section";

export const metadata = {
  title: "Startup MVPs | Asar Dev Labs",
  description: "Custom MVP development for founders who need a credible first product, real infrastructure, and a smart path to launch.",
};

export default function StartupMVPPage() {
  return (
    <>
      <Header addPricingLink />
      <main className="flex flex-col w-full max-w-6xl px-4 pb-24 pt-16 flex-grow mx-auto">
        <HeroSection />
        <FeaturesSection />
        <ProcessSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}