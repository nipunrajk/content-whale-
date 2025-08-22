type Logo = { alt: string; src: string; href?: string };

type Props = {
  logos: Logo[];
};

export default function Awards({
  logos,
}: Props) {
  const heading = 'Featured Mentions & Publications';
  const subhead = 'From AMA to Forbes, we have been mentioned in many reputed journals and publications.';
  return (
    <section className='container mx-auto px-4 py-20'>
      <h2 className='font-source-serif-pro text-center text-4xl md:text-5xl font-semibold text-primary'>
        {heading}
      </h2>
      <p className='mt-4 text-center text-primary/80 text-base md:text-lg max-w-3xl mx-auto'>
        {subhead}
      </p>

      <div className='mt-12 mx-auto max-w-[1100px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 place-items-center'>
        {logos?.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className='h-10 md:h-12 w-auto object-contain'
            loading='lazy'
          />
        ))}
      </div>
    </section>
  );
}
