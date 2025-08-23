import Link from 'next/link';

export default function CaseStudies() {
  return (
    <section className='case-studies relative overflow-hidden isolate pt-[120px] md:pt-[140px]'>
      {/* Underlay SVG background */}
      <div
        aria-hidden='true'
        className="underlay absolute inset-0 z-0 pointer-events-none select-none bg-[url('/decor/case-studies-wave.svg')] bg-no-repeat bg-cover bg-[position:50%_6%] md:bg-[position:50%_0%] lg:bg-top"
      />

      {/* Row */}
      <div className='row relative z-[6] container mx-auto px-4 py-10 md:py-12 min-h-[500px] md:min-h-[580px] flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-12'>
        {/* Left: copy */}
        <div className='left flex flex-col items-start gap-8 w-[600px] max-w-full px-0 lg:px-[100px]'>
          <h2 className='font-source-serif-pro text-3xl md:text-5xl font-semibold text-primary'>
            Expert Content
            <br className='hidden md:block' />
            Writing Solutions
          </h2>
          <p className='mt-1 text-slate-600 max-w-md'>
            Providing real‑world results. Few case studies to look at.
          </p>
          <div className='mt-6'>
            <Link
              href='#'
              className='inline-flex items-center rounded-md bg-primary px-5 py-3 text-white font-medium shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40'
            >
              Want to Know More?
            </Link>
          </div>
        </div>

        {/* Right: cards */}
        <div className='right grow w-full lg:w-1/2 overflow-x-hidden'>
          <div className=' flex items-stretch lg:gap-6'>
            {/* Card One */}
            <div className='lg:justify-self-center lg:self-end'>
              <img
                src='/case-study/khatabook.png'
                alt='KhataBook case study'
                loading='lazy'
                className='w-full h-auto object-contain select-none drop-shadow-xl'
              />
            </div>

            {/* Card Two */}
            <div className='lg:justify-self-center lg:self-end'>
              <img
                src='/case-study/heritage-hospital.png'
                alt='Heritage Hospital case study'
                loading='lazy'
                className='w-full h-auto object-contain select-none drop-shadow-xl'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
