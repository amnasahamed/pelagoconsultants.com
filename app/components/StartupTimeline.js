'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import styles from './StartupTimeline.module.css';

const timelineSteps = [
    {
        step: '01',
        title: 'Choose Your Business Structure',
        description: 'LLP vs Pvt Ltd? Most founders choose wrong. We guide you before incorporation.',
        features: ['Structure selected correctly', 'Avoid costly restructuring later'],
    },
    {
        step: '02',
        title: 'Incorporate Your Company',
        description: 'MCA registration done for you. All paperwork handled by experts.',
        features: ['Certificate of Incorporation', 'PAN & TAN included'],
    },
    {
        step: '03',
        title: 'GST Activation',
        description: 'Start invoicing legally. GST registration and compliance setup.',
        features: ['GST number in 3-5 days', 'Invoicing guidance'],
    },
    {
        step: '04',
        title: 'Bank Account & DSC',
        description: 'Financial setup completed. Business account and digital signature.',
        features: ['Bank account opened', 'DSC issued'],
    },
    {
        step: '05',
        title: 'Compliance Setup',
        description: 'Monthly filings handled. Never miss a deadline or face penalties.',
        features: ['Monthly GST filing', 'Annual compliance'],
    },
    {
        step: '06',
        title: 'Scale Your Business',
        description: 'Trademark, ISO, HR systems. Everything you need to grow confidently.',
        features: ['Brand protection', 'Investor-ready docs'],
    },
];

function TimelineStep({ step, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={ref}
            className={styles.step}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
            {/* Step number */}
            <div className={styles.stepIndicator}>
                <motion.div 
                    className={styles.stepCircle}
                    initial={{ scale: 0.8 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                >
                    {step.step}
                </motion.div>
                {index < timelineSteps.length - 1 && (
                    <motion.div 
                        className={styles.stepLine}
                        initial={{ height: 0 }}
                        animate={inView ? { height: '100%' } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                    />
                )}
            </div>

            {/* Step card */}
            <div className={styles.stepCard}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <ul className={styles.featureList}>
                    {step.features.map((feature, idx) => (
                        <li key={idx}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

export default function StartupTimeline() {
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

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
                    <h2>Your Startup Journey — Simplified</h2>
                    <p>From company formation to compliance and growth, we handle every step.</p>
                </motion.div>

                {/* Timeline */}
                <div className={styles.timeline}>
                    {timelineSteps.map((step, i) => (
                        <TimelineStep key={step.step} step={step} index={i} />
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className={styles.timelineCta}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <Link href="/contact" className={styles.ctaButton}>
                        Start Your Company →
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
