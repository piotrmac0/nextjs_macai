"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lines from "@/components/Lines";
import Voiceflow from "@/components/Voiceflow";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
const inter = Inter({ subsets: ["latin"] });
import "../globals.css";

import ToasterContext from "../context/ToastContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="eng">
      <body className={`dark:bg-black`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="dark"
        >
            <Lines />
            <Header />
            <ToasterContext />
            {children}
            <Footer /> 
            <Voiceflow/>  
        </ThemeProvider>
      </body>
    </html>
  );
}
