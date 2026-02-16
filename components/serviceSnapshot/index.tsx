import React from "react";
import styles from "./styles.module.css";

export default function Services() {
  const services = [
    {
      title: "Growth Coaching",
      description:
        "Strategic guidance to unlock sustainable growth and achievement",
    },
    {
      title: "Connectional Intelligence Coaching",
      description:
        "Build powerful networks and meaningful professional relationships",
    },
    {
      title: "Critical Skills Coaching and Training",
      description:
        "Develop essential competencies for modern leadership success",
    },
    {
      title: "CEO/Board Level Coaching",
      description: "Executive coaching for C-suite leaders and board members",
    },
    {
      title: "Team Coaching and Development",
      description: "Enhance team performance, collaboration, and results",
    },
    {
      title: "Transformational & Innovational Leadership",
      description: "Lead change and drive innovation in your organization",
    },
    {
      title: "Business Growth Coaching",
      description: "Scale your business with strategic insights and execution",
    },
    {
      title: "Navigating Transitions Coaching",
      description: "Successfully manage career and organizational transitions",
    },
    {
      title: "Stakeholder Development, Retention and Growth Strategies",
      description: "Build lasting relationships that drive sustainable growth",
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Services</h2>
          <p className={styles.subtitle}>Key offerings of my brand</p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={styles.ctaWrapper}>
          <button className={styles.ctaButton}>
            View All Services
            <span className={styles.arrow}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
