import Link from 'next/link';

export default function CaseStudies({ data }: { data: any }) {
  if (!data) return null;
  return (
    <div className='mt-16 grid gap-8 lg:grid-cols-3'>
      <div className='lg:col-span-1 self-center'>
        <h3 className='text-2xl font-semibold text-slate-900'>
          {data.heading}
        </h3>
        <p className='mt-2 text-slate-600'>{data.subhead}</p>
        <Link
          href={data.cta?.href}
          className='mt-4 inline-flex rounded-full bg-violet-700 px-4 py-2 text-white text-sm font-medium hover:bg-violet-800'
        >
          {data.cta?.label}
        </Link>
      </div>
      <div className='lg:col-span-2 grid gap-6 md:grid-cols-2'>
        {data.items?.map((c: any) => (
          <Link
            key={c.title}
            href={c.href}
            className='rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition'
          >
            <div className='flex items-center gap-3'>
              <img src={c.logo} alt={c.brand} className='h-6 w-6' />
              <span className='font-medium'>{c.brand}</span>
            </div>
            <div className='mt-3 aspect-[4/3] overflow-hidden rounded-xl bg-slate-100'>
              <img
                src={c.image}
                alt=''
                className='h-full w-full object-cover'
              />
            </div>
            <h4 className='mt-3 text-lg font-semibold'>{c.title}</h4>
            {c.tags?.length > 0 && (
              <div className='mt-2 flex flex-wrap gap-2'>
                {c.tags.map((t: string) => (
                  <span
                    key={t}
                    className='rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700'
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
