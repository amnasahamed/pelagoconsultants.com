'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './services.module.css';

const serviceCategories = [
    {
        id: 'strategy',
        name: 'Business Strategy & Growth Planning',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
        theme: 'blue',
        count: 5,
        services: [
            {
                title: 'Business Growth Roadmap',
                description: 'Strategic planning to scale your business operations and revenue.',
            },
            {
                title: 'Market Entry Strategy',
                description: 'Data-driven analysis for entering new markets or launching products.',
            },
            {
                title: 'Startup India Registration',
                description: 'Recognition from DPIIT for tax exemptions and government support.',
            },
            {
                title: 'Kerala Startup Mission Registration',
                description: 'Get your startup registered with KSUM to avail state-level benefits.',
            },
            {
                title: 'Project Report for Bank Loan',
                description: 'Detailed financial and project reports to help you secure bank financing.',
            },
        ],
    },
    {
        id: 'operations',
        name: 'Operations & Process Optimization',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
        theme: 'green',
        count: 4,
        services: [
            {
                title: 'SOP Development',
                description: 'Standard Operating Procedures to ensure consistency and quality.',
            },
            {
                title: 'Operational Audit',
                description: 'Analyze workflows to identify bottlenecks and improve efficiency.',
            },
            {
                title: 'Inventory Management Systems',
                description: 'Implement systems to track stock and reduce wastage.',
            },
            {
                title: 'Vendor Management',
                description: ' streamline procurement and vendor relationships.',
            },
        ],
    },
    {
        id: 'marketing',
        name: 'Marketing & Sales Structuring',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
        theme: 'navy',
        count: 3,
        services: [
            {
                title: 'Sales Funnel Setup',
                description: 'Design high-converting sales funnels for your products/services.',
            },
            {
                title: 'Digital Marketing Audit',
                description: 'Review your current digital presence and identify growth opportunities.',
            },
            {
                title: 'Brand Positioning',
                description: 'Define your unique value proposition and brand voice.',
            },
        ],
    },
    {
        id: 'hr',
        name: 'HR & Leadership Systems',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
        theme: 'amber',
        count: 4,
        services: [
            {
                title: 'HR Policy Drafting',
                description: 'Create comprehensive HR policies compliant with labor laws.',
            },
            {
                title: 'Employee Contracts & NDAs',
                description: 'Legally sound contracts to protect company interests.',
            },
            {
                title: 'Payroll Structuring',
                description: 'Optimize salary structures for tax efficiency and compliance.',
            },
            {
                title: 'POSH Compliance',
                description: 'Implement mandatory sexual harassment policies and committees.',
            },
        ],
    },
    {
        id: 'finance',
        name: 'Financial Structuring & Compliance',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
        theme: 'blue',
        count: 5,
        services: [
            {
                title: 'GST Filing & Advisory',
                description: 'Monthly filings, reconciliations, and expert GST advice.',
            },
            {
                title: 'Accounting Services',
                description: 'End-to-end bookkeeping and financial statement preparation.',
            },
            {
                title: 'ITR Filing',
                description: 'Income Tax Return filing for individuals and corporates.',
            },
            {
                title: 'Annual Compliance',
                description: 'Mandatory annual filings for LLP/Pvt Ltd companies.',
            },
            {
                title: 'DSC – Class 3',
                description: 'Digital Signature Certificates for e-tendering and filings.',
            },
        ],
    },
    {
        id: 'governance',
        name: 'Corporate Governance & Risk Control',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>,
        theme: 'navy',
        count: 8,
        services: [
            {
                title: 'Private Limited Registration',
                description: 'Incorporate your company as a Pvt Ltd with full legal support.',
            },
            {
                title: 'LLP Registration',
                description: 'Form a Limited Liability Partnership with flexibility.',
            },
            {
                title: 'Trademark Registration',
                description: 'Protect your brand name and logo with IP registration.',
            },
            {
                title: 'Legal Consulting',
                description: 'General corporate legal advisory and dispute resolution.',
            },
            {
                title: 'ISO Certifications',
                description: 'Get ISO 9001 and other quality certifications.',
            },
            {
                title: 'FSSAI Registration',
                description: 'Food safety license for food businesses.',
            },
            {
                title: 'Import Export Code (IEC)',
                description: 'License for international trade.',
            },
            {
                title: 'Partnership Firm',
                description: 'Register a traditional partnership firm.',
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
                        <span className="badge badge-blue">Complete Service Catalog</span>
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
            <section className={`section ${styles.servicesSection}`}>
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
                                    <div key={idx} className={`card ${styles.serviceCard}`}>
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
                            className="btn btn-primary btn-lg"
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
