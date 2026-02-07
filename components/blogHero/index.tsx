import styles from "./styles.module.css";

interface BlogHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function BlogHero({
  title = "Blog & Insights",
  subtitle = "Thought leadership on coaching, leadership, and professional development",
  description = "Explore articles, insights, and practical strategies to help you grow as a leader.",
}: BlogHeroProps) {
  return (
    <section className={styles.blogHero}>
      <div className={styles.container}>
        <div className={styles.badge}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 20H5C3.89543 20 3 19.1046 3 18V6C3 4.89543 3.89543 4 5 4H9L11 6H19C20.1046 6 21 6.89543 21 8V18C21 19.1046 20.1046 20 19 20Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>INSIGHTS & ARTICLES</span>
        </div>

        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
}
