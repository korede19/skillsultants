import Link from "next/link";
import styles from "./styles.module.css";

interface Service {
  id: number;
  title: string;
}

interface ServicesSnapshotProps {
  title?: string;
  subtitle?: string;
  services?: Service[];
  ctaText?: string;
  ctaLink?: string;
}

export default function ServicesSnapshot({
  title = "Services",
  subtitle = "Key offerings of my brand",
  services = [
    { id: 1, title: "Growth Coaching" },
    { id: 2, title: "Connectional Intelligence Coaching" },
    { id: 3, title: "Critical Skills Coaching, and Training" },
    { id: 4, title: "CEO/Board Level Coaching" },
    { id: 5, title: "Team Coaching and Development" },
    { id: 6, title: "Transformational & Innovational Leadership" },
    { id: 7, title: "Business Growth Coaching" },
    { id: 8, title: "Navigating Transitions coaching" },
    {
      id: 9,
      title: "Stakeholder development, retention and growth strategies",
    },
  ],
  ctaText = "View All Services",
  ctaLink = "/services",
}: ServicesSnapshotProps) {
  return (
    <section className={styles.servicesSnapshot}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleCard}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={styles.serviceCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardContent}>
                <div className={styles.iconCircle}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>
              <div className={styles.cardHover}>
                <span>Learn More</span>
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
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <Link href={ctaLink} className={styles.ctaButton}>
            {ctaText}
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
        </div>
      </div>

      <div className={styles.backgroundPattern}>
        <div className={styles.wave}></div>
      </div>
    </section>
  );
}
