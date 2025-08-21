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
    <div className='absolute inset-0 rounded-3xl bg-[linear-gradient(205deg, #FFF 22.12%, #F1DAFF 129.66%)] pt-24'>
      <div>
        <img
          src='/services/content-writing/writing.svg'
          alt='Writing icon'
          className='absolute left-5 top-5 h-10 w-10'
          loading='lazy'
        />
        <p className='mx-auto text-center font-source-serif-pro text-[28px] md:text-[32px] font-semibold text-[#6F2DBD]'>
          {title}
        </p>
      </div>
      <img
        src='/services/content-writing/group1.png'
        alt='Content collage'
        loading='lazy'
      />
    </div>
  );
}

function SeoCollage({ title }: { title: string }) {
  return (
    <div className='absolute inset-0 rounded-3xl bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(242,249,255,0.98)_100%)]'>
      <img
        src='/services/Seo/seo.svg'
        alt='SEO icon'
        className='absolute left-5 top-5 h-10 w-10'
        loading='lazy'
      />
      <h3 className='absolute left-1/2 top-20 -translate-x-1/2 font-source-serif-pro text-[28px] md:text-[32px] font-semibold text-[#216EA0]'>
        {title}
      </h3>
      <div className='absolute bottom-0 left-0 right-0 top-16 flex items-end justify-center'>
        <div className='h-[55%] w-[85%] rounded-2xl bg-gradient-to-t from-[#D8EEFF] to-white ring-1 ring-[#D8EEFF]' />
      </div>
    </div>
  );
}

function TranslationCollage({ title }: { title: string }) {
  return (
    <div className='absolute inset-0 rounded-3xl bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(255,246,230,0.98)_100%)]'>
      <img
        src='/services/translation/translation.svg'
        alt='Translation icon'
        className='absolute left-5 top-5 h-10 w-10'
        loading='lazy'
      />
      <h3 className='absolute left-1/2 top-20 -translate-x-1/2 font-source-serif-pro text-[28px] md:text-[32px] font-semibold text-[#E38900]'>
        {title}
      </h3>
      <div className='absolute bottom-0 left-0 right-0 top-16 flex items-end justify-center'>
        <div className='h-[55%] w-[85%] rounded-2xl bg-gradient-to-t from-[#FFE7BF] to-white ring-1 ring-[#FFE7BF]' />
      </div>
    </div>
  );
}
