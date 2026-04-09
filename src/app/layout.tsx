import type { Metadata } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
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
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Fables Lab — Investor-Ready MVPs in 30 Days",
  description:
    "Fables Lab builds investor-ready MVPs in under 30 days, engineered for clarity, traction, and fundability — not just functionality.",
  keywords: ["MVP", "startup", "product studio", "investor-ready", "rapid development"],
  openGraph: {
    title: "Fables Lab — Investor-Ready MVPs in 30 Days",
    description: "Built for clarity, traction, and fundability.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} antialiased bg-void text-text-primary`}
      >
        <Navbar />
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
