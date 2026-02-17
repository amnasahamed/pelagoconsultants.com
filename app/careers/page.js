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
        id: 'mca-compliance-associate',
        title: 'MCA Compliance Associate',
        department: 'Corporate & Compliance Services',
        location: 'Kozhikode',
        type: 'Full-time, On-site',
        experience: '0–1 years / Freshers',
        qualification: 'M.Com / CS (Inter)',
        isNew: true,
        poster: null,
        requirements: [
            'Strong knowledge of MCA portal procedures',
            'Handle Company & LLP Incorporation (End-to-end)',
            'Prepare and file annual filings (AOC-4, MGT-7)',
            'Manage DPIIT, Startup India, and other registrations',
            'Professional communication and client coordination',
        ],
        fullDescription: {
            summary: 'Pelago Consultants LLP is seeking a dedicated and detail-oriented MCA Compliance Associate to join our Corporate & Compliance Services team. This role involves end-to-end handling of company and LLP incorporation, annual compliance filings, and various statutory registrations through the MCA and other government portals. The position is ideal for commerce graduates or candidates with prior experience in corporate compliance who are seeking hands-on exposure to incorporation procedures and regulatory compliance under the Companies Act and LLP Act.',
            responsibilities: [
                'Incorporation & Registration Services: Handle end-to-end Company Incorporation (Private Limited, OPC, Section 8 Companies).',
                'Handle LLP Incorporation including FiLLiP filing and post-incorporation compliance.',
                'Manage Name Reservation (RUN / SPICe+ Part A).',
                'Coordinate DIN, DSC, and related documentation.',
                'Assist in drafting incorporation-related documentation (MOA/AOA coordination).',
                'Handle post-incorporation registrations (PAN, TAN, AGILE, etc.).',
                'Annual & Event-Based Compliance: Prepare and file annual filings.',
                'File DIR-3 KYC and related director compliance forms.',
                'Handle LLP Form 8 and Form 11 filings.',
                'Process change in directors/partners.',
                'Handle registered office change filings.',
                'Assist in capital increase and other event-based filings.',
                'Support strike-off and closure procedures.',
                'Government Registrations & Licenses: Handle DPIIT and Startup India registrations.',
                'Process IEC registration.',
                'Assist in FSSAI registration.',
                'Process MSME registration and updates.',
                'Coordinate other statutory registrations as required.',
                'MCA Portal & Documentation Handling: Independently manage MCA portal filings.',
                'Ensure timely and accurate submission of forms.',
                'Maintain proper digital documentation and filing records.',
                'Minimize resubmissions through accurate preparation and review.',
                'Coordinate DSC-related processes with internal team.',
                'Client Coordination: Collect required documents from clients.',
                'Share compliance checklists and follow-up for pending documents.',
                'Provide basic compliance updates to clients.',
                'Update task progress in internal ERP system.',
                'Maintain organized client compliance files.'
            ],
            eligibility: [
                'M.Com / CS (Inter) preferred.',
                '0 –1 years of experience in MCA compliance preferred.',
                'Freshers with strong practical knowledge may apply.',
                'Basic understanding of Companies Act and LLP Act provisions.'
            ],
            skills: [
                'Strong knowledge of MCA portal procedures',
                'Accuracy and attention to detail',
                'Time management and deadline orientation',
                'Professional communication skills',
                'Ability to handle multiple compliance tasks simultaneously',
                'Basic proficiency in MS Excel and documentation tools'
            ],
            compensation: [
                'Salary: As per industry standards and candidate experience',
                'Performance-based increment after probation period',
                'Additional incentives may be applicable based on performance',
                'Service Commitment: Mandatory 1-year service commitment from the date of joining.'
            ],
            reportingTo: 'Manager-Corporate & Compliance Services',
            workPolicy: [
                'Working Hours: 9:45 AM to 5:45 PM',
                'Weekly Off: Sunday',
                'Additional Off: Second Saturday & Fourth Saturday',
                'Casual Leave: One day per month'
            ]
        },
    },
    {
        id: 'portfolio-manager',
        title: 'Portfolio Manager',
        department: 'Pelago Equity',
        location: 'Kozhikode',
        type: 'Full-time, On-site',
        experience: 'Experienced',
        qualification: 'Bachelor’s/Master’s + CMA/ACCA (Pref)',
        isNew: true,
        poster: null,
        requirements: [
            'Manage client portfolios & implement investment strategies',
            'Conduct fundamental/technical analysis of equities',
            'Monitor risk exposure & ensure regulatory compliance',
            'Strong analytical skills & financial modeling expertise',
            'Professional certification (CMA/ACCA) preferred',
        ],
        fullDescription: {
            summary: 'Pelago Consultants LLP is seeking an experienced and result-oriented Portfolio Manager to manage and oversee client investment portfolios. The role involves developing customized investment strategies, monitoring market trends, managing risk, and ensuring optimal portfolio performance.',
            responsibilities: [
                'Manage and monitor assigned client portfolios to achieve defined financial goals.',
                'Develop and implement customized investment strategies based on client risk profiles.',
                'Conduct in-depth fundamental and technical analysis of equities.',
                'Analyze financial statements, economic indicators, and market trends.',
                'Monitor portfolio risk exposure and implement appropriate risk mitigation strategies.',
                'Prepare periodic portfolio performance reports for management review.'
            ],
            eligibility: [
                'Bachelor’s or Master’s degree in Finance, Commerce, Economics, or related field.',
                'Relevant experience in portfolio management, investment advisory, or financial analysis preferred.',
                'Strong understanding of capital markets, asset allocation, and risk management principles.',
                'Professional certifications such as CMA, or ACCA (preferred).'
            ],
            skills: [
                'Strong analytical and financial modeling skills.',
                'Sound knowledge of equity markets and investment strategies.',
                'Decision-making and problem-solving ability.',
                'Excellent communication',
                'High ethical standards and professional integrity.'
            ],
            compensation: [
                'Compensation will be commensurate with qualifications and experience.',
                'Performance-based incentives and bonuses may be applicable as per company policy.'
            ],
            reportingTo: 'Managing Director',
            workPolicy: [
                'Working Hours: 8:30 AM to 4:00 PM',
                'Weekly Off: Saturday & Sunday',
                'Market Holidays: As per recognized market holidays',
                'Leave Policy: As per company policy'
            ]
        },
    },
    {
        id: 'cma-trainee',
        title: 'CMA Trainee (INDIA/USA)',
        department: 'Finance & Accounting',
        location: 'Kozhikode',
        type: 'Full-time, On-site',
        experience: 'Fresher / 0-1 years',
        qualification: 'CMA (Inter/Final) or CMA-USA',
        isNew: true,
        poster: '/careers/cma-trainee.png',
        requirements: [
            'Hands-on exposure to Accounting, Taxation, GST & Audit',
            'Strong analytical skills & proficiency in MS Excel/Accounting Software',
            'Assist in Income Tax (ITR) & GST Returns (GSTR-1, 3B)',
            'Stipend: ₹5,000 (0-6 mo) → ₹8,000 (6-12 mo) → ₹10,000 (1 yr+)',
            'Mandatory 1-year service commitment',
        ],
        fullDescription: {
            summary: 'Pelago consultants LLP is seeking a dedicated and detail-oriented CMA TRAINEE to join our team.This role provides hands on exposure to accounting ,taxation,GST compliance , and statutory compliance.The position is ideal for CMA students or commerce graduates Seeking practical experience in accounting and regulatory compliance.',
            responsibilities: [
                'Accounting & Bookkeeping: Maintain day-to-day books of accounts.',
                'Record financial transactions accurately in accounting software.',
                'Perform bank and ledger reconciliations.',
                'Assist in preparation of financial statements.',
                'Income Tax Compliance: Assist in preparation and filing of Income Tax Returns (ITR).',
                'Support computation of taxable income.',
                'Handle basic income tax compliance matters and documentation.',
                'GST Compliance: Assist in GST registration processes.',
                'Prepare and file GST returns (GSTR-1, GSTR-3B, etc.).',
                'Conduct GST reconciliations.',
                'Respond to routine GST-related queries and notices.',
                'MCA & Statutory Compliance: Assist in MCA filings and ROC compliance.',
                'Support audit-related assignments.',
                'Handle statutory compliance documentation.',
                'Perform other accounting and compliance-related duties as assigned by management.',
                'Audit Support: Assist in internal and statutory audit work',
                'Support preparation of audit schedules and working papers',
                'Help collect and organize audit documents',
                'Coordinate with auditors and respond to basic audit queries'
            ],
            eligibility: [
                'CMA (Inter/Final) or CMA -USA (qualified) and Commerce graduate.',
                'Basic knowledge of accounting, GST, and income tax provisions.',
                'Proficiency in MS Excel and accounting software preferred.',
                'Strong analytical skills and attention to detail.'
            ],
            skills: [
                'Accuracy and attention to detail',
                'Willingness to learn',
                'Time management skills',
                'Professional communication skills'
            ],
            compensation: [
                'First 6 Months (Training Period): INR 5,000 per month',
                'After Completion of 6 Months: INR 8,000 per month',
                'After Completion of 1 Year: INR 10,000 per month',
                'Service Commitment: Mandatory 1-year service bond from the date of joining.',
                'Detailed terms and conditions will be specified in the employment agreement.'
            ],
            reportingTo: 'Operational Head',
            workPolicy: [
                'Working Hours: 9:45 AM to 5:45 PM',
                'Weekly Off: Sunday',
                'Additional Off: Second Saturday & Fourth Saturday',
                'Casual Leave: One day per month'
            ]
        },
    },
];

