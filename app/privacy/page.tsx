import React from "react";
import styles from "./styles.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.effectiveDate}>
            Effective Date: 2nd March, 2026
          </p>
        </div>

        {/* Introduction */}
        <div className={styles.intro}>
          <p>
            Welcome to Skillsultant (&quot;we,&quot; &quot;our,&quot;
            &quot;us&quot;). Your privacy is a priority. This Privacy Policy
            explains what personal information we collect, how we use it, and
            your rights when you use our consultation booking website:
            <a href="https://skillsultant.netlify.app" className={styles.link}>
              {" "}
              https://skillsultant.netlify.app
            </a>{" "}
            (the &quot;Website&ldquo;).
          </p>
        </div>

        {/* Content Sections */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Information We Collect</h2>

          <h3 className={styles.subsectionTitle}>
            1.1 Personal Information You Provide
          </h3>
          <p>When you book a consultation or contact us, we may collect:</p>
          <ul className={styles.list}>
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Consultation details (preferred date, time, and topic)</li>
            <li>
              Any additional information or documents you voluntarily submit
            </li>
          </ul>

          <h3 className={styles.subsectionTitle}>
            1.2 Automatically Collected Information
          </h3>
          <p>
            When you visit the Website, our servers (hosted via Netlify) may
            automatically collect:
          </p>
          <ul className={styles.list}>
            <li>IP Address and Browser type/version</li>
            <li>Operating system</li>
            <li>Pages visited and duration of visit</li>
            <li>Interaction data (clicks and navigation paths)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            2. How We Use Your Information
          </h2>
          <p>We use your information strictly to:</p>
          <ul className={styles.list}>
            <li>Process and manage your consultation bookings.</li>
            <li>Send booking confirmations, reminders, and service updates.</li>
            <li>Improve our Website performance and user experience.</li>
            <li>Comply with applicable legal and regulatory obligations.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to
            fulfill the purposes outlined in this policy (e.g., to complete a
            consultation service) or as required by law.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Cookies and Tracking</h2>
          <p>
            We use cookies to improve website functionality and analyze traffic.
            You can choose to disable cookies in your browser settings; however,
            please note that some features of the Website may not function
            properly without them.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Sharing Your Information</h2>
          <p>
            We do not sell your personal information. We only share data with:
          </p>
          <ul className={styles.list}>
            <li>
              <strong>Service Providers:</strong> Third-party tools that assist
              in website hosting (Netlify), analytics, or booking management.
            </li>
            <li>
              <strong>Legal Necessity:</strong> If required by law, regulation,
              or legal process.
            </li>
            <li>
              <strong>Consent:</strong> With your explicit permission for any
              other purpose.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your
            information. While we strive to use commercially acceptable means to
            protect your personal data, remember that no method of transmission
            over the internet is 100% secure.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Your Rights</h2>
          <p>Depending on your location, you have the following rights:</p>
          <ul className={styles.list}>
            <li>
              <strong>Access/Correction:</strong> Request a copy of or updates
              to your data.
            </li>
            <li>
              <strong>Deletion:</strong> Request that we erase your personal
              information.
            </li>
            <li>
              <strong>Objection:</strong> Object to the processing of your data
              for specific purposes.
            </li>
          </ul>
          <p>
            To exercise these rights, please contact us at{" "}
            <a href="mailto:toyin@skillsultants.com" className={styles.link}>
              toyin@skillsultants.com
            </a>
            .
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Third-Party Links</h2>
          <p>
            Our Website may contain links to third-party sites (such as payment
            processors). We do not control and are not responsible for their
            privacy practices. We encourage you to read the privacy policies of
            any third-party site you visit.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>9. Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 13. We
            do not knowingly collect personal information from children.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>10. Governing Law</h2>
          <p>
            This Privacy Policy is governed by the laws of the Federal Republic
            of Nigeria, without regard to its conflict of law principles.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>11. Contact Us</h2>
          <p>
            For questions regarding this policy or your data, please contact:
          </p>
          <ul className={styles.contactList}>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:toyin@skillsultants.com" className={styles.link}>
                toyin@skillsultants.com
              </a>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a
                href="https://skillsultant.netlify.app"
                className={styles.link}
              >
                https://skillsultant.netlify.app
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
