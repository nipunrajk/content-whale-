import Hero from '../ components/Hero';
import BrandLogos from '../ components/BrandLogos';
import Solutions from '../ components/Solutions';
import PricingCalculator from '../ components/PricingCalculator';
import CalloutBanner from '../ components/CalloutBanner';
import Features from '../ components/Features';
import Stats from '../ components/Stats';
import Mentions from '../ components/Mentions';
import CaseStudies from '../ components/CaseStudies';
import Testimonials from '../ components/Testimonials';
import Resources from '../ components/Resources';
import FAQ from '../ components/FAQ';
import FinalCTA from '../ components/FinalCTA';

export function HomePage({ data }: { data: any }) {
  const {
    hero,
    solutions,
    pricingCalculator,
    assistanceCta,
    features,
    stats,
    mentions,
    caseStudies,
    testimonials,
    resources,
    faqs,
    finalCta,
  } = data;
  return (
    <div className='overflow-x-clip'>
      <Hero data={hero} />
      <BrandLogos data={hero?.trustedBy} />

      <section id='solutions' className='container mx-auto px-4 py-14'>
        <h2 className='text-center text-2xl md:text-3xl font-semibold'>
          {solutions?.heading}
        </h2>
        {solutions?.subhead && (
          <p className='mt-2 text-center text-slate-600'>{solutions.subhead}</p>
        )}
        <Solutions data={solutions?.cards ?? []} />
      </section>

      <section className='container mx-auto px-4 py-10'>
        <PricingCalculator data={pricingCalculator} />
      </section>

      <CalloutBanner data={assistanceCta} />

      <section className='container mx-auto px-4 py-16'>
        <Features data={features} />
        <div className='mt-12'>
          <Stats data={stats} />
        </div>
      </section>

      <section className='container mx-auto px-4 py-16'>
        <Mentions data={mentions} />
        <CaseStudies data={caseStudies} />
      </section>

      <section className='container mx-auto px-4 py-16'>
        <Testimonials data={testimonials} />
      </section>

      <section id='resources' className='container mx-auto px-4 py-16'>
        <Resources data={resources} />
      </section>

      <section className='container mx-auto px-4 py-16'>
        <FAQ data={faqs} />
      </section>

      <section className='container mx-auto px-4 py-16'>
        <FinalCTA data={finalCta} />
      </section>
    </div>
  );
}
