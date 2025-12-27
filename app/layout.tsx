import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../src/styles/globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Analytics } from "@vercel/analytics/react"; // <-- Add this import

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HustleCraft Deals | Real Savings, No Hype',
  description: 'Real savings scored by value. No BS, just deals.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics /> {/* <-- Add this line here! */}
      </body>
    </html>
  );
}
