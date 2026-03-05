'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './services.module.css';

const serviceCategories = [
    {
        id: 'start',
        name: 'Start Your Business',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /></svg>,
        theme: 'blue',
        description: 'Get your company registered and ready to do business',
        services: [
            {
                title: 'Private Limited Company',
                description: 'The most popular structure for startups. Limited liability, easy to raise funding, and looks professional to clients.',
                timeframe: '7-10 days',
            },
            {
                title: 'LLP Registration',
                description: 'Perfect for consultancies and small partnerships. Less compliance than Pvt Ltd, but still protects your personal assets.',
                timeframe: '7-10 days',
            },
            {
                title: 'Partnership Firm',
                description: 'Simple and traditional. Good for family businesses or small ventures with trusted partners.',
                timeframe: '5-7 days',
            },
            {
                title: 'Startup India Registration',
                description: 'Get recognized by the government. Access tax benefits, easier compliance, and funding opportunities.',
                timeframe: '10-15 days',
            },
            {
                title: 'MSME Registration',
                description: 'Register as a small business to get government tenders, subsidies, and lower interest rates on loans.',
                timeframe: '2-3 days',
            },
        ],
    },
    {
        id: 'tax',
        name: 'Tax & GST',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
        theme: 'green',
        description: 'Stay compliant and save money on taxes',
        services: [
            {
                title: 'GST Registration',
                description: 'Get your GST number to legally sell goods and services. Required if your turnover crosses ₹20 lakhs.',
                timeframe: '3-5 days',
            },
            {
                title: 'Monthly GST Filing',
                description: 'We file your returns every month so you avoid penalties and can claim input tax credits.',
                timeframe: 'Monthly',
            },
            {
                title: 'Income Tax Filing (ITR)',
                description: 'Personal and business tax returns. We help you claim all deductions and save on taxes legally.',
                timeframe: 'Annual',
            },
            {
                title: 'TDS Returns',
                description: 'If you pay salaries or contractor fees, you need to deduct and deposit TDS. We handle the paperwork.',
                timeframe: 'Quarterly',
            },
            {
                title: 'Accounting & Bookkeeping',
                description: 'Track income, expenses, and profits. Get monthly reports so you always know where your money goes.',
                timeframe: 'Monthly',
            },
        ],
    },
    {
        id: 'protect',
        name: 'Protect Your Business',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>,
        theme: 'navy',
        description: 'Legal protection for your brand and business',
        services: [
            {
                title: 'Trademark Registration',
                description: 'Protect your brand name, logo, and tagline. Stop competitors from copying your identity.',
                timeframe: '6-12 months',
            },
            {
                title: 'Copyright Registration',
                description: 'Protect your creative work — books, software, designs, music, or artistic creations.',
                timeframe: '6-8 months',
            },
            {
                title: 'ISO Certification',
                description: 'Get ISO 9001 certified to show clients you meet international quality standards.',
                timeframe: '15-30 days',
            },
            {
                title: 'FSSAI License',
                description: 'Required for any food business. We handle the application and inspections.',
                timeframe: '15-30 days',
            },
            {
                title: 'Import Export Code (IEC)',
                description: 'Want to sell internationally? You need an IEC code. We get it done quickly.',
                timeframe: '5-7 days',
            },
        ],
    },
    {
        id: 'compliance',
        name: 'Stay Compliant',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>,
        theme: 'amber',
        description: 'Annual filings and ongoing requirements',
        services: [
            {
                title: 'Annual Company Compliance',
                description: 'Annual returns, board resolutions, and statutory filings to keep your company in good standing.',
                timeframe: 'Annual',
            },
            {
                title: 'ROC Filings',
                description: 'Mandatory filings with the Registrar of Companies. Miss these and face heavy penalties.',
                timeframe: 'As required',
            },
            {
                title: 'Digital Signature (DSC)',
                description: 'Get your Class 3 DSC to sign documents digitally. Required for company filings.',
                timeframe: '1-2 days',
            },
            {
                title: 'Director KYC',
                description: 'Annual KYC verification for company directors. We remind you before deadlines.',
                timeframe: 'Annual',
            },
        ],
    },
    {
        id: 'grow',
        name: 'Grow & Scale',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
        theme: 'purple',
        description: 'Systems and strategy for growing businesses',
        services: [
            {
                title: 'HR Policy Setup',
                description: 'Employee contracts, leave policies, and HR systems that protect you and your team.',
                timeframe: '7-10 days',
            },
            {
                title: 'Payroll Structuring',
                description: 'Optimize salaries for tax efficiency. Set up PF, ESI, and professional tax compliance.',
                timeframe: '5-7 days',
            },
            {
                title: 'Business Strategy',
                description: 'Growth roadmaps, market entry plans, and operational improvements to scale faster.',
                timeframe: 'Custom',
            },
            {
                title: 'Project Reports for Loans',
                description: 'Professional project reports to help you secure bank loans and funding.',
                timeframe: '7-10 days',
            },
        ],
    },
];

