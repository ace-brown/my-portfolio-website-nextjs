import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./sidebar-data";

import classes from "./main-header.module.css";

export default function MainHeader(props) {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  const HomePageRoute = router.pathname === "/";

  const sidebarHandler = () => {
    setToggle(!toggle);
  };

  // ${styles.container}
  return (
    <>
      {/* Video by ROMAN ODINTSOV: https://www.pexels.com/video/drone-shot-of-the-coast-6662984/ */}
      {!HomePageRoute && (
        <header className={` ${classes.header}`}>
          <div className={classes["logo-and-menubars"]}>
            <Link href="/" className={classes.logo}>
              <img
                src="/images/LogoMakr-9F7SZ3.png"
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
      )}
    </>
  );
}
