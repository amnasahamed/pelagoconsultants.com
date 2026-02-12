'use client';

import styles from './page.module.css';
import Link from 'next/link';
import ClientWall from './components/ClientWall';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section - Ethereal */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroSubtitle}>Startup India Certified</span>
            <h1 className={styles.heroTitle}>
              Compliance Made <span className={styles.gradientText}>Simple</span>
            </h1>
            <p className={styles.heroDescription}>
              Expert guidance for startups navigating compliance and regulations. 
              We make it easy, so you can focus on growing your business.
            </p>
            <div className={styles.heroActions}>
              <button className="btn btn-primary btn-lg">Get Started</button>
              <button className="btn btn-secondary btn-lg">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Glowing Cards */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className={styles.statNumber}>1000+</div>
              <p>Startups Served</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div className={styles.statNumber}>₹500Cr+</div>
              <p>Funding Assisted</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className={styles.statNumber}>50+</div>
              <p>Expert Team</p>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className={styles.statNumber}>24/7</div>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Bento Grid */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.subtitle}>What We Offer</span>
            <h2>Our Services</h2>
            <p>Comprehensive compliance solutions tailored for every stage of your startup</p>
          </div>
          
          <div className={styles.bentoGrid}>
            {/* Large Featured Card */}
            <div className={`${styles.bentoItem} ${styles.bentoLarge}`}>
              <div className={styles.bentoCard}>
                <div className={styles.bentoIcon}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <h3>Business Registration</h3>
                <p>Complete startup registration with expert guidance on entity selection and documentation. Get your business officially registered in days.</p>
                <span className={styles.learnMore}>Explore →</span>
              </div>
            </div>

            {/* Medium Cards */}
            <div className={`${styles.bentoItem} ${styles.bentoMed}`}>
              <div className={styles.bentoCard}>
                <div className={styles.bentoIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </div>
                <h4>Compliance Audit</h4>
                <p>Regular audits ensuring full regulatory compliance and peace of mind</p>
              </div>
            </div>

            <div className={`${styles.bentoItem} ${styles.bentoMed}`}>
              <div className={styles.bentoCard}>
                <div className={styles.bentoIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h4>Tax Planning</h4>
                <p>Strategic tax optimization and filing for maximum savings</p>
              </div>
            </div>

            {/* Small Cards Row */}
            <div className={`${styles.bentoItem} ${styles.bentoSmall}`}>
              <div className={styles.bentoCard}>
                <div className={styles.bentoIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h5>Legal Support</h5>
                <p>Expert guidance</p>
              </div>
            </div>

            <div className={`${styles.bentoItem} ${styles.bentoSmall}`}>
              <div className={styles.bentoCard}>
                <div className={styles.bentoIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </div>
                <h5>Funding Support</h5>
                <p>Raise capital easily</p>
              </div>
            </div>

            <div className={`${styles.bentoItem} ${styles.bentoSmall}`}>
              <div className={styles.bentoCard}>
                <div className={styles.bentoIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="1"></circle>
                    <path d="M12 1v6m8.66 2.34l-4.24 4.24M22 12h-6m-1.64 6.36l-4.24-4.24M12 23v-6M2.34 19.66l4.24-4.24M2 12h6m1.64-6.36l4.24 4.24"></path>
                  </svg>
                </div>
                <h5>IP Protection</h5>
                <p>Secure your ideas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Feature Bento */}
      <section className={styles.featuresSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.subtitle}>Why Choose Pelago</span>
            <h2>Built for Startups</h2>
            <p>Everything you need to stay compliant and grow</p>
          </div>

          <div className={styles.featuresBento}>
            <div className={`${styles.featureItem} ${styles.featureWide}`}>
              <div className={styles.featureCard}>
                <h4>Real-Time Compliance Monitoring</h4>
                <p>Get alerts for upcoming compliance deadlines and requirements specific to your business. Never miss a deadline again.</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureCard}>
                <h4>Expert Network</h4>
                <p>Access to 50+ compliance experts</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureCard}>
                <h4>Document Management</h4>
                <p>Secure cloud storage and tracking</p>
              </div>
            </div>

            <div className={`${styles.featureItem} ${styles.featureTall}`}>
              <div className={styles.featureCard}>
                <h4>24/7 Support</h4>
                <p>Round-the-clock support for your compliance needs and urgent queries. We're always here to help.</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureCard}>
                <h4>Affordable Pricing</h4>
                <p>Starting at ₹5000/month</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureCard}>
                <h4>Startup India Certified</h4>
                <p>Government recognized expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Simple Process</h2>
            <p>From consultation to compliance in 4 easy steps</p>
          </div>

          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>01</div>
              <h4>Discovery</h4>
              <p>We understand your business needs and goals</p>
            </div>
            <div className={styles.processArrow}>→</div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>02</div>
              <h4>Strategy</h4>
              <p>We create a custom compliance roadmap</p>
            </div>
            <div className={styles.processArrow}>→</div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>03</div>
              <h4>Execution</h4>
              <p>We handle all compliance requirements</p>
            </div>
            <div className={styles.processArrow}>→</div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>04</div>
              <h4>Support</h4>
              <p>Ongoing compliance and advisory support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Wall */}
      <ClientWall />

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Simplify Your Compliance?</h2>
            <p>Join 1000+ startups that trust us with their compliance</p>
            <div className={styles.ctaActions}>
              <button className="btn btn-primary btn-lg">Book Free Consultation</button>
              <button className="btn btn-secondary btn-lg">View Pricing</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
