import Marquee from "../ui/marquee";
import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";
import SpotlightCard from "../ui/spotlight-card";
import { MARQUEE_SKILLS, SKILL_GROUPS } from "../../data/skills";

import classes from "./skills.module.css";

export default function Skills() {
  const half = Math.ceil(MARQUEE_SKILLS.length / 2);

  return (
    <section className={classes.skills} aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          eyebrow="02 — Skills"
          title="Tools of the trade"
          aside="From database and API to frontend, auth, AI and CI/CD: the stack I use to ship complete products."
        />
      </div>

      <div className={classes.marquees} aria-hidden>
        <Marquee duration={35}>
          {MARQUEE_SKILLS.slice(0, half).map(({ name, icon: Icon }) => (
            <span key={name} className={classes["marquee-item"]}>
              <Icon /> {name}
            </span>
          ))}
        </Marquee>
        <Marquee duration={35} reverse>
          {MARQUEE_SKILLS.slice(half).map(({ name, icon: Icon }) => (
            <span key={name} className={classes["marquee-item"]}>
              <Icon /> {name}
            </span>
          ))}
        </Marquee>
      </div>

      <ul className={`container ${classes.bento}`}>
        {SKILL_GROUPS.map((group, index) => {
          const GroupIcon = group.icon;
          return (
            <Reveal
              as="li"
              key={group.title}
              delay={index * 0.08}
              className={classes[`cell-${index}`]}
            >
              <SpotlightCard className={classes.card}>
                <span className={classes["card-icon"]}>
                  <GroupIcon aria-hidden />
                </span>
                <h3 className={classes["card-title"]}>{group.title}</h3>
                <p className={classes["card-text"]}>{group.description}</p>
                <ul className={classes.chips}>
                  {group.skills.map(({ name, icon: Icon }) => (
                    <li key={name} className={classes.chip}>
                      <Icon aria-hidden /> {name}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
