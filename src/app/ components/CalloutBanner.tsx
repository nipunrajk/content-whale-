export default function CalloutBanner({ data }: { data: any }) {
  if (!data) return null;
  return (
    <section className='mx-4 my-12 rounded-3xl bg-gradient-to-r from-violet-700 to-fuchsia-600 px-6 py-8 text-center text-white md:mx-auto md:max-w-5xl'>
      <p className='text-lg font-medium'>{data.text}</p>
      <a
        href={data.cta?.href}
        className='mt-4 inline-flex items-center justify-center rounded-full bg-white/15 px-5 py-2 text-sm font-semibold hover:bg-white/25'
      >
        {data.cta?.label}
      </a>
    </section>
  );
}
