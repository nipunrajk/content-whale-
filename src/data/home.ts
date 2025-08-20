export const homeData = {
  hero: {
    eyebrow: 'We bring you,',
    headline: {
      text: 'Textual Content Solutions For All Business Communications!',
      emphasis: ['All', 'Business', 'Communications!'],
    },
    subhead:
      'We provide professional content writing, SEO content, and translation services for effective communication, maximum reach, and global impact.',
    cta: { label: 'Connect With Us', href: '/contact' },
    bg: { type: 'gradient', from: '#f4e6ff', via: '#fff2d9', to: '#e8f3ff' },
    trustedBy: {
      label: 'Trusted by 2,000+ Brands',
      logos: [
        { alt: 'upGrad', src: '/brands/upgrad.svg' },
        { alt: 'BCG', src: '/brands/bcg.svg' },
        { alt: 'ICICI', src: '/brands/icici.svg' },
        { alt: 'Tata', src: '/brands/tata.svg' },
        { alt: 'redBus', src: '/brands/redbus.svg' },
        { alt: 'HSBC', src: '/brands/hsbc.svg' },
        { alt: 'Thomas Cook', src: '/brands/thomascook.svg' },
        { alt: 'WazirX', src: '/brands/wazirx.svg' },
      ],
    },
  },
  solutions: {
    heading: 'Choose the Solution that Best Suits You',
    subhead: '',
    cards: [
      {
        title: 'Content Writing',
        slug: 'content-writing',
        image: '/cards/content-writing.png',
        badge: '',
        description: '',
        href: '/services/content-writing',
      },
      {
        title: 'SEO Services',
        slug: 'seo-services',
        image: '/cards/seo-services.png',
        badge: '40% Traffic Growth',
        description: '',
        href: '/services/seo',
      },
      {
        title: 'Translation',
        slug: 'translation',
        image: '/cards/translation.png',
        badge: '40+ Languages',
        description: '',
        href: '/services/translation',
      },
    ],
  },
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
  features: {
    heading: 'Top Features of Content Whale’s Content Writing Services',
    items: [
      {
        icon: '/icons/fast.svg',
        title: 'Blazing‑Fast Content Delivery',
        body: 'Process-driven practices enable delivery up to 20,000+ words in 48 hours.',
      },
      {
        icon: '/icons/target.svg',
        title: 'TG‑focused Content',
        body: 'Data-driven writing practices to drive traffic and conversions.',
      },
      {
        icon: '/icons/google.svg',
        title: 'Original & Authoritative',
        body: 'SMEs and editors follow Google’s E‑E‑A‑T guidelines.',
      },
      {
        icon: '/icons/translate.svg',
        title: 'Translate Across Languages',
        body: '50+ certified translators and 1000+ global SMEs.',
      },
    ],
  },
  stats: [
    { value: '100M+', label: 'Words Written' },
    { value: '15+', label: 'Countries catered' },
    { value: '100K+', label: 'Content Pieces Delivered' },
    { value: '3000+', label: 'Businesses Supported' },
  ],
  mentions: {
    heading: 'Featured Mentions & Publications',
    subhead:
      'From AMA to Forbes, we’ve been mentioned in reputed journals and publications.',
    logos: [
      { alt: 'Forbes', src: '/mentions/forbes.svg' },
      { alt: 'Lensa', src: '/mentions/lensa.svg' },
      { alt: 'GritDaily', src: '/mentions/gritdaily.svg' },
    ],
  },
  caseStudies: {
    heading: 'Expert Content Writing Solutions',
    subhead: 'Providing real‑world results. Few case studies to look at.',
    cta: { label: 'Want to Know More?', href: '/case-studies' },
    items: [
      {
        brand: 'KhataBook',
        logo: '/brands/khatabook.svg',
        title: 'KhataBook’s Transformation with Content Whale',
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
  testimonials: {
    heading: 'Don’t Just Take Our Word for it',
    subhead: 'Reviewed more than 20,000 times with an average of 4.5/5.',
    carousel: [
      {
        quote: 'Great quality and fast delivery.',
        author: {
          name: 'Samrath Iyer',
          role: 'Marketing Lead',
          avatar: '/avatars/samrath.png',
        },
        date: '2022-03-06',
        href: '/reviews/samrath-iyer',
      },
      {
        quote:
          'Another short, authentic‑sounding testimonial for the carousel.',
        author: {
          name: 'Priya N.',
          role: 'Founder, SaaSCo',
          avatar: '/avatars/priya.png',
        },
        date: '2023-11-12',
        href: '/reviews/priya-n',
      },
    ],
    ratings: [
      {
        source: 'Clutch',
        score: 4.5,
        logo: '/ratings/clutch.svg',
        href: 'https://clutch.co',
      },
      {
        source: 'GoodFirms',
        score: 4.5,
        logo: '/ratings/goodfirms.svg',
        href: 'https://goodfirms.co',
      },
      {
        source: 'Trustpilot',
        score: 4.5,
        logo: '/ratings/trustpilot.svg',
        href: 'https://trustpilot.com',
      },
    ],
  },
  resources: {
    heading: 'Check Out Our Resources',
    items: [
      {
        icon: '/icons/blog-rank.svg',
        title: '75% of our blogs rank on Google',
        body: 'We adhere to Google’s E‑E‑A‑T guidelines and curate user‑centric content.',
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
  faqs: {
    heading: 'Content Writing Agency FAQs',
    items: [
      {
        q: 'What Is Your Turn‑Around‑Time For Content Delivery?',
        a: 'Typically 48 hours for standard briefs; rush options available.',
      },
      {
        q: 'How Much Does Content Cost At Content Whale?',
        a: 'Pricing is per word; use the calculator above for an instant quote.',
      },
      {
        q: 'Do You Provide Customized Or Personalized Content?',
        a: 'Yes—each brief is tailored to your brand voice and goals.',
      },
      {
        q: 'How Can We Trust The Quality Of Your Content?',
        a: 'Every draft undergoes SME review, editing, and plagiarism checks.',
      },
    ],
  },
  finalCta: {
    icon: '/icons/phone.svg',
    headline: 'So, let’s start, shall we?',
    cta: { label: 'Connect me to an expert!', href: '/contact' },
    highlights: ['Best quality', 'Top experts', 'Quickest delivery'],
  },
};
