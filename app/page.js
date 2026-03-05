'use client';

import { useEffect, useRef } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import ClientWall from './components/ClientWall';
import CaseStudies from './components/CaseStudies';
import StartupTimeline from './components/StartupTimeline';
import FounderValueSection from './components/FounderValueSection';
import FounderResourceHub from './components/FounderResourceHub';
import FounderStoriesCarousel from './components/FounderStoriesCarousel';
import HeroClient, { MagneticButton } from './components/HeroClient';

// SVG Icons - Beautiful & Modern
const icons = {
  rocket: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  finance: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  shield: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  award: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),
  users: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  chart: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  support: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  speed: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  eye: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
    </svg>
  ),
  device: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  arrow: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),
  building: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-5a2 2 0 0 1 4 0v5" />
    </svg>
  ),
  checkmark: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  clock: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  shieldCheck: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 12 15 16 10" />
    </svg>
  ),
  star: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  usersGroup: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

// Stat card data with icons
const statCards = [
  {
    number: '6000+',
    label: 'Businesses Served',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-5a2 2 0 0 1 4 0v5" />
      </svg>
    ),
  },
  {
    number: '98%',
    label: 'Client Retention',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    number: '7–10 Days',
    label: 'Average Setup Time',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

// Service data - Featured + Grid Layout
const featuredService = {
  title: 'Start Your Company',
  description: 'Register your business in India quickly and stay fully compliant from day one.',
  icon: icons.rocket,
  href: '/services#start',
  features: ['Private Limited', 'LLP', 'OPC', 'Partnership'],
};

const secondaryServices = [
  {
    title: 'Tax & GST',
    subtitle: 'Tax & GST Help',
    description: 'GST registration, filing and compliance made simple.',
    icon: icons.finance,
    href: '/services#finance',
  },
  {
    title: 'Protect Brand',
    subtitle: 'Protect Your Brand',
    description: 'Trademark registration to safeguard your identity.',
    icon: icons.shield,
    href: '/services#protect',
  },
  {
    title: 'Certifications',
    subtitle: 'Get Certified',
    description: 'ISO, Startup India, MSME and other certifications.',
    icon: icons.award,
    href: '/services#governance',
  },
  {
    title: 'HR Setup',
    subtitle: 'Hire & Build Team',
    description: 'HR policies, contracts and payroll setup.',
    icon: icons.users,
    href: '/services#hr',
  },
  {
    title: 'Scale',
    subtitle: 'Scale Smartly',
    description: 'Strategy and systems for sustainable growth.',
    icon: icons.chart,
    href: '/services#operations',
  },
];

// Comparison data for Why Choose section
const comparisonData = {
    typical: [
        'Slow responses',
        'Hidden fees',
        'Call-center support',
        'Paperwork confusion',
    ],
    pelago: [
        '7-day incorporation',
        'Fixed transparent pricing',
        'Dedicated advisor',
        'Fully online process',
    ],
    highlights: [
        { value: '7–10', label: 'day turnaround' },
        { value: '98%', label: 'filing success rate' },
        { value: '6000+', label: 'businesses served' },
    ],
};

// Scroll Reveal Hook
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  useScrollReveal();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does it cost to register a company in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Company registration costs vary based on your structure. A Private Limited Company typically costs ₹8,000-15,000 including government fees. LLP registration is slightly cheaper at ₹6,000-12,000. At Pelago, we offer transparent pricing with no hidden charges.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does company registration take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'With all documents ready, we can register your Private Limited Company or LLP within 7-10 working days. This includes getting your Certificate of Incorporation, PAN, and TAN.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need GST registration for my startup?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You need GST registration if your annual turnover exceeds ₹20 lakhs (₹10 lakhs for special states) or if you sell goods/services online. Even if not mandatory, having GST helps you claim input tax credits.',
        },
      },
      {
        '@type': 'Question',
        name: 'What documents do I need to start a company?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For most company registrations, you\'ll need: PAN card, Aadhaar card, passport-sized photo, and proof of address for all directors. We\'ll send you a complete checklist tailored to your case.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section - Modern SaaS */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className="container">
          <div className={styles.heroLayout}>
            {/* Left Column - Message */}
            <div className={styles.heroContent}>
              <h1 className={`${styles.heroTitle} animate-fade-in-up`}>
                Launch and Manage Your
                Business in <span className={styles.heroAccent}>India</span> —
                Fully Compliant
              </h1>

              <p className={`${styles.heroText} animate-fade-in-up delay-100`}>
                Company registration, compliance, tax filing and legal services — all handled by experts so you can focus on building your business.
              </p>

              <div className={`${styles.heroButtons} animate-fade-in-up delay-200`}>
                <MagneticButton href="/contact" className={styles.btnPrimary}>
                  Start Your Business
                  <span className={styles.btnArrow}>{icons.arrow}</span>
                </MagneticButton>
                <Link href="/services" className={styles.btnSecondary}>
                  Explore Services
                </Link>
              </div>

              <div className={`${styles.trustLine} animate-fade-in-up delay-300`}>
                <span className={`${styles.trustItem} ${styles.dpiitBadge}`}>
                  <span className={styles.trustIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <polyline points="9 12 12 15 16 10" />
                    </svg>
                  </span>
                  DPIIT Recognised
                </span>
                <span className={styles.trustItem}>
                  <span className={styles.trustIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </span>
                  6000+ Businesses
                </span>
                <span className={styles.trustItem}>
                  <span className={styles.trustIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </span>
                  4.9/5 Rating
                </span>
              </div>
            </div>

            {/* Right Column - Glass Cards */}
            <div className={styles.heroVisual}>
              {/* Floating decorative orbs */}
              <div className={styles.floatingOrbs}>
                <div className={`${styles.orb} ${styles.orb1}`} />
                <div className={`${styles.orb} ${styles.orb2}`} />
              </div>

              <div className={styles.glassCards}>
                {statCards.map((stat, idx) => (
                  <div 
                    key={idx} 
                    className={`${styles.glassCard} ${styles['animate-slide-right']} ${styles[`delay-card-${idx + 1}`]}`}
                  >
                    <div className={styles.cardIconWrapper}>
                      {stat.icon}
                    </div>
                    <span className={styles.glassNumber}>{stat.number}</span>
                    <span className={styles.glassLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Video Background */}
        <div className={styles.heroBackground}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={styles.heroVideo}
          >
            <source src="/hero-background.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Client Wall */}
      <ClientWall isHomePage={true} variant="marquee" showSearch={false} showTabs={false} />

      {/* Services Section - Featured + Grid */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={`${styles.servicesHeader} reveal`}>
            <h2>Business Services That<br />Help You Start and Scale</h2>
            <p>From company registration to compliance and growth support.</p>
          </div>

          <div className={styles.servicesLayout}>
            {/* Featured Card */}
            <Link href={featuredService.href} className={`${styles.featuredCard} reveal`}>
              <div className={styles.featuredIcon}>
                {featuredService.icon}
              </div>
              <h3>{featuredService.title}</h3>
              <p>{featuredService.description}</p>
              <ul className={styles.featuredFeatures}>
                {featuredService.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <span className={styles.featuredCta}>Start Now →</span>
            </Link>

            {/* Secondary Cards */}
            <div className={styles.secondaryGrid}>
              {secondaryServices.map((service, idx) => (
                <Link
                  href={service.href}
                  key={idx}
                  className={`${styles.secondaryCard} reveal`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className={styles.secondaryIcon}>
                    {service.icon}
                  </div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <span className={styles.exploreLink}>Explore →</span>
                </Link>
              ))}
            </div>
          </div>

          <div className={`${styles.viewAllWrapper} reveal`}>
            <Link href="/services" className={styles.ghostButton}>
              Explore All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Startup Timeline */}
      <StartupTimeline />

      {/* Case Studies */}
      <CaseStudies />

      {/* Founder Value Section */}
      <FounderValueSection />

      {/* Why Choose Us - Comparison Layout */}
      <section className={styles.whySection}>
        <div className="container">
          <div className={`${styles.whyHeader} reveal`}>
            <h2>Why Founders Choose Pelago</h2>
            <p>The difference between traditional consultants and a modern compliance partner.</p>
          </div>

          {/* Comparison Grid */}
          <div className={styles.comparisonGrid}>
            {/* Typical Consultants */}
            <div className={`${styles.comparisonColumn} ${styles.typicalColumn} reveal`}>
              <h3>Typical Consultants</h3>
              <ul className={styles.comparisonList}>
                {comparisonData.typical.map((item, idx) => (
                  <li key={idx}>
                    <span className={styles.crossIcon}>✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pelago */}
            <div className={`${styles.comparisonColumn} ${styles.pelagoColumn} reveal`}>
              <h3>Pelago</h3>
              <ul className={styles.comparisonList}>
                {comparisonData.pelago.map((item, idx) => (
                  <li key={idx}>
                    <span className={styles.checkIcon}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Highlight Stats */}
          <div className={`${styles.highlightStats} reveal`}>
            {comparisonData.highlights.map((stat, idx) => (
              <div key={idx} className={styles.highlightItem}>
                <span className={styles.highlightValue}>{stat.value}</span>
                <span className={styles.highlightLabel}>{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`${styles.whyCta} reveal`}>
            <p>Ready to work with a better compliance partner?</p>
            <Link href="/contact" className={styles.whyCtaButton}>
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Stories */}
      <FounderStoriesCarousel />

      {/* Founder Resource Hub */}
      <FounderResourceHub />

      {/* Founder Knowledge Hub */}
      <section className={styles.knowledgeSection}>
        <div className="container">
          <div className={`${styles.knowledgeHeader} reveal`}>
            <h2>Founder Guides & Resources</h2>
            <p>Practical guides to help you understand company formation, taxes, and compliance.</p>
          </div>

          <div className={styles.knowledgeGrid}>
            {/* Featured Guide */}
            <Link href="/blog/gst-filing-guide-2024" className={`${styles.featuredGuide} reveal`}>
              <div className={styles.guideImage}>
                <Image src="/blog/gst-filing.png" alt="GST Filing Guide" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.guideContent}>
                <span className={styles.guideTag}>Founder Guide</span>
                <h3>GST Filing Explained Simply</h3>
                <p>A beginner-friendly guide to GST registration, filing, and compliance for startups.</p>
                <div className={styles.guideMeta}>
                  <span>5 min read</span>
                  <span className={styles.guideDot}>•</span>
                  <span>Jan 15, 2024</span>
                </div>
                <span className={styles.readGuide}>Read Guide →</span>
              </div>
            </Link>

            {/* Smaller Guides */}
            <div className={styles.guidesList}>
              <Link href="/blog/llp-vs-pvt-ltd" className={`${styles.guideCard} reveal`} style={{ animationDelay: '0.1s' }}>
                <div className={styles.guideCardImage}>
                  <Image src="/blog/business-structure.png" alt="Business Structure Guide" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.guideCardContent}>
                  <span className={styles.guideCardTag}>Startup Decision</span>
                  <h4>LLP vs Private Limited</h4>
                  <p>Which structure is right for your business? A detailed comparison.</p>
                  <div className={styles.guideCardMeta}>
                    <span>7 min read</span>
                    <span>•</span>
                    <span>Jan 10, 2024</span>
                  </div>
                </div>
              </Link>

              <Link href="/blog/startup-india-benefits" className={`${styles.guideCard} reveal`} style={{ animationDelay: '0.2s' }}>
                <div className={styles.guideCardImage}>
                  <Image src="/blog/startup-india.png" alt="Startup India Guide" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.guideCardContent}>
                  <span className={styles.guideCardTag}>Government Programs</span>
                  <h4>Startup India Benefits</h4>
                  <p>What you actually get from DPIIT recognition and registration.</p>
                  <div className={styles.guideCardMeta}>
                    <span>6 min read</span>
                    <span>•</span>
                    <span>Jan 5, 2024</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className={`${styles.knowledgeCta} reveal`}>
            <Link href="/blog" className={styles.exploreGuides}>
              Explore Founder Guides →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={`section-header reveal`}>
            <p className="subtitle">Common Questions</p>
            <h2>Quick answers to things founders ask</h2>
            <p>Got more questions? Just message us — we reply fast.</p>
          </div>
          <div className={styles.faqList}>
            {[
              { q: 'How much does it cost to register a company in India?', a: 'Company registration costs vary based on your structure. A Private Limited Company typically costs <strong>₹8,000-15,000</strong> including government fees. LLP registration is slightly cheaper at <strong>₹6,000-12,000</strong>. At Pelago, we offer transparent pricing with no hidden charges.' },
              { q: 'How long does company registration take?', a: 'With all documents ready, we can register your Private Limited Company or LLP within <strong>7-10 working days</strong>. This includes getting your Certificate of Incorporation, PAN, and TAN.' },
              { q: 'Do I need GST registration for my startup?', a: 'You need GST registration if your annual turnover exceeds <strong>₹20 lakhs</strong> (₹10 lakhs for special states) or if you sell goods/services online.' },
              { q: 'What documents do I need to start a company?', a: 'For most company registrations, you\'ll need: <strong>PAN card, Aadhaar card, passport-sized photo,</strong> and <strong>proof of address</strong> for all directors.' },
            ].map((faq, idx) => (
              <div key={idx} className={`${styles.faqItem} reveal`} style={{ animationDelay: `${idx * 0.1}s` }}>
                <h3>{faq.q}</h3>
                <p dangerouslySetInnerHTML={{ __html: faq.a }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Check CTA - Beautiful Glass Card */}
      <section className={styles.healthCheck}>
        <div className={styles.healthCheckBg}>
          <div className={styles.healthCheckGradient}></div>
        </div>
        <div className="container">
          <div className={`${styles.healthCheckContent} reveal-scale`}>
            <span className="badge badge-accent">Free Tool</span>
            <h2>Not sure what your business needs?</h2>
            <p>Answer 5 quick questions and get a personalized roadmap for your startup journey.</p>
            <div className={styles.healthCheckMeta}>
              <span className={styles.healthCounter}>
                <span className={styles.healthCounterNum}>47</span> founders took this today
              </span>
            </div>
            <Link href="/health-check" className="btn btn-primary btn-lg">
              Get My Free Roadmap →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA - Gradient Background */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaBg}>
          <div className={styles.finalGradient1}></div>
          <div className={styles.finalGradient2}></div>
        </div>
        <div className="container">
          <div className={`${styles.finalCtaContent} reveal`}>
            <h2>Ready to stop worrying about paperwork?</h2>
            <p>Join 6,000+ founders who&apos;ve trusted us with their business. Let&apos;s chat — no pressure, just helpful advice.</p>
            <div className={styles.ctaButtons}>
              <a
                href="https://api.whatsapp.com/send/?phone=917994659991&text=Hi%2C+I+need+help+with+business+compliance"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
              >
                <span className={styles.waLive}>
                  <span className={styles.waDot}></span>
                </span>
                Message Us on WhatsApp
              </a>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Book a Free Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className={styles.mobileStickyBar}>
        <a
          href="https://api.whatsapp.com/send/?phone=917994659991&text=Hi%2C+I+need+help+with+business+compliance"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.stickyWhatsapp}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp Us
        </a>
        <Link href="/contact" className={styles.stickyBook}>
          Book Free Call
        </Link>
      </div>
    </>
  );
}
