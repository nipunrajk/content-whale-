import Link from 'next/link';
import type { ReactNode } from 'react';

type ServiceCard = {
  slug: string;
  title: string;
  description?: string;
  href: string;
};

export default function Solutions({ data }: { data: ServiceCard[] }) {
  return (
    <div className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {data.map((service) => (
        <Link
          key={service.slug}
          href={service.href}
          className='group relative block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm'
        >
          <div className='relative min-h-[380px] md:min-h-[440px]'>
            {getCollageForService(service)}
          </div>
        </Link>
      ))}
    </div>
  );
}

function getCollageForService(service: ServiceCard): ReactNode {
  if (service.slug === 'content-writing') {
    return <ContentWritingCollage title={service.title} />;
  }
  if (service.slug === 'seo-services') {
    return <SeoCollage title={service.title} />;
  }
  if (service.slug === 'translation') {
    return <TranslationCollage title={service.title} />;
  }
}

function ContentWritingCollage({ title }: { title: string }) {
  return (
    <div className='absolute inset-0 rounded-3xl bg-[linear-gradient(205deg,#FFF_22.12%,#F1DAFF_129.66%)]'>
      <div className='px-5 pt-5'>
        <img
          src='/services/content-writing/writing.svg'
          alt='Writing icon'
          className='h-10 w-10'
          loading='lazy'
        />
      </div>
      <h3 className='mt-3 px-5 text-left font-source-serif-pro text-[28px] md:text-[32px] font-semibold text-[#6F2DBD]'>
        {title}
      </h3>
      <div className='absolute inset-x-0 bottom-0 top-[132px] md:top-[152px] overflow-hidden'>
        <img
          src='/services/content-writing/group1.png'
          alt='Content collage'
          className='absolute bottom-0 left-1/2 w-[118%] max-w-none -translate-x-1/2 select-none pointer-events-none'
          loading='lazy'
        />
      </div>
    </div>
  );
}

function SeoCollage({ title }: { title: string }) {
  return (
    <div className='absolute inset-0 rounded-3xl bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(242,249,255,0.98)_100%)]'>
      <div className='px-5 pt-5'>
        <img
          src='/services/seo/seo.svg'
          alt='Writing icon'
          className='h-10 w-10'
          loading='lazy'
        />
      </div>
      <h3 className='mt-3 px-5 text-left font-source-serif-pro text-[28px] md:text-[32px] font-semibold text-[#216EA0]'>
        {title}
      </h3>
      <div className='absolute inset-x-0 bottom-0 top-[132px] md:top-[152px] overflow-hidden'>
        <img
          src='/services/seo/group.png'
          alt='Content collage'
          className='absolute bottom-0 left-1/2 w-[118%] max-w-none -translate-x-1/2 select-none pointer-events-none'
          loading='lazy'
        />
      </div>
    </div>
  );
}

<div className='absolute inset-0 rounded-3xl bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(255,246,230,0.98)_100%)]'></div>

function TranslationCollage({ title }: { title: string }) {
  return (
    <div className='absolute inset-0 rounded-3xl bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(255,246,230,0.98)_100%)]'>
      <div className='px-5 pt-5'>
        <img
          src='/services/translation/translation.svg'
          alt='Writing icon'
          className='h-10 w-10'
          loading='lazy'
        />
      </div>
      <h3 className='mt-3 px-5 text-left font-source-serif-pro text-[28px] md:text-[32px] font-semibold text-[#E38900]'>
        {title}
      </h3>
      <div className='absolute inset-x-0 bottom-0 top-[132px] md:top-[152px] overflow-hidden'>
        <img
          src='/services/translation/group.png'
          alt='Content collage'
          className='absolute bottom-0 left-1/2 w-[118%] max-w-none -translate-x-1/2 select-none pointer-events-none'
          loading='lazy'
        />
      </div>
    </div>
  );
}
