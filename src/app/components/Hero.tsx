export default function Hero() {
  return (
    <section className='relative overflow-hidden' aria-label='Hero'>
      <div className='relative z-10 container mx-auto px-4 py-20 md:py-32'>
        <div className='mx-auto text-center'>
          <p className='text-2xl font-medium text-secondary mb-4'>
            We bring you,
          </p>

          <h1 className='font-source-serif-pro text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight mb-9 font-semibold'>
            Textual Content Solutions For <br />
            <span className='bg-[image:var(--gradient-brand)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] font-semibold'>
              All Business Communications!
            </span>
          </h1>

          {/* TODO: Change font and style*/}
          <p className='text-lg md:text-xl text-slate-700 max-w-3xl mx-auto mb-6 leading-relaxed'>
            We provide professional content writing, SEO content, and
            translation services for effective communication, maximum reach, and
            global impact.
          </p>

          {/* CTA Button */}
          <div className='mb-14'>
            <a
              href='/contact'
              className='inline-flex items-center justify-center bg-violet px-9 py-4 text-white 
              font-inter text-base
              font-medium text-lg 
              rounded-xl
hover:bg-violet focus:outline-none focus:ring-4 focus:ring-violet transition-all duration-200 transform hover:scale-105'
            >
              Connect With Us
            </a>
          </div>

          {/* Trusted By */}
          {/* TODO: move this to BrandLogo.tsx */}
          <div className='font-roboto text-xl font-bold mt-12'>
            <p className='text-base md:text-lg text-slate-900 text-center'>
              Trusted by <span className='text-secondary'>2,000+ Brands</span>
            </p>

            <ul className='mt-4 flex flex-wrap items-center justify-center gap-9'>
              {[
                { name: 'upGrad', src: '/brands/upgrad.svg' },
                { name: 'BCG', src: '/brands/bcg.svg' },
                { name: 'ICICI', src: '/brands/icici.svg' },
                { name: 'TATA', src: '/brands/tata.svg' },
                { name: 'redBus', src: '/brands/redbus.svg' },
                { name: 'HSBC', src: '/brands/hsbc.svg' },
                { name: 'Thomas Cook', src: '/brands/thomascook.svg' },
                { name: 'WazirX', src: '/brands/wazirx.svg' },
              ].map((b) => (
                <li key={b.name} className='flex items-center justify-center'>
                  <img
                    src={b.src}
                    alt={b.name}
                    className='w-auto object-contain'
                    loading='lazy'
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
