export default function BrandLogos() {
  const trustedBy = {
    label: 'Trusted by 2,000+ Brands',
    logos: [
      { alt: 'upGrad', src: '/brands/upgrad.svg' },
      { alt: 'BCG', src: '/brands/bcg.svg' },
      { alt: 'ICICI', src: '/brands/icici.svg' },
      { alt: 'Tata', src: '/brands/tata.svg' },
      { alt: 'redBus', src: '/brands/redbus.svg' },
      { alt: 'HSBC', src: '/brands/hsbc.svg' },
      { alt: 'Thomas Cook', src: '/brands/thomascook.svg' },
      { alt: 'WazirX', src: '/brands/wazirx.svg' },
    ],
  };

  return (
    <section className='container mx-auto px-4 py-10'>
      <p className='text-center text-sm text-slate-500 mb-6'>
        {trustedBy.label}
      </p>
      <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 items-center'>
        {trustedBy.logos.map((logo) => (
          <div key={logo.alt} className='h-10 flex items-center justify-center'>
            <img
              src={logo.src}
              alt={logo.alt}
              className='max-h-10 object-contain'
            />
          </div>
        ))}
      </div>
    </section>
  );
}
