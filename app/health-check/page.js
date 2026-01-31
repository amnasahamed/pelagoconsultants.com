'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './health-check.module.css';

const questions = [
    {
        id: 1,
        question: 'What type of business do you run?',
        options: [
            { text: 'Startup / Early Stage', value: 'startup' },
            { text: 'Small Business (< 50 employees)', value: 'small' },
            { text: 'Medium Business (50-200 employees)', value: 'medium' },
            { text: 'Large Enterprise', value: 'large' },
        ],
    },
    {
        id: 2,
        question: 'Is your business formally registered?',
        options: [
            { text: 'Yes, as Private Limited', value: 'pvt' },
            { text: 'Yes, as LLP', value: 'llp' },
            { text: 'Yes, as Proprietorship', value: 'prop' },
            { text: 'Not yet registered', value: 'none' },
        ],
    },
    {
        id: 3,
        question: 'Are you registered for GST?',
        options: [
            { text: 'Yes, filing regularly', value: 'yes-regular' },
            { text: 'Yes, but behind on filings', value: 'yes-behind' },
            { text: 'No, but turnover > 40L', value: 'no-needed' },
            { text: 'No, not required', value: 'no' },
        ],
    },
    {
        id: 4,
        question: 'How do you manage your accounting?',
        options: [
            { text: 'Professional accountant/CA', value: 'professional' },
            { text: 'Accounting software', value: 'software' },
            { text: 'Excel/manual records', value: 'manual' },
            { text: 'Not tracking properly', value: 'none' },
        ],
    },
    {
        id: 5,
        question: 'Are your annual filings up to date?',
        options: [
            { text: 'Yes, all current', value: 'current' },
            { text: 'Behind by 1 year', value: 'behind-1' },
            { text: 'Behind by 2+ years', value: 'behind-2' },
            { text: 'Not sure', value: 'unsure' },
        ],
    },
    {
        id: 6,
        question: 'Do you have any intellectual property to protect?',
        options: [
            { text: 'Yes, already trademarked', value: 'protected' },
            { text: 'Yes, but not protected yet', value: 'unprotected' },
            { text: 'Planning to develop IP', value: 'planning' },
            { text: 'No IP concerns', value: 'none' },
        ],
    },
    {
        id: 7,
        question: 'Are you planning to raise funding?',
        options: [
            { text: 'Yes, within 6 months', value: 'soon' },
            { text: 'Yes, within 1-2 years', value: 'later' },
            { text: 'Maybe in the future', value: 'maybe' },
            { text: 'No, bootstrapping', value: 'no' },
        ],
    },
    {
        id: 8,
        question: 'Do you have Startup India recognition?',
        options: [
            { text: 'Yes, DPIIT certified', value: 'yes' },
            { text: 'Applied, pending', value: 'pending' },
            { text: 'Eligible but not applied', value: 'eligible' },
            { text: 'Not sure / Not eligible', value: 'no' },
        ],
    },
];

const getScore = (answers) => {
    let score = 0;
    let issues = [];
    let recommendations = [];

    // Registration
    if (answers[1] === 'none') {
        issues.push('Business not formally registered');
        recommendations.push({ title: 'Company Registration', desc: 'Register as Pvt Ltd or LLP for credibility and legal protection', priority: 'high' });
    }

    // GST
    if (answers[2] === 'yes-behind') {
        issues.push('GST filings are pending');
        recommendations.push({ title: 'GST Compliance', desc: 'Clear pending GST returns to avoid penalties', priority: 'high' });
    } else if (answers[2] === 'no-needed') {
        issues.push('GST registration required');
        recommendations.push({ title: 'GST Registration', desc: 'Your turnover requires GST registration', priority: 'high' });
    } else if (answers[2] === 'yes-regular') {
        score += 15;
    }

    // Accounting
    if (answers[3] === 'professional') {
        score += 20;
    } else if (answers[3] === 'none' || answers[3] === 'manual') {
        issues.push('Accounting needs improvement');
        recommendations.push({ title: 'Professional Accounting', desc: 'Set up proper bookkeeping to track finances', priority: 'medium' });
    }

    // Annual filings
    if (answers[4] === 'current') {
        score += 20;
    } else if (answers[4] === 'behind-2') {
        issues.push('Severely behind on annual filings');
        recommendations.push({ title: 'Annual Return Filing', desc: 'File pending returns immediately to avoid company strike-off', priority: 'high' });
    } else if (answers[4] === 'behind-1' || answers[4] === 'unsure') {
        issues.push('Annual filings may need attention');
        recommendations.push({ title: 'Compliance Audit', desc: 'Review and update pending annual filings', priority: 'medium' });
    }

    // IP
    if (answers[5] === 'unprotected') {
        issues.push('Intellectual property at risk');
        recommendations.push({ title: 'Trademark Registration', desc: 'Protect your brand name and logo', priority: 'medium' });
    } else if (answers[5] === 'protected') {
        score += 15;
    }

    // Funding
    if (answers[6] === 'soon' && answers[1] !== 'pvt') {
        recommendations.push({ title: 'Investor Readiness', desc: 'Convert to Pvt Ltd for easier fundraising', priority: 'high' });
    }

    // Startup India
    if (answers[7] === 'eligible') {
        recommendations.push({ title: 'Startup India Registration', desc: 'Get DPIIT recognition for tax benefits and funding access', priority: 'medium' });
    } else if (answers[7] === 'yes') {
        score += 15;
    }

    // Business type bonus
    if (answers[0] === 'startup' || answers[0] === 'small') {
        score += 5;
    }

    // Registration bonus
    if (answers[1] === 'pvt' || answers[1] === 'llp') {
        score += 10;
    }

    // Cap score at 100
    score = Math.min(score, 100);

    // Determine health status
    let status = 'critical';
    let statusText = 'Needs Immediate Attention';
    let statusColor = '#ef4444';

    if (score >= 70) {
        status = 'healthy';
        statusText = 'Business is Healthy';
        statusColor = '#22c55e';
    } else if (score >= 40) {
        status = 'moderate';
        statusText = 'Room for Improvement';
        statusColor = '#f59e0b';
    }

    return { score, status, statusText, statusColor, issues, recommendations };
};

