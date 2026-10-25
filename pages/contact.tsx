import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Seo from "../components/seo";
import ContactForm from "../components/contact/contact-form";
import CopyEmail from "../components/ui/copy-email";
import PageHeader from "../components/ui/page-header";
import Reveal from "../components/ui/reveal";
import { SITE } from "../lib/site";

import classes from "../styles/contact.module.css";

const LINKS = [
  {
    label: "LinkedIn",
    handle: "Kazem A.",
    href: SITE.linkedin,
    icon: FaLinkedin,
  },
  { label: "GitHub", handle: "@ace-brown", href: SITE.github, icon: FaGithub },
];

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Kazem Abdi Dehnoei by email, LinkedIn or GitHub."
      />
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        intro="Have a project, an opportunity or just a question? I'm always happy to connect with fellow professionals. Send me a message and I'll get back to you."
      />

      <section className={`container ${classes.grid}`}>
        <div className={classes.details}>
          <Reveal>
            <p className={classes.label}>Email</p>
            <CopyEmail />
          </Reveal>

          <Reveal delay={0.1}>
            <p className={classes.label}>Elsewhere</p>
            <ul className={classes.links}>
              {LINKS.map(({ label, handle, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}
                  >
                    <span className={classes["link-icon"]}>
                      <Icon aria-hidden />
                    </span>
                    <span className={classes["link-text"]}>
                      <span className={classes["link-label"]}>{label}</span>
                      <span className={classes["link-handle"]}>{handle}</span>
                    </span>
                    <FiArrowUpRight aria-hidden className={classes.arrow} />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <p className={classes.label}>Location</p>
            <p className={classes.location}>Stuttgart, Germany</p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className={classes["form-card"]}>
          <h2 className={classes["form-title"]}>Send a message</h2>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
