"use client";
import { useState } from "react";
import styles from "./styles.module.css";

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
}

interface ServicesListProps {
  services: Service[];
}

export default function ServicesList({ services }: ServicesListProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className={styles.servicesList}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`${styles.serviceCard} ${
                expandedId === service.id ? styles.expanded : ""
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div
                className={styles.cardHeader}
                onClick={() => toggleExpand(service.id)}
              >
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <button
                  className={styles.expandButton}
                  aria-label="Expand service details"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={expandedId === service.id ? styles.rotated : ""}
                  >
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div
                className={`${styles.cardContent} ${
                  expandedId === service.id ? styles.visible : ""
                }`}
              >
                <p className={styles.description}>{service.description}</p>

                <div className={styles.features}>
                  <h4 className={styles.featuresTitle}>Key Features:</h4>
                  <ul className={styles.featuresList}>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 6L9 17L4 12"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
