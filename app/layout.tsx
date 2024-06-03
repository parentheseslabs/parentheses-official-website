import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";
const NavBar = dynamic(()=>import('@/components/navbar/index'))


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
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
