import Link from "next/link";
import React from "react";

import classes from "./main-header.module.css";
import styles from "../../styles/shame.module.css";

import iconClose from "../../public/images/iconClose";
import iconHamburger from "../../public/images/iconHamburger";

export default function MainHeader() {
  return (
    <header className={`${styles.container} ${classes.header}`}>
      <Link href="/" className={classes.logo}>
        Kazem Abdi
      </Link>
      <button
        className={classes["mobile-nav-toggle"]}
        area-aria-controls="primary-nav"
      >
        <img
          className={classes["icon-close"]}
          src={iconClose}
          alt=""
          aria-hidden="true"
        />
        <img
          className={classes["icon-hamburger"]}
          src={iconHamburger}
          alt=""
          aria-hidden="true"
        />
        <span className={classes["visually-hidden"]}>menue</span>
      </button>
      <nav className={classes.navigation}>
        <ul
          aria-label="Primary"
          role="list"
          className={classes["nav-list"]}
          id="primary-nav"
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
