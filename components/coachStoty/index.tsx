"use client";

import styles from "./styles.module.css";

interface CoachStoryProps {
  title?: string;
  paragraphs?: string[];
  imageSide?: "left" | "right";
}

export default function CoachStory({
  title = "Hi, I'm Oluwatoyin. I'm a skillful, experienced life coach.",
  paragraphs = [
    "So many of us have lives that look pretty good on paper, but feel a little 'off' or not-right. Working with folks like that is my speciality.",
    "I help my clients develop lives + work that they freaking love.",
    "Along the way, they cultivate more authenticity, build more meaningful relationships, heal from burnout, have more fun, finally accomplish that important project, change careers, lead teams in a way they're proud of, and much more.",
    "The most successful people in the world have coaches — from CEOs to Olympic athletes. After all, successful people get that way by being open to discovering blind spots, re-examining old beliefs, and trying new things.",
    "Why not you?",
  ],
  imageSide = "left",
}: CoachStoryProps) {
  return (
    <section className={styles.coachStory}>
      <div className={styles.container}>
        <div
          className={`${styles.content} ${
            imageSide === "right" ? styles.imageRight : ""
          }`}
        >
          <div className={styles.imageSection}>
            <div className={styles.imagePlaceholder}>
              <svg
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Professional Photo</p>
            </div>
          </div>

          <div className={styles.textSection}>
            <h2 className={styles.title}>{title}</h2>

            <div className={styles.paragraphs}>
              {paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
