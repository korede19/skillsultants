import ServicesHero from "@/components/serviceHero";
import styles from "./styles.module.css";
import ServicesList from "@/components/serviceList";
import ServicesCallToAction from "@/components/serviceAllocation";

export default function ServicesPage() {
  return (
    <div className={styles.servicesPage}>
      <ServicesHero
        title="Services"
        subtitle="Key offerings of my brand"
        description="Comprehensive coaching and development programs designed to unlock potential and drive sustainable growth for individuals, teams, and organizations."
      />

      <ServicesList
        services={[
          {
            id: 1,
            title: "Growth Coaching",
            description:
              "Personalized coaching focused on strategic growth and achieving your professional goals through proven methodologies and tailored approaches.",
            features: [
              "One-on-one coaching sessions",
              "Goal setting and action planning",
              "Progress tracking and accountability",
              "Customized growth strategies",
            ],
          },
          {
            id: 2,
            title: "Connectional Intelligence Coaching",
            description:
              "Develop the ability to combine different thinking styles and disciplines to create breakthrough innovations and solutions.",
            features: [
              "Enhance collaborative capabilities",
              "Build strategic partnerships",
              "Improve stakeholder engagement",
              "Foster innovative thinking",
            ],
          },
          {
            id: 3,
            title: "Critical Skills Coaching and Training",
            description:
              "Equip yourself and your team with essential skills needed to thrive in today's dynamic business environment.",
            features: [
              "Leadership development",
              "Communication excellence",
              "Problem-solving techniques",
              "Adaptive thinking strategies",
            ],
          },
          {
            id: 4,
            title: "CEO/Board Level Coaching",
            description:
              "Executive coaching for senior leaders navigating complex challenges and driving organizational transformation.",
            features: [
              "Strategic decision-making support",
              "Leadership presence enhancement",
              "Board-level communication",
              "Change management guidance",
            ],
          },
          {
            id: 5,
            title: "Team Coaching and Development",
            description:
              "Build high-performing teams through collaborative coaching that enhances team dynamics and collective success.",
            features: [
              "Team alignment and cohesion",
              "Conflict resolution strategies",
              "Collaborative goal achievement",
              "Performance optimization",
            ],
          },
          {
            id: 6,
            title: "Transformational & Innovational Leadership",
            description:
              "Develop visionary leadership capabilities that inspire innovation and drive meaningful organizational change.",
            features: [
              "Visionary leadership development",
              "Innovation culture building",
              "Change leadership skills",
              "Inspirational communication",
            ],
          },
          {
            id: 7,
            title: "Business Growth Coaching",
            description:
              "Strategic coaching to accelerate business growth through sustainable strategies and value-based approaches.",
            features: [
              "Business strategy development",
              "Market positioning",
              "Growth opportunity identification",
              "Sustainable scaling strategies",
            ],
          },
          {
            id: 8,
            title: "Navigating Transitions Coaching",
            description:
              "Expert guidance through career transitions, organizational changes, and pivotal life moments.",
            features: [
              "Career transition support",
              "Change adaptation strategies",
              "New role preparation",
              "Confidence building",
            ],
          },
          {
            id: 9,
            title: "Stakeholder Development, Retention and Growth Strategies",
            description:
              "Comprehensive strategies to develop, engage, and retain key stakeholders for long-term organizational success.",
            features: [
              "Stakeholder mapping and analysis",
              "Engagement strategies",
              "Relationship building techniques",
              "Value creation frameworks",
            ],
          },
          {
            id: 10,
            title: "Strategic Business Coaching",
            description:
              "High-level strategic coaching to align business objectives with actionable plans and measurable outcomes.",
            features: [
              "Strategic planning support",
              "Business model optimization",
              "Competitive advantage development",
              "Performance metrics alignment",
            ],
          },
          {
            id: 11,
            title: "Career Coaching",
            description:
              "Professional guidance to advance your career, make strategic moves, and achieve your professional aspirations.",
            features: [
              "Career path planning",
              "Personal branding",
              "Interview preparation",
              "Networking strategies",
            ],
          },
          {
            id: 12,
            title: "Business Development, Strategic Planning",
            description:
              "Comprehensive business development strategies aligned with long-term strategic planning for sustainable growth.",
            features: [
              "Market analysis and research",
              "Strategic partnerships",
              "Business expansion planning",
              "Revenue growth strategies",
            ],
          },
          {
            id: 13,
            title: "Public Sector Coaching & Development",
            description:
              "Specialized coaching for public sector leaders addressing unique challenges in government and non-profit organizations.",
            features: [
              "Public leadership development",
              "Policy implementation strategies",
              "Stakeholder management",
              "Public value creation",
            ],
          },
          {
            id: 14,
            title: "Business Start Up Growth Coaching & Training",
            description:
              "Comprehensive support for entrepreneurs launching and scaling new ventures from concept to market success.",
            features: [
              "Startup strategy development",
              "Pitch preparation and refinement",
              "Funding readiness",
              "Growth acceleration techniques",
            ],
          },
          {
            id: 15,
            title:
              "Executive / Senior Management Facilitation and Programme Development",
            description:
              "Customized facilitation and program design for executive teams and senior management development.",
            features: [
              "Executive retreats and workshops",
              "Leadership program design",
              "Strategic facilitation",
              "Custom curriculum development",
            ],
          },
          {
            id: 16,
            title: "B.R.I.M Course Business ReInfluencing Mastery",
            description:
              "Proprietary methodology to master business influence, stakeholder engagement, and value-based communication.",
            features: [
              "V.A.T.O.R.™ Pitch Methodology",
              "Influence strategies",
              "Stakeholder persuasion techniques",
              "Value articulation mastery",
            ],
          },
        ]}
      />

      <ServicesCallToAction
        title="Ready to Transform Your Leadership Journey?"
        description="Choose the service that fits your needs or schedule a consultation to discuss a customized approach."
        ctaPrimaryText="Book a Consultation"
        ctaPrimaryLink="/book"
        ctaSecondaryText="Contact Us"
        ctaSecondaryLink="/contact"
      />
    </div>
  );
}