export default function CareersPage() {
    const [selectedJob, setSelectedJob] = useState(null);
    const [viewingJob, setViewingJob] = useState(null);
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

    const handleViewJD = (job) => {
        setViewingJob(job);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseJD = () => {
        setViewingJob(null);
        document.body.style.overflow = 'auto';
    };

    const handleDownloadJD = (job) => {
        if (!job.fullDescription) return;

        const { title, fullDescription } = job;
        let content = `${title}\n\n`;

        if (fullDescription.reportingTo) {
            content += `Reporting To: ${fullDescription.reportingTo}\n\n`;
        }

        content += `Job Summary:\n${fullDescription.summary}\n\n`;

        if (fullDescription.responsibilities) {
            content += `Key Responsibilities:\n`;
            fullDescription.responsibilities.forEach(item => content += `- ${item}\n`);
            content += `\n`;
        }

        if (fullDescription.eligibility) {
            content += `Eligibility Criteria:\n`;
            fullDescription.eligibility.forEach(item => content += `- ${item}\n`);
            content += `\n`;
        }

        if (fullDescription.skills) {
            content += `Skills Required:\n`;
            fullDescription.skills.forEach(item => content += `- ${item}\n`);
            content += `\n`;
        }

        if (fullDescription.workPolicy) {
            content += `Working Hours & Leave Policy:\n`;
            fullDescription.workPolicy.forEach(item => content += `- ${item}\n`);
            content += `\n`;
        }

        if (fullDescription.compensation) {
            content += `Compensation Structure:\n`;
            fullDescription.compensation.forEach(item => content += `- ${item}\n`);
        }

        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${title.replace(/\s+/g, '_')}_JD.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
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
                                        onClick={() => handleViewJD(job)}
                                        className={`btn ${styles.btnOutline}`}
                                        style={{ marginRight: '10px' }}
                                    >
                                        View JD
                                    </button>
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

            {/* Job Description Modal */}
            {viewingJob && (
                <div className={styles.modalOverlay} onClick={handleCloseJD}>
                    <div className={styles.jdModalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.modalClose} onClick={handleCloseJD}>
                            {icons.close}
                        </button>
                        <div className={styles.jdHeader}>
                            <span className={styles.jobTag}>{viewingJob.department}</span>
                            <h2>{viewingJob.title}</h2>
                            {viewingJob.fullDescription?.reportingTo && (
                                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
                                    Reporting To: <strong>{viewingJob.fullDescription.reportingTo}</strong>
                                </p>
                            )}
                            <div className={styles.jdMeta}>
                                <div className={styles.metaItem}>
                                    {icons.location}
                                    <span>{viewingJob.location}</span>
                                </div>
                                <div className={styles.metaItem}>
                                    {icons.clock}
                                    <span>{viewingJob.type}</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.jdBody}>
                            {viewingJob.fullDescription?.summary && (
                                <div className={styles.jdSection}>
                                    <h3>Job Summary</h3>
                                    <p>{viewingJob.fullDescription.summary}</p>
                                </div>
                            )}

                            {viewingJob.fullDescription?.responsibilities && (
                                <div className={styles.jdSection}>
                                    <h3>Key Responsibilities</h3>
                                    <ul>
                                        {viewingJob.fullDescription.responsibilities.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {viewingJob.fullDescription?.eligibility && (
                                <div className={styles.jdSection}>
                                    <h3>Eligibility Criteria</h3>
                                    <ul>
                                        {viewingJob.fullDescription.eligibility.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {viewingJob.fullDescription?.skills && (
                                <div className={styles.jdSection}>
                                    <h3>Skills Required</h3>
                                    <ul>
                                        {viewingJob.fullDescription.skills.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {viewingJob.fullDescription?.workPolicy && (
                                <div className={styles.jdSection}>
                                    <h3>Working Hours & Leave Policy</h3>
                                    <ul>
                                        {viewingJob.fullDescription.workPolicy.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {viewingJob.fullDescription?.compensation && (
                                <div className={styles.jdSection}>
                                    <h3>Compensation Structure</h3>
                                    <ul>
                                        {viewingJob.fullDescription.compensation.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className={styles.jdFooter}>
                            <button
                                onClick={() => handleDownloadJD(viewingJob)}
                                className={`btn ${styles.btnOutline}`}
                            >
                                Download JD
                            </button>
                            <button
                                onClick={() => {
                                    handleCloseJD();
                                    handleApply(viewingJob);
                                }}
                                className="btn btn-primary"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            )}

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
