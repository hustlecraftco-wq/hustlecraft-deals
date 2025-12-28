import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://localwebsitepro.com"),
  title: {
    default: "Local Website Pro | #1 Custom Web Design for KC Contractors",
    template: "%s | Local Website Pro",
  },
  description: "Stop renting your website. We build custom-coded, 0.4s load time lead machines for KC plumbers, HVAC & trades. Own your asset. No monthly fees.",
  keywords: ["Kansas City web design", "contractor websites KC", "plumber marketing Kansas City", "HVAC website design"],
  authors: [{ name: "Local Website Pro" }],
  openGraph: {
    title: "Local Website Pro | Stop Renting Your Website",
    description: "Own your lead machine. 48hr custom builds for KC trades. 0.4s load times.",
    siteName: "Local Website Pro",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-[#050505] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
