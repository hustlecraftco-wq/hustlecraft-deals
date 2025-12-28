import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. LOAD FAST FONT (Subsets = speed)
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 2. VIEWPORT & THEME COLOR (Mobile optimization)
export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// 3. SEO METADATA (The Google Juice)
export const metadata: Metadata = {
  metadataBase: new URL("https://localwebsitepro.com"), // Change this to your actual domain
  title: {
    default: "Local Website Pro | #1 Custom Web Design for KC Contractors",
    template: "%s | Local Website Pro",
  },
  description: "Stop renting your website. We build custom-coded, 0.4s load time lead machines for KC plumbers, HVAC & trades. Own your asset. No monthly fees.",
  keywords: [
    "Kansas City web design", 
    "contractor websites KC", 
    "plumber marketing Kansas City", 
    "HVAC website design", 
    "custom coded websites", 
    "Local Website Pro", 
    "Lifted Logic alternative"
  ],
  authors: [{ name: "Local Website Pro" }],
  creator: "Local Website Pro",
  publisher: "Local Website Pro",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Social Sharing Cards (Facebook/LinkedIn)
  openGraph: {
    title: "Local Website Pro | Stop Renting Your Website",
    description: "Own your lead machine. 48hr custom builds for KC trades. 0.4s load times.",
    url: "https://localwebsitepro.com",
    siteName: "Local Website Pro",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // You need to add this image to /public
        width: 1200,
        height: 630,
        alt: "Local Website Pro - Asset vs Rental",
      },
    ],
  },
  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Local Website Pro | KC's Hand-Coded Agency",
    description: "Don't pay $14k for a rental site. Own your custom code.",
    images: ["/og-image.jpg"], 
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// 4. JSON-LD SCHEMA (The Secret Weapon)
// This tells Google you are a legit Local Business in KC, not a random webpage.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Local Website Pro",
  "image": "https://localwebsitepro.com/og-image.jpg",
  "description": "Custom-coded, high-performance websites for Kansas City contractors, plumbers, and HVAC professionals.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kansas City",
    "addressRegion": "KS",
    "addressCountry": "US"
  },
  "url": "https://localwebsitepro.com",
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "17:00"
  },
  "sameAs": [
    "https://facebook.com/localwebsitepro", // Add your real links if you have them
    "https://instagram.com/localwebsitepro"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-[#050505] text-white antialiased`}>
        {/* Inject Schema for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
