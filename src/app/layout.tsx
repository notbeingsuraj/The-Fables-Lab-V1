import type { Metadata } from "next";
import { Space_Grotesk, Inter, Space_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "600", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "The Fables Lab | Where Ancient Stories Meet Future Tech",
  description: "Product studio building investor-ready MVPs in under 30 days.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} ${fraunces.variable} antialiased bg-charcoal text-off-white selection:bg-cobalt selection:text-white bg-physics-grid bg-grid-lg`}
      >
        <div className="fixed inset-0 bg-physics-grid bg-grid-sm opacity-50 pointer-events-none -z-50" />
        <Navbar />
        <main className="min-h-screen pt-20 flex flex-col items-center border-x border-gridline max-w-[1920px] mx-auto bg-charcoal/90">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
