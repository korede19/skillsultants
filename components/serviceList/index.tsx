"use client";
import { useState } from "react";
import styles from "./styles.module.css";

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
}

interface ServicesListInteractiveProps {
  services: Service[];
}

export default function ServicesListInteractive({
  services,
}: ServicesListInteractiveProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(
    services[0]
  );

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.servicesList}>
          {services.map((service) => (
            <div
              key={service.id}
              className={`${styles.serviceItem} ${
                selectedService?.id === service.id ? styles.active : ""
              }`}
              onMouseEnter={() => setSelectedService(service)}
              onClick={() => setSelectedService(service)}
            >
              <span className={styles.serviceNumber}>
                {String(service.id).padStart(2, "0")}
              </span>
              <span className={styles.serviceTitle}>{service.title}</span>
              <svg
                className={styles.arrow}
                width="24"
                height="24"
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
          ))}
        </div>

        <div className={styles.serviceDetail}>
          {selectedService && (
            <div className={styles.detailContent}>
              <div className={styles.detailHeader}>
                <span className={styles.detailNumber}>
                  {String(selectedService.id).padStart(2, "0")}
                </span>
                <h2 className={styles.detailTitle}>{selectedService.title}</h2>
              </div>

              <p className={styles.detailDescription}>
                {selectedService.description}
              </p>

              <div className={styles.features}>
                <h3 className={styles.featuresTitle}>What&apos;s Included:</h3>
                <ul className={styles.featuresList}>
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
