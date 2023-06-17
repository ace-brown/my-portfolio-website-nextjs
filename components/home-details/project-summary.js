import ProjectList from "../projects/project-list";
import { getFeaturedProject } from "../../dummy-project";
import Button from "../ui/button";

import classes from "./project-summary.module.css";
import styles from "../../styles/shame.module.css";

export default function ProjectSummary() {
  const projects = getFeaturedProject();

  return (
    <div className={classes["project-sum"]}>
      <h1 className={` ${styles.container} ${classes["project-sum__title"]}`}>
        My Projects
      </h1>
      <ProjectList items={projects} />
      <div className={`${styles.container} ${classes["project-sum__btn"]}`}>
        <Button link="./projects">View more</Button>
      </div>
    </div>
  );
}
