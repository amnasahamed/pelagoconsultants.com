'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ClientWall.module.css';
import { allClients } from '../clients/client-data';

// Stats for social proof
const stats = [
    { number: '6000+', label: 'Clients' },
    { number: '150+', label: 'Registrations' },
    { number: '98%', label: 'Retention' },
    { number: '10+', label: 'Years Experience' },
];

export default function ClientWall({
    initialCount = 24,
    showSearch = true,
    showTabs = true,
    isHomePage = false,
    variant = 'grid',
    hideHeader = false
}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [visibleCount, setVisibleCount] = useState(initialCount);
    const [activeTab, setActiveTab] = useState('all');

    const filteredClients = useMemo(() => {
        let result = allClients;

        if (variant === 'marquee') {
            return result.filter(client => client.hasLogo);
        }

        if (searchTerm) {
            result = result.filter(client =>
                client.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (activeTab === 'featured') {
            result = result.filter(client => client.hasLogo);
        }

        return result;
    }, [searchTerm, activeTab, variant]);

    const displayedClients = variant === 'marquee' ? filteredClients : filteredClients.slice(0, visibleCount);
    const hasMore = visibleCount < filteredClients.length;

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 24);
    };

    // Premium homepage variant
    if (isHomePage) {
        const logoClients = allClients.filter(client => client.hasLogo).slice(0, 10);

        return (
            <section className={styles.premiumSection} id="clients">
                <div className="container">
                    {/* Header */}
                    <div className={styles.premiumHeader}>
                        <h2 className={styles.premiumTitle}>Trusted by 100+ Growing Businesses</h2>
                        <p className={styles.premiumSubtitle}>
                            Startups, SMEs and enterprises across India<br />
                            trust us for compliance and company formation.
                        </p>
                    </div>

                    {/* Logo Grid */}
                    <div className={styles.logoGrid}>
                        {logoClients.map((client, idx) => (
                            <div 
                                key={`${client.name}-${idx}`} 
                                className={styles.logoItem} 
                                title={client.name}
                            >
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    width={120}
                                    height={50}
                                    className={styles.logoImagePremium}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Stats Row */}
                    <div className={styles.statsRow}>
                        {stats.map((stat, idx) => (
                            <div key={idx} className={styles.statItem}>
                                <span className={styles.statNumber}>{stat.number}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Text Link */}
                    <div className={styles.linkWrapper}>
                        <Link href="/clients" className={styles.textLink}>
                            See our client success stories →
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    // Marquee variant
    if (variant === 'marquee') {
        const marqueeClients = [...displayedClients, ...displayedClients];

        return (
            <section className={styles.marqueeSection} id="clients">
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

    // Default grid variant (clients page)
    return (
        <section className={styles.section} id="clients" style={hideHeader ? { paddingTop: 0, backgroundColor: 'transparent' } : {}}>
            <div className="container">
                {!hideHeader && (
                    <div className={styles.header}>
                        <span className={styles.subtitle}>Our Clients</span>
                        <h2 className={styles.title}>Trusted by 100+ Innovative Companies</h2>
                        <p className={styles.description}>
                            From ambitious startups to established enterprises, we help businesses across industries manage their compliance and growth.
                        </p>
                    </div>
                )}

                {(showSearch || showTabs) && (
                    <div className={styles.toolbar}>
                        {showSearch && (
                            <div className={styles.searchWrapper}>
                                <svg
                                    width="18"
                                    height="18"
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
                                    placeholder="Search companies..."
                                    className={styles.searchInput}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        )}

                        {showTabs && (
                            <div className={styles.tabs}>
                                <button
                                    className={`${styles.tab} ${activeTab === 'all' ? styles.activeTab : ''}`}
                                    onClick={() => setActiveTab('all')}
                                >
                                    All
                                </button>
                                <button
                                    className={`${styles.tab} ${activeTab === 'featured' ? styles.activeTab : ''}`}
                                    onClick={() => setActiveTab('featured')}
                                >
                                    With Logos
                                </button>
                            </div>
                        )}
                    </div>
                )}

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
                    {hasMore && (
                        <button onClick={handleLoadMore} className={styles.loadMoreBtn}>
                            Show More Clients
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
