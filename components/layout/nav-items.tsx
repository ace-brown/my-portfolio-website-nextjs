import type { ReactNode } from "react";
import {
  AiFillHome,
  AiOutlineProject,
  AiOutlineContacts,
} from "react-icons/ai";
import { IoAccessibilitySharp } from "react-icons/io5";

type NavItem = {
  title: string;
  path: string;
  icon: ReactNode;
};

export const NAV_ITEMS: NavItem[] = [
  { title: "Home", path: "/", icon: <AiFillHome aria-hidden /> },
  {
    title: "Projects",
    path: "/projects",
    icon: <AiOutlineProject aria-hidden />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <AiOutlineContacts aria-hidden />,
  },
  {
    title: "About",
    path: "/about",
    icon: <IoAccessibilitySharp aria-hidden />,
  },
];

export function isActivePath(currentPath: string, itemPath: string) {
  return itemPath === "/"
    ? currentPath === "/"
    : currentPath.startsWith(itemPath);
}
