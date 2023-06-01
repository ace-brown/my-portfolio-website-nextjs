import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./sidebar-data";
import { IconContext } from "react-icons";

import classes from "./main-header.module.css";
import styles from "../../styles/shame.module.css";
import logo from "../../public/images/Logo.png";

export default function MainHeader(props) {
  const [toggle, setToggle] = useState(false);

  const sidebarHandler = () => {
    setToggle(!toggle);
  };

  // ${styles.container}
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <header className={` ${classes.header}`}>
          <div className={classes.navbar}>
            <Link href="/" className={classes.logo}>
              <img src="/images/Logo.png" alt="Logo" width={150} height={100} />
            </Link>
            <Link href="/" className={classes["menu-bars"]}>
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
                <Link href="/">
                  <AiOutlineClose className={classes["svg-icon"]} />
                </Link>
              </li>
              {SidebarData.map((data, index) => {
                return (
                  <li key={index} className={data.cName}>
                    <Link href={data.path}>
                      {data.icon}
                      <span>{data.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
      </IconContext.Provider>
    </>
  );
}
