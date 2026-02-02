'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import styles from './learn.module.css';
import { modules, lessonContent, defaultContent } from './lesson-data';

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

    // Start Learning - opens first incomplete lesson
    const startLearning = () => {
        const firstIncomplete = allLessons.find(l => !isCompleted(l.id));
        if (firstIncomplete) {
            openLesson(firstIncomplete, firstIncomplete.module);
        } else {
            openLesson(allLessons[0], allLessons[0].module);
        }
    };

    // Grid View
    if (view === 'grid') {
        return (
            <div className={styles.page}>
                <section className={styles.hero}>
                    <div className="container">
                        <div className={styles.heroGrid}>
                            <div className={styles.heroContent}>
                                <div className={styles.badge}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                                    Launchpad
                                </div>
                                <h1>Zero-to-One <span>Manual</span></h1>
                                <p>Everything first-time founders need to know about starting, running, and scaling a business in India.</p>
                                <button onClick={startLearning} className={styles.startBtn}>
                                    {completedLessons.length > 0 ? 'Continue Learning' : 'Start Learning'}
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </button>
                            </div>
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
                                        <span className={styles.progressPercent}>{progress}%</span>
                                        <span className={styles.progressLabel}>Complete</span>
                                    </div>
                                </div>
                                <div className={styles.progressStats}>
                                    <div><strong>{completedLessons.length}</strong><span>Completed</span></div>
                                    <div><strong>{totalLessons - completedLessons.length}</strong><span>Remaining</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.modulesSection}>
                    <div className="container">
                        <div className={styles.modulesGrid}>
                            {modules.map((module) => {
                                const moduleProgress = getModuleProgress(module);
                                return (
                                    <div
                                        key={module.id}
                                        className={styles.moduleCard}
                                        onClick={() => openModule(module)}
                                        style={{ '--module-color': module.color }}
                                    >
                                        <div className={styles.moduleHeader}>
                                            <div className={styles.moduleIcon}>{module.icon}</div>
                                            <span className={styles.moduleNum}>Module {module.id}</span>
                                        </div>
                                        <h3>{module.title}</h3>
                                        <p>{module.description}</p>
                                        <div className={styles.moduleFooter}>
                                            <div className={styles.lessonCount}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                                                {module.lessons.length} lessons
                                            </div>
                                            <div className={styles.moduleProgress}>
                                                <div className={styles.moduleProgressBar}>
                                                    <div style={{ width: `${moduleProgress}%` }} />
                                                </div>
                                                <span>{moduleProgress}%</span>
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
                            <div className={styles.moduleHeroIcon}>{selectedModule.icon}</div>
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
