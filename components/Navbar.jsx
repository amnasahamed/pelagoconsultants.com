'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/tools', label: 'Free Tools' },
  { href: '/learn', label: 'Learn' },
  { href: '/blog', label: 'Blog' },
  { href: '/careers', label: 'Join Us' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={`container ${styles.nav}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Pelago Consultants"
            width={160}
            height={50}
            priority
          />
        </Link>

        <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={styles.navLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className={styles.mobileCtaItem}>
            <Link href="/contact" className="btn btn-primary">
              Get Free Help
            </Link>
          </li>
        </ul>

        <Link href="/contact" className={`btn btn-primary ${styles.ctaButton}`}>
          Get Free Help
        </Link>

        <button
          className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}
