// app/plumbing-services/page.tsx (SERVER COMPONENT)

export const metadata = {
  title: "Plumbing Services London | JRS Building Company",
  description:
    "Reliable and professional plumbing services in London. From repairs to installations, our expert plumbers ensure your plumbing systems run smoothly and efficiently.",
  openGraph: {
    title: "Plumbing Services London | JRS Building Company",
    description:
      "Reliable and professional plumbing services in London. From repairs to installations, our expert plumbers ensure your plumbing systems run smoothly and efficiently.",
    url: "/services/Plumbing-services",
    siteName: "JRS Building Company",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Professional Plumbing Services by JRS Building Company",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

import PlumbingServicesClient from "./plumbing";

export default function PlumbingServicesPage() {
  return <PlumbingServicesClient />;
}
