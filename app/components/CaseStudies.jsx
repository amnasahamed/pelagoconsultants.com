'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CaseStudies.module.css';

const caseStudies = [
    {
        id: 1,
        title: 'Manufacturing Compliance Optimization',
        industry: 'Manufacturing',
        metric: '28%',
        metricLabel: 'Tax Reduction',
        description: 'Helped a mid-sized manufacturing firm restructure tax compliance and save costs.',
        image: '/case-studies/3.jpg',
        featured: true,
    },
    {
        id: 2,
        title: 'DPIIT Recognition',
        industry: 'Fintech',
        metric: '14 Days',
        metricLabel: 'Recognition Time',
        description: 'Fast-tracked Startup India certification for a fintech company.',
        image: '/case-studies/2.jpg',
        featured: false,
    },
    {
        id: 3,
        title: 'Retail Chain Expansion',
        industry: 'Retail',
        metric: '5x',
        metricLabel: 'Outlet Growth',
        description: 'Structured legal framework for 5-outlet franchise expansion.',
        image: '/case-studies/1.jpg',
        featured: false,
    },
];

function CaseCard({ study, index, featured = false }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={ref}
            className={`${styles.card} ${featured ? styles.featuredCard : ''}`}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            {/* Image Banner */}
            <div className={styles.imageBanner}>
                <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
                    style={{ objectFit: 'cover' }}
                />
            </div>

            {/* Content */}
            <div className={styles.content}>
                <span className={styles.industry}>{study.industry}</span>
                
                <div className={styles.metric}>
                    <span className={styles.metricValue}>{study.metric}</span>
                    <span className={styles.metricLabel}>{study.metricLabel}</span>
                </div>

                <h3 className={styles.title}>{study.title}</h3>
                <p className={styles.description}>{study.description}</p>

                <Link href="/contact" className={styles.viewCase}>
                    View case →
                </Link>
            </div>
        </motion.div>
    );
}

export default function CaseStudies() {
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

    const featuredCase = caseStudies.find(c => c.featured);
    const smallerCases = caseStudies.filter(c => !c.featured);

    return (
        <section className={styles.section}>
            <div className="container">
                {/* Header */}
                <motion.div 
                    ref={headerRef}
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <h2>Real Results for Real Businesses</h2>
                    <p>See how we help founders and companies scale with the right structure and compliance.</p>
                </motion.div>

                {/* Featured Case */}
                {featuredCase && (
                    <div className={styles.featuredWrapper}>
                        <CaseCard study={featuredCase} index={0} featured={true} />
                    </div>
                )}

                {/* Smaller Cases Grid */}
                <div className={styles.grid}>
                    {smallerCases.map((study, index) => (
                        <CaseCard key={study.id} study={study} index={index + 1} featured={false} />
                    ))}
                </div>

                {/* CTA */}
                <motion.div 
                    className={styles.ctaWrapper}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <Link href="/contact" className={styles.ctaButton}>
                        Talk to an Expert →
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
