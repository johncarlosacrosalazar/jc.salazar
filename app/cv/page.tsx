import type { Metadata } from 'next';
import PortfolioLayout from '../(portfolio)/layout';
import PortfolioLandingPage from '../(portfolio)/page';
import { ThemeProvider } from '@/components/theme-provider';

const title = 'John Carlo Salazar | Full-Stack Web Developer CV';
const description =
  'The original portfolio and CV of John Carlo Salazar, a Philippines-based full-stack developer and systems architect with 10+ years of experience.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/cv' },
  openGraph: {
    type: 'profile',
    locale: 'en_PH',
    url: '/cv',
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

export default function CvPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <PortfolioLayout>
        <PortfolioLandingPage />
      </PortfolioLayout>
    </ThemeProvider>
  );
}
