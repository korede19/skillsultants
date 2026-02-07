import styles from "./styles.module.css";

interface Membership {
  id: number;
  organization: string;
  role: string;
  logo: string;
}

interface AffiliationsProps {
  title?: string;
  subtitle?: string;
  memberships?: Membership[];
}

export default function Affiliations({
  title = "Professional Affiliations",
  subtitle = "Member of leading global organizations committed to excellence in coaching and leadership",
  memberships = [],
}: AffiliationsProps) {
  return (
    <section className={styles.affiliations}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {memberships.map((membership, index) => (
            <div
              key={membership.id}
              className={styles.card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.logoSection}>
                <div className={styles.logoPlaceholder}>
                  <span>{membership.logo}</span>
                </div>
              </div>

              <div className={styles.cardContent}>
                <p className={styles.role}>{membership.role}</p>
                <h3 className={styles.organization}>
                  {membership.organization}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
