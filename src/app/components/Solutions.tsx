import Link from 'next/link';
import type { ReactNode } from 'react';

type ServiceCard = {
  slug: string;
  title: string;
  description?: string;
  href: string;
};

const iconClasses =
  'inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white';

function IconWriting() {
  return (
    <span className={iconClasses} aria-hidden>
      {/* simple note icon */}
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        className='h-5 w-5'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M3 7h18M3 12h12M3 17h8'
        />
      </svg>
    </span>
  );
}

function IconSEO() {
  return (
    <span className={iconClasses} aria-hidden>
      {/* magnifying glass + chart */}
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        className='h-5 w-5'
      >
        <circle cx='11' cy='11' r='6' strokeWidth='2' />
        <path d='M21 21l-4.3-4.3' strokeWidth='2' strokeLinecap='round' />
      </svg>
    </span>
  );
}

function IconTranslate() {
  return (
    <span className={iconClasses} aria-hidden>
      {/* translate glyph */}
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        className='h-5 w-5'
      >
        <path
          d='M4 5h7m-7 0v7m7-7v7M8 5c0 6 6 10 12 10'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    </span>
  );
}

const themeBySlug: Record<
  string,
  { accentClass: string; ringClass: string; icon: ReactNode }
> = {
  'content-writing': {
    accentClass: 'text-[#5B2EBE]',
    ringClass: 'ring-[#E7DFFF]/70',
    icon: <IconWriting />,
  },
  'seo-services': {
    accentClass: 'text-[#216EA0]',
    ringClass: 'ring-[#D8EEFF]/70',
    icon: <IconSEO />,
  },
  translation: {
    accentClass: 'text-[#E38900]',
    ringClass: 'ring-[#FFE7BF]/70',
    icon: <IconTranslate />,
  },
};

export default function Solutions({ data }: { data: ServiceCard[] }) {
  return (
    <div className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {data.map((card) => {
        const theme = themeBySlug[card.slug] ?? themeBySlug['content-writing'];
        return (
          <Link
            key={card.slug}
            href={card.href}
            className='group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-inset transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md'
          >
            {/* Icon */}
            {theme.icon}

            {/* Title */}
            <h3
              className={`mt-5 text-2xl font-semibold tracking-tight ${theme.accentClass}`}
            >
              {card.title}
            </h3>
            {card.description && (
              <p className='mt-1 text-sm text-slate-600'>{card.description}</p>
            )}

            {/* Decorative right graphic */}
            <div
              className={`pointer-events-none absolute -right-8 bottom-0 top-16 w-40 rounded-tl-[40px] bg-gradient-to-t from-slate-50 to-slate-100/60 ring-1 ${theme.ringClass}`}
              aria-hidden
            />
          </Link>
        );
      })}
    </div>
  );
}
