import ContactHero from "@/components/contactHero";
import styles from "./styles.module.css";
import ContactInfo from "@/components/contactInfo";
import ContactForm from "@/components/contactForm";

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <ContactHero
        title="Get in Touch"
        subtitle="Let's start your transformation journey together"
        description="Whether you're looking for executive coaching, team development, or leadership training, I'm here to help you achieve your goals."
      />

      <div className={styles.contactContainer}>
        <ContactInfo
          phone="+234 808 099 0099"
          email="toyin@skillsultants.com"
          address="Lagos, Nigeria"
        />

        <ContactForm />
      </div>
    </div>
  );
}
