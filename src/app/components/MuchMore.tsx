import React from 'react';

type MuchMoreData = {
  features: any;
  stats: any[];
  statsHeading?: string;
};

type Props = {
  data: MuchMoreData;
  className?: string;
};

export default function MuchMore({ data, className = '' }: Props) {
  const {
    features,
    stats,
    statsHeading = 'We are PROUD to say that we have:',
  } = data || {};
  return (
    <section className={`container mx-auto px-4 ${className}`}>
      <div>
        <h2 className='font-source-serif-pro text-center text-4xl md:text-5xl leading-tight tracking-tight font-semibold text-primary max-w-[884px] mx-auto'>
          {features?.heading}
        </h2>

        <div className='mt-10 grid gap-12 sm:grid-cols-2 lg:grid-cols-4'>
          {features?.items?.map((f: any) => (
            <div key={f.title} className='text-center max-w-[300px] mx-auto'>
              <div className='mb-4 flex items-center justify-center'>
                <img src={f.icon} alt='' className='h-9 w-9 md:h-10 md:w-10' />
              </div>
              <h3 className='font-lato font-medium text-slate-900 text-base md:text-2xl'>
                {f.title}
              </h3>
              <p className='font-roboto mt-6 text-sm md:text-lg font-normal text-slate-600 leading-relaxed'>
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <h2 className='mt-20 text-center font-source-serif-pro text-3xl md:text-[40px] font-semibold text-primary'>
        {statsHeading}
      </h2>

      <div className='mt-10'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 items-start'>
          {stats?.map((s: any) => (
            <div key={s.label} className='text-center'>
              {/* TODO: use sathoshi font */}
              <div className='text-3xl md:text-[64px] font-bold font-medium bg-[image:var(--gradient-brand)] bg-clip-text text-transparent'>
                {s.value}
              </div>
              <div className='font-inter mt-2 text-base md:text-xl font-medium text-black'>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
