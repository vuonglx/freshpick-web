import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FreshPick - AI-Powered Fruit Quality Assessment",
  description: "Advanced fruit sorting and quality assessment system powered by AI",
  keywords: ["fruit sorting", "AI", "quality assessment", "agriculture technology"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-gray-50`}>
        <div className="min-h-full">
          <Header />
          <main className="pt-16">{children}</main>
        </div>
      </body>
    </html>
  );
}