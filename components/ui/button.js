import Link from "next/link";
import React from "react";

import styles from "./button.module.css";

export default function Button(props) {
  if (props.link) {
    return (
      <Link className={`${props.className} ${styles.btn}`} href={props.link}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      onClick={props.onClick}
      className={`${props.className} ${styles.btn}`}
    >
      {props.children}
    </button>
  );
}
