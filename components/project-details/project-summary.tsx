import Image from "next/image";

import Button from "../ui/button";
import type { Project } from "../../data/projects";
import { formatDate } from "../../lib/site";

import classes from "./project-summary.module.css";
import styles from "../../styles/shame.module.css";

export default function ProjectSummary({ project }: { project: Project }) {
  const { title, tech, descriptionFull, link, image, date } = project;

  return (
    <article className={`${classes.summary} ${styles.container}`}>
      <div>
        <h1 className={classes["summary-title"]}>{title}</h1>
        <div className={classes["summary-content"]}>
          <div>
            <h2 className={classes["summary-tech"]}>
              <span className={styles.bold}>Technology used: </span>
              {tech}
            </h2>
            <time dateTime={date}>{formatDate(date)}</time>
          </div>
          <div>
            <p className={classes["summary-description"]}>
              <span className={styles.bold}>Description: </span>
              {descriptionFull}
            </p>
            <p>
              Link to the project:{" "}
              <a
                className={classes.link}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={classes["summary-img"]}>
        <Image
          src={image}
          alt={`Screenshot of ${title}`}
          sizes="(max-width: 700px) 90vw, min(70vw, 1140px)"
          placeholder="blur"
        />
      </div>
      <div className={classes["summary-button"]}>
        <Button link="/projects">Back to projects list</Button>
      </div>
    </article>
  );
}
