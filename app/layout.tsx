import React from 'react';
import './globals.css';
import { Inter } from '@next/font/google';
import Spotlight from '@/components/Spotlight';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <head />
      <body className="cursor-disable">
        <Spotlight />

        <main className="min-h-screen bg-zinc-900 text-zinc-50">
          <div className="max-w-7xl mx-auto py-8 lg:py-16 px-4 lg:px-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
