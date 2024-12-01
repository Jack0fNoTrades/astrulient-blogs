import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Business & Finance - Astrulient Blogs",
  description: "discussions on various topics, interesting experiences, and more",
};

export default function Layout({
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
        <div className="flex flex-col h-screen">
          <Header />
          {children}
          <Footer />
        </div>
        </body>
    </html>
  );
}
