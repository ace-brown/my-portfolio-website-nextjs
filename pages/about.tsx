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
  "In 2021 I started an M.Sc. in Computational Linguistics at the University of Stuttgart. As an international student I paid about €1,700 in tuition every semester, on top of rent and living costs, and after a few semesters a student job was no longer enough to cover it. I had to choose between work and study, so when PayperChain offered me a full-time position, I took it and left the programme. It wasn't an easy decision, but sometimes the right decision is a difficult one.",
  "I wasn't studying computational linguistics just for the certificate, so I kept reading about it after I left. Those few semesters still taught me a lot about AI and NLP: I learned NLP and deep learning and trained models from scratch, studied parsing of human and computer languages, worked on information retrieval and text mining, did text technology with SQL and Python (pandas, NumPy, Matplotlib), took phonetics and phonology, and presented research on voice privacy, covering adversarial attacks against speaker recognition and voice conversion (voice cloning).",
  "I worked at PayperChain for almost two years as the main frontend developer of its fintech dashboard. In 2024 and 2025 the crisis in the car industry hit the company, whose business is closely tied to that industry, and it had to cut its budget and reduce its team. I was one of the people let go.",
  "After that I joined MATVIS on a fixed-term contract for 14 months. When it ended, my manager offered to extend it, and I really enjoyed the work. But I decided it was the right moment to look for a team where I can grow further and take on bigger challenges.",
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
