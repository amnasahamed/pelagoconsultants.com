'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from './FounderResourceHub.module.css';

const whatsappBase = "https://api.whatsapp.com/send/?phone=917994659991&type=phone_number&app_absent=0";

// ─── Business Structure Quiz ──────────────────────────────────────────────────
const quizSteps = [
    {
        id: 'team',
        question: 'How many founders are starting this business?',
        options: [
            { label: 'Just me', desc: 'Solo founder', value: 'solo' },
            { label: '2–3 partners', desc: 'Small team', value: 'small' },
            { label: '4+ team members', desc: 'Larger team', value: 'large' },
        ],
    },
    {
        id: 'funding',
        question: 'Planning to raise external funding?',
        options: [
            { label: 'Yes, definitely', desc: 'VC/Angel investment', value: 'yes' },
            { label: 'Maybe in future', desc: 'Keeping options open', value: 'maybe' },
            { label: 'No, bootstrapping', desc: 'Self-funded growth', value: 'no' },
        ],
    },
    {
        id: 'liability',
        question: 'Concerned about personal liability?',
        options: [
            { label: 'Very concerned', desc: 'Maximum protection needed', value: 'high' },
            { label: 'Somewhat', desc: 'Moderate protection', value: 'medium' },
            { label: 'Not a priority', desc: 'Low risk business', value: 'low' },
        ],
    },
    {
        id: 'revenue',
        question: 'Expected Year 1 revenue?',
        options: [
            { label: 'Under ₹20 lakhs', desc: 'Early stage', value: 'small' },
            { label: '₹20L – ₹1 Crore', desc: 'Growing fast', value: 'medium' },
            { label: 'Above ₹1 Crore', desc: 'High growth', value: 'large' },
        ],
    },
];

function getRecommendation(answers) {
    const { team, funding, liability, revenue } = answers;
    if (funding === 'yes' || revenue === 'large') {
        return {
            structure: 'Private Limited Company',
            reason: 'Best for raising funding and high-growth businesses.',
            benefits: ['Investor-ready structure', 'Limited liability protection', 'High credibility'],
            color: '#1e3a8a',
        };
    }
    if (team === 'small' && liability !== 'low') {
        return {
            structure: 'LLP (Limited Liability Partnership)',
            reason: 'Perfect balance of protection and flexibility for small teams.',
            benefits: ['Personal liability protection', 'Lower compliance cost', 'Flexible profit sharing'],
            color: '#0d9488',
        };
    }
    if (team === 'solo' && liability === 'low' && revenue === 'small') {
        return {
            structure: 'Sole Proprietorship',
            reason: 'Simplest and most cost-effective for solo operators.',
            benefits: ['Zero registration cost', 'Minimum compliance', 'Easy to start'],
            color: '#d97706',
        };
    }
    return {
        structure: 'LLP or Pvt Ltd',
        reason: 'Your situation has multiple valid options.',
        benefits: ['Personalised advice needed', 'Compare side by side', 'Expert guidance'],
        color: '#1e3a8a',
    };
}

