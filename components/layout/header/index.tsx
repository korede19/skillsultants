"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <Image
              src="/assets/logo-1.png"
              alt="CoachName Logo"
              width={150}
              height={150}
            />
          </div>
        </Link>

        <nav
          className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ""}`}
        >
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/services" className={styles.navLink}>
            Services
          </Link>
          <Link href="/blog" className={styles.navLink}>
            Blog
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
          <Link href="/book" className={styles.ctaButton}>
            Book a Session
          </Link>
        </nav>

        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`${styles.hamburger} ${
              isMobileMenuOpen ? styles.hamburgerOpen : ""
            }`}
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </header>
  );
}
