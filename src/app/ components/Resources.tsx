import Link from 'next/link';
export default function Resources({ data }: { data: any }) {
  return (
    <div>
      <h2 className='text-center text-2xl md:text-3xl font-semibold'>
        {data?.heading}
      </h2>
      <div className='mt-8 grid gap-6 md:grid-cols-3'>
        {data?.items?.map((r: any) => (
          <Link
            key={r.title}
            href={r.href}
            className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition'
          >
            <div className='h-10 w-10 rounded-lg bg-slate-100 mb-4 flex items-center justify-center'>
              <img src={r.icon} alt='' className='h-6 w-6' />
            </div>
            <h3 className='font-semibold text-slate-900'>{r.title}</h3>
            <p className='mt-2 text-sm text-slate-600'>{r.body}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
