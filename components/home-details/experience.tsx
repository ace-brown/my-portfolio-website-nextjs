import Button from "../ui/button";
import SectionHeading from "../ui/section-heading";
import ExperienceList from "../experience/experience-list";

import classes from "./experience.module.css";

export default function Experience() {
  return (
    <section className={classes.section} aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          id="experience-title"
          eyebrow="03 — Experience"
          title="Where I've worked"
          aside="Security software, fintech and research: building and shipping in teams since 2022."
        />
        <ExperienceList compact />
        <div className={classes.more}>
          <Button link="/about#experience" variant="ghost" arrow>
            Full experience
          </Button>
        </div>
      </div>
    </section>
  );
}
