import Image from "next/image";

import Button from "../ui/button";
import type { Project } from "../../data/projects";
import { formatDate } from "../../lib/site";

import classes from "./project-item.module.css";

export default function ProjectItem({ project }: { project: Project }) {
  const { id, title, date, tech, image } = project;

  return (
    <li className={classes["project-item"]}>
      <article className={classes.card}>
        <Image
          src={image}
          alt=""
          fill
          className={classes["card-img"]}
          sizes="(max-width: 35em) 90vw, 22rem"
          placeholder="blur"
        />
        <div className={classes["card-content"]}>
          <h3 className={classes["card-title"]}>{title}</h3>
          <p className={classes["card-body"]}>{tech}</p>
          <time className={classes["card-date"]} dateTime={date}>
            {formatDate(date)}
          </time>
          <Button link={`/projects/${id}`}>
            Learn more<span className="visually-hidden"> about {title}</span>
          </Button>
        </div>
      </article>
    </li>
  );
}
