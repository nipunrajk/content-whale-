import BrandLogos from '../components/BrandLogos';
import Hero from '../components/Hero';
import BackgroundGradients from '../components/BackgroundGradients';
import ServicesSection from './Services';
import Solutions from '../components/Solutions';
import Features from '../components/Features';
import Stats from '../components/Stats';
import { homeData } from '@/data/home';

export function HomePage() {
  return (
    <div className='relative overflow-x-clip'>
      <BackgroundGradients />
      {/* Static sections with hardcoded data */}
      <Hero />
      {/* Dynamic sections that fetch from APIs */}
      <section id='solutions' className='container mx-auto px-4 py-16'>
        <h2 className='text-center text-2xl md:text-4xl font-semibold text-slate-900 mb-8'>
          Choose the Solution
          <span className='ml-2 bg-[image:var(--gradient-brand)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]'>
            that Best Suits You
          </span>
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
