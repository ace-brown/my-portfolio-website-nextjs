import React from "react";
import Link from "next/link";

import classes from "./project-summary.module.css";
import styles from "../../styles/shame.module.css";

export default function ProjectSummary(props) {
  const { title, tech, description, link, image } = props;
  const adjustedImg = `/${image}`;

  return (
    <>
      <div className={`${styles.container} ${classes.summary}`}>
        <h1>Project name:{title}</h1>
        <h3>Technology used:{tech}</h3>
        <p>Description:{description}</p>
        <p>Link to the project's code:{link}</p>
      </div>
      <div className={classes["summary-img"]}>
        <img href={adjustedImg}></img>
      </div>
    </>
  );
}
