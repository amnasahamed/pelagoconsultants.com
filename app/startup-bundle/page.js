import styles from './page.module.css';
import Link from 'next/link';
import CaseStudies from '../components/CaseStudies';

// Premium SVG Icons tailored for the offerings
const icons = {
    agreement: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></svg>,
    legal: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>,
    startup: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>,
    bank: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>,
    accounting: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></svg>,
    caseStudy: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>,
    operations: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>,
    technology: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
    whatsapp: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>,
};

const offerings = [
    {
        title: 'Founders Agreement',
        description: 'Eliminate future disputes. Bulletproof contracts that protect your equity, IP, and vision.',
        icon: icons.agreement,
    },
    {
        title: 'Legal Structuring',
        description: 'Flawless incorporation. We set up your Pvt Ltd or LLP ensuring 100% regulatory compliance.',
        icon: icons.legal,
    },
    {
        title: 'Startup India Reg',
        description: 'Unlock tax holidays, fast-tracked patents, and government funding access.',
        icon: icons.startup,
    },
    {
        title: 'Frictionless Banking',
        description: 'Skip the queues. We instantly open your premium corporate accounts to start transacting.',
        icon: icons.bank,
    },
    {
        title: 'Virtual CFO',
        description: 'Pro-level accounting, monthly MIS, and tax mentorship so you burn cash efficiently.',
        icon: icons.accounting,
    },
    {
        title: 'Growth Playbooks',
        description: 'Access the exact operational blueprints and case studies used by our most successful startups.',
        icon: icons.caseStudy,
    },
    {
        title: 'Operational Setup',
        description: 'We wire up your HR, payroll, and internal workflows so your team scales without breaking.',
        icon: icons.operations,
    },
    {
        title: 'Tech Stack Advisory',
        description: 'Save thousands on SaaS. We architect your digital infrastructure for maximum leverage.',
        icon: icons.technology,
    },
    {
        title: 'Founders Network',
        description: '24/7 direct WhatsApp access to our community of founders and elite business consultants.',
        icon: icons.whatsapp,
    },
];

export default function StartupBundle() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    {/* A high quality Vimeo background video of a startup modern office */}
                    <iframe
                        src="https://player.vimeo.com/video/441221447?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <div className={styles.heroDecor}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div className={styles.heroLayout}>
                        <div className={`${styles.heroBadge} animate-fade-in-up`}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '8px' }}>
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                            </svg>
                            Pelago Startup Bundle
                        </div>

                        <h1 className={`${styles.heroTitle} animate-fade-in-up`} style={{ animationDelay: '0.1s' }}>
                            Stop Navigating Red Tape. <br />
                            <span className={styles.heroHighlight}>Start Building.</span>
                        </h1>

                        <p className={`${styles.heroText} animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
                            The all-in-one launchpad for ambitious founders. Legal incorporation, banking, tax planning, and operational setup handled elegantly by experts.
                        </p>

                        <div className={`${styles.heroButtons} animate-fade-in-up`} style={{ animationDelay: '0.3s' }}>
                            <Link href="#offerings" className={styles.btnPrimary}>
                                Claim Your Bundle
                            </Link>
                            <Link href="/contact" className={styles.btnSecondary}>
                                Speak to a Growth Expert
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Offerings Section */}
            <section id="offerings" className={styles.offeringsSection}>
                <div className="container">
                    <div className={styles.offeringsHeader}>
                        <span className={styles.subtitle}>Complete Support System</span>
                        <h2>9 Pillars for Relentless Growth</h2>
                        <p>We built this bundle by reverse-engineering the exact administrative hurdles that kill early-stage startups. We handle the paperwork, you handle the vision.</p>
                    </div>

                    <div className={styles.grid}>
                        {offerings.map((item, idx) => (
                            <div key={idx} className={styles.card} style={{ animationDelay: `${idx * 0.1}s` }}>
                                <div className={styles.iconWrapper}>
                                    {item.icon}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <CaseStudies />

            {/* Final Call to Action */}
            <section className={styles.finalCta}>
                <div className="container">
                    <div className={styles.finalCtaContent}>
                        <h2>Ready to Ignite Your <span>Empire?</span></h2>
                        <p>Don&apos;t let brilliant momentum die in bureaucracy. Join thousands of founders who have bypassed the friction and hit the ground running with Pelago.</p>

                        <a
                            href="https://api.whatsapp.com/send/?phone=917994659991&text=Hi%2C+I+want+to+fast-track+my+growth+with+the+Startup+Bundle&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.whatsappBtn}
                        >
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Chat on WhatsApp to Start
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
