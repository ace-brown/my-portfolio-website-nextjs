import type { Project } from "../../data/projects";
import { getTechList } from "../../data/projects";

import classes from "./tech-chips.module.css";

export default function TechChips({
  project,
  small = false,
}: {
  project: Project;
  small?: boolean;
}) {
  return (
    <ul className={small ? `${classes.chips} ${classes.small}` : classes.chips}>
      {getTechList(project).map((tech) => (
        <li key={tech} className={classes.chip}>
          {tech}
        </li>
      ))}
    </ul>
  );
}
