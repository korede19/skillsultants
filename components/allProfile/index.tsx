import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import PartnersSection from "../partnerSection";

export default function AllProfile() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>Oluwatoyin Ademola</h1>
              <p className={styles.heroSubtitle}>
                Strategic Growth Partner | Chief Growth Officer | Stakeholder
                Strategist
              </p>
              <p className={styles.heroDescription}>
                A strategic growth partner to leaders, teams, and organizations
                who are serious about sustainable results — not surface-level
                change.
              </p>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/assets/profile-1.jpeg"
                alt="Oluwatoyin Ademola"
                width={1000}
                height={1000}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <p className={styles.introText}>
              With over <strong>25 years of experience</strong> spanning
              strategic growth, business transformation, leadership development,
              and stakeholder engagement, Oluwatoyin works at the intersection
              of clarity, influence, and momentum. Her work helps organizations
              move beyond tactical activity into aligned execution, measurable
              growth, and lasting buy-in.
            </p>
            <div className={styles.highlightBox}>
              <p className={styles.highlightText}>
                She is known for one thing above all else:
                <br />
                <span className={styles.highlightEmphasis}>
                  turning complexity into clarity that leaders can act on —
                  fast.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How She Thinks Section */}
      <section className={styles.thinkingSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            How She Thinks (And Why It Matters)
          </h2>

          <div className={styles.thinkingContent}>
            <div className={styles.thinkingImage}>
              <Image
                src="/assets/profile-2.jpeg"
                alt="Oluwatoyin Ademola"
                width={1000}
                height={1000}
                loading="lazy"
              />
            </div>

            <div className={styles.thinkingText}>
              <p>
                Oluwatoyin identifies as an <strong>integrative thinker</strong>{" "}
                — someone wired to see both sides of the room, both sides of the
                brain, and both sides of a decision.
              </p>
              <p>
                Born left-handed and trained to write with her right, she
                developed an early ability to operate across dualities:
              </p>

              <div className={styles.dualitiesGrid}>
                <div className={styles.dualityItem}>
                  <span className={styles.dualityIcon}>⚡</span>
                  <p>Strategy and intuition</p>
                </div>
                <div className={styles.dualityItem}>
                  <span className={styles.dualityIcon}>🏗️</span>
                  <p>Structure and innovation</p>
                </div>
                <div className={styles.dualityItem}>
                  <span className={styles.dualityIcon}>🤝</span>
                  <p>People and power</p>
                </div>
              </div>

              <p className={styles.thinkingConclusion}>
                This way of thinking now defines her work. It allows her to
                connect priorities, align stakeholders, and help leaders make
                decisions that stick — even in complex, cross-cultural, or
                high-stakes environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What She Delivers Section */}
      <section className={styles.deliversSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What She Delivers</h2>

          <div className={styles.deliversIntro}>
            <p>Oluwatoyin partners with executives to:</p>
          </div>

          <div className={styles.deliversGrid}>
            <div className={styles.deliverCard}>
              <div className={styles.cardNumber}>01</div>
              <h3>Restore Clarity</h3>
              <p>Where confusion is slowing growth</p>
            </div>

            <div className={styles.deliverCard}>
              <div className={styles.cardNumber}>02</div>
              <h3>Rebuild Trust</h3>
              <p>Stakeholder confidence and trust</p>
            </div>

            <div className={styles.deliverCard}>
              <div className={styles.cardNumber}>03</div>
              <h3>Shift Teams</h3>
              <p>From applause to alignment</p>
            </div>

            <div className={styles.deliverCard}>
              <div className={styles.cardNumber}>04</div>
              <h3>Turn Commitment</h3>
              <p>Into visible momentum</p>
            </div>

            <div className={styles.deliverCard}>
              <div className={styles.cardNumber}>05</div>
              <h3>Design Engagement</h3>
              <p>That delivers retention and ROI</p>
            </div>
          </div>

          <div className={styles.frameworksSection}>
            <div className={styles.frameworksContent}>
              <div className={styles.frameworkText}>
                <h3>Proprietary Frameworks</h3>
                <p>
                  She is the creator of the{" "}
                  <strong>V.A.T.O.R.™ Pitch Framework</strong> and the{" "}
                  <strong>Clarity Growth Programme™</strong> — proprietary tools
                  that help leaders articulate vision clearly, engage the right
                  stakeholders, and build growth strategies grounded in
                  co-investment, not compliance.
                </p>
                <p className={styles.approachNote}>
                  Her work is pragmatic, evidence-based, and results-driven —
                  designed to work in the real world, not just in theory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className={styles.leadershipSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Leadership & Strategic Influence
          </h2>

          <div className={styles.leadershipContent}>
            <div className={styles.leadershipText}>
              <p className={styles.leadershipIntro}>
                As Chief Growth Officer of a coaching and consulting firm,
                Oluwatoyin enables organizations to achieve transformational
                sustainability.
              </p>

              <div className={styles.leadershipStrengths}>
                <h3>She is widely respected for her ability to:</h3>
                <ul className={styles.strengthsList}>
                  <li>Build trust-based relationships with senior leaders</li>
                  <li>Secure and align strategic partnerships</li>
                  <li>Facilitate impactful public–private collaborations</li>
                  <li>
                    Lead leadership development initiatives that translate into
                    action
                  </li>
                </ul>
              </div>

              <p className={styles.leadershipPhilosophy}>
                Her strength as a strategic networker is not transactional — it
                is relational. She aligns people around shared value, ensuring
                partnerships are purposeful, productive, and measurable.
              </p>
            </div>

            <div className={styles.leadershipImage}>
              <Image
                src="/assets/profile-3.jpeg"
                alt="Oluwatoyin Ademola"
                width={1000}
                height={1000}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className={styles.credentialsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Credentials{" "}
            <span className={styles.subtitleNote}>
              (Because They Matter — But Aren&apos;t the Headline)
            </span>
          </h2>

          <p className={styles.credentialsIntro}>
            Oluwatoyin brings deep professional credibility, including:
          </p>

          {/* <div className={styles.credentialsGrid}>
            <div className={styles.credentialItem}>
              <div className={styles.credentialIcon}>🎓</div>
              <p>Fellow, Chartered Management Institute (CMI)</p>
            </div>
            <div className={styles.credentialItem}>
              <div className={styles.credentialIcon}>✓</div>
              <p>EMCC Certified Practitioner</p>
            </div>
            <div className={styles.credentialItem}>
              <div className={styles.credentialIcon}>✓</div>
              <p>ICF Certified Professional Coach</p>
            </div>
            <div className={styles.credentialItem}>
              <div className={styles.credentialIcon}>✓</div>
              <p>Certified Professional Mentor (CPM)</p>
            </div>
            <div className={styles.credentialItem}>
              <div className={styles.credentialIcon}>✓</div>
              <p>Certified Navigating Transitions Coach</p>
            </div>
            <div className={styles.credentialItem}>
              <div className={styles.credentialIcon}>✓</div>
              <p>Certified Breakthrough Master Coach</p>
            </div>
            <div className={styles.credentialItem}>
              <div className={styles.credentialIcon}>✓</div>
              <p>Conflicts Dynamic Profile Certified</p>
            </div>
            <div className={styles.credentialItem}>
              <div className={styles.credentialIcon}>✓</div>
              <p>Influence Lifestyle Indicator Certified</p>
            </div>
            <div className={styles.credentialItem}>
              <div className={styles.credentialIcon}>✓</div>
              <p>CCL 360 Certified</p>
            </div>
            <div className={styles.credentialItem}>
              <div className={styles.credentialIcon}>✓</div>
              <p>Workplace Big 5 Profile Certified</p>
            </div>
            <div className={styles.credentialItem}>
              <div className={styles.credentialIcon}>✓</div>
              <p>TAWDI Certified Practitioner</p>
            </div>
          </div> */}
          <PartnersSection />

          <p className={styles.credentialsNote}>
            These credentials support her work — they don&apos;t define it.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.philosophySection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Philosophy & Impact</h2>

          <div className={styles.philosophyContent}>
            <div className={styles.philosophyQuote}>
              <blockquote>
                <p className={styles.quoteText}>
                  Growth doesn&apos;t come from doing more.
                  <br />
                  It comes from seeing clearly and engaging intentionally.
                </p>
              </blockquote>
            </div>

            <div className={styles.philosophyMain}>
              <div className={styles.philosophyText}>
                <h3>Her philosophy is simple but powerful:</h3>
                <p className={styles.standoutQuote}>
                  &quot;Retention isn&apos;t a reminder. It&apos;s a
                  relationship you design.&quot;
                </p>

                <div className={styles.beliefsSection}>
                  <p>She approaches every engagement with the belief that:</p>
                  <ul className={styles.beliefsList}>
                    <li>Leadership is relational</li>
                    <li>Influence must be earned and renewed</li>
                    <li>
                      Every interaction is an opportunity to unlock potential
                    </li>
                  </ul>
                </div>

                <p className={styles.impactStatement}>
                  Her work empowers leaders not just to grow their organizations
                  — but to grow people, partnerships, and purpose alongside
                  results.
                </p>
              </div>

              <div className={styles.philosophyImage}>
                <Image
                  src="/assets/profile-1.jpeg"
                  alt="Oluwatoyin Ademola"
                  width={1000}
                  height={1000}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Transform Complexity into Clarity?</h2>
            <p>
              Partner with Oluwatoyin to unlock sustainable growth for your
              organization.
            </p>
            <button className={styles.ctaButton}>Get in Touch</button>
          </div>
        </div>
      </section>
    </div>
  );
}
