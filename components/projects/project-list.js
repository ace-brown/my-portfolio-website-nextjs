import React from "react";

import ProjectItem from "./project-item";
import classes from "./project-item.module.css";
import styles from "../../styles/shame.module.css";

export default function ProjectList(props) {
  const { items } = props;

  const imgageStyle = {
    backgroundImage: `url("/images/visited-places.jpeg")`,
  };
  return (
    <ul className={`${classes["project-list"]} ${styles.container}`}>
      {items.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          title={project.title}
          date={project.date}
          tech={project.tech}
          image={project.image}
        />
      ))}
    </ul>
  );
}
