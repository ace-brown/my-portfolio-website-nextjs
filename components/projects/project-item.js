import Link from "next/link";
import React from "react";

import Button from "../ui/button";
import classes from "./project-item.module.css";

export default function ProjectItem(props) {
  const { id, title, date, tech, image } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const readMoreLink = `/projects/${id}`;

  const imgageStyle = {
    backgroundImage: `url("/${image}")`,
  };

  return (
    <li>
      <article className={classes.card} style={imgageStyle}>
        <div className={classes["card-content"]}>
          <h2 className={classes["card-title"]}>{title}</h2>
          <p className={classes["card-body"]}>{tech}</p>
          <time className={classes["card-date"]}>{humanReadableDate}</time>
          <Button link={readMoreLink}>Learn more</Button>
        </div>
      </article>
    </li>
  );
}
