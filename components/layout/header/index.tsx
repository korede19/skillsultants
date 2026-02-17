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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <Image
                src="/assets/logo-1.png"
                alt="CoachName Logo"
                width={180}
                height={180}
              />
            </div>
          </Link>

          <nav
            className={`${styles.nav} ${
              isMobileMenuOpen ? styles.navOpen : ""
            }`}
          >
            <Link href="/" className={styles.navLink} onClick={closeMobileMenu}>
              Home
            </Link>
            <Link
              href="/about"
              className={styles.navLink}
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              href="/services"
              className={styles.navLink}
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link
              href="/blog"
              className={styles.navLink}
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={styles.navLink}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            <Link
              href="https://cal.com/skillsultants/consultation"
              className={styles.ctaButton}
              onClick={closeMobileMenu}
              target="_blank"
            >
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

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.overlay} onClick={closeMobileMenu}></div>
      )}
    </>
  );
}
