import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useLenis } from "lenis/react";
import { FiArrowUp, FiArrowUpRight } from "react-icons/fi";

import { NAV_ITEMS } from "./nav-items";
import Button from "../ui/button";
import SplitText from "../ui/split-text";
import { SITE } from "../../lib/site";

import classes from "./footer.module.css";

function StuttgartTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Berlin",
        }),
      );
    update();
    const interval = setInterval(update, 30_000);
    return () => clearInterval(interval);
  }, []);

  return <span suppressHydrationWarning>{time ?? "--:--"}</span>;
}

const SOCIALS = [
  { label: "GitHub", href: SITE.github },
  { label: "LinkedIn", href: SITE.linkedin },
];

export default function Footer() {
  const router = useRouter();
  const lenis = useLenis();
  const showCta = router.pathname !== "/contact";

  const backToTopHandler = () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.6 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={classes.footer}>
      {showCta && (
        <section className={classes.cta} aria-labelledby="cta-title">
          <div className={`container ${classes["cta-inner"]}`}>
            <p className="eyebrow">Have a project in mind?</p>
            <h2 id="cta-title" className={classes["cta-title"]}>
              <SplitText text="Let's work" inView stagger={0.03} />
              <br />
              <span className="gradient-text">together.</span>
            </h2>
            <div className={classes["cta-actions"]}>
              <Button link="/contact" size="lg" arrow>
                Start a conversation
              </Button>
              <Button link={SITE.linkedin} external variant="ghost" size="lg">
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </section>
      )}

      <div className="container">
        <div className={classes.columns}>
          <div className={classes.about}>
            <p className={classes.brand}>
              kazem<span className={classes.dot}>.</span>abdi
            </p>
            <p className={classes.muted}>
              Full-stack engineer building AI features into real products.
            </p>
            <p className={classes.clock}>
              <span className={classes["clock-dot"]} />
              Stuttgart, DE · <StuttgartTime />
            </p>
          </div>

          <nav aria-label="Footer">
            <p className={classes.heading}>Sitemap</p>
            <ul className={classes.list}>
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className={classes.link}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className={classes.heading}>Elsewhere</p>
            <ul className={classes.list}>
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className={classes.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.label}
                    <FiArrowUpRight
                      aria-hidden
                      className={classes["link-icon"]}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className={classes.wordmark} aria-hidden>
          Kazem Abdi
        </p>

        <div className={classes.bottom}>
          <p>
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <p>
            Video by{" "}
            <a
              href="https://www.pexels.com/video/drone-shot-of-the-coast-6662984/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.credit}
            >
              Roman Odintsov
            </a>
          </p>
          <button
            type="button"
            className={classes.top}
            onClick={backToTopHandler}
          >
            Back to top <FiArrowUp aria-hidden />
          </button>
        </div>
      </div>
    </footer>
  );
}
