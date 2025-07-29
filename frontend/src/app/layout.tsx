// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "./Components/LayoutWrapper";

export const metadata: Metadata = {
  title: "JRS Building Contractors | Expert Builders & Renovators in London",
  description:
    "JRS Building Contractors provide expert building, renovation, and refurbishment services throughout London. Trusted for superior craftsmanship, reliability, and timely delivery on residential and commercial projects.",
  keywords: [
    "building contractors London",
    "London builders",
    "home renovation London",
    "commercial building services",
    "property refurbishment London",
    "expert builders",
    "reliable construction company",
    "JRS Building Contractors",
  ],
  openGraph: {
    title: "JRS Building Contractors | Expert Builders & Renovators in London",
    description:
      "Professional building, renovation, and refurbishment services in London by JRS Building Contractors. Delivering quality craftsmanship for residential and commercial projects.",
    url: "https://jrs-building.co.uk",
    siteName: "JRS Building Contractors",
    images: [
      {
        url: "https://jrs-building.co.uk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JRS Building Contractors - Expert Builders in London",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@JRSBuildingUK",
    title: "JRS Building Contractors | Expert Builders & Renovators in London",
    description:
      "Reliable building and renovation services across London by JRS Building Contractors. Residential and commercial projects completed with expert craftsmanship.",
    images: ["https://jrs-building.co.uk/og-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