function BusinessQuiz() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);

    const handleAnswer = (value) => {
        const newAnswers = { ...answers, [quizSteps[step].id]: value };
        setAnswers(newAnswers);
        if (step < quizSteps.length - 1) {
            setStep(step + 1);
        } else {
            setResult(getRecommendation(newAnswers));
        }
    };

    const reset = () => { setStep(0); setAnswers({}); setResult(null); };

    return (
        <div className={styles.quizPanel}>
            {!result ? (
                <>
                    {/* Progress */}
                    <div className={styles.quizProgress}>
                        <span className={styles.stepIndicator}>Step {step + 1} of {quizSteps.length}</span>
                        <div className={styles.progressBar}>
                            <motion.div 
                                className={styles.progressFill}
                                initial={{ width: 0 }}
                                animate={{ width: `${((step + 1) / quizSteps.length) * 100}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </div>

                    {/* Question */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className={styles.quizContent}
                        >
                            <h4 className={styles.quizQuestion}>{quizSteps[step].question}</h4>
                            <div className={styles.quizOptions}>
                                {quizSteps[step].options.map((opt) => (
                                    <motion.button 
                                        key={opt.value} 
                                        className={styles.quizOption}
                                        onClick={() => handleAnswer(opt.value)}
                                        whileHover={{ y: -2, borderColor: '#1e3a8a' }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className={styles.optionLabel}>{opt.label}</span>
                                        <span className={styles.optionDesc}>{opt.desc}</span>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </>
            ) : (
                <motion.div
                    className={styles.quizResult}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className={styles.resultHeader}>
                        <span className={styles.resultBadge}>Recommended Structure</span>
                        <h4 className={styles.resultStructure}>{result.structure}</h4>
                        <p className={styles.resultReason}>{result.reason}</p>
                    </div>
                    
                    <ul className={styles.resultBenefits}>
                        {result.benefits.map((b, i) => (
                            <li key={i}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                {b}
                            </li>
                        ))}
                    </ul>

                    <div className={styles.resultActions}>
                        <Link href="/contact" className={styles.resultCta}>
                            Start Registration →
                        </Link>
                        <button className={styles.retakeBtn} onClick={reset}>Retake Quiz</button>
                    </div>
                </motion.div>
            )}
        </div>
    );
}

// ─── Compliance Calendar ──────────────────────────────────────────────────────
const complianceDates = [
    { month: 'Jan', dates: ['GSTR-3B (Dec)', 'TDS Challan Q3'], type: 'gst' },
    { month: 'Feb', dates: ['GSTR-1 (Jan)', 'GSTR-3B (Jan)'], type: 'gst' },
    { month: 'Mar', dates: ['Advance Tax Q4', 'Annual Acc. Closure'], type: 'tax' },
    { month: 'Apr', dates: ['GSTR-9 Annual', 'LLP Annual Filing'], type: 'annual' },
    { month: 'Jul', dates: ['ITR Filing Deadline', 'Advance Tax Q1'], type: 'tax' },
    { month: 'Sep', dates: ['Advance Tax Q2', 'ROC Filing Pvt Ltd'], type: 'annual' },
];

const typeLabels = { gst: 'GST', tax: 'Tax', annual: 'Annual' };

function ComplianceCalendar() {
    const [filter, setFilter] = useState('all');
    const filtered = filter === 'all' ? complianceDates : complianceDates.filter(d => d.type === filter);

    return (
        <div className={styles.calendarPanel}>
            <div className={styles.calendarHeader}>
                <h4 className={styles.panelTitle}>2024 Compliance Calendar</h4>
                <div className={styles.calendarFilters}>
                    {['all', 'gst', 'tax', 'annual'].map(f => (
                        <button
                            key={f}
                            className={`${styles.filterChip} ${filter === f ? styles.activeChip : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            {f === 'all' ? 'All' : typeLabels[f]}
                        </button>
                    ))}
                </div>
            </div>
            
            <div className={styles.calendarGrid}>
                <AnimatePresence mode="popLayout">
                    {filtered.map((item) => (
                        <motion.div
                            key={item.month}
                            className={styles.calendarCard}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.25 }}
                        >
                            <div className={styles.calMonth}>{item.month}</div>
                            <ul className={styles.calDates}>
                                {item.dates.map((d, i) => <li key={i}>{d}</li>)}
                            </ul>
                            <span className={styles.calTag}>{typeLabels[item.type]}</span>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}

// ─── DIY vs Pelago ────────────────────────────────────────────────────────────
const comparisonItems = [
    {
        id: 'pvtltd',
        name: 'Private Limited',
        diy_time: '4–6 weeks',
        pelago_time: '7–10 days',
        diy_pains: ['MCA portal rejections', 'DSC procurement confusion', 'MOA/AOA mistakes'],
        pelago_wins: ['98% first-attempt approval', 'DSC + DIN included', 'Legal team drafted docs'],
    },
    {
        id: 'llp',
        name: 'LLP',
        diy_time: '3–4 weeks',
        pelago_time: '5–7 days',
        diy_pains: ['LLP agreement errors', 'Form filing complexity', 'Compliance gaps'],
        pelago_wins: ['Expert-drafted agreement', 'All forms filed correctly', 'Annual compliance support'],
    },
    {
        id: 'sole',
        name: 'Sole Proprietorship',
        diy_time: '1–2 weeks',
        pelago_time: '2–3 days',
        diy_pains: ['Unclear registrations', 'GST threshold confusion', 'Bank rejection risk'],
        pelago_wins: ['Exact registrations mapped', 'GST eligibility checked', 'Bank docs sorted'],
    },
];

function ComparisonTool() {
    const [active, setActive] = useState('pvtltd');
    const item = comparisonItems.find(c => c.id === active);

    return (
        <div className={styles.comparePanel}>
            <div className={styles.compareHeader}>
                <h4 className={styles.panelTitle}>DIY vs Pelago</h4>
                <div className={styles.structureSelector}>
                    {comparisonItems.map(c => (
                        <button
                            key={c.id}
                            className={`${styles.structureBtn} ${active === c.id ? styles.activeStructure : ''}`}
                            onClick={() => setActive(c.id)}
                        >
                            {c.name}
                        </button>
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={active}
                    className={styles.compareContent}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                >
                    <div className={styles.compareGrid}>
                        <div className={styles.compareCard}>
                            <div className={styles.compareLabel}>Doing it yourself</div>
                            <div className={styles.compareTime}>⏱ {item.diy_time}</div>
                            <ul className={styles.compareList}>
                                {item.diy_pains.map((p, i) => (
                                    <li key={i}><span>✕</span> {p}</li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className={styles.vsDivider}>VS</div>
                        
                        <div className={`${styles.compareCard} ${styles.pelagoCard}`}>
                            <div className={styles.compareLabel}>With Pelago</div>
                            <div className={styles.compareTime} style={{ color: '#10b981' }}>⚡ {item.pelago_time}</div>
                            <ul className={styles.compareList}>
                                {item.pelago_wins.map((w, i) => (
                                    <li key={i}><span style={{ color: '#10b981' }}>✓</span> {w}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const tools = [
    { id: 'quiz', label: 'Structure Quiz' },
    { id: 'calendar', label: 'Compliance Calendar' },
    { id: 'estimator', label: 'DIY vs Pelago' },
];

export default function FounderResourceHub() {
    const [activeTool, setActiveTool] = useState('quiz');

    return (
        <section className={styles.section}>
            <div className="container">
                {/* Header */}
                <div className={styles.header}>
                    <h2>Free Founder Tools</h2>
                    <p>Interactive tools to help you plan your company setup and compliance.</p>
                </div>

                {/* Tool Panel */}
                <div className={styles.toolPanel}>
                    {/* Tool Switcher */}
                    <div className={styles.toolSwitcher}>
                        {tools.map(t => (
                            <button
                                key={t.id}
                                className={`${styles.toolTab} ${activeTool === t.id ? styles.activeTab : ''}`}
                                onClick={() => setActiveTool(t.id)}
                            >
                                {t.label}
                            </button>
                        ))}
                    </div>

                    {/* Tool Content */}
                    <div className={styles.toolContent}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTool}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -16 }}
                                transition={{ duration: 0.3 }}
                            >
                                {activeTool === 'quiz' && <BusinessQuiz />}
                                {activeTool === 'calendar' && <ComplianceCalendar />}
                                {activeTool === 'estimator' && <ComparisonTool />}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
