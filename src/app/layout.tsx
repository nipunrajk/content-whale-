import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from './ components/Navbar';

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
    <html lang='en' suppressHydrationWarning>
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
