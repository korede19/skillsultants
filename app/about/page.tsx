import AboutHero from "@/components/aboutHero";
import styles from "./styles.module.css";
import CoachStory from "@/components/coachStoty";
import Affiliations from "@/components/affiliations";

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
        title="My Journey & Philosophy"
        sections={[
          {
            heading: "Strategic Growth & Value Focus",
            content:
              "A Professional Certified and Accredited Coach, with a focus on strategic growth and value. I Partner with stakeholders to ensure sustainable future focused transformation and outcomes, by equipping clients with the tools and strategies for growth and allowing clients to specify their own defined level of success through value-based coaching. An Innovative Coach, Mentor, and creator (Owner & creator of the V.A.T.O.R.™ Pitch Methodology - The game changer in Business Influencing).",
          },
          {
            heading: "Integrative Thinking Approach",
            content:
              "Identifying as an integrative thinker (I use both sides of my brain) - I was born a leftie but was forced to change to my right hand – cultural reasons back in the day), means I am also ambidextrous which opened a different way of thinking for me from a very young age.",
          },
          {
            heading: "Creating Extraordinary Results",
            content:
              "My background has always been in working with people and through people, creating extraordinary results and this continues with my coaching, training and consulting business. I thrive on acuity, intuition and growth. I enjoy creativity, innovation and trying different ideas and approaches in creating value. I created the V.A.T.O.R.™ Pitch Methodology – a unique tool for stakeholder development and growth.",
          },
          {
            heading: "Empowering Growth",
            content:
              "I work with Individuals, Teams and Organizations who are focused on growth by equipping them with a game changing framework, coaching and training that will ensure proactive stakeholder engagement and interaction. I will always be the different future focused coach, the connector, the growth inspirator who equips clients with the tools to elevate and define their own desired level of success.",
          },
        ]}
      />

      {/* <Credentials
        title="Certified and Accredited Innovative Coach | Certified and Accredited Mentor | Executive Facilitator"
        credentials="M.A, F.C.M.I, CPC, EMCC EIA, CPM"
      /> */}

      <Affiliations
        title="Professional Affiliations"
        subtitle="Member of leading global organizations committed to excellence in coaching and leadership"
        memberships={[
          {
            id: 1,
            organization: "Chartered Institute of Marketing UK",
            role: "Member",
            logo: "CIM",
          },
          {
            id: 2,
            organization: "Institute of Leadership & Coaching Management U.K",
            role: "Fellow",
            logo: "ILM",
          },
          {
            id: 3,
            organization: "International Coaching Federation (ICF)",
            role: "Member",
            logo: "ICF",
          },
          {
            id: 4,
            organization: "London School of Business & Finance",
            role: "Honorary Member",
            logo: "LSBF",
          },
          {
            id: 5,
            organization: "GLG Global Consulting group",
            role: "Council Member",
            logo: "GLG",
          },
          {
            id: 6,
            organization: "Forbes Women Group",
            role: "Member",
            logo: "Forbes",
          },
          {
            id: 7,
            organization: "EMCC EIA",
            role: "Mentor/Coach Practitioner",
            logo: "EMCC",
          },
          {
            id: 8,
            organization: "SLA Group",
            role: "Mentor & Coach",
            logo: "SLA",
          },
          {
            id: 9,
            organization: "Harvard Business Review Advisory Council",
            role: "Council Member",
            logo: "HBR",
          },
          {
            id: 10,
            organization: "VC4A",
            role: "Mentor",
            logo: "VC4A",
          },
          {
            id: 11,
            organization: "International Mentoring Centre",
            role: "Member",
            logo: "IMC",
          },
        ]}
      />
    </div>
  );
}
