'use client';
import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      q: 'What Is Your Turn‑Around‑Time For Content Delivery?',
      a: 'Typically 48 hours for standard briefs; rush options available.',
    },
    {
      q: 'How Much Does Content Cost At Content Whale?',
      a: 'Pricing is per word; use the calculator above for an instant quote.',
    },
    {
      q: 'Do You Provide Customized Or Personalized Content?',
      a: 'Yes—each brief is tailored to your brand voice and goals.',
    },
    {
      q: 'How Can We Trust The Quality Of Your Content?',
      a: 'Every draft undergoes SME review, editing, and plagiarism checks.',
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      <h2 className='text-center text-2xl md:text-3xl font-semibold'>
        Content Writing Agency FAQs
      </h2>
      <div className='mt-8 grid md:grid-cols-2 gap-6'>
        {faqs.map((item, idx) => (
          <div
            key={idx}
            className='rounded-2xl border border-slate-200 bg-white p-4 shadow-sm'
          >
            <button
              className='flex w-full items-center justify-between text-left'
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              <span className='font-medium'>{item.q}</span>
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
