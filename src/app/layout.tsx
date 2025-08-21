import './globals.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';

import { Lato, Inter, Source_Serif_4, Roboto } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-lato',
});

const sourceSerifPro = Source_Serif_4({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
  variable: '--font-source-serif-pro',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Content Whale — Textual Content Solutions',
  description:
    'Professional content writing, SEO content, and translation services for effective communication and global impact.',
  openGraph: {
    title: 'Content Whale — Textual Content Solutions',
    description:
      'Professional content writing, SEO content, and translation services for effective communication and global impact.',
    images: ['/og/home.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${lato.variable} ${sourceSerifPro.variable} ${inter.variable} ${roboto.variable}`}
    >
      <body className='antialiased text-slate-800'>
        <Navbar />
        <main>{children}</main>
        <footer className='border-t border-slate-200 mt-24'>
          <div className='container mx-auto px-4 py-10 text-sm text-slate-600'>
            © 2025 Content Whale
          </div>
        </footer>
      </body>
    </html>
  );
}
