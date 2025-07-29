// app/home-renovations/page.tsx (SERVER COMPONENT)

export const metadata = {
  title: "Home Renovations London | JRS Building Company",
  description:
    "Complete home renovation services in London tailored to your vision and lifestyle. From full home renovations to practical improvements, we deliver stunning results with 20+ years experience.",
  openGraph: {
    title: "Home Renovations London | JRS Building Company",
    description:
      "Complete home renovation services in London tailored to your vision and lifestyle. From full home renovations to practical improvements, we deliver stunning results with 20+ years experience.",
    url: "/services/home-renovations",
    siteName: "JRS Building Company",
    images: [
      {
        url: "https://jrs-building.co.uk/og.png",
        width: 1200,
        height: 630,
        alt: "Home Renovations by JRS Building Company",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

import HomeRenovationsClient from './home'; // Your client component

export default function HomeRenovationsPage() {
  return <HomeRenovationsClient />;
}
