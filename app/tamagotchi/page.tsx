import type { Metadata } from "next";
import TamagotchiDemo from "./tamagotchi-demo";

export const metadata: Metadata = {
  title: "PawPal Virtual Pet Concept",
  description: "An interactive virtual pet dashboard concept demonstrating a lightweight daily care loop.",
  alternates: {
    canonical: "/tamagotchi",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "/tamagotchi",
    title: "PawPal Virtual Pet Concept",
    description: "An interactive virtual pet dashboard concept demonstrating a lightweight daily care loop.",
    images: ["/assets/images/tamagotchi.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "PawPal Virtual Pet Concept",
    description: "An interactive virtual pet dashboard concept demonstrating a lightweight daily care loop.",
    images: ["/assets/images/tamagotchi.webp"],
  },
};

export default function TamagotchiPage() {
  return <TamagotchiDemo />;
}
