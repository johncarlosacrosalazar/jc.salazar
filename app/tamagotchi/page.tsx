import type { Metadata } from "next";
import TamagotchiDemo from "./tamagotchi-demo";

export const metadata: Metadata = {
  title: "PawPal Virtual Pet Concept",
  description: "An interactive virtual pet dashboard concept demonstrating a lightweight daily care loop.",
};

export default function TamagotchiPage() {
  return <TamagotchiDemo />;
}
