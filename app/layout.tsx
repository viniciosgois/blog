import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "./components/header";

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
        className={`${inter.className} flex flex-col justify-center px-8 py-8 max-w-screen-sm m-auto`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
