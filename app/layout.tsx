import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

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
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "./",
    types: {
      "text/plain": "https://johncarlosalazar.com/llms.txt",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
      <body>
        {children}
      </body>
    </html>
  );
}
