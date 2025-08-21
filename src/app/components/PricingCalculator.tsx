'use client';
import { useMemo, useState } from 'react';

const SERVICES = [
  { id: 'content', label: 'Content Writing', ratePerWord: 1.2 },
  { id: 'seo', label: 'SEO Writing', ratePerWord: 1.5 },
  { id: 'translation', label: 'Translation', ratePerWord: 1.8 },
];

const DEFAULT_WORD_COUNT = 500;

export default function PricingCalculator() {
  const [serviceId, setServiceId] = useState<string>(SERVICES[0].id);
  const [wordCount, setWordCount] = useState<number>(DEFAULT_WORD_COUNT);

  const rate = useMemo(
    () => SERVICES.find((s) => s.id === serviceId)?.ratePerWord ?? 0,
    [serviceId]
  );

  const price = useMemo(
    () => Number(wordCount) * Number(rate),
    [wordCount, rate]
  );

  const includedItems = [
    'SEO-Optimization',
    '0% Plagiarism [With Report]',
    '100% AI-free content',
    'Free revisions',
    '48 hours delivery',
  ];

  return (
    <div>
      <div className='mb-8 text-center text-primary'>
        <h2 className='font-source-serif-pro text-4xl font-semibold md:text-[40px] font-semibold mb-4'>
          Industry-Leading Quality at Affordable Rates
        </h2>
        <p
          className='font-inter font-normal
 mt-2 text-xl'
        >
          Starting at 1.5/word for content writing solutions. No contracts, no
          commitments.
        </p>
      </div>
      {/* Tabs */}
      <div className='mb-12 flex justify-center'>
        <div className='inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white p-1 shadow-sm'>
          {SERVICES.map((s) => {
            const active = s.id === serviceId;
            return (
              <button
                key={s.id}
                type='button'
                onClick={() => setServiceId(s.id)}
                className={`font-lato rounded-full px-4 py-2 text-sm font-normal transition-colors ${
                  active ? 'bg-violet text-white' : 'bg-white text-primary'
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Panel */}
      <div className='relative rounded-2xl border border-slate-200 bg-[linear-gradient(98deg,#FFF_3.34%,#F9F0FF_110.29%)] p-12 shadow-sm'>
        <div className='font-inter grid gap-8 md:grid-cols-12'>
          <div className='md:col-span-7'>
            <h3 className='text-2xl font-medium text-xl font-semibold text-slate-900'>
              Get Your Custom Quote
            </h3>
            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
              <div>
                <label className='font-inter text-base font-normal block text-black'>
                  Content type
                </label>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className='mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400'
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className='font-inter text-base font-normal block text-black'>
                  Word Count
                </label>
                <div className='relative mt-2'>
                  <input
                    type='number'
                    min={100}
                    step={50}
                    value={wordCount}
                    onChange={(e) =>
                      setWordCount(parseInt(e.target.value || '0', 10))
                    }
                    className='w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400'
                  />
                  {wordCount === 500 && (
                    <span className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 pr-4'>
                      recommended
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className='mt-5'>
              <h4 className='font-inter font-medium text-base text-slate-600 mb-1'>
                Your price
              </h4>
              <div className='flex items-start'>
                <span className='font-roboto text-2xl font-normal text-slate-800 mt-2 leading-none'>
                  ₹
                </span>
                <div className='flex items-baseline gap-2'>
                  <span
                    className='font-source-serif-pro text-6xl
 md:text-7xl font-semibold leading-none tracking-tight bg-[image:var(--gradient-brand)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]'
                  >
                    {price.toFixed(2)}
                  </span>
                  <span className='text-sm md:text-base font-medium text-black'>
                    INR
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className='hidden md:block md:relative md:col-span-1'>
            <div className='absolute inset-y-4 left-1/2 w-px -translate-x-1/2 bg-slate-200' />
          </div>

          <div className='md:col-span-4 text-black'>
            <h4 className='text-2xl font-medium'>What’s Included</h4>
            <ul className='mt-6 space-y-3 text-base font-medium'>
              {includedItems.map((i) => (
                <li key={i} className='flex items-start gap-2'>
                  <span className='mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-700'>
                    ✓
                  </span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <a
              href='#contact'
              className='mt-6 inline-flex items-center justify-center w-3/5 bg-secondary px-10 py-2  rounded-lg font-medium text-white'
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
