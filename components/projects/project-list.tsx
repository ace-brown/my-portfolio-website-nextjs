import ProjectItem from "./project-item";
import type { Project } from "../../data/projects";

import classes from "./project-item.module.css";
import styles from "../../styles/shame.module.css";

export default function ProjectList({ items }: { items: Project[] }) {
  return (
    <ul className={`${classes["project-list"]} ${styles.container}`}>
      {items.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </ul>
  );
}
