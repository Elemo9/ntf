import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import {Space_Grotesk} from "next/font/google";
import Header from "./_components/Header";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const space_grotesk = Space_Grotesk({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Naija Tech Fair",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${space_grotesk.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
