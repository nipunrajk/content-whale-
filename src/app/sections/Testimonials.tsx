import { getBaseUrl } from '@/lib/base-url';

export default async function TestimonialsSection({
  heading,
  subhead,
}: {
  heading?: string;
  subhead?: string;
}) {
  const base = getBaseUrl();
  const res = await fetch(`${base}/api/testimonials`, { cache: 'no-store' });
  if (!res.ok)
    return (
      <div className='text-sm text-red-600'>Failed to load testimonials.</div>
    );
  const testimonials: Array<{
    id: number;
    name: string;
    role: string;
    message: string;
  }> = await res.json();

  return (
    <div>
      <h2 className='text-2xl md:text-3xl font-semibold'>
        {heading ?? 'Testimonials'}
      </h2>
      {subhead && <p className='mt-2 text-slate-600'>{subhead}</p>}
      <div className='mt-8 grid gap-6 md:grid-cols-2'>
        {testimonials.map((t) => (
          <article
            key={t.id}
            className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'
          >
            <p className='text-slate-700'>{t.message}</p>
            <div className='mt-4'>
              <div className='text-sm font-medium'>{t.name}</div>
              <div className='text-xs text-slate-500'>{t.role}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
