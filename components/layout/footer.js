import React from "react";
import Link from "next/link";
import classes from "./footer.module.css";

import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaPinterest, FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.source}>
        <p>
          Logo from<a href="https://app.logomakr.com/">LogoMakr.com/app</a>
        </p>
        <p>
          Video by
          <a href="https://www.pexels.com/video/drone-shot-of-the-coast-6662984/">
            ROMAN ODINTSOV
          </a>
        </p>
      </div>
      <div className={classes.container}>
        <div className={classes.links}>
          <ul className={classes["links-list"]}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className={classes.contact}>
          <AiFillTwitterCircle
            className={`${classes["contact-icon"]} ${classes.twitter}`}
          />
          <FaInstagramSquare
            className={`${classes["contact-icon"]} ${classes.insta} `}
          />
          <FaPinterest
            className={`${classes["contact-icon"]} ${classes.pinterest}`}
          />
          <FaFacebook
            className={`${classes["contact-icon"]} ${classes.facebook}`}
          />
        </div>
      </div>
    </footer>
  );
}
