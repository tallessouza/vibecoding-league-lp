import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vibecoding League — Competição de Desenvolvimento com IA",
  description:
    "A arena definitiva para desenvolvedores que usam IA. Compita, aprenda e evolua com a Vibecoding League.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased">
        <Header />
        {/* padding-top compensa o header fixo (h-16 = 4rem) */}
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
