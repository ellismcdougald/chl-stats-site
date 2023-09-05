import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "chl-stats",
  description: "A CHL statistics website",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MenuBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
