import Link from 'next/link';

export default function Solutions({ data }: { data: any[] }) {
  return (
    <div className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {data.map((card) => (
        <Link
          key={card.slug}
          href={card.href}
          className='group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-transform duration-200 hover:shadow-md hover:-translate-y-0.5'
        >
          <div className='aspect-[4/3] overflow-hidden rounded-xl bg-slate-100'>
            <img
              src={card.image}
              alt=''
              className='h-full w-full object-cover'
            />
          </div>
          <div className='mt-4 flex items-center justify-between'>
            <h3 className='text-lg font-semibold text-slate-900 group-hover:text-violet-700'>
              {card.title}
            </h3>
            {card.badge && (
              <span className='rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700'>
                {card.badge}
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
