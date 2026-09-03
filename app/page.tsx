import type { Metadata } from 'next';
import ConversionPortfolio from '@/components/ConversionPortfolio';

const title = 'Web Designer & Developer for Growing Businesses | John Carlo Salazar';
const description = 'Conversion-focused websites, e-commerce experiences, online academies, and custom web platforms designed and built by John Carlo Salazar.';

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
    images: [{ url: '/assets/images/TIQA.webp', alt: 'Selected website work by John Carlo Salazar' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/assets/images/TIQA.webp'],
  },
};

export default function HomePage() {
  return <ConversionPortfolio />;
}
