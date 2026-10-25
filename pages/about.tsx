import Image from "next/image";

import Seo from "../components/seo";
import Journey from "../components/about/journey";
import ExperienceList from "../components/experience/experience-list";
import Button from "../components/ui/button";
import PageHeader from "../components/ui/page-header";
import Reveal from "../components/ui/reveal";
import SectionHeading from "../components/ui/section-heading";
import SpotlightCard from "../components/ui/spotlight-card";
import { EDUCATION, FACTS, LANGUAGES, PRINCIPLES } from "../data/profile";
import { SITE } from "../lib/site";
import profileImg from "../public/images/kazem-abdi-desk.jpg";

import classes from "../styles/about.module.css";

const BIO = [
  "Hello! I'm Kazem Abdi Dehnoei, a full-stack engineer based in Stuttgart who builds AI features into real products. For over four years I've worked with TypeScript, React/Next.js, NestJS and Python/FastAPI, owning the whole path from database and API to frontend, auth and CI/CD.",
  "My background spans security software and fintech. At MATVIS I built an ICAP server in Python that connects an ML security service to proxies and gateways, and found and fixed web vulnerabilities with OWASP ZAP. At PayperChain I was the main frontend developer of a fintech dashboard for automated pay-per-use payments.",
  "I also designed and built Kraftmeister on my own: a multi-tenant SaaS for German trade businesses with speech-to-text, LLM and vision features. Its source code is public, so you can review how I work before we talk.",
];

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="About Kazem Abdi Dehnoei: full-stack engineer in Stuttgart with experience in security software and fintech, building with TypeScript, Python and AI."
      />
      <PageHeader
        eyebrow="About"
        title="More about me"
        intro="Full-stack engineer in Stuttgart. TypeScript, Python and AI/LLM, with a background in security software and fintech."
      />

      <section className={`container ${classes.bio}`}>
        <Reveal className={classes.portrait}>
          <Image
            src={profileImg}
            alt="Kazem Abdi Dehnoei working at his desk"
            sizes="(max-width: 56em) 90vw, 420px"
            placeholder="blur"
            priority
            className={classes["portrait-img"]}
          />
        </Reveal>
        <div className={classes.text}>
          {BIO.map((paragraph, index) => (
            <Reveal as="p" key={index} delay={index * 0.08}>
              {paragraph}
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <dl className={classes.facts}>
              {FACTS.map((fact) => (
                <div key={fact.label} className={classes.fact}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal className={classes.actions} delay={0.25}>
            <Button link="/contact" arrow>
              Get in touch
            </Button>
            <Button link="/projects" variant="ghost">
              See my projects
            </Button>
            <Button link={SITE.linkedin} external variant="ghost">
              LinkedIn
            </Button>
          </Reveal>
        </div>
      </section>

      <section
        id="experience"
        className={`container ${classes.section}`}
        aria-labelledby="experience-title"
      >
        <SectionHeading
          id="experience-title"
          eyebrow="Experience"
          title="Where I've worked"
        />
        <ExperienceList />
      </section>

      <section
        className={`container ${classes.section}`}
        aria-labelledby="principles-title"
      >
        <SectionHeading
          id="principles-title"
          eyebrow="Principles"
          title="How I work"
        />
        <ul className={classes.principles}>
          {PRINCIPLES.map((principle, index) => (
            <Reveal as="li" key={principle.title} delay={index * 0.08}>
              <SpotlightCard className={classes.principle}>
                <span className={classes["principle-index"]}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className={`container ${classes.section} ${classes.columns}`}>
        <Reveal>
          <h2 className="eyebrow">Education</h2>
          <h3 className={classes["column-title"]}>{EDUCATION.title}</h3>
          <p className={classes.muted}>
            {EDUCATION.school} · {EDUCATION.period} · {EDUCATION.note}
          </p>
          <ul className={classes.topics}>
            {EDUCATION.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="eyebrow">Languages</h2>
          <ul className={classes.languages}>
            {LANGUAGES.map((language) => (
              <li key={language.name}>
                <span className={classes["language-name"]}>
                  {language.name}
                </span>
                <span className={classes.muted}>{language.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <Journey />
    </>
  );
}
