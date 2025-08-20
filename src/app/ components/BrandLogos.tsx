export default function BrandLogos({ data }: { data: any }) {
  if (!data) return null;
  return (
    <section className='container mx-auto px-4 py-10'>
      <p className='text-center text-sm text-slate-500 mb-6'>{data.label}</p>
      <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 items-center'>
        {data.logos?.map((logo: any) => (
          <div key={logo.alt} className='h-10 flex items-center justify-center'>
            <img
              src={logo.src}
              alt={logo.alt}
              className='max-h-10 object-contain'
            />
          </div>
        ))}
      </div>
    </section>
  );
}
