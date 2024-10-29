import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Só Férias",
  description: "Motor de Reservas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[url('https://lh3.googleusercontent.com/p/AF1QipOOzFcQwkYeGJv9kQzPhZLq1lmUsY5um8iwXkEV=s1360-w1360-h1020')]`}>

        <Navbar />

        <section className="pt-28">
          {children}
        </section>

      </body>
    </html>
  );
};
