import styles from "./styles.module.css";

interface ServicesHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function ServicesHero({
  title = "Services",
  subtitle = "Key offerings of my brand",
  description = "Comprehensive coaching and development programs designed to unlock potential and drive sustainable growth.",
}: ServicesHeroProps) {
  return (
    <section className={styles.servicesHero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <div className={styles.badge}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="currentColor"
            />
          </svg>
          <span>PROFESSIONAL SERVICES</span>
        </div>

        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
}
