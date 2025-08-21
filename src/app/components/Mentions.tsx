export default function Mentions({ data }: { data: any }) {
  if (!data) return null;
  return (
    <div>
      <h2 className='text-center text-2xl md:text-3xl font-semibold'>
        {data.heading}
      </h2>
      {data.subhead && (
        <p className='mt-2 text-center text-slate-600'>{data.subhead}</p>
      )}
      <div className='mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center'>
        {data.logos?.map((l: any) => (
          <div
            key={l.alt}
            className='rounded-xl border border-slate-200 bg-white p-4 shadow-sm'
          >
            <img
              src={l.src}
              alt={l.alt}
              className='mx-auto max-h-8 object-contain'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
