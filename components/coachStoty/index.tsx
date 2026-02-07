import styles from "./styles.module.css";

interface StorySection {
  heading: string;
  content: string;
}

interface CoachStoryProps {
  title?: string;
  sections?: StorySection[];
}

export default function CoachStory({
  title = "My Journey & Philosophy",
  sections = [],
}: CoachStoryProps) {
  return (
    <section className={styles.coachStory}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>{title}</h2>

        <div className={styles.timeline}>
          {sections.map((section, index) => (
            <div
              key={index}
              className={styles.storyBlock}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.numberBadge}>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className={styles.storyContent}>
                <h3 className={styles.heading}>{section.heading}</h3>
                <p className={styles.content}>{section.content}</p>
              </div>

              {index < sections.length - 1 && (
                <div className={styles.connector}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.backgroundPattern}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </section>
  );
}
