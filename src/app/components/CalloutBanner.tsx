export default function CalloutBanner() {
  return (
    <section className='w-full rounded-2xl bg-[image:var(--gradient-assistance)] px-12 md:px-24 py-7 md:py-9 text-white shadow-sm'>
      <div className='flex flex-col gap-4 items-stretch justify-between md:flex-row md:items-center'>
        <p className='font-lato text-left text-2xl md:text-4xl font-bold'>
          <span className='block'>Are you looking for</span>
          <span className='block'>personalized assistance?</span>
        </p>
        <a
          href='#contact'
          className='inline-flex items-center justify-center text-xl font-normal self-start md:self-auto rounded-md bg-white text-slate-900 px-5 py-2 text-lg md:text-xl font-medium hover:bg-white/90 transition-colors'
        >
          Talk to our experts →
        </a>
      </div>
    </section>
  );
}
