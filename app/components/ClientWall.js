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
    isHomePage = false
}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [visibleCount, setVisibleCount] = useState(initialCount);
    const [activeTab, setActiveTab] = useState('all'); // 'all', 'featured'

    // Filter clients
    const filteredClients = useMemo(() => {
        let result = allClients;

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
    }, [searchTerm, activeTab]);

    const displayedClients = filteredClients.slice(0, visibleCount);
    // On homepage, we don't load more, we link to the full page if there are more
    const hasMore = visibleCount < filteredClients.length;

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 24);
    };

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
                        No companies found matching "{searchTerm}"
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
