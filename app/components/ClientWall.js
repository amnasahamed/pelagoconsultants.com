'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Added Link import
import styles from './ClientWall.module.css';
import { allClients } from '../clients/client-data';

export default function ClientWall({
    initialCount = 24,
    showSearch = true,
    showTabs = true,
    isHomePage = false,
    variant = 'grid' // 'grid' or 'marquee'
}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [visibleCount, setVisibleCount] = useState(initialCount);
    const [activeTab, setActiveTab] = useState('all'); // 'all', 'featured'

    // Filter clients
    const filteredClients = useMemo(() => {
        let result = allClients;

        // If marquee, only duplicates needed later, but base list should be logo-only usually
        if (variant === 'marquee') {
            return result.filter(client => client.hasLogo);
        }

        // Filter by search
        if (searchTerm) {
            result = result.filter(client =>
                client.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // If we want a "Featured" tab that only shows Logos
        if (activeTab === 'featured') {
            result = result.filter(client => client.hasLogo);
        }

        return result;
    }, [searchTerm, activeTab, variant]);

    const displayedClients = variant === 'marquee' ? filteredClients : filteredClients.slice(0, visibleCount);
    // On homepage, we don't load more, we link to the full page if there are more
    const hasMore = visibleCount < filteredClients.length;

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 24);
    };

    if (variant === 'marquee') {
        const marqueeClients = [...displayedClients, ...displayedClients]; // Duplicate for infinite scroll

        return (
            <section className={styles.marqueeSection} id="clients">
                {/* No container class here to allow full width liquid feel if desired, 
                   but keeping it contained slightly or full width depends on design. 
                   User said "Continuous horizontal scrolling logo strip". 
                   Let's keep it full width or container based on parent. 
                   Usually container is safer for alignment, but marquee often spans full width.
                   Let's use container for the header, but maybe full width for the track?
                   Let's stick to container for now to match other sections, 
                   or just the track inside container. 
                */}
                <div className="container">
                    <div className={styles.header} style={{ marginBottom: '2rem' }}>
                        <span className={styles.subtitle}>Our Clients</span>
                        <h2 className={styles.title}>Trusted by Industry Leaders</h2>
                    </div>

                    <div className={styles.marqueeContainer}>
                        <div className={styles.marqueeTrack}>
                            {marqueeClients.map((client, idx) => (
                                <div key={`${client.name}-${idx}`} className={styles.marqueeItem} title={client.name}>
                                    <div className={styles.marqueeLogoWrapper}>
                                        <Image
                                            src={client.logo}
                                            alt={client.name}
                                            width={150}
                                            height={80}
                                            className={styles.marqueeLogo}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.footer} style={{ marginTop: '2rem' }}>
                        <Link href="/clients" className="btn btn-secondary">
                            View All {allClients.length}+ Clients
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.section} id="clients">
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.subtitle}>Our Clients</span>
                    <h2 className={styles.title}>Trusted by 100+ Innovative Companies</h2>
                    <p className={styles.description}>
                        From ambitious startups to established enterprises, we help businesses across industries manage their compliance and growth.
                    </p>
                </div>

                {/* Search & Filter */}
                {showSearch && (
                    <div className={styles.searchWrapper}>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className={styles.searchIcon}
                        >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search for a company..."
                            className={styles.searchInput}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                )}

                {/* Tabs */}
                {showTabs && (
                    <div className={styles.tabs}>
                        <button
                            className={`${styles.tab} ${activeTab === 'all' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('all')}
                        >
                            All Clients
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'featured' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('featured')}
                        >
                            Featured with Logos
                        </button>
                    </div>
                )}

                {/* Grid */}
                <div className={styles.grid}>
                    {displayedClients.map((client, idx) => (
                        <div key={`${client.name}-${idx}`} className={styles.card} title={client.name}>
                            {client.hasLogo ? (
                                <div className={styles.logoWrapper}>
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        fill
                                        sizes="(max-width: 768px) 50vw, 200px"
                                        className={styles.logoImage}
                                    />
                                </div>
                            ) : (
                                <div className={styles.nameOnly}>
                                    {client.name}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {displayedClients.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
                        No companies found matching &quot;{searchTerm}&quot;
                    </div>
                )}

                <div className={styles.footer}>
                    {isHomePage ? (
                        <Link href="/clients" className="btn btn-secondary">
                            View All 100+ Clients
                        </Link>
                    ) : (
                        hasMore && (
                            <button onClick={handleLoadMore} className={styles.loadMoreBtn}>
                                Show More Clients
                            </button>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
