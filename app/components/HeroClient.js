'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import styles from '../page.module.css';

// Magnetic CTA button component
function MagneticButton({ href, children, className }) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 200, damping: 18 });
    const springY = useSpring(y, { stiffness: 200, damping: 18 });

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        const radius = 90;
        if (distance < radius) {
            const pull = (radius - distance) / radius;
            x.set(distX * pull * 0.4);
            y.set(distY * pull * 0.4);
        } else {
            x.set(0);
            y.set(0);
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            style={{ x: springX, y: springY, display: 'inline-block' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <Link href={href} className={className}>
                {children}
            </Link>
        </motion.div>
    );
}

// Individual physics floating card
function PhysicsCard({ children, className, offsetX, offsetY, delay }) {
    const cardRef = useRef(null);
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const springRotX = useSpring(rotateX, { stiffness: 120, damping: 20 });
    const springRotY = useSpring(rotateY, { stiffness: 120, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const dx = (e.clientX - centerX) / window.innerWidth;
            const dy = (e.clientY - centerY) / window.innerHeight;
            rotateX.set(-dy * 12);
            rotateY.set(dx * 12);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [rotateX, rotateY]);

    return (
        <motion.div
            ref={cardRef}
            className={className}
            style={{ rotateX: springRotX, rotateY: springRotY, transformStyle: 'preserve-3d' }}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
            transition={{
                opacity: { duration: 0.5, delay },
                scale: { duration: 0.5, delay },
                y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.5 }
            }}
        >
            {children}
        </motion.div>
    );
}

export default function HeroClient({ statsRow }) {
    return (
        <div className={styles.heroVisualPhysics}>
            <PhysicsCard className={`${styles.floatingCard} ${styles.card1}`} delay={0.5}>
                <div className={styles.cardHeader}>
                    <span className={styles.cardIcon}>✓</span>
                    <div className={styles.cardTitle}>Compliance Status</div>
                </div>
                <div className={styles.cardStatus}>Fully Compliant</div>
            </PhysicsCard>

            <PhysicsCard className={`${styles.floatingCard} ${styles.card2}`} delay={0.7}>
                <div className={styles.cardHeader}>
                    <span className={styles.cardIcon}>★</span>
                    <div className={styles.cardTitle}>Success Rate</div>
                </div>
                <div className={styles.cardValue}>98.2%</div>
            </PhysicsCard>

            <PhysicsCard className={`${styles.floatingCard} ${styles.card3}`} delay={0.9}>
                <div className={styles.cardHeader}>
                    <span className={styles.cardIcon}>⚡</span>
                    <div className={styles.cardTitle}>Processing Time</div>
                </div>
                <div className={styles.cardValue}>7-10 Days</div>
            </PhysicsCard>

            <div className={styles.glowElement}></div>
            <div className={styles.meshGradient}></div>
        </div>
    );
}

export { MagneticButton };
