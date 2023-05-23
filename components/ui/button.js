import Link from "next/link";
import React from "react";

import classes from "./button.module.css";

export default function Button(props) {
  return (
    <Link className={classes.button} href={props.link}>
      {props.children}
    </Link>
  );
}
