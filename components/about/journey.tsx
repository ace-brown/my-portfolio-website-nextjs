import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";

import Reveal from "../ui/reveal";
import SectionHeading from "../ui/section-heading";
import { getFilteredProjects, getProjectYears } from "../../data/projects";

import classes from "./journey.module.css";

/** Projects grouped by year on a vertical line that fills in as you scroll. */
export default function Journey() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.7", "end 0.6"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section
      className={`container ${classes.journey}`}
      aria-labelledby="journey-title"
    >
      <SectionHeading
        id="journey-title"
        eyebrow="Timeline"
        title="My journey"
        aside="From my first CSS Grid experiments to production websites: the projects that shaped how I build."
      />
      <ol ref={listRef} className={classes.list}>
        <span className={classes.track} aria-hidden>
          <motion.span className={classes.fill} style={{ scaleY }} />
        </span>
        {getProjectYears().map((year) => (
          <li key={year} className={classes.year}>
            <Reveal>
              <h3 className={classes["year-label"]}>{year}</h3>
            </Reveal>
            <ul className={classes.projects}>
              {getFilteredProjects({ year }).map((project, index) => (
                <Reveal as="li" key={project.id} delay={index * 0.06}>
                  <Link
                    href={`/projects/${project.id}`}
                    className={classes.project}
                  >
                    <span>
                      <span className={classes["project-title"]}>
                        {project.title}
                      </span>
                      <span className={classes["project-tech"]}>
                        {project.tech}
                      </span>
                    </span>
                    <FiArrowUpRight
                      aria-hidden
                      className={classes["project-icon"]}
                    />
                  </Link>
                </Reveal>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
