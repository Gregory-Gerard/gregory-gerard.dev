import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import Spotlight from '@/components/Spotlight';
import Script from 'next/script';
import { Metadata } from 'next';
import { oldness } from '@/utils/oldness';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Grégory — Développeur web',
  description: `Je suis Grégory, un développeur web full-stack de ${oldness()} ans basé à Hyères.`,
  icons: '/favicon.svg',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        {process.env.NODE_ENV === 'production' && (
          <Script
            data-website-id="12c4b429-c38f-42a5-8348-33caecd61827"
            src="https://umami.gregory-gerard.dev:81/630abdb504d2a.js"
          />
        )}
      </head>
      <body className="cursor-disable">
        <Spotlight />

        <main className="min-h-screen bg-zinc-900 text-zinc-50">
          <div className="max-w-7xl mx-auto py-8 lg:py-16 px-4 lg:px-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
