import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crypticsoulak | Protocol Initiated",
  description: "Abdul kalam Choudhry | Rustacean building on Solana | Full-stack Typescript Developer",
};

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-fira-code",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable} antialiased bg-void text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}