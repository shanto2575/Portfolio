import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import Preloader from "@/components/Preloader";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shanto | Frontend Developer ",
  description: "Portfolio of Shanto, a Full Stack Developer building modern, animated, and interactive web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/30">
        <Preloader />
        <Cursor />
        <ScrollProgressBar />
        <Background />
        <Navbar />
        <main className="flex-grow relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

