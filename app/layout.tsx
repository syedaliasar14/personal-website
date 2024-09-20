import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import "@fortawesome/fontawesome-svg-core/styles.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syed Ali Asar",
  description: "Syed Ali Asar's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col min-h-[calc(100dvh)]">
          <Header/>
          <div className="flex-grow">
            {children}
          </div>
          <Footer/>
        </main>
      </body>
    </html>
  );
}
