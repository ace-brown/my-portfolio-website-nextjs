import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "../components/layout/sidebar-data";

import AboutSummary from "../components/home-detail/about-summary";
import classes from "../components/layout/main-header.module.css";
import styles from "../components/layout/hero.module.css";

export default function HomePage(props) {
  const [toggle, setToggle] = useState(false);

  const sidebarHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className={styles.hero}>
        <video className={styles["video-bg"]} autoPlay muted loop>
          <source src="/shore.mp4" type="video/mp4" />
        </video>
        <div className={styles.navigation}>
          <div className={classes["logo-and-menubars"]}>
            <Link href="/" className={classes.logo}>
              <img
                src="/images/LogoMakr-4ytKli.png"
                alt="Logo"
                width={120}
                height={100}
              />
            </Link>
            <Link href="#" className={classes["menu-bars"]}>
              <FaBars onClick={sidebarHandler} />
            </Link>
          </div>
          <nav
            className={
              toggle
                ? `${classes["nav-menu"]} ${classes.active}`
                : classes["nav-menu"]
            }
          >
            <ul className={classes["nav-menu-items"]} onClick={sidebarHandler}>
              <li className={classes["nav-text"]}>
                <Link href="#">
                  <AiOutlineClose className={classes["svg-icon"]} />
                </Link>
              </li>
              {SidebarData.map((data, index) => {
                return (
                  <li
                    key={index}
                    className={`${data.cName} ${styles["nav-text--mod"]}`}
                  >
                    <Link href={data.path}>
                      {data.icon}
                      <span>{data.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className={styles.content}>
          <h1 className={styles["content-title"]}>Hi! My name is Kazem</h1>
          <h3 className={styles["content-info"]}>I'm a web developer</h3>
          <Link href="/about">More about me</Link>
        </div>
      </div>

      <AboutSummary />
    </>
  );
}
