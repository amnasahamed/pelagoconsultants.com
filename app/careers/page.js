'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './careers.module.css';

// SVG Icons
const icons = {
    growth: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>,
    culture: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    balance: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
    briefcase: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
    location: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
    clock: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
    user: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
    graduation: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>,
    arrow: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>,
    phone: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
    check: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>,
    upload: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>,
    close: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>,
};

const benefits = [
    {
        title: 'Continuous Mastery',
        description: 'Cultivate your expertise within a culture of relentless excellence and high-level mentorship.',
        icon: icons.growth,
    },
    {
        title: 'Collective Intelligence',
        description: 'Collaborate with a diverse group of specialists who value depth of thought and precision.',
        icon: icons.culture,
    },
    {
        title: 'Restorative Focus',
        description: 'We prioritize deep work and sustainable performance, ensuring you have the space to excel.',
        icon: icons.balance,
    },
];

const openings = [
    {
        id: 'cma-trainee',
        title: 'CMA Trainee',
        department: 'Finance & Accounting',
        location: 'HiLite Business Park, Calicut',
        type: 'Full-time, On-site',
        experience: 'Fresher / 0-1 years',
        qualification: 'CMA (India/USA) pursuing or completed',
        isNew: true,
        poster: '/careers/cma-trainee.png',
        requirements: [
            'Strong analytical and numerical skills',
            'Good communication skills, both written and verbal',
            'Proficiency in MS Office applications, especially Excel and Word',
            'Preference for candidates from Calicut or nearby areas',
        ],
    },
    {
        id: 'compliance-associate',
        title: 'Compliance Associate',
        department: 'Business Compliance',
        location: 'HiLite Business Park, Calicut',
        type: 'Full-time, On-site',
        experience: 'Fresher / Experienced',
        qualification: 'B.Com / M.Com',
        isNew: true,
        poster: '/careers/compliance-associate.png',
        requirements: [
            'B.Com / M.Com qualification',
            'Preferably Calicut-based candidates',
            'Immediate joining availability',
            'Attention to detail in compliance documentation',
        ],
    },
    {
        id: 'investment-strategist',
        title: 'Investment Strategist',
        department: 'Pelago Equity',
        location: 'HiLite Business Park, Calicut',
        type: 'Full-time, On-site',
        experience: '0-1 year',
        qualification: 'BCom / MCom',
        isNew: true,
        requirements: [
            'Deep understanding of capital markets and value-based strategies',
            'Exceptional analytical rigor and research methodology',
            'Sophisticated communication and stakeholder management skills',
            'Relentless attention to detail in high-stakes environments',
        ],
    },
    {
        id: 'visual-specialist',
        title: 'Visual Specialist',
        department: 'Marketing & Creative',
        location: 'HiLite Business Park, Calicut',
        type: 'Full-time, On-site',
        experience: '1-3 years',
        qualification: null,
        isNew: false,
        requirements: [
            'Mastery of Adobe Creative Suite and digital design tools',
            'A portfolio that demonstrates aesthetic depth and clarity',
            'Experience crafting premium brand identities and digital assets',
            'Ability to translate complex strategies into visual narratives',
            'Exceptional time management and project ownership',
        ],
    },
];

