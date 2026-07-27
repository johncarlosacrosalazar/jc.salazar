import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Script from "next/script";
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
  title: {
    default: "John Carlo Salazar | Lead Web Developer & Systems Architect",
    template: "%s | John Carlo Salazar"
  },
  description: "Full-stack web developer helping businesses launch websites, online academies, portals, e-commerce experiences, and AI automation. 10+ years of experience with React, Next.js, Laravel, WordPress, and AWS.",
  keywords: [
    "John Carlo Salazar", 
    "Senior Web Developer", 
    "Systems Architect", 
    "React Specialist", 
    "Next.js Developer", 
    "Node.js Expert", 
    "Enterprise QA Lead", 
    "Full Stack Developer Philippines", 
    "Laravel Developer",
    "OpenAI RAG Chatbot Developer",
    "LearnPress Developer",
    "GoHighLevel Developer",
    "WooCommerce Developer",
    "Portfolio John Carlo Salazar"
  ],
  authors: [{ name: "John Carlo Salazar" }],
  creator: "John Carlo Salazar",
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
    type: "website",
    locale: "en_US",
    url: "https://jc-salazar.vercel.app",
    title: "John Carlo Salazar - Lead Web Developer & Systems Architect",
    description: "Architecting high-performance digital ecosystems for Singapore and the Philippines. Specialist in React, Node.js, and AI-integrated systems.",
    siteName: "John Carlo Salazar Portfolio",
    images: [
      {
        url: "/assets/images/hero.png",
        width: 1200,
        height: 630,
        alt: "John Carlo Salazar - Lead Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Carlo Salazar | Lead Web Developer",
    description: "Senior Web Developer with 10+ years of experience in Singapore and Philippines.",
    images: ["/assets/images/hero.png"],
    creator: "@jc_salazar",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  alternates: {
    canonical: "https://jc-salazar.vercel.app",
    types: {
      "text/plain": "https://jc-salazar.vercel.app/llms.txt",
    },
  },
};

import { ThemeProvider } from "@/components/theme-provider";
import PageLoader from "@/components/PageLoader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .loading-active #root-content { opacity: 0 !important; visibility: hidden !important; }
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('loading-active');`,
          }}
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YYNVS7NXPJ"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YYNVS7NXPJ');
            `,
          }}
        />
      </head>
      <body
        className={`${PoppinsFont.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PageLoader />
          <div id="root-content">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
