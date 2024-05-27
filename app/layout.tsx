import type { Metadata } from "next";
import "./globals.css";
import NavBar from '@/components/navbar/index';



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
