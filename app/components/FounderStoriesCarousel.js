'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './FounderStoriesCarousel.module.css';

const stories = [
    {
        name: 'Shiril Ruman',
        role: 'Tech Founder',
        industry: 'Technology',
        before: [
            '3 weeks trying to register LLP',
            'Application rejected twice',
        ],
        after: [
            'LLP registered in 6 days',
            'Back to building product',
        ],
        highlight: 'LLP registered in 6 days',
        quote: 'Fast execution and clear communication.',
        rating: 5,
        initials: 'SR',
        featured: true,
    },
    {
        name: 'Shibil Muhammed',
        role: 'E-commerce Founder',
        industry: 'E-commerce',
        before: [
            'Brand being copied by competitor',
            'No trademark protection',
        ],
        after: [
            'Trademark approved in 4 months',
            'Competitor forced to rebrand',
        ],
        highlight: 'Trademark approved in 4 months',
        quote: 'Handled all paperwork efficiently.',
        rating: 5,
        initials: 'SM',
        featured: false,
    },
    {
        name: 'Magno Labs',
        role: 'CEO',
        industry: 'Retail',
        before: [
            'Confused about GST requirements',
            'Worried about penalties',
        ],
        after: [
            'GST compliance automated',
            'Zero filing stress',
        ],
        highlight: 'GST compliance simplified',
        quote: 'Monthly filing explained clearly.',
        rating: 5,
        initials: 'ML',
        featured: false,
    },
];

function StoryCard({ story, featured = false }) {
    return (
        <motion.div
            className={`${styles.storyCard} ${featured ? styles.featuredCard : ''}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
        >
            {/* Industry Tag */}
            <span className={styles.industryTag}>{story.industry}</span>

            {/* Before / After Split */}
            <div className={styles.transformation}>
                {/* Before */}
                <div className={styles.beforeSection}>
                    <span className={styles.sectionLabel}>Before</span>
                    <ul className={styles.pointList}>
                        {story.before.map((point, i) => (
                            <li key={i}>
                                <span className={styles.crossIcon}>✕</span>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Divider */}
                <div className={styles.divider}>
                    <span className={styles.arrow}>→</span>
                </div>

                {/* After */}
                <div className={styles.afterSection}>
                    <span className={styles.sectionLabel}>After</span>
                    <ul className={styles.pointList}>
                        {story.after.map((point, i) => (
                            <li key={i}>
                                <span className={styles.checkIcon}>✓</span>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Highlight */}
            <div className={styles.highlight}>{story.highlight}</div>

            {/* Quote */}
            <p className={styles.quote}>"{story.quote}"</p>

            {/* Founder Info */}
            <div className={styles.founder}>
                <div className={styles.avatar}>{story.initials}</div>
                <div className={styles.founderInfo}>
                    <div className={styles.founderName}>{story.name}</div>
                    <div className={styles.founderRole}>{story.role}</div>
                </div>
                <div className={styles.stars}>
                    {[...Array(story.rating)].map((_, i) => (
                        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function FounderStoriesCarousel() {
    const featuredStory = stories.find(s => s.featured);
    const otherStories = stories.filter(s => !s.featured);

    return (
        <section className={styles.section}>
            <div className="container">
                {/* Header */}
                <div className={styles.header}>
                    <h2>Founder Success Stories</h2>
                    <p>Real transformations from founders we've helped.</p>
                </div>

                {/* Stories Grid */}
                <div className={styles.storiesGrid}>
                    {/* Featured Story */}
                    {featuredStory && (
                        <div className={styles.featuredWrapper}>
                            <StoryCard story={featuredStory} featured={true} />
                        </div>
                    )}

                    {/* Other Stories */}
                    <div className={styles.otherStories}>
                        {otherStories.map((story, i) => (
                            <StoryCard key={story.name} story={story} featured={false} />
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className={styles.ctaWrapper}>
                    <Link href="/contact" className={styles.ctaButton}>
                        See More Founder Stories →
                    </Link>
                </div>
            </div>
        </section>
    );
}
