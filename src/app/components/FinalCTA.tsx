export default function FinalCTA({ data }: { data: any }) {
  return (
    <div className='rounded-3xl border border-violet-100 bg-white p-10 text-center shadow-[0_0_0_1px_rgba(124,58,237,0.08)]'>
      <div className='mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-violet-700 text-white'>
        <img src={data?.icon} alt='' className='h-5 w-5' />
      </div>
      <h3 className='mt-4 text-2xl font-semibold text-slate-900'>
        {data?.headline}
      </h3>
      <a
        href={data?.cta?.href}
        className='mt-4 inline-flex items-center justify-center rounded-full bg-violet-700 px-5 py-2 text-white font-medium hover:bg-violet-800'
      >
        {data?.cta?.label}
      </a>
      <div className='mt-6 flex items-center justify-center gap-6 text-sm text-slate-700'>
        {(data?.highlights ?? []).map((h: string) => (
          <div key={h} className='inline-flex items-center gap-2'>
            <span>⚙️</span>
            <span>{h}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
