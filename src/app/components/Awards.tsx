type Logo = { alt: string; src: string; href?: string };

export default function Awards({
  data,
}: {
  data: { heading: string; subhead?: string; logos: Logo[] };
}) {
  const { heading, subhead, logos } = data || {};
  return (
    <section className='container mx-auto px-4 py-20'>
      <h2 className='font-source-serif-pro text-center text-4xl md:text-5xl font-semibold text-primary'>
        {heading}
      </h2>
      {subhead ? (
        <p className='mt-4 text-center text-primary/80 text-base md:text-lg max-w-3xl mx-auto'>
          {subhead}
        </p>
      ) : null}

      <div className='mt-12 mx-auto max-w-[1100px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 place-items-center'>
        {logos?.map((logo) => {
          const img = (
            <img
              src={logo.src}
              alt={logo.alt}
              className='h-10 md:h-12 w-auto object-contain'
              loading='lazy'
            />
          );
          return (
            <div
              key={logo.alt}
              className='rounded-xl bg-white p-4 md:p-5 border border-slate-200 shadow-[0_2px_0_#E5E7EB,0_8px_24px_rgba(0,0,0,0.06)] flex items-center justify-center h-[70px] md:h-[80px] w-full max-w-[220px] transition-transform duration-200 will-change-transform hover:-translate-y-0.5'
            >
              {logo.href ? (
                <a
                  href={logo.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={logo.alt}
                >
                  {img}
                </a>
              ) : (
                img
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
