import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ParticlesBackground from "./components/particles-bg";

const inter = Inter({ subsets: ["latin"] });
const monserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syed Ali Asar | Asar Dev Labs",
  description: "Web developer for your business. I design and develop custom web experiences that don't just look great, but help you attract users, validate your idea, and grow.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${monserrat.className}`}>
        <div className="flex flex-col items-center min-h-[calc(100dvh)]">
          <ParticlesBackground />
          {children}
        </div>
      </body>
    </html>
  );
}
