// import clsx from 'clsx';

export default function Hero({ data }: { data: any }) {
  const { eyebrow, headline, subhead, cta, bg } = data ?? {};
  return (
    <section
      className='relative'
      aria-label='Hero'
      style={{
        backgroundImage: `linear-gradient(135deg, ${bg?.from}, ${bg?.via}, ${bg?.to})`,
      }}
    >
      <div className='container mx-auto px-4 py-16 md:py-24'>
        {eyebrow && (
          <p className='text-sm font-medium text-violet-700 mb-3'>{eyebrow}</p>
        )}
        <h1 className='text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight'>
          {renderEmphasis(headline)}
        </h1>
        {subhead && (
          <p className='mt-4 max-w-2xl text-slate-700 text-base md:text-lg'>
            {subhead}
          </p>
        )}
        {cta?.label && (
          <a
            href={cta.href}
            className='mt-6 inline-flex items-center justify-center rounded-full bg-violet-700 px-6 py-3 text-white font-medium hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-400'
          >
            {cta.label}
          </a>
        )}
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
