'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import styles from './learn.module.css';
import { modules, lessonContent, defaultContent } from './lesson-data';

// Better semantic icons for each module
const moduleIcons = {
    1: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M17.5 14v7M14 17.5h7"/></svg>,
    2: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 10h20"/><path d="M6 16h4M14 16h4"/></svg>,
    3: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
    4: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>,
    5: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r=".5" fill="currentColor"/></svg>,
    6: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    7: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>,
    8: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>,
};

// Compute total estimated time for all lessons
function getTotalTime(mods) {
    let mins = 0;
    mods.forEach(m => m.lessons.forEach(l => {
        const n = parseInt(l.duration);
        if (!isNaN(n)) mins += n;
    }));
    const hrs = Math.floor(mins / 60);
    const rem = mins % 60;
    return hrs > 0 ? `~${hrs}h ${rem > 0 ? rem + 'm' : ''}` : `${mins}m`;
}

export default function LearnPage() {
    const [selectedModule, setSelectedModule] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [completedLessons, setCompletedLessons] = useState([]);
    const [view, setView] = useState('grid');
    const [activeSection, setActiveSection] = useState(null);

    // Flatten all lessons for navigation
    const allLessons = useMemo(() => {
        return modules.flatMap(m => m.lessons.map(l => ({ ...l, module: m })));
    }, []);

    const totalLessons = allLessons.length;
    const progress = Math.round((completedLessons.length / totalLessons) * 100);

    const currentLessonIndex = selectedLesson
        ? allLessons.findIndex(l => l.id === selectedLesson.id)
        : -1;

    const prevLesson = currentLessonIndex > 0 ? allLessons[currentLessonIndex - 1] : null;
    const nextLesson = currentLessonIndex < allLessons.length - 1 ? allLessons[currentLessonIndex + 1] : null;

    const openModule = (module) => {
        setSelectedModule(module);
        setView('module');
    };

    const openLesson = (lesson, module) => {
        setSelectedLesson({ ...lesson, module });
        setActiveSection(null);
        setView('lesson');
        window.scrollTo(0, 0);
    };

    const goToLesson = (lesson) => {
        setSelectedLesson({ ...lesson, module: lesson.module });
        setActiveSection(null);
        window.scrollTo(0, 0);
    };

    const goBack = () => {
        if (view === 'lesson') {
            setView('module');
            setSelectedLesson(null);
        } else {
            setView('grid');
            setSelectedModule(null);
        }
    };

    const goHome = () => {
        setView('grid');
        setSelectedLesson(null);
        setSelectedModule(null);
    };

    const markComplete = () => {
        if (selectedLesson && !completedLessons.includes(selectedLesson.id)) {
            setCompletedLessons([...completedLessons, selectedLesson.id]);
        }
    };

    const markCompleteAndNext = () => {
        markComplete();
        if (nextLesson) {
            goToLesson(nextLesson);
        }
    };

    const getModuleProgress = (module) => {
        const completed = module.lessons.filter(l => completedLessons.includes(l.id)).length;
        return Math.round((completed / module.lessons.length) * 100);
    };

    const isCompleted = (lessonId) => completedLessons.includes(lessonId);

    const getLessonData = (lessonId, title) => {
        return lessonContent[lessonId] || defaultContent(title);
    };

    // Compute module estimated time
    const getModuleTime = (module) => {
        let mins = 0;
        module.lessons.forEach(l => {
            const n = parseInt(l.duration);
            if (!isNaN(n)) mins += n;
        });
        return `${mins} min`;
    };

    // Start Learning - opens first incomplete lesson
    const startLearning = () => {
        const firstIncomplete = allLessons.find(l => !isCompleted(l.id));
        if (firstIncomplete) {
            openLesson(firstIncomplete, firstIncomplete.module);
        } else {
            openLesson(allLessons[0], allLessons[0].module);
        }
    };

    // Find next lesson to take
    const nextUp = allLessons.find(l => !isCompleted(l.id));

    // Grid View
    if (view === 'grid') {
        return (
            <div className={styles.page}>
                <section className={styles.hero}>
                    {/* Subtle background pattern */}
                    <div className={styles.heroBgPattern}></div>
                    <div className={styles.heroBgGlow}></div>

                    <div className="container">
                        <div className={styles.heroGrid}>
                            <div className={styles.heroContent}>
                                <div className={styles.badge}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                                    Founder Launchpad
                                </div>
                                <h1>Zero-to-One <span>Manual</span></h1>
                                <p>Everything first-time founders need to know about starting, running, and scaling a business in India.</p>
                                <button onClick={startLearning} className={styles.startBtn}>
                                    {completedLessons.length > 0 ? 'Continue Learning' : 'Begin Module 1'}
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </button>
                            </div>

                            {/* Dashboard-style progress panel */}
                            <div className={styles.progressPanel}>
                                <div className={styles.progressRing}>
                                    <svg viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45" className={styles.progressBg} />
                                        <circle
                                            cx="50" cy="50" r="45"
                                            className={styles.progressFillRing}
                                            style={{ strokeDashoffset: 283 - (283 * progress / 100) }}
                                        />
                                    </svg>
                                    <div className={styles.progressCenter}>
                                        <span className={styles.progressPercent}>{completedLessons.length}/{totalLessons}</span>
                                        <span className={styles.progressLabel}>lessons</span>
                                    </div>
                                </div>

                                {/* Course context stats */}
                                <div className={styles.progressMeta}>
                                    <div className={styles.progressMetaItem}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                                        <div>
                                            <strong>{totalLessons} Lessons</strong>
                                        </div>
                                    </div>
                                    <div className={styles.progressMetaItem}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                                        <div>
                                            <strong>{modules.length} Modules</strong>
                                        </div>
                                    </div>
                                    <div className={styles.progressMetaItem}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                        <div>
                                            <strong>{getTotalTime(modules)}</strong>
                                        </div>
                                    </div>
                                </div>

                                {/* Next lesson preview */}
                                {nextUp && (
                                    <button
                                        className={styles.nextUpBtn}
                                        onClick={() => openLesson(nextUp, nextUp.module)}
                                    >
                                        <span className={styles.nextUpLabel}>Next up</span>
                                        <span className={styles.nextUpTitle}>{nextUp.title}</span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.modulesSection}>
                    <div className="container">
                        <div className={styles.modulesSectionHeader}>
                            <h2>Course Modules</h2>
                            <p>Follow the learning path from incorporation to exit.</p>
                        </div>

                        <div className={styles.modulesGrid}>
                            {modules.map((module, mIdx) => {
                                const moduleProgress = getModuleProgress(module);
                                return (
                                    <div key={module.id} className={styles.moduleCardWrapper}>
                                        {/* Connector line between cards */}
                                        {mIdx < modules.length - 1 && (
                                            <div className={styles.connector}>
                                                <div className={styles.connectorLine}></div>
                                            </div>
                                        )}
                                        <div
                                            className={styles.moduleCard}
                                            onClick={() => openModule(module)}
                                            style={{ '--module-color': module.color }}
                                        >
                                            {/* Colored top bar */}
                                            <div className={styles.moduleTopBar} style={{ background: module.color }}></div>

                                            <div className={styles.moduleHeader}>
                                                <div className={styles.moduleIcon}>{moduleIcons[module.id] || module.icon}</div>
                                                <span className={styles.moduleNum}>Module {module.id}</span>
                                            </div>

                                            <h3>{module.title}</h3>

                                            <div className={styles.moduleStats}>
                                                <span>
                                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                                                    {module.lessons.length} lessons
                                                </span>
                                                <span>
                                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                                    {getModuleTime(module)}
                                                </span>
                                            </div>

                                            {/* Lesson preview list */}
                                            <ul className={styles.lessonPreview}>
                                                {module.lessons.slice(0, 4).map(l => (
                                                    <li key={l.id} className={isCompleted(l.id) ? styles.lessonPreviewDone : ''}>
                                                        {isCompleted(l.id) ? (
                                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                                                        ) : (
                                                            <span className={styles.lessonDot}></span>
                                                        )}
                                                        {l.title}
                                                    </li>
                                                ))}
                                                {module.lessons.length > 4 && (
                                                    <li className={styles.lessonMore}>+{module.lessons.length - 4} more</li>
                                                )}
                                            </ul>

                                            {/* Progress bar */}
                                            <div className={styles.moduleFooter}>
                                                <div className={styles.moduleProgressBar}>
                                                    <div style={{ width: `${moduleProgress}%` }} />
                                                </div>
                                                <span className={styles.moduleProgressLabel}>{moduleProgress}%</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    // Module View
    if (view === 'module' && selectedModule) {
        return (
            <div className={styles.page}>
                <div className={styles.lessonPage} style={{ '--module-color': selectedModule.color }}>
                    <div className="container">
                        <button className={styles.backBtn} onClick={goBack}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                            All Modules
                        </button>

                        <div className={styles.moduleHero}>
                            <div className={styles.moduleHeroIcon}>{moduleIcons[selectedModule.id] || selectedModule.icon}</div>
                            <div>
                                <span className={styles.moduleTag}>Module {selectedModule.id}</span>
                                <h1>{selectedModule.title}</h1>
                                <p>{selectedModule.description}</p>
                            </div>
                        </div>

                        <div className={styles.lessonsGrid}>
                            {selectedModule.lessons.map((lesson, idx) => (
                                <div
                                    key={lesson.id}
                                    className={`${styles.lessonCard} ${isCompleted(lesson.id) ? styles.completed : ''}`}
                                    onClick={() => openLesson(lesson, selectedModule)}
                                >
                                    <div className={styles.lessonNum}>
                                        {isCompleted(lesson.id) ? (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                                        ) : (
                                            <span>{String(idx + 1).padStart(2, '0')}</span>
                                        )}
                                    </div>
                                    <div className={styles.lessonInfo}>
                                        <h4>{lesson.title}</h4>
                                        <div className={styles.lessonMeta}>
                                            <span>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                                {lesson.duration}
                                            </span>
                                        </div>
                                    </div>
                                    <svg className={styles.lessonArrow} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Lesson View
    if (view === 'lesson' && selectedLesson) {
        const lessonData = getLessonData(selectedLesson.id, selectedLesson.title);
        const moduleColor = selectedLesson.module.color;

        return (
            <div className={styles.page}>
                <div className={styles.lessonReader} style={{ '--module-color': moduleColor }}>
                    {/* Top Progress Bar */}
                    <div className={styles.topProgress}>
                        <div className={styles.topProgressBar}>
                            <div style={{ width: `${((currentLessonIndex + 1) / totalLessons) * 100}%` }} />
                        </div>
                    </div>

                    {/* Header */}
                    <header className={styles.readerHeader}>
                        <div className="container">
                            <div className={styles.readerNav}>
                                <button className={styles.backBtn} onClick={goHome}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                                    Exit
                                </button>
                                <div className={styles.lessonProgress}>
                                    Lesson {currentLessonIndex + 1} of {totalLessons}
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Main Content Area */}
                    <div className={styles.readerLayout}>
                        {/* Sidebar */}
                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarHeader}>
                                <span className={styles.sidebarModule}>{selectedLesson.module.title}</span>
                                <h3>{selectedLesson.title}</h3>
                            </div>
                            <nav className={styles.sidebarNav}>
                                <p className={styles.sidebarLabel}>In this lesson</p>
                                {lessonData.sections.map((section) => (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className={`${styles.sidebarLink} ${activeSection === section.id ? styles.active : ''}`}
                                        onClick={() => setActiveSection(section.id)}
                                    >
                                        <span className={`${styles.sidebarDot} ${styles[section.type]}`} />
                                        {section.title}
                                    </a>
                                ))}
                            </nav>
                            <div className={styles.sidebarProgress}>
                                <div className={styles.sidebarProgressBar}>
                                    <div style={{ width: `${progress}%` }} />
                                </div>
                                <span>{progress}% course complete</span>
                            </div>
                        </aside>

                        {/* Article */}
                        <article className={styles.readerContent}>
                            <div className={styles.articleBadge}>
                                <span style={{ background: moduleColor }}>{selectedLesson.module.title}</span>
                                <span className={styles.duration}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                    {selectedLesson.duration} read
                                </span>
                            </div>
                            <h1>{selectedLesson.title}</h1>

                            <div
                                className={styles.articleBody}
                                dangerouslySetInnerHTML={{ __html: lessonData.content }}
                            />

                            {/* Navigation Footer */}
                            <footer className={styles.lessonFooter}>
                                <div className={styles.footerNav}>
                                    {prevLesson ? (
                                        <button className={styles.navPrev} onClick={() => goToLesson(prevLesson)}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                                            <div>
                                                <span>Previous</span>
                                                <strong>{prevLesson.title}</strong>
                                            </div>
                                        </button>
                                    ) : <div />}

                                    {nextLesson ? (
                                        <button className={styles.navNext} onClick={() => goToLesson(nextLesson)}>
                                            <div>
                                                <span>Next</span>
                                                <strong>{nextLesson.title}</strong>
                                            </div>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                        </button>
                                    ) : <div />}
                                </div>

                                <div className={styles.footerActions}>
                                    {isCompleted(selectedLesson.id) ? (
                                        <button className={styles.completedBtn} disabled>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                            Completed
                                        </button>
                                    ) : nextLesson ? (
                                        <button className={styles.completeBtn} onClick={markCompleteAndNext}>
                                            Complete & Continue
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                        </button>
                                    ) : (
                                        <button className={styles.completeBtn} onClick={markComplete}>
                                            Mark as Complete
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                        </button>
                                    )}
                                </div>
                            </footer>
                        </article>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}
