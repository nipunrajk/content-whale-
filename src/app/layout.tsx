import './globals.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';

import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-lato',
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
    <html lang='en' suppressHydrationWarning className={lato.variable}>
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
