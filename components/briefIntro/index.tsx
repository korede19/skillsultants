import styles from "./styles.module.css";

interface BriefIntroProps {
  badge?: string;
  title?: string;
  paragraphs?: string[];
  coachName?: string;
  credentials?: string;
}

export default function BriefIntro({
  badge = "ABOUT THE COACH",
  title = "Certified and Accredited Innovative Coach | Certified and Accredited Mentor | Executive Facilitator",
  paragraphs = [
    "A Professional Certified and Accredited Coach, with a focus on strategic growth and value.",
    "I Partner with stakeholders to ensure sustainable future focused transformation and outcomes, by equipping clients with the tools and strategies for growth and allowing clients to specify their own defined level of success through value-based coaching. An Innovative Coach, Mentor, and creator (Owner & creator of the V.A.T.O.R.™ Pitch Methodology - The game changer in Business Influencing).",
    "Identifying as an integrative thinker (I use both sides of my brain) - I was born a leftie but was forced to change to my right hand - cultural reasons back in the day), means I am also ambidextrous which opened a different way of thinking for me from a very young age.",
  ],
  coachName = "OLUWATOYIN ADEMOLA",
  credentials = "M.A, F.C.M.I, CPC, EMCC EIA, CPM",
}: BriefIntroProps) {
  return (
    <section className={styles.briefIntro}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>{badge}</span>
          <h2 className={styles.title}>{title}</h2>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.decorativeLine}></div>

          <div className={styles.card}>
            <div className={styles.quoteIcon}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"
                  fill="currentColor"
                  opacity="0.2"
                />
              </svg>
            </div>

            <div className={styles.content}>
              {paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className={styles.signature}>
              <div className={styles.signatureLine}></div>
              <div className={styles.coachInfo}>
                <span className={styles.coachName}>{coachName}</span>
                <span className={styles.credentials}>{credentials}</span>
              </div>
            </div>
          </div>

          <div className={styles.decorativeElements}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
