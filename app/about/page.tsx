import AboutHero from "@/components/aboutHero";
import styles from "./styles.module.css";
import CoachStory from "@/components/coachStoty";
import PartnersSection from "@/components/partnerSection";

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <AboutHero
        name="Oluwatoyin Ademola"
        tagline="A Professional Certified and Accredited Coach & Mentor"
        ctaText="Book a Consultation"
        ctaLink="/book"
      />

      <CoachStory
        title="Hi, I'm Oluwatoyin. I'm a skillful, experienced coach."
        paragraphs={[
          "A Professional Certified and Accredited Coach, with a focus on strategic growth and value.",
          "I Partner with stakeholders to ensure sustainable future focused transformation and outcomes, by equipping clients with the tools and strategies  for growth and allowing clients to specify their own defined level of success through value-based coaching. An Innovative Coach, Mentor, and creator (Owner & creator of the V.A.T.O.R.™ Pitch Methodology - The game changer in Business Influencing).",
          "Identifying as an integrative thinker (I use both sides of my brain) - I was born a leftie but wasforced to change to my right hand – cultural reasons back in the day), means I am also ambidextrous which opened a different way of thinking for me from a very young age.",
          "My background has always been in working with people and through people, creating extraordinary results and this continues with my coaching, training and consulting business.",
          "I thrive on acuity, intuition and growth. I enjoy creativity, innovation and trying different ideas and approaches in creating value. I created the V.A.T.O.R.™ Pitch Methodology – a unique tool for stakeholder development and growth.",
          "I work with Individuals, Teams and Organizations who are focused on growth by equipping them with a game changing framework, coaching and training that will ensure proactive stakeholder engagement and interaction.",
          "I will always be the different future focused coach, the connector, the growth inspirator who equips clients with the tools to elevate and define their own desired level of success.",
        ]}
        imageSide="left"
      />
      <PartnersSection />
    </div>
  );
}
