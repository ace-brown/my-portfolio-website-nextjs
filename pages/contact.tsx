import Seo from "../components/seo";
import ContactForm from "../components/contact/contact-form";
import { SITE } from "../lib/site";

import styles from "../styles/shame.module.css";

export default function Contact() {
  return (
    <div className={`${styles.contact} ${styles.container}`}>
      <Seo
        title="Contact"
        description="Get in touch with Kazem Abdi Dehnoei by email, LinkedIn or GitHub."
      />
      <h1>Contact</h1>
      <p>
        GitHub:{" "}
        <a href={SITE.github} target="_blank" rel="noopener noreferrer">
          {SITE.github}
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
          {SITE.linkedin}
        </a>
      </p>
      <p>
        Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>
      <ContactForm />
    </div>
  );
}
