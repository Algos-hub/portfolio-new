import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import MainContent from "@/components/MainContent/MainContent";
import styles from "./page.module.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Pedro Moraes",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className={styles.page}>
          <MainContent>{children}</MainContent>
        </main>
        <Footer />
      </body>
    </html>
  );
}
