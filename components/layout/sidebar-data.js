import React from "react";
import {
  AiFillHome,
  AiOutlineProject,
  AiOutlineContacts,
} from "react-icons/ai";
import { IoAccessibilitySharp } from "react-icons/io5";

import classes from "./main-header.module.css";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome className={classes["svg-icon"]} />,
    cName: classes["nav-text"],
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <AiOutlineProject className={classes["svg-icon"]} />,
    cName: classes["nav-text"],
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <AiOutlineContacts className={classes["svg-icon"]} />,
    cName: classes["nav-text"],
  },
  {
    title: "About",
    path: "/about",
    icon: <IoAccessibilitySharp className={classes["svg-icon"]} />,
    cName: classes["nav-text"],
  },
];
