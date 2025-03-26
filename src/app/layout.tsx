import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

// custom Fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Victor Ng'ang'a | Software Developer",
  description: "Portfolio of Victor Ng'ang'a - Backend Developer & Fullstack Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-gray-900 text-white flex flex-col min-h-screen`}
      >
        <header className="fixed top-0 left-0 w-full bg-gray-800 rounded-md shadow-md">
          <Navbar/>
          </header>
          {/** main content*/}
          <main className="flex-grow mt-[20vh] px-6">{children}</main>
          {/**Footer */}
        <footer className="mt-auto py-4 bg-gray-800 text-center text-lg">
          <p>&copy; 2025 Victor Ng'ang'a. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
