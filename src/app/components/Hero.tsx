export default function Hero() {
  return (
    <section className='relative overflow-hidden' aria-label='Hero'>
      {/* Gradient Background */}
      <div
        className='absolute inset-0'
        style={{
          background:
            'linear-gradient(135deg, #f4e6ff 0%, #fff2d9 50%, #e8f3ff 100%)',
        }}
      />

      {/* Content */}
      <div className='relative container mx-auto px-4 py-20 md:py-32'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Eyebrow Text */}
          <p className='text-lg font-medium text-orange-600 mb-4'>
            We bring you,
          </p>

          {/* Main Headline */}
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight mb-6'>
            Textual Content Solutions For{' '}
            <span className='bg-gradient-to-r from-violet-600 to-red-500 bg-clip-text text-transparent'>
              All Business Communications!
            </span>
          </h1>

          {/* Subhead */}
          <p className='text-lg md:text-xl text-slate-700 max-w-3xl mx-auto mb-8 leading-relaxed'>
            We provide professional content writing, SEO content, and
            translation services for effective communication, maximum reach, and
            global impact.
          </p>

          {/* CTA Button */}
          <div className='mb-12'>
            <a
              href='/contact'
              className='inline-flex items-center justify-center rounded-full bg-violet-700 px-8 py-4 text-white font-semibold text-lg hover:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-300 transition-all duration-200 transform hover:scale-105'
            >
              Connect With Us
            </a>
          </div>

          {/* Trusted By Section */}
          <div className='border-t border-slate-200 pt-8 mb-16'>
            <p className='text-sm text-slate-500 mb-6'>
              Trusted by 2,000+ Brands
            </p>

            {/* Brand Logos Grid */}
            <div className='grid grid-cols-4 md:grid-cols-8 gap-6 items-center justify-items-center'>
              {[
                { name: 'upGrad', logo: '/brands/upgrad.svg' },
                { name: 'BCG', logo: '/brands/bcg.svg' },
                { name: 'ICICI', logo: '/brands/icici.svg' },
                { name: 'TATA', logo: '/brands/tata.svg' },
                { name: 'redBus', logo: '/brands/redbus.svg' },
                { name: 'HSBC', logo: '/brands/hsbc.svg' },
                { name: 'Thomas Cook', logo: '/brands/thomascook.svg' },
                { name: 'WazirX', logo: '/brands/wazirx.svg' },
              ].map((brand) => (
                <div
                  key={brand.name}
                  className='flex items-center justify-center'
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className='h-8 md:h-10 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-200'
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Assistance CTA Banner */}
          <div className='bg-violet-700 rounded-2xl p-8 md:p-10 max-w-4xl mx-auto mb-16'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
              <div className='text-center md:text-left'>
                <p className='text-xl md:text-2xl font-semibold text-white mb-2'>
                  Are you looking for personalized assistance?
                </p>
                <p className='text-violet-100 text-sm md:text-base'>
                  Get expert guidance for your content needs
                </p>
              </div>
              <a
                href='/contact'
                className='inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-violet-700 font-semibold hover:bg-violet-50 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-200 transform hover:scale-105 whitespace-nowrap'
              >
                Talk to our experts →
              </a>
            </div>
          </div>

          {/* Pricing Calculator Section */}
          <div className='bg-white rounded-3xl p-8 md:p-10 shadow-xl max-w-5xl mx-auto'>
            <div className='text-center mb-8'>
              <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-2'>
                Industry-Leading Quality at Affordable Rates
              </h2>
              <p className='text-slate-600 text-lg'>
                Starting at ₹1.5/word for content writing solutions. No
                contracts, no commitments.
              </p>
            </div>

            {/* Service Tabs */}
            <div className='flex justify-center mb-8'>
              <div className='flex bg-slate-100 rounded-full p-1'>
                <button className='px-6 py-2 rounded-full bg-violet-700 text-white font-medium transition-colors'>
                  Content Writing
                </button>
                <button className='px-6 py-2 rounded-full text-slate-700 font-medium hover:text-slate-900 transition-colors'>
                  SEO Writing
                </button>
                <button className='px-6 py-2 rounded-full text-slate-700 font-medium hover:text-slate-900 transition-colors'>
                  Translation
                </button>
              </div>
            </div>

            {/* Calculator Interface */}
            <div className='grid md:grid-cols-2 gap-8'>
              {/* Left Column - Calculator */}
              <div>
                <h3 className='text-xl font-semibold text-slate-900 mb-4'>
                  Calculate your pricing for content
                </h3>

                <div className='space-y-4'>
                  <div>
                    <label className='block text-sm font-medium text-slate-700 mb-2'>
                      Content type
                    </label>
                    <select className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500'>
                      <option>Service Type</option>
                    </select>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-slate-700 mb-2'>
                      Word Count
                    </label>
                    <div className='relative'>
                      <input
                        type='number'
                        defaultValue='500'
                        className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500'
                      />
                      <span className='absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-slate-500'>
                        recommended
                      </span>
                    </div>
                  </div>
                </div>

                {/* Price Display */}
                <div className='mt-6 p-4 bg-orange-50 rounded-lg'>
                  <p className='text-sm text-slate-600 mb-1'>Your price</p>
                  <p className='text-3xl font-bold text-orange-600'>₹200.00</p>
                  <p className='text-sm text-slate-500'>Rupees</p>
                </div>
              </div>

              {/* Right Column - What's Included */}
              <div>
                <h3 className='text-xl font-semibold text-slate-900 mb-4'>
                  What's Included
                </h3>

                <div className='space-y-3'>
                  {[
                    'SEO-Optimization',
                    '0% Plagiarism [With Report]',
                    '100% AI-free content',
                    'Free revisions',
                    '48 hours delivery',
                  ].map((feature) => (
                    <div key={feature} className='flex items-center gap-3'>
                      <div className='w-5 h-5 bg-green-500 rounded-full flex items-center justify-center'>
                        <span className='text-white text-xs'>✓</span>
                      </div>
                      <span className='text-slate-700'>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className='mt-8'>
                  <a
                    href='/checkout'
                    className='inline-flex items-center justify-center w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-200 transform hover:scale-105'
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
