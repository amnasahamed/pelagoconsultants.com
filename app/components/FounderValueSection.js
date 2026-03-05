'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import styles from './FounderValueSection.module.css';

const metrics = [
    {
        value: 240000,
        prefix: '₹',
        suffix: 'L+',
        label: 'Penalties Avoided',
        sublabel: 'Average per client',
        progress: 85,
    },
    {
        value: 120,
        suffix: ' hrs',
        label: 'Founder Time',
        sublabel: 'Saved annually',
        progress: 70,
    },
    {
        value: 7,
        suffix: ' days',
        label: 'Incorporation',
        sublabel: 'Average setup speed',
        progress: 92,
    },
    {
        value: 98,
        suffix: '%',
        label: 'Success',
        sublabel: 'First-attempt rate',
        progress: 98,
    },
];

function useCountUp(target, duration = 2000, active) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!active) return;
        let start = null;
        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target, duration, active]);
    return count;
}

function formatCount(n, metric) {
    if (metric.value >= 100000) {
        return `₹${(n / 100000).toFixed(1)}L`;
    }
    return n;
}

function MetricItem({ metric, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });
    const count = useCountUp(metric.value, 2000, inView);

    const displayValue = metric.value >= 100000
        ? (inView ? formatCount(count, metric) : '₹0L')
        : `${metric.prefix || ''}${inView ? count : 0}${metric.suffix}`;

    return (
        <motion.div
            ref={ref}
            className={styles.metricItem}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className={styles.metricValue}>{displayValue}</div>
            <div className={styles.metricLabel}>{metric.label}</div>
            <div className={styles.metricSublabel}>{metric.sublabel}</div>
            
            {/* Progress line */}
            <div className={styles.progressLine}>
                <motion.div
                    className={styles.progressFill}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${metric.progress}%` } : {}}
                    transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                />
            </div>
        </motion.div>
    );
}

export default function FounderValueSection() {
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
                    <h2>Real Outcomes for Founders</h2>
                    <p>Based on data from 6,000+ businesses we've helped incorporate and scale.</p>
                </motion.div>

                {/* Metrics */}
                <div className={styles.metricsRow}>
                    {metrics.map((m, i) => (
                        <MetricItem key={i} metric={m} index={i} />
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className={styles.ctaWrapper}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <p>Ready to see what this looks like for your business?</p>
                    <Link href="/contact" className={styles.ctaButton}>
                        Talk to a Compliance Expert
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
