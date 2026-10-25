import Image from "next/image";

import Button from "../ui/button";
import Counter from "../ui/counter";
import Reveal from "../ui/reveal";
import ScrollRevealText from "../ui/scroll-reveal-text";
import { getAllProjects, getYearsBuilding } from "../../data/projects";
import { ALL_SKILLS } from "../../data/skills";
import profileImg from "../../public/images/kazem-abdi.jpg";

import classes from "./about-summary.module.css";

const STATEMENT =
  "I'm Kazem, a web developer based in Stuttgart. I craft responsive web apps with React, Next.js and Node.js, and I'm fascinated by new technologies like blockchain and AI. When I'm not coding, you'll find me somewhere between the sea and the forest.";

export default function AboutSummary() {
  const stats = [
    { value: getAllProjects().length, suffix: "", label: "Projects built" },
    { value: ALL_SKILLS.length, suffix: "+", label: "Technologies" },
    { value: getYearsBuilding(), suffix: "+", label: "Years building" },
  ];

  return (
    <section className={classes.about} aria-labelledby="about-title">
      <div className={`container ${classes.grid}`}>
        <Reveal className={classes.portrait}>
          <div className={classes["portrait-frame"]}>
            <Image
              src={profileImg}
              alt="Portrait of Kazem Abdi Dehnoei"
              sizes="(max-width: 56em) 80vw, 30vw"
              placeholder="blur"
              className={classes["portrait-img"]}
            />
          </div>
          <p className={classes.badge}>
            <span className={classes["badge-dot"]} />
            Based in Stuttgart, DE
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