export default function HealthCheckPage() {
    const [started, setStarted] = useState(false);
    const [currentQ, setCurrentQ] = useState(0);
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);

    const handleAnswer = (value) => {
        const newAnswers = { ...answers, [currentQ]: value };
        setAnswers(newAnswers);

        if (currentQ < questions.length - 1) {
            setCurrentQ(currentQ + 1);
        } else {
            // Calculate result
            setResult(getScore(newAnswers));
        }
    };

    const restart = () => {
        setStarted(false);
        setCurrentQ(0);
        setAnswers({});
        setResult(null);
    };

    const whatsappNumber = '917994659991';
    const progress = ((currentQ + 1) / questions.length) * 100;

    // Start Screen
    if (!started) {
        return (
            <div className={styles.page}>
                <div className={styles.container}>
                    <div className={styles.startCard}>
                        <span className="badge badge-blue">Free Assessment</span>
                        <h1>Business Health Check</h1>
                        <p>Answer 8 quick questions to discover compliance gaps and get personalized recommendations for your business.</p>

                        <div className={styles.features}>
                            <div className={styles.feature}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                <span>Takes under 2 minutes</span>
                            </div>
                            <div className={styles.feature}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                <span>100% confidential</span>
                            </div>
                            <div className={styles.feature}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
                                <span>Get personalized report</span>
                            </div>
                        </div>

                        <button className="btn btn-primary btn-lg" onClick={() => setStarted(true)}>
                            Start Health Check
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Result Screen
    if (result) {
        return (
            <div className={styles.page}>
                <div className={styles.container}>
                    <div className={styles.resultCard}>
                        <h2>Your Business Health Score</h2>

                        <div className={styles.scoreCircle} style={{ '--score-color': result.statusColor }}>
                            <svg viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="45" className={styles.scoreBg} />
                                <circle
                                    cx="50" cy="50" r="45"
                                    className={styles.scoreProgress}
                                    style={{ strokeDashoffset: 283 - (283 * result.score / 100) }}
                                />
                            </svg>
                            <div className={styles.scoreValue}>
                                <span className={styles.scoreNumber}>{result.score}</span>
                                <span className={styles.scoreLabel}>/ 100</span>
                            </div>
                        </div>

                        <div className={styles.statusBadge} style={{ backgroundColor: result.statusColor }}>
                            {result.statusText}
                        </div>

                        {result.issues.length > 0 && (
                            <div className={styles.issuesSection}>
                                <h3>Issues Found</h3>
                                <ul>
                                    {result.issues.map((issue, idx) => (
                                        <li key={idx}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                                            {issue}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {result.recommendations.length > 0 && (
                            <div className={styles.recsSection}>
                                <h3>Recommended Actions</h3>
                                <div className={styles.recsList}>
                                    {result.recommendations.map((rec, idx) => (
                                        <div key={idx} className={styles.recCard}>
                                            <span className={`${styles.priority} ${styles[rec.priority]}`}>{rec.priority}</span>
                                            <h4>{rec.title}</h4>
                                            <p>{rec.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className={styles.ctaButtons}>
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=Hi,%20I%20just%20completed%20the%20Business%20Health%20Check%20and%20scored%20${result.score}/100.%20I'd%20like%20to%20discuss%20improving%20my%20compliance.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                Talk to an Expert
                            </a>
                            <button className="btn btn-secondary" onClick={restart}>
                                Take Again
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Question Screen
    const q = questions[currentQ];
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.questionCard}>
                    <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                    </div>
                    <div className={styles.progressText}>Question {currentQ + 1} of {questions.length}</div>

                    <h2>{q.question}</h2>

                    <div className={styles.options}>
                        {q.options.map((opt, idx) => (
                            <button
                                key={idx}
                                className={styles.optionBtn}
                                onClick={() => handleAnswer(opt.value)}
                            >
                                {opt.text}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
