'use client';
import { useState } from 'react';

export default function FAQ({ data }: { data: any }) {
  const items = data?.items ?? [];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      <h2 className='text-center text-2xl md:text-3xl font-semibold'>
        {data?.heading}
      </h2>
      <div className='mt-8 grid md:grid-cols-2 gap-6'>
        {items.map((item: any, idx: number) => (
          <div
            key={idx}
            className='rounded-2xl border border-slate-200 bg-white p-4 shadow-sm'
          >
            <button
              className='flex w-full items-center justify-between text-left'
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              <span className='font-medium'>Nipun{item.q}</span>
              <span className='ml-4 text-slate-500'>
                {open === idx ? '−' : '+'}
              </span>
            </button>
            {open === idx && (
              <p className='mt-3 text-sm text-slate-600'>{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
