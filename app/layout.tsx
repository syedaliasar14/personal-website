import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ParticlesBackground from "./components/particles-bg";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syed Ali Asar | Asar Dev Labs",
  description: "Web developer for your business. I design and develop custom web experiences that don't just look great, but help you attract users, validate your idea, and grow.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col items-center min-h-[calc(100dvh)]">
          <Header />
          <div className="flex justify-center w-full flex-grow">
            <ParticlesBackground />
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
