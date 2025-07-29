// app/bathroom-upgrades/page.tsx
import BathroomUpgradesPage from './bathroom';

export const metadata = {
  title: 'Bathroom Renovations | JRS Building',
  description: 'Transform your bathroom with JRS Building. From luxury makeovers to compact solutions, we design and renovate bathrooms in all London areas.',
  keywords: 'bathroom renovation, london bathroom upgrades, spa bathroom, classic bathroom design',
  openGraph: {
    title: 'Bathroom Renovations | JRS Building',
    description: 'We create stunning bathroom transformations across London.',
    url: 'https://www.jrs-building.co.uk/bathroom-upgrades',
    type: 'website',
    images: [
      {
        url: 'https://www.jrs-building.co.uk/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Beautiful renovated bathroom by JRS Building',
      },
    ],
  },
};

export default function Page() {
  return <BathroomUpgradesPage />;
}
