import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InteractIQ",
  description: "Powered by Gemini, InteractIQ is here to provide seamless and intuitive communication tailored just for you. Embrace the power of smart conversation and make your everyday tasks easier, faster, and more enjoyable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <ClerkProvider>
     <html lang="en" className="overflow-hidden">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
   </ClerkProvider>
  );
}
