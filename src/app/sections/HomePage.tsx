import BrandLogos from '../components/BrandLogos';
import Hero from '../components/Hero';
import BackgroundGradients from '../components/BackgroundGradients';
import ServicesSection from './Services';
import PricingCalculator from '../components/PricingCalculator';
import Solutions from '../components/Solutions';
import Features from '../components/Features';
import Stats from '../components/Stats';
import { homeData } from '@/data/home';
import CalloutBanner from '../components/CalloutBanner';

export function HomePage() {
  return (
    <div className='relative overflow-x-clip'>
      <BackgroundGradients />

      <Hero />

      {/* Dynamic sections that fetch from APIs */}
      <section id='solutions' className='container mx-auto px-4 mb-24'>
        <h2 className='font-source-serif-pro text-center text-2xl md:text-[40px] font-semibold text-primary mb-10'>
          Choose the Solution
          <span className='ml-2 bg-[image:var(--gradient-brand)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] font-semibold'>
            that Best Suits You
          </span>
        </h2>
        <ServicesSection /> {/* Fetches from /api/services */}
      </section>

      {/* Pricing Calculator */}
      <section className='container mx-auto px-4 pb-8'>
        <PricingCalculator />
        <div className='mt-4'>
          <CalloutBanner />
        </div>
      </section>

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
