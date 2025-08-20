import Hero from '../ components/Hero';
import BrandLogos from '../ components/BrandLogos';
import PricingCalculator from '../ components/PricingCalculator';
import CalloutBanner from '../ components/CalloutBanner';
import Features from '../ components/Features';
import Stats from '../ components/Stats';
import CaseStudies from '../ components/CaseStudies';
import Resources from '../ components/Resources';
import FAQ from '../ components/FAQ';
import FinalCTA from '../ components/FinalCTA';

// Dynamic sections (fetch via API)
import ServicesSection from './Services';
import MentionsSection from './Mentions';
import TestimonialsSection from './Testimonials';
import { homeData } from '@/data/home';

export function HomePage() {
  return (
    <div className='overflow-x-clip'>
      {/* Static sections with hardcoded data */}
      <Hero />
      <BrandLogos />

      {/* Dynamic sections that fetch from APIs */}
      <section id='solutions' className='container mx-auto px-4 py-16'>
        <h2 className='text-center text-2xl md:text-3xl font-semibold text-slate-900 mb-4'>
          Choose the Solution that Best Suits You
        </h2>
        <ServicesSection /> {/* Fetches from /api/services */}
      </section>

      <section className='container mx-auto px-4 py-16'>
        <PricingCalculator data={homeData.pricingCalculator} />
      </section>

      <CalloutBanner data={homeData.assistanceCta} />

      <section className='container mx-auto px-4 py-16'>
        <Features data={homeData.features} />
        <div className='mt-16'>
          <Stats data={homeData.stats} />
        </div>
      </section>

      <section className='container mx-auto px-4 py-16'>
        {/* Dynamic mentions logos from /api/mentions */}
        <MentionsSection
          heading='Featured Mentions & Publications'
          subhead='From AMA to Forbes, we have been mentioned in many reputed journals and publications.'
        />
        <div className='mt-16'>
          <CaseStudies data={homeData.caseStudies} />
        </div>
      </section>

      <section className='container mx-auto px-4 py-16'>
        {/* Dynamic testimonials from /api/testimonials */}
        <TestimonialsSection
          heading="Don't Just Take Our Word for it"
          subhead="We've been reviewed more than 20,000 times with an average of 4.5 out 5 rating."
        />
      </section>

      <section id='resources' className='container mx-auto px-4 py-16'>
        <Resources data={homeData.resources} />
      </section>

      <section className='container mx-auto px-4 py-16'>
        <FAQ />
      </section>

      <section className='container mx-auto px-4 py-16'>
        <FinalCTA data={homeData.finalCta} />
      </section>
    </div>
  );
}
