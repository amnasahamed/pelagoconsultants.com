import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import ClientWall from './components/ClientWall';

// SVG Icons
const icons = {
  gst: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></svg>,
  iso: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>,
  startup: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>,
  itr: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>,
  finance: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
  compliant: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>,
  decisions: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
  expert: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><circle cx="12" cy="11" r="3" /><path d="M7 16c.5-2 1.5-3 5-3s4.5 1 5 3" /></svg>,
  speed: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
  transparency: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" /><line x1="12" y1="2" x2="12" y2="4" /><line x1="12" y1="20" x2="12" y2="22" /><line x1="2" y1="12" x2="4" y2="12" /><line x1="20" y1="12" x2="22" y2="12" /></svg>,
  digital: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
};

// Service data
const featuredServices = [
  {
    title: 'GST Filing',
    description: 'Stay compliant with regular GST filings and expert consultancy.',
    icon: icons.gst,
    href: '/services#tax',
  },
  {
    title: 'ISO Certifications',
    description: 'ISO 9001, 22000, 45001 and more to prove your global quality standards.',
    icon: icons.iso,
    href: '/services#certifications',
  },
  {
    title: 'Startup India Registration',
    description: 'Recognition from DPIIT for tax exemptions and government support.',
    icon: icons.startup,
    href: '/services#registration',
  },
  {
    title: 'ITR Filing',
    description: 'Individual and corporate income tax return filing services.',
    icon: icons.itr,
    href: '/services#tax',
  },
];

const clientLogos = [
  { name: 'ADAM DESIGN STUDIO', src: '/clients/ADAM DESIGN STUDIO.png' },
  { name: 'AL TAMIMI TOURS AND TRAVELS', src: '/clients/AL TAMIMI TOURS AND TRAVELS.jpg' },
  { name: 'ASTUTE SPACES', src: '/clients/ASTUTE SPACES.jpg' },
  { name: 'BISGET INTERNATIONAL', src: '/clients/BISGET INTERNATIONAL CONTRACTING.png' },
  { name: 'CORNICE STUDIO AR', src: '/clients/CORNICE STUDIO AR.jpg' },
  { name: 'DAD GLOBAL VENTURES', src: '/clients/DAD GLOBAL VENTURES.jpg' },
  { name: 'DOJOX KOZHIKODE', src: '/clients/DOJOX KOZHIKODE VENTURES.png' },
  { name: 'GET GO HOLIDAYS', src: '/clients/GET GO HOLIDAYS.jpg' },
  { name: 'HAMMOCK STUDIO', src: '/clients/HAMMOCK STUDIO.jpg' },
  { name: 'HAPS INITIATIVE', src: '/clients/HAPS INITIATIVE.jpg' },
  { name: 'LADOS CONCEPTS', src: '/clients/LADOS CONCEPTS.jpg' },
  { name: 'LITHIC DEVELOPERS', src: '/clients/LITHIC DEVELOPERS.jpg' },
  { name: 'LOHAKARMA ENGINEERING', src: '/clients/LOHAKARMA ENGINEERING.jpeg' },
  { name: 'MOBA DIGIHUB', src: '/clients/MOBA DIGIHUB.avif' },
  { name: 'PHLOEM LEARNING', src: '/clients/PHLOEM LEARNING.jpg' },
  { name: 'PIXELEARN ED HUB', src: '/clients/PIXELEARN ED HUB.webp' },
  { name: 'PREKSHAA DESIGN', src: '/clients/PREKSHAA DESIGN STUDIO.jpg' },
  { name: 'PRIMEVIA INTERNATIONAL', src: '/clients/PRIMEVIA INTERNATIONAL.png' },
  { name: 'REX ANTONIO DANCE', src: '/clients/REX ANTONIO DANCE & FITNESS STUDIO.jpg' },
  { name: 'ROAMZONE INTERNATIONAL', src: '/clients/ROAMZONE INTERNATIONAL.png' },
  { name: 'SPOT MANAGEMENT', src: '/clients/SPOT MANAGEMENT CONSULTANTS.jpg' },
  { name: 'TALES ENDEAVOURS', src: '/clients/TALES ENDEAVOURS.jpg' },
  { name: 'WEBEC INTERNATIONAL', src: '/clients/WEBEC INTERNATIONAL.jpeg' },
  { name: 'ZELINO', src: '/clients/ZELINO.png' },
  { name: 'ZOHA HOLIDAYS', src: '/clients/ZOHA HOLIDAYS.jpg' },
  { name: 'AGKANI', src: '/clients/agkani.jpeg' },
  { name: 'AQSA', src: '/clients/aqsa logo copy.jpg' },
  { name: 'BRUNCHR', src: '/clients/brunchr.jpeg' },
  { name: 'CLINTE', src: '/clients/clinte logo copy.jpg' },
  { name: 'CUSTOM 3D', src: '/clients/custom3d.jpeg' },
  { name: 'DIMOIS', src: '/clients/dimois.jpeg' },
  { name: 'EDUCON', src: '/clients/educon.jpeg' },
  { name: 'ENLERAN', src: '/clients/enleran.jpeg' },
  { name: 'POPULAR CULTURE', src: '/clients/pelago web poplr cult logo copy.jpg' },
  { name: 'PROFIRST', src: '/clients/profirst.jpeg' },
  { name: 'RAYONE', src: '/clients/rayone.jpeg' },
];

