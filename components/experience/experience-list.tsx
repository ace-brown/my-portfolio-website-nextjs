import Reveal from "../ui/reveal";
import { EXPERIENCE } from "../../data/experience";
import { richText } from "../../lib/rich-text";

import classes from "./experience-list.module.css";

type ExperienceListProps = {
  /** show only the first few highlights per job (home page) */
  compact?: boolean;
};

const COMPACT_HIGHLIGHTS = 3;

export default function ExperienceList({
  compact = false,
}: ExperienceListProps) {
  return (
    <ol className={classes.list}>
      {EXPERIENCE.map((job, index) => {
        const highlights = compact
          ? job.highlights.slice(0, COMPACT_HIGHLIGHTS)
          : job.highlights;

        return (
          <Reveal
            as="li"
            key={job.company}
            delay={index * 0.05}
            className={classes.job}
          >
            <div className={classes.meta}>
              <p className={classes.period}>
                {job.start} – {job.end}
              </p>
              {job.location && (
                <p className={classes.location}>{job.location}</p>
              )}
            </div>
            <div className={classes.body}>
              <h3 className={classes.role}>
                {job.role}
                {job.level && (
                  <span className={classes.level}> ({job.level})</span>
                )}
              </h3>
              <p className={classes.company}>
                <span className={classes["company-name"]}>{job.company}</span>
                <span className={classes.about}> · {job.about}</span>
              </p>
              <ul className={classes.highlights}>
                {highlights.map((highlight) => (
                  <li key={highlight}>{richText(highlight)}</li>
                ))}
              </ul>
              <ul className={classes.tech} aria-label="Technologies">
                {job.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        );
      })}
    </ol>
  );
}
