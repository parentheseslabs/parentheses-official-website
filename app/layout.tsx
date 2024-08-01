import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";
import Drawer from "@/components/navbar/Drawer";
const NavBar = dynamic(() => import('@/components/navbar/index'))
const Footer = dynamic(() => import('@/components/footer/Footer'))


export const metadata: Metadata = {
  title: "Parentheses",
  description: "Official website of Parentheses Labs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`font-sfpd-regular`}>
          <NavBar />
          <Drawer />
          {children}
          <Footer />
        </body>
    </html>
  );
}
