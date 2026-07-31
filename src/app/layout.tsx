import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Industrial Prosperity — Environmental Intelligence for Saudi Arabia',
    template: '%s | Industrial Prosperity',
  },
  description: 'GreenVue by Industrial Prosperity (Al-Azadhar Al-Sanai) — Saudi Arabia\'s leading environmental intelligence platform. 19 AI-powered apps for emissions monitoring, GHG inventory, and Vision 2030 compliance. Deployed with KJO. Dammam, Eastern Province.',
  keywords: [
    'GreenVue',
    'Industrial Prosperity',
    'Al-Azadhar Al-Sanai',
    'environmental intelligence Saudi Arabia',
    'GHG inventory Saudi Arabia',
    'emissions monitoring KSA',
    'Vision 2030 environmental compliance',
    'NCEC compliance',
    'flare monitoring system',
    'IPCC Tier 1 2 3',
    'KFUPM joint IP',
    'Saudi industrial AI',
    'carbon emissions tracking',
    'environmental platform Dammam',
  ],
  authors: [{ name: 'Al-Azadhar Al-Sanai LLC', url: 'https://www.industrialprosperity.com' }],
  creator: 'Industrial Prosperity',
  publisher: 'Al-Azadhar Al-Sanai LLC',
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
    type: 'website',
    locale: 'en_SA',
    url: 'https://industrial9568.builtwithrocket.new',
    siteName: 'Industrial Prosperity — GreenVue',
    title: 'Industrial Prosperity — Environmental Intelligence for Saudi Arabia',
    description: 'GreenVue: 19 AI-powered environmental apps for Saudi industrial operators. Emissions monitoring, GHG inventory, Vision 2030 compliance. Live with KJO. Data hosted in-Kingdom.',
    images: [
      {
        url: '/assets/images/greenvue_logo-1783111231045.png',
        width: 1200,
        height: 630,
        alt: 'GreenVue Environmental Intelligence Platform — Industrial Prosperity Saudi Arabia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Prosperity — Environmental Intelligence for Saudi Arabia',
    description: 'GreenVue: 19 AI-powered environmental apps for Saudi industrial operators. Emissions monitoring, GHG inventory, Vision 2030 compliance.',
    images: ['/assets/images/greenvue_logo-1783111231045.png'],
  },
  alternates: {
    canonical: 'https://industrial9568.builtwithrocket.new',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=Cairo:wght@300;400;500;600;700&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet" />

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Findustrial9568back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></head>
      <body>
        {children}
      </body>
    </html>
  );
}