const testimonials = [
  {
    name: 'Ashkar',
    initial: 'A',
    role: 'Business Owner',
    rating: 5,
    text: 'I had an excellent experience with Pelago consultancy. Their team is highly professional, knowledgeable, and always supportive. All my tax and compliance matters were handled smoothly and on time.',
    time: '2 weeks ago',
    verified: true,
  },
  {
    name: 'Shiril Ruman',
    initial: 'S',
    role: 'Founder, Tech Startup',
    rating: 5,
    text: 'Pelago provided an exceptionally seamless LLP registration experience. The team demonstrated strong professionalism, clear communication, and timely execution throughout the process.',
    time: '1 month ago',
    verified: true,
  },
  {
    name: 'Baseofstars',
    initial: 'B',
    role: 'Managing Director',
    rating: 5,
    text: 'Pelago Consultants helped me register my LLP last month. What impressed me most was their proactive communication - they sent me a checklist of required documents upfront and kept me updated at every stage.',
    time: '3 months ago',
    verified: true,
  },
  {
    name: 'Magno Labs',
    initial: 'M',
    role: 'CEO',
    rating: 5,
    text: 'Excellent GST registration service! I run a small retail business and was confused about GST compliance. The team at Pelago not only registered me but also explained the monthly filing requirements in simple terms.',
    time: '3 months ago',
    verified: true,
  },
  {
    name: 'Shibil Muhammed',
    initial: 'S',
    role: 'E-commerce Entrepreneur',
    rating: 5,
    text: 'Used Pelago for trademark registration of my brand name. The process was seamless and they handled all the paperwork efficiently. Got approval in 4 months which was faster than I expected.',
    time: '3 months ago',
    verified: true,
  },
  {
    name: 'LaWave Legal',
    initial: 'L',
    role: 'Legal Head',
    rating: 5,
    text: 'Pelago has been managing my accounting for over a year now. They maintain my books meticulously and provide monthly financial reports that help me make better business decisions.',
    time: '3 months ago',
    verified: true,
  },
];