export default function CareersPage() {
    const [selectedJob, setSelectedJob] = useState(null);
    const [fileName, setFileName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error'
    const fileInputRef = useRef(null);

    const handleApply = (job) => {
        setSelectedJob(job);
        setSubmitStatus(null);
        document.body.style.overflow = 'hidden';
    };

    const handleClose = () => {
        setSelectedJob(null);
        setFileName('');
        setSubmitStatus(null);
        document.body.style.overflow = 'auto';
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const linkedin = formData.get('linkedin');
        const reason = formData.get('reason');
        const cvFile = formData.get('attachment');

        // Google Apps Script Web App URL
        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzSlqXbC2vY_vIGEaQZRIGUm8vj-VxkFbAeEIjMPWPn7a_YPGixZMB2Y1-k3gTCUXpZ/exec';

        try {
            let cvBase64 = null;
            let cvName = null;
            let cvType = null;

            if (cvFile && cvFile.size > 0) {
                cvName = cvFile.name;
                cvType = cvFile.type;
                // Convert file to Base64 for Google Apps Script
                cvBase64 = await new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result.split(',')[1]);
                    reader.readAsDataURL(cvFile);
                });
            }

            const payload = {
                name,
                email,
                linkedin,
                reason,
                jobTitle: selectedJob.title,
                department: selectedJob.department,
                cvBase64,
                cvName,
                cvType
            };

            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Apps Script needs this for simple cross-site posts
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            // Note: with 'no-cors', we can't read the response body, 
            // but if it doesn't throw, it usually sent successfully.
            setSubmitStatus('success');
            e.target.reset();
            setFileName('');
            setTimeout(() => handleClose(), 3000);

        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="animate-fade-in">
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className="badge badge-blue animate-fade-in-up">Join Our Collective</span>
                        <h1 className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            Shape the Future of Professional Services
                        </h1>
                        <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            We&apos;re looking for architects of business growth—individuals who blend precision with passion to deliver exceptional value.
                        </p>
                        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <a href="#openings" className="btn btn-primary btn-lg">
                                Explore Openings
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Pelago - Benefits */}
            <section className={`section ${styles.whySection}`}>
                <div className="container">
                    <div className="section-header">
                        <p className="subtitle">Cultivating Excellence</p>
                        <h2>Why Pelago is different</h2>
                    </div>
                    <div className={styles.benefitsGrid}>
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className={`${styles.benefitCard} animate-fade-in-up`} style={{ animationDelay: `${0.1 * (idx + 1)}s` }}>
                                <span className={styles.benefitIcon}>{benefit.icon}</span>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="openings" className={`section ${styles.openingsSection}`}>
                <div className="container">
                    <div className="section-header">
                        <p className="subtitle">Current Opportunities</p>
                        <h2>Join us in our mission</h2>
                    </div>
                    <div className={styles.openingsGrid}>
                        {openings.map((job, idx) => (
                            <div key={idx} className={`${styles.jobCard} animate-fade-in-up`} style={{ animationDelay: `${0.1 * (idx + 1)}s` }}>
                                {job.poster && (
                                    <div className={styles.jobCardThumbnail} onClick={() => handleApply(job)} style={{ position: 'relative' }}>
                                        <Image
                                            src={job.poster}
                                            alt={`Hiring poster for ${job.title}`}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                )}
                                <div className={styles.jobCardInfo}>
                                    <div className={styles.jobCardHeading}>
                                        <span className={styles.jobTag}>{job.department}</span>
                                        {job.isNew && <span className={styles.statusBadge}>Priority Hire</span>}
                                        <h3>{job.title}</h3>
                                    </div>
                                    <div className={styles.jobCardMeta}>
                                        <div className={styles.metaItem}>
                                            {icons.location}
                                            <span>{job.location}</span>
                                        </div>
                                        <div className={styles.metaItem}>
                                            {icons.clock}
                                            <span>{job.type}</span>
                                        </div>
                                        <div className={styles.metaItem}>
                                            {icons.user}
                                            <span>{job.experience}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.jobCardAction}>
                                    <button
                                        onClick={() => handleApply(job)}
                                        className="btn btn-primary"
                                    >
                                        Apply Now {icons.arrow}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Modal */}
            {selectedJob && (
                <div className={styles.modalOverlay} onClick={handleClose}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        {isSubmitting && (
                            <div className={styles.submitProgress}>
                                <div className={styles.submitProgressInner}></div>
                            </div>
                        )}
                        <button className={styles.modalClose} onClick={handleClose}>
                            {icons.close}
                        </button>
                        <div className={styles.modalHeader}>
                            <div className={styles.jobDepartment}>{selectedJob.department}</div>
                            <h2>Applying for {selectedJob.title}</h2>
                            <p>Please provide your professional details below.</p>
                        </div>
                        <form className={`${styles.applyForm} ${isSubmitting ? styles.formDamped : ''}`} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" name="name" placeholder="John Doe" required disabled={isSubmitting} />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" placeholder="john@example.com" required disabled={isSubmitting} />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="linkedin">LinkedIn Profile</label>
                                <input type="url" id="linkedin" name="linkedin" placeholder="https://linkedin.com/in/username" required disabled={isSubmitting} />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Curriculum Vitae (CV)</label>
                                <div
                                    className={`${styles.fileUpload} ${fileName ? styles.fileSelected : ''}`}
                                    onClick={!isSubmitting ? triggerFileInput : undefined}
                                >
                                    <input
                                        type="file"
                                        name="attachment"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        className={styles.hiddenInput}
                                        accept=".pdf,.doc,.docx"
                                        required
                                        disabled={isSubmitting}
                                    />
                                    <div className={styles.uploadIcon}>{icons.upload}</div>
                                    <div className={styles.uploadText}>
                                        {fileName ? (
                                            <span className={styles.fileName}>{fileName}</span>
                                        ) : (
                                            <>
                                                <strong>Click to upload</strong> or drag and drop
                                                <span>PDF, DOC, DOCX up to 10MB</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="reason">Why do you want to join Pelago?</label>
                                <textarea
                                    id="reason"
                                    name="reason"
                                    rows="4"
                                    placeholder="Tell us about your aspirations and how you fit this role..."
                                    required
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>

                            {submitStatus === 'success' && (
                                <div className={styles.successMessage}>
                                    {icons.check} Your application has been sent successfully. We&apos;ll be in touch soon.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className={styles.errorMessage}>
                                    Something went wrong. Please try again or contact us directly.
                                </div>
                            )}

                            <button
                                type="submit"
                                className={`btn btn-primary btn-lg w-full ${isSubmitting ? styles.btnLoading : ''}`}
                                disabled={isSubmitting || submitStatus === 'success'}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className={styles.spinner}></div>
                                        Sending Application...
                                    </>
                                ) : 'Submit Application'}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Visionary CTA */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Don&apos;t see your perfect fit?</h2>
                        <p>
                            We are always looking for exceptional talent. If you believe your expertise aligns with our culture of excellence, we&apos;d love to hear from you.
                        </p>
                        <div className={styles.ctaButtons}>
                            <button onClick={() => handleApply({ title: 'Visionary Role', department: 'General Inquiry' })} className="btn btn-primary btn-lg">
                                Send Visionary Resume
                            </button>
                            <a href="tel:+917994659991" className="btn btn-outline btn-lg">
                                {icons.phone} Let&apos;s Talk
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
