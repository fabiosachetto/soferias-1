import { Navbar } from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`bg-[url("https://euamoparaty.com.br/wp-content/uploads/2016/05/paraty-2.jpg")]`}>
        {/* <body className={`${geistSans.variable} ${geistMono.variable} bg-slate-600`}> */}
        <Navbar />

        <section className="xl:pt-16 mb:pt-24 xl:px-0 mb:px-4">
          {children}
        </section>

      </body>
    </html>
  );
};
