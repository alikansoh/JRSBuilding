// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import NavBar from './Components/Navbar'
import Footer from "./Components/Footer";

export const metadata: Metadata = {
  title: "JRS Building Contractors",
  description: "Expert building and renovation services in London by JRS Building Contractors. Delivering quality home and commercial projects with trusted craftsmanship.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <NavBar/>
        {children}
        <Footer/>

      </body>
    </html>
  );
}
