import { SKILL_GROUPS } from "../../data/skills";

import classes from "./skills.module.css";
import styles from "../../styles/shame.module.css";

export default function Skills() {
  return (
    <section
      className={`${styles.container} ${classes.skills}`}
      aria-labelledby="skills-title"
    >
      <h2 id="skills-title" className={classes["skills__title"]}>
        Skills
      </h2>
      <div className={classes["skills__groups"]}>
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className={classes["skills__group"]}>
            <h3>{group.title}</h3>
            <ul className={classes["skills__list"]}>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
