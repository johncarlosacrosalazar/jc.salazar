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
  metadataBase: new URL("https://johncarlosalazar.com"),
  title: {
    default: "John Carlo Salazar | Lead Web Developer & Systems Architect",
    template: "%s | John Carlo Salazar"
  },
  description: "Full-stack web developer helping businesses launch websites, online academies, portals, e-commerce experiences, and AI automation. 10+ years of experience with React, Next.js, Laravel, WordPress, and AWS.",
  authors: [{ name: "John Carlo Salazar" }],
  creator: "John Carlo Salazar",
  publisher: "John Carlo Salazar",
  applicationName: "John Carlo Salazar Portfolio",
  category: "technology",
  referrer: "origin-when-cross-origin",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "./",
    types: {
      "text/plain": "https://johncarlosalazar.com/llms.txt",
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
