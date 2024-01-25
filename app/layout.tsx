import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "./components/header";
import Footer from "./components/footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinicios Gois",
  description: "Personal Webiste and Blog Posts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased flex flex-col justify-center px-8 py-8 max-w-screen-sm m-auto min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
