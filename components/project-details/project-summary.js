import React, { Fragment } from "react";

import classes from "./project-summary.module.css";
import styles from "../../styles/shame.module.css";

export default function ProjectSummary(props) {
  const { title, tech, descriptionFull, link, image } = props;
  const adjustedImg = `/${image}`;

  return (
    <div className={`${classes.summary} ${styles.container}`}>
      <div>
        <h1 className={classes["summary-title"]}> Project name: {title}</h1>
        <div className={classes["summary-content"]}>
          <h3>
            <span className={styles.bold}>Technology used: </span>
            {tech}
          </h3>
          <div>
            <p style={{ marginBottom: "1rem" }}>
              <span className={styles.bold}>Description: </span>
              {descriptionFull}
            </p>
            <p>
              Link to the project:{" "}
              <a className={classes.link} href={`${link}`} target="_blank">
                {link}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={classes["summary-img"]}>
        <img src={adjustedImg}></img>
      </div>
    </div>
  );
}
