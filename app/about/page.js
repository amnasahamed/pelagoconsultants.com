import styles from './about.module.css';
import Image from 'next/image';

export const metadata = {
    title: 'About Us - Pelago Consultants',
    description: 'Meet the team behind Pelago Consultants. We\'re a group of founders, operators, and compliance experts who believe starting a business should be exciting, not exhausting.',
};

// SVG Icons
const icons = {
    clientFirst: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    transparency: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
    expertise: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>,
    innovation: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="9" y1="18" x2="15" y2="18" /><line x1="10" y1="22" x2="14" y2="22" /><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" /></svg>,
    mission: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
    vision: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
    check: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>,
    heart: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
    rocket: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /></svg>,
};

const values = [
    {
        title: 'Founders First',
        description: 'We\'ve been in your shoes. Every decision we make starts with: "What\'s best for the founder?"',
        icon: icons.heart,
    },
    {
        title: 'No Jargon, Ever',
        description: 'We explain things in plain English (or Malayalam!). If you don\'t understand something, that\'s on us, not you.',
        icon: icons.transparency,
    },
    {
        title: 'Real Expertise',
        description: 'Our team includes CAs, CSs, and lawyers who actually know their stuff — not just salespeople.',
        icon: icons.expertise,
    },
    {
        title: 'Always Innovating',
        description: 'We\'re constantly finding ways to make compliance faster, easier, and less painful for you.',
        icon: icons.rocket,
    },
];

const certifications = [
    { name: 'Startup India', desc: 'DPIIT Recognized', certificateUrl: '/startup-india-certificate.pdf' },
    { name: 'ISO 9001:2015', desc: 'Quality Management', certificateUrl: null },
    { name: 'MSME Registered', desc: 'Government Verified', certificateUrl: null },
];

const team = [
    {
        name: 'Minhaj',
        role: 'Chief Executive Officer',
        image: '/team-minhaj.png',
        color: '#22c55e',
        bio: 'Former consultant turned founder. Believes every business deserves great compliance support.'
    },
    {
        name: 'Sahil',
        role: 'Chief Financial Officer',
        image: '/team-sahil.png',
        color: '#059669',
        bio: 'CA with 10+ years experience. Makes complex tax stuff feel surprisingly simple.'
    },
    {
        name: 'Nandhan',
        role: 'Chief Operations Officer',
        image: '/team-nandhan.png',
        color: '#334155',
        bio: 'Operations wizard who ensures everything runs smoothly behind the scenes.'
    },
    {
        name: 'Amnas Ahammed',
        role: 'Chief Technology Officer',
        image: '/team-amnas.png',
        color: '#4361ee',
        bio: 'Tech enthusiast building tools to make compliance effortless for founders.'
    },
    {
        name: 'Salim',
        role: 'Chief Compliance Officer',
        image: '/team-salim.png',
        color: '#f59e0b',
        bio: 'Legal expert who knows every government form so you don\'t have to.'
    }
];

