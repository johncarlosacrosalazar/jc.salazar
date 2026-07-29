import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://johncarlosalazar.com';

  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/tamagotchi`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/neo360-redesign`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
