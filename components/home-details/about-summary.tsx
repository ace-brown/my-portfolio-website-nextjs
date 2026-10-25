import Image from "next/image";

import Button from "../ui/button";
import Counter from "../ui/counter";
import Reveal from "../ui/reveal";
import ScrollRevealText from "../ui/scroll-reveal-text";
import { getAllProjects } from "../../data/projects";
import { YEARS_OF_EXPERIENCE } from "../../data/profile";
import { ALL_SKILLS } from "../../data/skills";
import profileImg from "../../public/images/kazem-abdi-desk.jpg";

import classes from "./about-summary.module.css";

const STATEMENT =
  "I'm Kazem, a full-stack engineer in Stuttgart who builds AI features into real products. For over four years I've worked with TypeScript, React/Next.js, NestJS and Python/FastAPI, from database and API to frontend, auth and CI/CD, in security software and fintech.";

export default function AboutSummary() {
  const stats = [
    { value: YEARS_OF_EXPERIENCE, suffix: "+", label: "Years full-stack" },
    { value: getAllProjects().length, suffix: "", label: "Projects built" },
    { value: ALL_SKILLS.length, suffix: "+", label: "Technologies" },
  ];

  return (
    <section className={classes.about} aria-labelledby="about-title">
      <div className={`container ${classes.grid}`}>
        <Reveal className={classes.portrait}>
          <div className={classes["portrait-frame"]}>
            <Image
              src={profileImg}
              alt="Kazem Abdi Dehnoei working at his desk"
              sizes="(max-width: 56em) 80vw, 30vw"
              placeholder="blur"
              className={classes["portrait-img"]}
            />
          </div>
          <p className={classes.badge}>
            <span className={classes["badge-dot"]} />
            Available now · Stuttgart
          </p>
        </Reveal>

        <div>
          <p className="eyebrow" id="about-title">
            01 — About
          </p>
          <ScrollRevealText text={STATEMENT} className={classes.statement} />

          <dl className={classes.stats}>
            {stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 0.1}
                className={classes.stat}
              >
                <dt>{stat.label}</dt>
                <dd>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dd>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={0.2}>
            <Button link="/about" variant="ghost" arrow>
              More about me
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