const staff = [
    { name: 'Deeksha', role: 'Business Associate', image: '/staff/deeksha.jpg', color: '#22c55e' },
    { name: 'Farshana', role: 'Compliance Executive', image: '/staff/farshana.jpg', color: '#059669' },
    { name: 'Jazil', role: 'Business Associate', image: '/staff/jazil.jpg', color: '#334155' },
    { name: 'Kochu', role: 'Compliance Executive', image: '/staff/kochu.jpg', color: '#4361ee' },
    { name: 'Lena', role: 'Business Associate', image: '/staff/lena.jpg', color: '#f59e0b' },
    { name: 'Lubna', role: 'Compliance Executive', image: '/staff/lubna.jpg', color: '#22c55e' },
    { name: 'Maneesha', role: 'Business Associate', image: '/staff/maneesha.jpg', color: '#0891b2' },
    { name: 'Naja', role: 'Compliance Executive', image: '/staff/naja.jpg', color: '#475569' },
    { name: 'Raniya', role: 'Business Associate', image: '/staff/raniya.jpg', color: '#4361ee' },
    { name: 'Sameera', role: 'Compliance Executive', image: '/staff/sameera.jpg', color: '#f59e0b' },
    { name: 'Shehin', role: 'Business Associate', image: '/staff/shehin.jpg', color: '#22c55e' },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className="badge badge-blue">About Us</span>
                        <h1>We&apos;re founders helping<br /><span className={styles.highlight}>other founders succeed</span></h1>
                        <p>Pelago started with a simple frustration: starting a business in India is way harder than it should be. So we decided to fix that.</p>
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className={`section ${styles.storySection}`}>
                <div className="container">
                    <div className={styles.storyGrid}>
                        <div className={styles.storyContent}>
                            <h2>Our Story</h2>
                            <p>
                                Back in 2019, we were a group of founders who had just started our own businesses. We quickly realized that the hardest part wasn&apos;t building the product or finding customers — it was the paperwork.
                            </p>
                            <p>
                                Government portals that crash. Forms that make no sense. Consultants who speak in riddles and charge hidden fees. We thought: <em>there has to be a better way.</em>
                            </p>
                            <p>
                                So we built it. Pelago was born from the simple idea that compliance should be easy, transparent, and maybe even pleasant. Today, we&apos;ve helped over 6,000 founders start and grow their businesses — and we&apos;re just getting started.
                            </p>
                        </div>
                        <div className={styles.storyImage}>
                            <div className={styles.imagePlaceholder}>
                                <Image
                                    src="/office/office-1.jpg"
                                    alt="The Pelago Team"
                                    width={500}
                                    height={350}
                                    style={{ objectFit: 'cover', borderRadius: '16px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className={`section bg-gray ${styles.missionSection}`}>
                <div className="container">
                    <div className={styles.missionGrid}>
                        <div className={styles.missionCard}>
                            <span className={styles.missionIcon}>{icons.mission}</span>
                            <h3>Our Mission</h3>
                            <p>To make business compliance so simple that founders can focus on what they do best — building great companies.</p>
                        </div>
                        <div className={styles.missionCard}>
                            <span className={styles.missionIcon}>{icons.vision}</span>
                            <h3>Our Vision</h3>
                            <p>A world where starting a business is as easy as downloading an app. Where every entrepreneur has access to expert help.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className={`section ${styles.valuesSection}`}>
                <div className="container">
                    <div className="section-header">
                        <p className="subtitle">What We Believe</p>
                        <h2>The principles that guide us</h2>
                    </div>
                    <div className={styles.valuesGrid}>
                        {values.map((value, idx) => (
                            <div key={idx} className={styles.valueCard}>
                                <span className={styles.valueIcon}>{value.icon}</span>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className={`section bg-gray ${styles.teamSection}`}>
                <div className="container">
                    <div className="section-header">
                        <p className="subtitle">Meet The Team</p>
                        <h2>The people behind Pelago</h2>
                        <p>A mix of operators, accountants, lawyers, and dreamers who believe in your success.</p>
                    </div>
                    <div className={styles.teamGrid}>
                        {team.map((member, idx) => (
                            <div key={idx} className={styles.teamCard}>
                                <div className={styles.teamImageContainer} style={{ '--accent': member.color }}>
                                    <div className={styles.teamImageBg} />
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={300}
                                        height={400}
                                        className={styles.teamImg}
                                    />
                                </div>
                                <div className={styles.teamInfo}>
                                    <h3>{member.name}</h3>
                                    <p className={styles.role}>{member.role}</p>
                                    <p className={styles.bio}>{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.staffHeader}>
                        <p className="subtitle">Our Extended Family</p>
                        <h3>The amazing people who make it all happen</h3>
                    </div>
                    <div className={styles.staffGrid}>
                        {staff.map((member, idx) => (
                            <div key={idx} className={styles.teamCard}>
                                <div className={styles.teamImageContainer} style={{ '--accent': member.color }}>
                                    <div className={styles.teamImageBg} />
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={300}
                                        height={400}
                                        className={styles.teamImg}
                                    />
                                </div>
                                <div className={styles.teamInfo}>
                                    <h3>{member.name}</h3>
                                    <p>{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className={`section ${styles.certSection}`}>
                <div className="container">
                    <div className="section-header">
                        <p className="subtitle">Trusted & Certified</p>
                        <h2>Government recognized & verified</h2>
                    </div>
                    <div className={styles.certGrid}>
                        {certifications.map((cert, idx) => (
                            <div key={idx} className={styles.certCard}>
                                <div className={styles.certBadge}>{icons.check}</div>
                                <h3>{cert.name}</h3>
                                <p>{cert.desc}</p>
                                {cert.certificateUrl && (
                                    <a
                                        href={cert.certificateUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.viewCertLink}
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                        View Certificate
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className={`section bg-gray ${styles.statsSection}`}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>6,000+</span>
                            <span className={styles.statLabel}>Founders Helped</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>150+</span>
                            <span className={styles.statLabel}>Companies Started</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>4.9/5</span>
                            <span className={styles.statLabel}>Happy Clients</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>15+</span>
                            <span className={styles.statLabel}>Team Members</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Gallery */}
            <section className={`section ${styles.gallerySection}`}>
                <div className="container">
                    <div className="section-header">
                        <p className="subtitle">Our Home</p>
                        <h2>Where we work (and occasionally play)</h2>
                        <p>Our office at HiLite Business Park, Calicut — come visit us!</p>
                    </div>
                    <div className={styles.galleryGrid}>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <div key={num} className={styles.galleryItem}>
                                <Image
                                    src={`/office/office-${num}.jpg`}
                                    alt={`Pelago Office ${num}`}
                                    width={400}
                                    height={300}
                                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Ready to meet us?</h2>
                        <p>We&apos;d love to hear about your business and how we can help.</p>
                        <div className={styles.ctaButtons}>
                            <a 
                                href="https://api.whatsapp.com/send/?phone=917994659991&text=Hi%2C+I+want+to+know+more+about+Pelago"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-lg"
                            >
                                Message Us on WhatsApp
                            </a>
                            <a href="/contact" className="btn btn-primary btn-lg">
                                Book a Free Call
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
