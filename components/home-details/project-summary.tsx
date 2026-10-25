import ProjectList from "../projects/project-list";
import { getFeaturedProjects } from "../../data/projects";
import Button from "../ui/button";

import classes from "./project-summary.module.css";
import styles from "../../styles/shame.module.css";

export default function ProjectSummary() {
  const projects = getFeaturedProjects();

  return (
    <section className={classes["project-sum"]}>
      <h2 className={` ${styles.container} ${classes["project-sum__title"]}`}>
        My Projects
      </h2>
      <ProjectList items={projects} />
      <div className={`${styles.container} ${classes["project-sum__btn"]}`}>
        <Button link="/projects">View more</Button>
      </div>
    </section>
  );
}
