import type { Metadata } from "next";
import { Inter, Almarai } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer/Footer";
import NavigationBar from "@/components/Navbar/NavigationBar";




const almarai = Almarai({ subsets: ["arabic"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <NavigationBar/>
        <div className="min-h-dvh ">{children}</div>
        <div className="w-full  ">
     
        </div>
        <Footer/>
      </body>
    </html>
  );
}
