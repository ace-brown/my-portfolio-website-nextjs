import Link from "next/link";
import React from "react";

import classes from "../../styles/project-item.module.css";

export default function ProjectItem(props) {
  const { id, title, description, image } = props;
  // const humanReadableDate = new Date(date).toLacal...
  const readMoreLink = `/projects/${id}`;
  return (
    <li>
      <article
        className={classes.card}
        style={{ backgroundImage: `url("/${image}")` }}
      >
        <div className={classes["card-content"]}>
          <h2 className={classes["card-title"]}>{title}</h2>
          <p className={classes["card-body"]}>{description}</p>
          <button className={classes.button}>
            {" "}
            <Link href={readMoreLink}>Learn more</Link>
          </button>
        </div>
      </article>
    </li>
  );
}
