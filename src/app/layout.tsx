import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';


export const metadata: Metadata = {
  title: "Plagrounds",
  description: "Fearless AI Company",
  openGraph: {
    title: "Playgrounds",
    type: "website",
    locale: "en_US",
    siteName: "Playgrounds",
    description: "Fearless AI Company",
    url: "https://playgrounds.network/",
    images: [
      {
        url: "https://playgrounds.network/og/global.png",
        width: 1200,
        height: 630,
        alt: "Playgrounds OG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Playgrounds",
    description: "Playgrounds - Fearless AI Company",
    images: [
      {
        url: "https://playgrounds.network/og/global.png",
        width: 1200,
        height: 628,
        alt: "Playgrounds - Fearless AI Company",
      },
    ],
  },
};

const neueHaas = localFont({
  src: [
    {
      path: '../../public/fonts/NeueHaasDisplayBlack.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueHaasDisplayBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueHaasDisplayMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueHaasDisplayRoman.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-neue-haas',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/hml2duc.css" />
      </head>
      <body className={`antialiased ${neueHaas.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
