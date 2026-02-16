"use client";
import Link from "next/link";
import styles from "./styles.module.css";

interface ServicesCallToActionProps {
  title?: string;
  description?: string;
  ctaPrimaryText?: string;
  ctaPrimaryLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
}

export default function ServicesCallToAction({
  title = "Ready to Transform Your Leadership Journey?",
  description = "Choose the service that fits your needs or schedule a consultation to discuss a customized approach.",
  ctaPrimaryText = "Book a Consultation",
  ctaPrimaryLink = "https://cal.com/skillsultants/consultation",
  ctaSecondaryText = "Contact Us",
  ctaSecondaryLink = "/contact",
}: ServicesCallToActionProps) {
  return (
    <section className={styles.callToAction}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>

          <div className={styles.buttons}>
            <Link
              href={ctaPrimaryLink}
              className={styles.primaryButton}
              target="_blank"
            >
              {ctaPrimaryText}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href={ctaSecondaryLink} className={styles.secondaryButton}>
              {ctaSecondaryText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
