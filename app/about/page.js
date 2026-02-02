import styles from './about.module.css';
import Image from 'next/image';

export const metadata = {
    title: 'About Us - Pelago Consultants',
    description: 'Learn about Pelago Consultants - Startup India certified business compliance firm with 6,000+ happy clients and 98% success rate.',
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
};

const values = [
    {
        title: 'Client-First Approach',
        description: 'Your success is our priority. We tailor solutions to your unique business needs.',
        icon: icons.clientFirst,
    },
    {
        title: 'Transparency',
        description: 'No hidden fees, no surprises. Clear communication at every step.',
        icon: icons.transparency,
    },
    {
        title: 'Expertise',
        description: 'Certified professionals with years of experience in compliance and legal matters.',
        icon: icons.expertise,
    },
    {
        title: 'Innovation',
        description: 'Leveraging technology to streamline your compliance journey.',
        icon: icons.innovation,
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
        color: '#22c55e'
    },
    {
        name: 'Sahil',
        role: 'Chief Financial Officer',
        image: '/team-sahil.png',
        color: '#ec4899'
    },
    {
        name: 'Nandhan',
        role: 'Chief Operations Officer',
        image: '/team-nandhan.png',
        color: '#8b5cf6'
    },
    {
        name: 'Amnas Ahammed',
        role: 'Chief Technology Officer',
        image: '/team-amnas.png',
        color: '#4361ee'
    },
    {
        name: 'Salim',
        role: 'Chief Compliance Officer',
        image: '/team-salim.png',
        color: '#f59e0b'
    }
];

const staff = [
    { name: 'Deeksha', role: 'Business Associate', image: '/staff/deeksha.jpg', color: '#22c55e' },
    { name: 'Farshana', role: 'Compliance Executive', image: '/staff/farshana.jpg', color: '#ec4899' },
    { name: 'Jazil', role: 'Business Associate', image: '/staff/jazil.jpg', color: '#8b5cf6' },
    { name: 'Kochu', role: 'Compliance Executive', image: '/staff/kochu.jpg', color: '#4361ee' },
    { name: 'Lena', role: 'Business Associate', image: '/staff/lena.jpg', color: '#f59e0b' },
    { name: 'Lubna', role: 'Compliance Executive', image: '/staff/lubna.jpg', color: '#22c55e' },
    { name: 'Maneesha', role: 'Business Associate', image: '/staff/maneesha.jpg', color: '#ec4899' },
    { name: 'Naja', role: 'Compliance Executive', image: '/staff/naja.jpg', color: '#8b5cf6' },
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
                        <h1>Building trust through<br /><span className={styles.highlight}>transparent compliance</span></h1>
                        <p>Since our inception, we&apos;ve helped 6,000+ businesses navigate the complex world of compliance, registration, and legal requirements.</p>
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
                                Pelago Consultants was founded with a simple mission: to make business compliance accessible and affordable for every entrepreneur in India.
                            </p>
                            <p>
                                We understand that navigating government regulations, tax filings, and legal requirements can be overwhelming — especially for startups and small businesses. That&apos;s why we&apos;ve built a team of experts who handle the paperwork while you focus on what matters most: growing your business.
                            </p>
                            <p>
                                Today, we&apos;re proud to be a Startup India certified consultancy, trusted by businesses across Kerala and beyond.
                            </p>
                        </div>
                        <div className={styles.storyImage}>
                            <div className={styles.imagePlaceholder}>
                                <Image
                                    src="/logo.png"
                                    alt="Pelago Team"
                                    width={200}
                                    height={100}
                                    style={{ objectFit: 'contain' }}
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
                            <p>To simplify compliance for every business, enabling entrepreneurs to focus on growth while we handle the formalities.</p>
                        </div>
                        <div className={styles.missionCard}>
                            <span className={styles.missionIcon}>{icons.vision}</span>
                            <h3>Our Vision</h3>
                            <p>To be India&apos;s most trusted partner for business compliance, known for transparency, expertise, and exceptional service.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className={`section ${styles.teamSection}`}>
                <div className="container">
                    <div className="section-header">
                        <p className="subtitle">Core Team</p>
                        <h2>The experts behind your success</h2>
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
                                    <p>{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.staffHeader}>
                        <p className="subtitle">Our Dedicated Team</p>
                        <h3>The strength of our operations</h3>
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

            {/* Values */}
            <section className={`section ${styles.valuesSection}`}>
                <div className="container">
                    <div className="section-header">
                        <p className="subtitle">Our Values</p>
                        <h2>What drives us every day</h2>
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

            {/* Certifications */}
            <section className={`section bg-gray ${styles.certSection}`}>
                <div className="container">
                    <div className="section-header">
                        <p className="subtitle">Certifications</p>
                        <h2>Government recognized & certified</h2>
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
            <section className={`section ${styles.statsSection}`}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>6,000+</span>
                            <span className={styles.statLabel}>Happy Clients</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>150+</span>
                            <span className={styles.statLabel}>Companies Formed</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>4.9/5</span>
                            <span className={styles.statLabel}>Google Rating</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>98%</span>
                            <span className={styles.statLabel}>Success Rate</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Gallery */}
            <section className={`section ${styles.gallerySection}`}>
                <div className="container">
                    <div className="section-header">
                        <p className="subtitle">Our Space</p>
                        <h2>Where the magic happens</h2>
                        <p>Take a peek inside our office at HiLite Business Park, Calicut</p>
                    </div>
                    <div className={styles.galleryGrid}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
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
        </>
    );
}