const whatsappLink = "https://api.whatsapp.com/send/?phone=917994659991&text=Hi%2C+I+need+help+with+business+compliance&type=phone_number&app_absent=0";

export default function ServicesPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState(null);

    const filteredCategories = serviceCategories.map(category => ({
        ...category,
        services: category.services.filter(
            service =>
                service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.description.toLowerCase().includes(searchTerm.toLowerCase())
        ),
    })).filter(category =>
        activeCategory ? category.id === activeCategory : category.services.length > 0
    );

    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className="badge badge-blue">Our Services</span>
                        <h1>Everything you need to run your business</h1>
                        <p>From starting up to scaling up — we handle the paperwork so you can focus on growth.</p>
                    </div>
                </div>
            </section>

            {/* Search & Filter */}
            <section className={styles.filterSection}>
                <div className="container">
                    <div className={styles.searchBox}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <path d="M21 21l-4.35-4.35" />
                        </svg>
                        <input
                            type="text"
                            placeholder="What do you need help with? (e.g. GST, trademark, company registration...)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className={styles.categoryTabs}>
                        <button
                            className={`${styles.categoryTab} ${activeCategory === null ? styles.active : ''}`}
                            onClick={() => setActiveCategory(null)}
                        >
                            All Services
                        </button>
                        {serviceCategories.map(category => (
                            <button
                                key={category.id}
                                className={`${styles.categoryTab} ${activeCategory === category.id ? styles.active : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className={`section ${styles.servicesSection}`}>
                <div className="container">
                    {filteredCategories.length === 0 ? (
                        <div className={styles.noResults}>
                            <p>No services found matching &quot;{searchTerm}&quot;</p>
                            <button onClick={() => { setSearchTerm(''); setActiveCategory(null); }} className="btn btn-secondary">
                                Clear Search
                            </button>
                        </div>
                    ) : (
                        filteredCategories.map(category => (
                            <div key={category.id} id={category.id} className={`${styles.categorySection} ${styles[category.theme]}`}>
                                <div className={styles.categoryHeader}>
                                    <div className={styles.categoryIcon}>{category.icon}</div>
                                    <div className={styles.categoryTitleGroup}>
                                        <h2>{category.name}</h2>
                                        <p className={styles.categoryDescription}>{category.description}</p>
                                    </div>
                                </div>
                                <div className={styles.servicesGrid}>
                                    {category.services.map((service, idx) => (
                                        <div key={idx} className={`card ${styles.serviceCard}`}>
                                            <div className={styles.cardHighlight}></div>
                                            <div className={styles.cardHeader}>
                                                <h3>{service.title}</h3>
                                                <span className={styles.timeBadge}>{service.timeframe}</span>
                                            </div>
                                            <p>{service.description}</p>
                                            <a
                                                href={`${whatsappLink}&text=Hi, I'm interested in ${service.title}`}
                                                className={styles.enquireBtn}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Get Quote
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>

            {/* How It Works */}
            <section className={`section ${styles.howItWorks}`}>
                <div className="container">
                    <div className="section-header">
                        <p className="subtitle">Simple Process</p>
                        <h2>How it works</h2>
                        <p>Getting started is easy. Here&apos;s what happens when you work with us.</p>
                    </div>
                    <div className={styles.stepsGrid}>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>1</div>
                            <h3>Tell Us What You Need</h3>
                            <p>Message us on WhatsApp or book a call. We&apos;ll understand your situation and recommend the right services.</p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>2</div>
                            <h3>Share Your Documents</h3>
                            <p>Send us your documents via WhatsApp or email. We&apos;ll check everything and let you know if anything is missing.</p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>3</div>
                            <h3>We Handle the Rest</h3>
                            <p>Sit back while we file applications, follow up with government offices, and keep you updated on progress.</p>
                        </div>
                        <div className={styles.stepCard}>
                            <div className={styles.stepNumber}>4</div>
                            <h3>Receive Your Documents</h3>
                            <p>Get your certificates, registrations, and compliance documents delivered digitally and physically.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Not sure what you need?</h2>
                        <p>Every business is different. Let&apos;s chat about your specific situation and we&apos;ll guide you to the right services.</p>
                        <a
                            href={whatsappLink}
                            className="btn btn-primary btn-lg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Get Free Advice on WhatsApp
                        </a>
                        <p className={styles.ctaNote}>No obligation • Reply within 2 hours</p>
                    </div>
                </div>
            </section>
        </>
    );
}
