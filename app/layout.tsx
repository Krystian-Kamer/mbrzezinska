import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title:
    'Martyna Brzezińska - Ekspertka ds. Księgowości | Ekspertka ds. podatku VAT | Mediatorka stała przy Sądzie Okręgowym w Warszawie | Negocjatorka',
  description:
    'Ekspertka ds. Księgowości | Ekspertka ds. podatku VAT | Mediatorka stała przy Sądzie Okręgowym w Warszawie | Negocjatorka | #VAT #PODATKI #KSIĘGOWOŚĆ #PRAWO #LEGAL #MEDIACJE #NEGOCJACJE #EKSPERT #AKCYZA',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pl'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
