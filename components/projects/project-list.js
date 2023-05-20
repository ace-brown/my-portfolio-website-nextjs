import React from "react";
import ProjectItem from "./project-item";

import classes from "../../styles/project-item.module.css";
import styles from "../../styles/shame.module.css";

export default function ProjectList(props) {
  const { items } = props;

  return (
    <ul className={`${classes["project-list"]} ${styles.container}`}>
      {items.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      ))}
    </ul>
  );
}
