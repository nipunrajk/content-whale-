'use client';
import { useMemo, useState } from 'react';

export default function PricingCalculator({ data }: { data: any }) {
  const services = data?.services ?? [];
  const [serviceId, setServiceId] = useState<string>(
    data?.defaults?.serviceId ?? services?.[0]?.id
  );
  const [wordCount, setWordCount] = useState<number>(
    data?.defaults?.wordCount ?? 500
  );

  const rate = useMemo(
    () => services.find((s: any) => s.id === serviceId)?.ratePerWord ?? 0,
    [services, serviceId]
  );
  const price = useMemo(
    () => Number(wordCount) * Number(rate),
    [wordCount, rate]
  );

  return (
    <div className='grid gap-8 md:grid-cols-3'>
      <div className='md:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
        <h3 className='text-xl font-semibold text-slate-900'>
          {data?.heading}
        </h3>
        <div className='mt-6 grid gap-4 sm:grid-cols-2'>
          <div>
            <label className='block text-sm font-medium text-slate-700'>
              Content type
            </label>
            <select
              value={serviceId}
              onChange={(e) => setServiceId(e.target.value)}
              className='mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400'
            >
              {services.map((s: any) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className='block text-sm font-medium text-slate-700'>
              Word Count
            </label>
            <input
              type='number'
              min={100}
              step={50}
              value={wordCount}
              onChange={(e) =>
                setWordCount(parseInt(e.target.value || '0', 10))
              }
              className='mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400'
            />
            <p className='mt-1 text-xs text-slate-500'>recommended</p>
          </div>
        </div>
        <div className='mt-6 text-3xl font-bold'>
          {data?.currency?.symbol}
          {price.toFixed(2)}
          <span className='ml-1 align-middle text-sm font-medium text-slate-500'>
            Rupees
          </span>
        </div>
      </div>

      <div className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
        <h4 className='text-base font-semibold'>What’s Included</h4>
        <ul className='mt-4 space-y-3 text-sm'>
          {(data?.whatsIncluded ?? []).map((i: string) => (
            <li key={i} className='flex items-start gap-2'>
              <span className='mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700'>
                ✓
              </span>
              <span>{i}</span>
            </li>
          ))}
        </ul>
        <a
          href={data?.cta?.href}
          className='mt-6 inline-flex w-full items-center justify-center rounded-full bg-amber-400 px-4 py-2 font-medium text-slate-900 hover:bg-amber-300'
        >
          {data?.cta?.label}
        </a>
      </div>
    </div>
  );
}
