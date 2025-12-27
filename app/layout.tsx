import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "HustleCraft | Building Digital Assets",
  description: "High-performance products for builders, traders, and service businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-950">
        <Navigation />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
