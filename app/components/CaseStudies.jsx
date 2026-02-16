'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './CaseStudies.module.css';

const caseStudies = [
    {
        id: 1,
        title: 'Manufacturing Compliance & Optimization',
        category: 'Operations',
        result: 'Reduced Tax Exposure by 28%',
        description: 'Streamlined compliance and operations for a mid-sized manufacturing unit, resulting in significant cost savings and improved cash flow.',
        image: '/blog/gst-filing.png', // Fallback image for now
        stats: [
            { label: 'Tax Saved', value: '28%' },
            { label: 'Cash Flow', value: '+35%' },
        ]
    },
    {
        id: 2,
        title: 'Tech Startup Scaling',
        category: 'Startup Advisory',
        result: 'DPIIT Recognition in 2 Weeks',
        description: 'Guided a fintech startup through incorporation, trademarking, and Startup India recognition, enabling them to secure seed funding.',
        image: '/blog/startup-india.png', // Fallback image for now
        stats: [
            { label: 'Speed', value: '14 Days' },
            { label: 'Funding', value: 'Secured' },
        ]
    },
    {
        id: 3,
        title: 'Retail Chain Expansion',
        category: 'Franchise Strategy',
        result: 'Successful 5-Outlet Expansion',
        description: 'Structured the legal and operational framework for a retail brand to launch 5 new franchise outlets within a year.',
        image: '/blog/business-structure.png', // Fallback image for now
        stats: [
            { label: 'Growth', value: '5x' },
            { label: 'Legal Risk', value: '0%' },
        ]
    }
];

export default function CaseStudies() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className="section-header">
                    <p className="subtitle">Real Results</p>
                    <h2>We don&apos;t just file papers.<br />We deliver growth.</h2>
                    <p>See how we&apos;ve helped businesses like yours scale and succeed.</p>
                </div>

                <div className={styles.grid}>
                    {caseStudies.map((study) => (
                        <div key={study.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                {/* Using a placeholder div if image fails or isn't perfect, but trying to use existing assets */}
                                <div className={styles.categoryBadge}>{study.category}</div>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.result}>{study.result}</h3>
                                <h4 className={styles.title}>{study.title}</h4>
                                <p className={styles.description}>{study.description}</p>
                                <div className={styles.statsRow}>
                                    {study.stats.map((stat, idx) => (
                                        <div key={idx} className={styles.stat}>
                                            <span className={styles.statValue}>{stat.value}</span>
                                            <span className={styles.statLabel}>{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.ctaWrapper}>
                    <Link href="/contact" className="btn btn-primary">
                        Book a Strategy Call
                    </Link>
                </div>
            </div>
        </section>
    );
}
