import type { Metadata } from 'next';
import PortfolioLayout from './(portfolio)/layout';
import PortfolioLandingPage from './(portfolio)/page';

const title = 'John Carlo Salazar | Full-Stack Web Developer';
const description = 'Philippines-based full-stack developer with 10+ years of experience building business websites, online academies, portals, e-commerce platforms, and AI automation.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'en_PH',
    url: '/',
    title,
    description,
    siteName: 'John Carlo Salazar Portfolio',
    images: [
      {
        url: '/assets/images/hero.png',
        alt: 'John Carlo Salazar, full-stack web developer and systems architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/assets/images/hero.png'],
  },
};

export default function HomePage() {
  return (
    <PortfolioLayout>
      <PortfolioLandingPage />
    </PortfolioLayout>
  );
}
