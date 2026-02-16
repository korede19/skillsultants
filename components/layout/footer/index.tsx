import Link from "next/link";
import styles from "./styles.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>About</h3>
            <p className={styles.description}>
              Empowering individuals to unlock their full potential through
              personalized coaching and guidance.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.46 6c-.85.38-1.78.64-2.75.76a4.8 4.8 0 0 0 2.1-2.66c-.92.55-1.95.95-3.03 1.17A4.76 4.76 0 0 0 11.57 9c0 .37.04.74.12 1.1-3.96-.2-7.47-2.1-9.82-4.98a4.76 4.76 0 0 0 1.48 6.36 4.74 4.74 0 0 1-2.16-.6v.07a4.76 4.76 0 0 0 3.82 4.67 4.76 4.76 0 0 1-2.15.08 4.77 4.77 0 0 0 4.45 3.3A9.56 9.56 0 0 1 1 20.47a13.5 13.5 0 0 0 7.29 2.14c8.75 0 13.54-7.25 13.54-13.54 0-.21 0-.41-.01-.61.93-.67 1.74-1.51 2.38-2.46z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <nav className={styles.linkList}>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link
                href="https://cal.com/skillsultants/consultation"
                target="_blank"
              >
                Book a Session
              </Link>
            </nav>
          </div>

          {/* <div className={styles.column}>
            <h3 className={styles.columnTitle}>Services</h3>
            <nav className={styles.linkList}>
              <Link href="/services#one-on-one">1:1 Coaching</Link>
              <Link href="/services#group">Group Sessions</Link>
              <Link href="/services#corporate">Corporate Coaching</Link>
              <Link href="/blog">Blog & Resources</Link>
            </nav>
          </div> */}

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contact</h3>
            <div className={styles.contactInfo}>
              <a
                href="mailto:toyin@skillsultants.com"
                className={styles.contactLink}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                    fill="currentColor"
                  />
                </svg>
                toyin@skillsultants.com
              </a>
              <a href="tel:+2348080990099" className={styles.contactLink}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                    fill="currentColor"
                  />
                </svg>
                +234 (80) 8099-0099
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © {currentYear} Oluwatoyin Ademola. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <span className={styles.separator}>•</span>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
