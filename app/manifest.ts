/**
 * Web App Manifest for John Carlo Salazar's Portfolio.
 * Defines metadata for PWA (Progressive Web App) functionality, including branding and icons.
 */
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'John Carlo Salazar Portfolio',
    short_name: 'JC Salazar',
    description: 'Portfolio of full-stack web developer and systems architect John Carlo Salazar.',
    id: '/',
    scope: '/',
    lang: 'en-PH',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#FFD700',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
