import styles from "./styles.module.css";

export default function TermsOfService() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.effectiveDate}>
            Effective Date: 2nd March, 2026
          </p>
          <p className={styles.website}>
            Website:{" "}
            <a href="https://skillsultant.com" className={styles.link}>
              https://skillsultant.com
            </a>
          </p>
        </div>

        {/* Introduction */}
        <div className={styles.intro}>
          <p>
            Welcome to Skillsultant (&quot;we,&quot; &quot;our,&quot;
            &quot;us&quot;). By accessing or using this Website and booking our
            services, you agree to be bound by these Terms of Service. If you do
            not agree to these terms, please do not use our services.
          </p>
        </div>

        {/* Content Sections */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Services Provided</h2>
          <p>
            Skillsultant provides professional consultation and
            skills-development services. The specific scope, format, and
            duration of each session are detailed at the time of booking. We
            reserve the right to modify or discontinue any service at our
            discretion without prior notice.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Eligibility</h2>
          <p>By using this Website, you represent and warrant that:</p>
          <ul className={styles.list}>
            <li>You are at least 18 years of age.</li>
            <li>
              You have the legal capacity to enter into a binding agreement.
            </li>
            <li>
              All information provided by you during the booking process is
              accurate and complete.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Booking and Scheduling</h2>
          <ul className={styles.list}>
            <li>
              <strong>Confirmation:</strong> All consultations must be booked
              through the Website or our officially approved channels. A booking
              request does not constitute a guaranteed appointment until you
              receive a formal confirmation from us.
            </li>
            <li>
              <strong>Accuracy:</strong> You are responsible for providing
              correct contact details to ensure you receive your consultation
              links or meeting instructions.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            4. Cancellations and Rescheduling
          </h2>
          <ul className={styles.list}>
            <li>
              <strong>Notice Period:</strong> As a matter of professional
              courtesy, you may reschedule or cancel your consultation up to 24
              hours before the scheduled start time.
            </li>
            <li>
              <strong>Late Changes:</strong> We understand that emergencies
              happen; however, frequent late cancellations or rescheduling
              requests may result in the suspension of your ability to book
              future sessions.
            </li>
            <li>
              <strong>Our Right to Reschedule:</strong> In the event of
              emergencies or technical failures, we reserve the right to
              reschedule your session. We will provide as much notice as
              possible.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            5. Disclaimer: No Guarantee of Results
          </h2>
          <p>
            Our services provide professional insights, frameworks, and
            guidance. However:
          </p>
          <ul className={styles.list}>
            <li>
              <strong>No Guarantees:</strong> We do not guarantee specific
              financial, career, or business outcomes.
            </li>
            <li>
              <strong>User Responsibility:</strong> You are solely responsible
              for the implementation of any advice provided. Your success
              depends on your own effort, execution, and external factors beyond
              our control.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Intellectual Property</h2>
          <p>
            All materials shared during consultations—including but not limited
            to strategy documents, templates, frameworks, and recordings—are the
            exclusive intellectual property of Skillsultant.
          </p>
          <ul className={styles.list}>
            <li>
              You are granted a limited, non-exclusive license for personal use
              only.
            </li>
            <li>
              You may not reproduce, sell, distribute, or publicly share these
              materials without our express written consent.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. User Conduct</h2>
          <p>You agree not to:</p>
          <ul className={styles.list}>
            <li>Provide fraudulent or misleading information.</li>
            <li>
              Use the Website for any unlawful purpose or to transmit malicious
              code.
            </li>
            <li>
              Record consultation sessions without prior explicit permission
              from the consultant.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Skillsultant shall not be
            liable for any indirect, incidental, or consequential damages
            (including loss of profit or business opportunities) arising from
            your use of our services or reliance on consultation advice. Your
            use of the Website and our services is at your own risk.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>9. Confidentiality</h2>
          <p>
            We value your trust. Any sensitive business or personal information
            shared during a consultation will be kept strictly confidential,
            except where disclosure is required by law or authorized by you.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>10. Governing Law</h2>
          <p>
            These Terms of Service are governed by and construed in accordance
            with the laws of the Federal Republic of Nigeria. Any disputes
            arising from these terms shall be subject to the exclusive
            jurisdiction of the courts in Nigeria.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>11. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time to reflect changes in
            our services or legal requirements. Your continued use of the
            Website after updates are posted constitutes your acceptance of the
            new Terms.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>12. Contact Information</h2>
          <p>For any questions regarding these Terms, please contact:</p>
          <ul className={styles.contactList}>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:toyin@skillsultants.com" className={styles.link}>
                toyin@skillsultants.com
              </a>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a href="https://skillsultant.com" className={styles.link}>
                https://skillsultant.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
