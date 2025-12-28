import type { Metadata } from "next";
import "../src/styles/globals.css";

export const metadata: Metadata = {
  title: "LocalWebsitePr",
  description: "Professional websites for local service businesses. Fast, conversion-focused sites built with Next.js.",};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-950">
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
