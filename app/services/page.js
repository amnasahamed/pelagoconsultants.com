'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './services.module.css';

const serviceCategories = [
    {
        id: 'registration',
        name: 'Registration & Formation',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" /><path d="M18 14h-8" /><path d="M15 18h-5" /><path d="M10 6h8v4h-8V6Z" /></svg>,
        theme: 'blue',
        count: 7,
        services: [
            {
                title: 'LLP Registration',
                description: 'Register your Limited Liability Partnership with ease and limited legal liability.',
            },
            {
                title: 'Project Report for Bank Loan',
                description: 'Detailed financial and project reports to help you secure bank financing.',
            },
            {
                title: 'Partnership Firm Registration',
                description: 'Form a legal partnership with clear terms and government registration.',
            },
            {
                title: 'Kerala Startup Mission Registration',
                description: 'Get your startup registered with KSUM to avail state-level benefits.',
            },
            {
                title: 'Startup India Registration',
                description: 'Recognition from DPIIT for tax exemptions and government support.',
            },
            {
                title: 'MSME Registration',
                description: 'Udyam registration to avail loans, subsidies, and government benefits.',
            },
            {
                title: 'Section 8 Company Registration',
                description: 'Form a non-profit organization with a corporate structure.',
            },
        ],
    },
    {
        id: 'tax',
        name: 'Tax & Compliance',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
        theme: 'green',
        count: 5,
        services: [
            {
                title: 'GST Filing',
                description: 'Stay compliant with regular GST filings and expert consultancy.',
            },
            {
                title: 'DSC – Class 3',
                description: 'Secure digital signature certificates for e-filing and legal documents.',
            },
            {
                title: 'Accounting Services',
                description: 'Professional bookkeeping and financial reporting for your business.',
            },
            {
                title: 'Annual Compliance for LLP/OPC/Pvt Ltd',
                description: 'End-to-end management of your yearly corporate filings.',
            },
            {
                title: 'ITR Filing',
                description: 'Individual and corporate income tax return filing services.',
            },
        ],
    },
    {
        id: 'legal',
        name: 'Legal & IP',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>,
        theme: 'navy',
        count: 4,
        services: [
            {
                title: 'Copyright Registration',
                description: 'Protect your creative works, software, and brand assets legally.',
            },
            {
                title: 'Franchise Agreement',
                description: 'Drafting and reviewing legal agreements for your franchise expansion.',
            },
            {
                title: 'Trademark Objection Reply',
                description: 'Expert legal response to trademark objections from the department.',
            },
            {
                title: 'Legal Consulting',
                description: 'Comprehensive legal advice for business operations and disputes.',
            },
        ],
    },
    {
        id: 'certifications',
        name: 'Certifications & Licenses',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>,
        theme: 'amber',
        count: 5,
        services: [
            {
                title: 'ISO Certifications',
                description: 'ISO 9001, 22000, 45001 and more to prove your global quality standards.',
            },
            {
                title: 'Medical Device Traders Registration (MD 42)',
                description: 'Mandatory registration for traders dealing with medical devices.',
            },
            {
                title: 'FSSAI Registration',
                description: 'Food safety license mandatory for all food-related businesses.',
            },
            {
                title: 'Import Export Code (IEC)',
                description: 'Essential registration for businesses looking to trade internationally.',
            },
            {
                title: 'Barcode Registration',
                description: 'Get unique barcodes for your products to sell in retail markets.',
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
                        <span className={`${styles.badge} ${styles.badgeBlue}`}>Complete Service Catalog</span>
                        <h1>Comprehensive solutions for every stage of your business journey</h1>
                        <p>From incorporation to IPO. 21+ services across 4 categories.</p>
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
                            placeholder="Search for a service (e.g. GST, Trademark)..."
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
            <section className={`${styles.section} ${styles.servicesSection}`}>
                <div className="container">
                    {filteredCategories.map(category => (
                        <div key={category.id} id={category.id} className={`${styles.categorySection} ${styles[category.theme]}`}>
                            <div className={styles.categoryHeader}>
                                <div className={styles.categoryIcon}>{category.icon}</div>
                                <div className={styles.categoryTitleGroup}>
                                    <h2>{category.name}</h2>
                                    <span className={styles.serviceCount}>{category.services.length} SERVICES AVAILABLE</span>
                                </div>
                            </div>
                            <div className={styles.servicesGrid}>
                                {category.services.map((service, idx) => (
                                    <div key={idx} className={styles.serviceCard}>
                                        <div className={styles.cardHighlight}></div>
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                        <a
                                            href={`${whatsappLink}&text=Hi, I need help with ${service.title} compliance`}
                                            className={styles.enquireBtn}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Enquire Now
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Can&apos;t find what you&apos;re looking for?</h2>
                        <p>We offer many more services. Talk to our experts and we&apos;ll find the right solution for you.</p>
                        <a
                            href={whatsappLink}
                            className={styles.ctaBtn}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Talk to an Expert
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
