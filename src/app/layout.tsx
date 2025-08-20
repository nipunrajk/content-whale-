import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

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
        <header className='sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200'>
          <div className='container mx-auto px-4 py-3 flex items-center justify-between'>
            <Link href='/' className='flex items-center gap-2 font-semibold'>
              <img src='/logo.svg' alt='Content Whale' className='h-6 w-6' />
              <span>CONTENT WHALE</span>
            </Link>
            <nav className='hidden md:flex items-center gap-6 text-sm'>
              <Link href='#solutions' className='hover:text-violet-700'>
                Content Solutions
              </Link>
              <Link href='#resources' className='hover:text-violet-700'>
                Resources
              </Link>
              <Link href='/about' className='hover:text-violet-700'>
                About Us
              </Link>
            </nav>
            <Link
              href='/contact'
              className='rounded-full bg-violet-700 px-4 py-2 text-white text-sm font-medium hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-400'
            >
              Let’s Talk →
            </Link>
          </div>
        </header>
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
