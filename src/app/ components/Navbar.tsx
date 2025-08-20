import Link from 'next/link';

export default function Navbar() {
  return (
    <header className='sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200'>
      <div className='container mx-auto px-4 py-3 flex items-center justify-between'>
        {/* Left side: Logo + Brand + Navigation */}
        <div className='flex items-center gap-8'>
          <Link href='/' className='flex items-center gap-2 font-semibold'>
            <img src='/logo.svg' alt='Content Whale' />
          </Link>

          {/* Navigation links next to logo */}
          <nav className='hidden md:flex items-center gap-6 text-sm'>
            <Link
              href='#solutions'
              className='hover:text-violet-700 transition-colors flex items-center gap-1'
            >
              Content Solutions
              <span className='text-xs'>▼</span>
            </Link>
            <Link
              href='#resources'
              className='hover:text-violet-700 transition-colors flex items-center gap-1'
            >
              Resources
              <span className='text-xs'>▼</span>
            </Link>
            <Link
              href='/about'
              className='hover:text-violet-700 transition-colors'
            >
              About Us
            </Link>
          </nav>
        </div>

        {/* Right side: Rank On AI + Let's Talk */}
        <div className='flex items-center gap-6'>
          {/* Rank On AI feature */}
          <div className='hidden lg:flex items-center gap-2'>
            <span className='bg-gradient-to-r from-violet-600 to-orange-500 bg-clip-text text-transparent font-medium'>
              Rank On AI
            </span>
            <img src='/new.svg' alt='New' />
          </div>

          {/* Let's Talk button */}
          <Link
            href='/contact'
            className='bg-gradient-to-r from-violet-700 to-violet-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-violet-800 hover:to-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400 transition-all flex items-center gap-2'
          >
            Let's Talk
            <span className='text-white'>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
