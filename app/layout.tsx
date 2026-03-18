import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const PoppinsFont = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jc-salazar.vercel.app"),
  title: "John Carlo Salazar - Lead Web Developer & Systems Architect",
  description: "Senior Web Developer with 10+ years of experience in Singapore and Philippines. Specialist in React, Node.js, and Enterprise Systems Architecture.",
  keywords: ["John Carlo Salazar", "Web Developer", "Lead Developer", "React Developer", "Node.js Developer", "Portfolio", "Systems Architect", "Singapore Tech", "Philippines Tech"],
  authors: [{ name: "John Carlo Salazar" }],
  creator: "John Carlo Salazar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jc-salazar.vercel.app", // Updated to correct Vercel domain
    title: "John Carlo Salazar - Lead Web Developer",
    description: "Personal portfolio of John Carlo Salazar, a Senior Web Developer specializing in high-performance ecosystems.",
    siteName: "John Carlo Salazar Portfolio",
    images: [
      {
        url: "/assets/images/hero.png",
        width: 1200,
        height: 630,
        alt: "John Carlo Salazar - Lead Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Carlo Salazar - Lead Web Developer",
    description: "Senior Web Developer with 10+ years of experience in Singapore and Philippines.",
    images: ["/assets/images/hero.png"],
    creator: "@jc_salazar", // Placeholder if not found
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  alternates: {
    canonical: "https://jc-salazar.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PoppinsFont.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
