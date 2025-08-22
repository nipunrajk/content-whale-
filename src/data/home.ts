 const features = {
  heading: "Top Features of Content Whale's Content Writing Services",
  items: [
    {
      icon: '/features/delivery.svg',
      title: 'Blazing‑Fast Content Delivery',
      body: 'Process-driven practices enable delivery up to 20,000+ words in 48 hours.',
    },
    {
      icon: '/features/generation.svg',
      title: 'TG‑focused Content',
      body: 'Data-driven writing practices to drive traffic and conversions.',
    },
    {
      icon: '/features/google.svg',
      title: 'Original & Authoritative',
      body: "SMEs and editors follow Google's E‑E‑A‑T guidelines.",
    },
    {
      icon: '/features/translation.svg',
      title: 'Translate Across Languages',
      body: '50+ certified translators and 1000+ global SMEs.',
    },
  ],
 };

 const stats = [
  { value: '100M+', label: 'Words Written' },
  { value: '15+', label: 'Countries catered' },
  { value: '100K+', label: 'Content Pieces Delivered' },
  { value: '3000+', label: 'Businesses Supported' },
 ];

 export const homeData = {
  pricingCalculator: {
    heading: 'Calculate your pricing for content',
    services: [
      { id: 'content-writing', label: 'Content Writing', ratePerWord: 0.4 },
      { id: 'seo-writing', label: 'SEO Writing', ratePerWord: 0.6 },
      { id: 'translation', label: 'Translation', ratePerWord: 0.5 },
    ],
    defaults: { serviceId: 'content-writing', wordCount: 500 },
    whatsIncluded: [
      'SEO-Optimization',
      '0% Plagiarism [With Report]',
      '100% AI-free content',
      'Free revisions',
      '48 hours delivery',
    ],
    cta: { label: 'Get Started', href: '/checkout' },
    currency: { code: 'INR', symbol: '₹' },
    note: 'Price = ratePerWord × wordCount',
  },
  assistanceCta: {
    text: 'Are you looking for personalized assistance?',
    cta: { label: 'Talk to our experts →', href: '/contact' },
  },
  features,
  stats,
  muchMore: {
    features,
    stats,
    statsHeading: 'We are PROUD to say that we have:',
  },
  caseStudies: {
    heading: 'Expert Content Writing Solutions',
    subhead: 'Providing real‑world results. Few case studies to look at.',
    cta: { label: 'Want to Know More?', href: '/case-studies' },
    items: [
      {
        brand: 'KhataBook',
        logo: '/brands/khatabook.svg',
        title: "KhataBook's Transformation with Content Whale",
        tags: ['Fintech', 'Blog writing', 'Content strategy'],
        image: '/cases/khatabook-phone.png',
        href: '/case-studies/khatabook',
      },
      {
        brand: 'Heritage Hospitals',
        logo: '/brands/heritage.svg',
        title: 'Putting Heritage Hospitals on the Map',
        tags: ['Healthcare', 'Website content'],
        image: '/cases/heritage-id.png',
        href: '/case-studies/heritage-hospitals',
      },
    ],
  },
  resources: {
    heading: 'Check Out Our Resources',
    items: [
      {
        icon: '/icons/blog-rank.svg',
        title: '75% of our blogs rank on Google',
        body: "We adhere to Google's E‑E‑A‑T guidelines and curate user‑centric content.",
        href: '/blog',
      },
      {
        icon: '/icons/case-studies.svg',
        title: 'Case studies designed to celebrate success',
        body: 'Easy‑to‑understand, thoughtfully designed case studies.',
        href: '/case-studies',
      },
      {
        icon: '/icons/samples.svg',
        title: 'Content samples that our clients loved',
        body: '100+ samples in different tonalities, styles, and voices.',
        href: '/samples',
      },
    ],
  },
  finalCta: {
    icon: '/icons/phone.svg',
    headline: "So, let's start, shall we?",
    cta: { label: 'Connect me to an expert!', href: '/contact' },
    highlights: ['Best quality', 'Top experts', 'Quickest delivery'],
  },
};