const whyChoose = [
  {
    title: 'Expert Support',
    description: 'Direct access to certified compliance professionals who understand your specific industry challenges.',
    icon: icons.expert,
    features: ['Dedicated Account Manager', 'Industry-Specific Guidance', 'Legal & Tax Experts'],
    color: '#4361EE'
  },
  {
    title: 'Built for Speed',
    description: 'We leverage proprietary workflows to ensure the fastest turnaround times in the registration industry.',
    icon: icons.speed,
    features: ['Express Processing', 'Real-time Updates', 'Minimal Paperwork'],
    color: '#10B981'
  },
  {
    title: 'Total Transparency',
    description: 'No hidden fees, no complex legal jargon. We communicate clearly and price our services upfront.',
    icon: icons.transparency,
    features: ['Fixed-Price Guarantee', 'Clear Checklists', 'Direct Status Tracking'],
    color: '#8B5CF6'
  },
  {
    title: 'Digital-First',
    description: 'Manage all your business compliance requirements from our digital dashboard, anywhere in the world.',
    icon: icons.digital,
    features: ['100% Online Process', 'Secure Document Storage', 'Cloud-Based Accounting'],
    color: '#F59E0B'
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroLayout}>
            <div className={styles.heroContent}>
              <div className={`${styles.heroBadge} animate-fade-in-up`}>
                <span className="badge badge-success">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22,4 12,14.01 9,11.01" />
                  </svg>
                  Startup India Certified
                </span>
              </div>
              <h1 className={`${styles.heroTitle} animate-fade-in-up`} style={{ animationDelay: '0.1s' }}>
                We Handle Compliance, <br />
                <span className={styles.heroHighlight}>So You Can Focus on Growth.</span>
              </h1>
              <p className={`${styles.heroText} animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
                From company formation to tax, legal, and ongoing compliance — we take care of the essentials so you can build and scale with confidence.
              </p>
              <div className={`${styles.heroButtons} animate-fade-in-up`} style={{ animationDelay: '0.3s' }}>
                <a
                  href="https://api.whatsapp.com/send/?phone=917994659991&text=Hi%2C+I+need+help+with+business+compliance&type=phone_number&app_absent=0"
                  className="btn btn-primary btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Talk to a Compliance Expert
                </a>
                <Link href="/services" className="btn btn-secondary btn-lg">
                  Explore Services
                </Link>
              </div>

              {/* Trust Badges */}
              <div className={`${styles.trustBadges} animate-fade-in-up`} style={{ animationDelay: '0.4s' }}>
                <div className={styles.trustBadge}>
                  <span className="badge badge-blue">Govt. Certified</span>
                </div>
                <div className={styles.trustBadge}>
                  <span className="badge badge-success">4.9/5 • 150+ Reviews</span>
                </div>
              </div>
            </div>

            <div className={`${styles.heroVisual} animate-fade-in`} style={{ animationDelay: '0.5s' }}>
              <div className={styles.visualContainer}>
                {/* Abstract elements */}
                <div className={`${styles.floatingCard} ${styles.card1}`}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardIcon}>✓</span>
                    <div className={styles.cardTitle}>GST Compliance</div>
                  </div>
                  <div className={styles.cardStatus}>Active & Healthy</div>
                </div>

                <div className={`${styles.floatingCard} ${styles.card2}`}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardIcon}>★</span>
                    <div className={styles.cardTitle}>Success Rate</div>
                  </div>
                  <div className={styles.cardValue}>98.2%</div>
                </div>

                <div className={`${styles.floatingCard} ${styles.card3}`}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardIcon}>⚡</span>
                    <div className={styles.cardTitle}>Turnaround</div>
                  </div>
                  <div className={styles.cardValue}>Fastest in Industry</div>
                </div>

                <div className={styles.glowElement}></div>
                <div className={styles.meshGradient}></div>
              </div>
            </div>
          </div>

          {/* Stats Moved below layout */}
          <div className={`${styles.statsRow} animate-fade-in`} style={{ animationDelay: '0.6s' }}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>6,000+</span>
              <span className={styles.statLabel}>Clients Served</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>150+</span>
              <span className={styles.statLabel}>Companies Formed</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>4.9/5</span>
              <span className={styles.statLabel}>Google Rating</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>Success Rate</span>
            </div>
          </div>
        </div>
        <div className={styles.heroBackground}></div>
      </section>

      {/* Client Wall */}
      <ClientWall isHomePage={true} initialCount={16} showSearch={false} />

      {/* Services Section */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className="section-header">
            <p className="subtitle">Our Services</p>
            <h2>Everything you need to run your business.</h2>
            <p>Don't let bureaucracy slow you down. We offer tailored services to keep your foundation strong.</p>
          </div>

          <div className={styles.servicesGrid}>
            {featuredServices.map((service, idx) => (
              <Link href={service.href} key={idx} className={`card ${styles.serviceCard}`}>
                <span className={styles.serviceIcon}>{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className={styles.learnMore}>
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className={styles.viewAllWrapper}>
            <Link href="/services" className="btn btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`section bg-gray ${styles.whySection}`}>
        <div className="container">
          <div className="section-header">
            <p className="subtitle">The Pelago Advantage</p>
            <h2>Why businesses choose Pelago</h2>
            <p>We combine the expertise of a large firm with the agility of a startup.</p>
          </div>

          <div className={styles.whyGrid}>
            {whyChoose.map((item, idx) => (
              <div key={idx} className={styles.whyCard}>
                <div className={styles.whyCardHeader}>
                  <span className={styles.whyIcon} style={{ color: item.color }}>{item.icon}</span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
                <ul className={styles.whyFeatures}>
                  {item.features.map((feature, fIdx) => (
                    <li key={fIdx}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`section ${styles.testimonialsSection}`}>
        <div className="container">
          <div className={styles.testimonialHeaderGrid}>
            <div className="section-header" style={{ textAlign: 'left', margin: 0 }}>
              <p className="subtitle">Wall of Love</p>
              <h2>Trusted by founders <br />and industry leaders.</h2>
            </div>
            <div className={styles.testimonialStats}>
              <div className={styles.googleRating}>
                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span>4.9/5 Based on 150+ Reviews</span>
              </div>
            </div>
          </div>

          <div className={styles.testimonialsMasonry}>
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className={styles.testimonialTicket}>
                <div className={styles.ticketContent}>
                  <div className={styles.ticketHeader}>
                    <div className={styles.starsSm}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className={styles.reviewTime}>{testimonial.time}</span>
                  </div>
                  <p className={styles.testimonialText}>"{testimonial.text}"</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorAvatar} style={{
                      background: idx % 3 === 0 ? 'var(--blue)' : idx % 3 === 1 ? 'var(--navy)' : 'var(--success)'
                    }}>
                      {testimonial.initial}
                    </div>
                    <div className={styles.authorInfo}>
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
                {testimonial.verified && (
                  <div className={styles.verifiedTag}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Verified Customer
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.viewAllWrapper} style={{ marginTop: 'var(--space-12)' }}>
            <a
              href="https://www.google.com/search?q=pelago+consultants+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View all 150+ Google Reviews
            </a>
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className={`section bg-gray ${styles.blogSection}`}>
        <div className="container">
          <div className="section-header">
            <p className="subtitle">Latest Insights</p>
            <h2>Stay updated with business compliance</h2>
            <p>Expert guides and updates on GST, registration, and scaling your business.</p>
          </div>

          <div className={styles.blogGrid}>
            {[
              {
                slug: 'gst-filing-guide-2024',
                title: 'Complete Guide to GST Filing in 2024',
                category: 'Tax & Compliance',
                date: 'Jan 15, 2024',
                image: '/blog/gst-filing.png'
              },
              {
                slug: 'llp-vs-pvt-ltd',
                title: 'LLP vs Private Limited: Which is Right?',
                category: 'Registration',
                date: 'Jan 10, 2024',
                image: '/blog/business-structure.png'
              },
              {
                slug: 'startup-india-benefits',
                title: '10 Benefits of Startup India Registration',
                category: 'Startup',
                date: 'Jan 5, 2024',
                image: '/blog/startup-india.png'
              }
            ].map((post, idx) => (
              <Link href={`/blog/${post.slug}`} key={idx} className={styles.blogCard}>
                <div className={styles.blogCardImage}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.blogCardContent}>
                  <div className={styles.blogMeta}>
                    <span className={styles.category}>{post.category}</span>
                    <span className={styles.dot}>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <span className={styles.readMore}>
                    Read Article
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className={styles.viewAllWrapper}>
            <Link href="/blog" className="btn btn-secondary">
              View All Insights
            </Link>
          </div>
        </div>
      </section>

      {/* Health Check CTA */}
      <section className={`section ${styles.healthCheck}`}>
        <div className="container">
          <div className={styles.healthCheckContent}>
            <span className="badge badge-blue">Free Assessment</span>
            <h2>Is your business actually healthy?</h2>
            <p>Find out exactly what your business needs to grow, comply, and thrive. Get a personalized roadmap in under 2 minutes.</p>
            <Link href="/health-check" className="btn btn-primary btn-lg">
              Start Health Check
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className="container">
          <div className={styles.finalCtaContent}>
            <h2>Ready to get started?</h2>
            <p>Join 6,000+ businesses who trust Pelago. Let's get your compliance sorted today.</p>
            <div className={styles.ctaButtons}>
              <a
                href="https://api.whatsapp.com/send/?phone=917994659991&text=Hi%2C+I+need+help+with+business+compliance&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=917994659991&text=Hi%2C+I+need+help+with+business+compliance&type=phone_number&app_absent=0"
                className="btn btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
