import BrandLogos from '../components/BrandLogos';
import Hero from '../components/Hero';
import BackgroundGradients from '../components/BackgroundGradients';
import ServicesSection from './Services';
import PricingCalculator from '../components/PricingCalculator';
import Solutions from '../components/Solutions';
import MuchMore from '../components/MuchMore';
import { homeData } from '@/data/home';
import CalloutBanner from '../components/CalloutBanner';
import CurvedDivider from '../components/CurvedDivider';
import MentionsSection from './Mentions';

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

      {/* Curved divider between sections */}
      <CurvedDivider
        position='bottom'
        lineOnly
        variant='arc'
        height={70}
        bulge={160}
        stroke='#e6e6f0'
        strokeWidth={2}
        shadow
        shadowColor='rgba(0,0,0,0.18)'
        shadowBlur={8}
        shadowOffsetY={4}
        className=''
      />

      <MuchMore className='mt-32 pb-16' data={homeData.muchMore} />

      <CurvedDivider
        position='bottom'
        lineOnly
        variant='arc'
        height={70}
        bulge={160}
        stroke='#e6e6f0'
        strokeWidth={2}
        shadow
        shadowColor='rgba(0,0,0,0.18)'
        shadowBlur={8}
        shadowOffsetY={4}
        className=''
      />

      <MentionsSection />
      {/* ... rest of the sections ... */}
    </div>
  );
}
