import { blogPosts } from '../blog-data';
import styles from '../blog.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title} | Pelago Consultants Blog`,
        description: post.excerpt,
        keywords: post.tags?.join(', '),
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [{ url: post.image }],
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        }
    };
}

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className={styles.postPage}>
            <header className={styles.postHeader}>
                <div className="container">
                    <div className={styles.postHeaderContent}>
                        <Link href="/blog" className={styles.backLink}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Back to Blog
                        </Link>
                        <div className={styles.postMeta}>
                            <span className={styles.category}>{post.category}</span>
                            <span className={styles.dot}>•</span>
                            <span className={styles.date}>{post.date}</span>
                            <span className={styles.dot}>•</span>
                            <span className={styles.readTime}>{post.readTime}</span>
                        </div>
                        <h1>{post.title}</h1>
                        <div className={styles.authorInfo} style={{ marginTop: '24px', fontSize: '0.9rem', color: 'var(--gray-600)' }}>
                            By <strong>{post.author}</strong>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container">
                <main className={styles.postMain}>
                    <div className={styles.postBody}>
                        <div className={styles.featuredImage}>
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                priority
                                sizes="(max-width: 1200px) 100vw, 800px"
                            />
                        </div>

                        <div
                            className={styles.postContent}
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {post.tags && (
                            <div className={styles.tags} style={{ marginTop: '40px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                {post.tags.map(tag => (
                                    <span key={tag} style={{ background: 'var(--gray-100)', padding: '4px 12px', borderRadius: '4px', fontSize: '0.8rem', color: 'var(--gray-600)' }}>
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    <aside className={styles.postSidebar}>
                        <div className={styles.sidebarCard}>
                            <h3>Need help with {post.category}?</h3>
                            <p>Our experts can guide you through the process and handle all compliance requirements.</p>
                            <Link href="/contact" className="btn btn-primary w-full">
                                Get Expert Advice
                            </Link>
                        </div>

                        <div className={styles.stickySidebar}>
                            <h4>Related Posts</h4>
                            <div className={styles.relatedPosts}>
                                {blogPosts
                                    .filter(p => p.id !== post.id && p.category === post.category)
                                    .slice(0, 3)
                                    .map(related => (
                                        <Link href={`/blog/${related.slug}`} key={related.id} className={styles.relatedPost}>
                                            <span>{related.date}</span>
                                            <h5>{related.title}</h5>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </aside>
                </main>
            </div>
        </article>
    );
}
