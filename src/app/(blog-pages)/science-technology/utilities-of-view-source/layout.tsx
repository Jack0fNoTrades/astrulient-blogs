import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `The "View Page Source" Function is Useful for More Than Just Software Development - Astrulient Blogs`,
  description: "discussions on various topics, interesting experiences, and more",
};

export default function APPSLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/icon.ico" />
      </head>
      <body className={`${inter.className}`}>
        <div className="flex flex-col">
          <Header />
          {children}
          <Footer />
        </div>
        </body>
    </html>
  );
}
