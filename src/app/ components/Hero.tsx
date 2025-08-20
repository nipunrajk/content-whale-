// import clsx from 'clsx';

export default function Hero() {
  return (
    <section
      className='relative'
      aria-label='Hero'
      style={{
        backgroundImage: 'linear-gradient(135deg, #f4e6ff, #fff2d9, #e8f3ff)',
      }}
    >
      <div className='container mx-auto px-4 py-16 md:py-24'>
        <p className='text-sm font-medium text-violet-700 mb-3'>
          We bring you,
        </p>
        <h1 className='text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight'>
          Textual Content Solutions For All Business Communications!
        </h1>
        <p className='mt-4 max-w-2xl text-slate-700 text-base md:text-lg'>
          We provide professional content writing, SEO content, and translation
          services for effective communication, maximum reach, and global
          impact.
        </p>
        <a
          href='/contact'
          className='mt-6 inline-flex items-center justify-center rounded-full bg-violet-700 px-6 py-3 text-white font-medium hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-400'
        >
          Connect With Us
        </a>
      </div>
    </section>
  );
}

function renderEmphasis(headline?: { text: string; emphasis?: string[] }) {
  if (!headline?.text) return null;
  if (!headline.emphasis?.length) return headline.text;
  // Split the headline by spaces and wrap emphasized words
  const words = headline.text.split(/(\s+)/);
  return (
    <span>
      {words.map((w, i) => {
        const key = `${w}-${i}`;
        const plain = w.trim();
        const isEmph = headline.emphasis!.includes(plain);
        return isEmph ? (
          <span
            key={key}
            className={
              'bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-400 bg-clip-text text-transparent'
            }
          >
            {w}
          </span>
        ) : (
          <span key={key}>{w}</span>
        );
      })}
    </span>
  );
}
