import BrandLogos from '../components/BrandLogos';
import Hero from '../components/Hero';
import ServicesSection from './Services';
import Solutions from '../components/Solutions';
import Features from '../components/Features';
import Stats from '../components/Stats';
import { homeData } from '@/data/home';

export function HomePage() {
  return (
    <div className='overflow-x-clip'>
      {/* Static sections with hardcoded data */}
      <Hero /> {/* Now includes assistance CTA + pricing calculator */}
      <BrandLogos />
      {/* Dynamic sections that fetch from APIs */}
      <section id='solutions' className='container mx-auto px-4 py-16'>
        <h2 className='text-center text-2xl md:text-3xl font-semibold text-slate-900 mb-4'>
          Choose the Solution that Best Suits You
        </h2>
        <ServicesSection /> {/* Fetches from /api/services */}
      </section>
      {/* Remove these since they're now in Hero */}
      {/* <section className='container mx-auto px-4 py-16'>
        <PricingCalculator data={homeData.pricingCalculator} />
      </section> */}
      {/* <CalloutBanner data={homeData.assistanceCta} /> */}
      <section className='container mx-auto px-4 py-16'>
        <Features data={homeData.features} />
        <div className='mt-16'>
          <Stats data={homeData.stats} />
        </div>
      </section>
      {/* ... rest of the sections ... */}
    </div>
  );
}
