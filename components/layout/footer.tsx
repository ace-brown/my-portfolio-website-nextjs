import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { NAV_ITEMS } from "./nav-items";
import { SITE } from "../../lib/site";

import classes from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.source}>
        <p>
          Logo from
          <a
            href="https://app.logomakr.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LogoMakr.com/app
          </a>
        </p>
        <p>
          Video by
          <a
            href="https://www.pexels.com/video/drone-shot-of-the-coast-6662984/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ROMAN ODINTSOV
          </a>
        </p>
      </div>
      <div>
        <nav className={classes.links} aria-label="Footer">
          <ul className={classes["links-list"]}>
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={classes.contact}>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className={classes["contact-icon"]} aria-hidden />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className={classes["contact-icon"]} aria-hidden />
          </a>
          <a href={`mailto:${SITE.email}`} aria-label="Email">
            <MdEmail className={classes["contact-icon"]} aria-hidden />
          </a>
        </div>
        <p className={classes.copyright}>
          © {new Date().getFullYear()} {SITE.name}
        </p>
      </div>
    </footer>
  );
}
