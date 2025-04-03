
import './globals.css'

import type { Metadata } from 'next'
import { Inter, Jockey_One, Source_Code_Pro } from "next/font/google";

import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const codePro = Source_Code_Pro({
  weight: '400',
  subsets: ['latin'],
  variable: '--source-code-pro',
})
const jockeyOne = Jockey_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-jockey-one',
})

export const metadata: Metadata = {
  title: "Rentall",
  description: "O lugar onde tem o que você precisa",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
  },
  formatDetection: {
    telephone: false,
  },
  applicationName: 'Rentall',
  appleWebApp: {
    capable: true,
    title: 'Rentall',
    statusBarStyle: 'black-translucent',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark !scroll-smooth">
      <link rel="icon" href="/favicon/favicon.png" />
      <body
        className={`${inter.variable} ${jockeyOne.variable} ${codePro.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
