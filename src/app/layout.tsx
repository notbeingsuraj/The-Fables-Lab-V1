import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
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
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-charcoal text-white selection:bg-hot-pink selection:text-white`}
      >
        <Navbar />
        <main className="min-h-screen pt-20 flex flex-col items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
