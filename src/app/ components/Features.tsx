export default function Features({ data }: { data: any }) {
  return (
    <div>
      <h2 className='text-center text-2xl md:text-3xl font-semibold'>
        {data?.heading}
      </h2>
      <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {data?.items?.map((f: any) => (
          <div
            key={f.title}
            className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'
          >
            <div className='h-10 w-10 rounded-lg bg-slate-100 mb-4 flex items-center justify-center'>
              <img src={f.icon} alt='' className='h-6 w-6' />
            </div>
            <h3 className='font-semibold text-slate-900'>{f.title}</h3>
            <p className='mt-2 text-sm text-slate-600'>{f.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
