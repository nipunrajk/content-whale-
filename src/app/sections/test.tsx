import Link from 'next/link';

export default function CaseStudies() {
  return (
    <section className='relative overflow-hidden isolate'>
      <div
        aria-hidden='true'
        className="absolute inset-0 z-0 pointer-events-none select-none bg-[url('/decor/case-studies-wave.svg')] bg-no-repeat bg-cover bg-[position:50%_6%] md:bg-[position:50%_0%] lg:bg-top"
      />

      {/* Content */}
      <div className='relative z-10 container mx-auto px-4 py-10 md:py-12 min-h-[500px] md:min-h-[580px] flex items-center'>
        <div className='grid grid-cols-1 lg:[grid-template-columns:1fr_1.1fr] gap-10 md:gap-12 items-center w-full'>
          {/* Left: copy */}
          <div className='flex flex-col justify-center'>
            <h2 className='font-source-serif-pro text-3xl md:text-[44px] font-semibold text-primary'>
              Expert Content
              <br className='hidden md:block' />
              Writing Solutions
            </h2>
            <p className='mt-4 text-slate-600 max-w-md'>
              Providing real‑world results. Few case studies to look at.
            </p>
            <div className='mt-8'>
              <Link
                href='#'
                className='inline-flex items-center rounded-md bg-primary px-5 py-3 text-white font-medium shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40'
              >
                Want to Know More?
              </Link>
            </div>
          </div>

          {/* Right: case study images with bottom alignment */}
          <div className='flex items-end justify-center'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 items-end justify-items-center max-w-lg lg:max-w-none min-h-[400px] lg:min-h-[450px]'>
              {/* First card */}
              <div className='lg:justify-self-center lg:self-end'>
                <img
                  src='/case-study/khatabook.png'
                  alt='KhataBook case study'
                  loading='lazy'
                  className='w-full h-auto object-contain select-none drop-shadow-xl'
                />
              </div>

              {/* Second card */}
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
      </div>
    </section>
  );
}
