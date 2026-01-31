'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './blog.module.css';
import { blogPosts, categories } from './blog-data';

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredPosts = activeCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className="badge badge-blue">Blog</span>
                        <h1>Insights & Updates</h1>
                        <p>Expert guidance on compliance, registration, and growing your business in India.</p>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className={styles.categoriesSection}>
                <div className="container">
                    <div className={styles.categories}>
                        {categories.map((category, idx) => (
                            <button
                                key={idx}
                                className={`${styles.categoryBtn} ${activeCategory === category ? styles.active : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className={`section ${styles.blogSection}`}>
                <div className="container">
                    <div className={styles.blogGrid}>
                        {filteredPosts.map((post) => (
                            <article key={post.id} className={`${styles.blogCard}`}>
                                <Link href={`/blog/${post.slug}`} className={styles.blogCardWrapper}>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </Link>
                                <div className={styles.blogCardBody}>
                                    <div className={styles.blogMeta}>
                                        <span className={styles.category}>{post.category}</span>
                                        <span className={styles.dot}>•</span>
                                        <span className={styles.readTime}>{post.readTime}</span>
                                    </div>
                                    <h2>
                                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                    </h2>
                                    <p>{post.excerpt}</p>
                                    <div className={styles.blogFooter}>
                                        <span className={styles.date}>{post.date}</span>
                                        <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                                            Read More
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    {filteredPosts.length === 0 && (
                        <div className={styles.noPosts}>
                            <p>No posts found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter */}
            <section className={`section bg-gray ${styles.newsletter}`}>
                <div className="container">
                    <div className={styles.newsletterContent}>
                        <h2>Stay Updated</h2>
                        <p>Get the latest compliance updates and business tips delivered to your inbox.</p>
                        <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email" required />
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
