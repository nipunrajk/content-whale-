export default function Stats({ data }: { data: any[] }) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
      {data?.map((s) => (
        <div
          key={s.label}
          className='rounded-2xl bg-white p-6 text-center shadow-sm border border-slate-200'
        >
          <div className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-600 to-amber-500 bg-clip-text text-transparent'>
            {s.value}
          </div>
          <div className='mt-1 text-xs md:text-sm text-slate-600'>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
