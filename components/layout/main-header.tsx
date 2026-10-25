import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { NAV_ITEMS, isActivePath } from "./nav-items";
import ThemeToggle from "./theme-toggle";
import logo from "../../public/images/LogoMakr-9F7SZ3.png";
import logoWhite from "../../public/images/LogoMakr-4ytKli.png";

import classes from "./main-header.module.css";

export default function MainHeader({
  transparent = false,
}: {
  transparent?: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const keyHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [menuOpen]);

  const headerClasses = [
    classes.header,
    transparent && classes["header--transparent"],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClasses}>
      <div className={classes["logo-and-menubars"]}>
        <Link href="/" className={classes.logo}>
          <Image
            src={transparent ? logoWhite : logo}
            alt="Kazem Abdi – home"
            width={120}
            priority
          />
        </Link>
        <button
          type="button"
          className={classes["menu-bars"]}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars aria-hidden />
        </button>
      </div>
      <nav
        id="main-nav"
        aria-label="Main"
        className={
          menuOpen
            ? `${classes["nav-menu"]} ${classes.active}`
            : classes["nav-menu"]
        }
      >
        <ul className={classes["nav-menu-items"]}>
          <li className={`${classes["nav-text"]} ${classes["nav-close"]}`}>
            <button type="button" aria-label="Close menu" onClick={closeMenu}>
              <AiOutlineClose aria-hidden />
            </button>
          </li>
          {NAV_ITEMS.map((item) => (
            <li key={item.path} className={classes["nav-text"]}>
              <Link
                href={item.path}
                onClick={closeMenu}
                aria-current={
                  isActivePath(router.pathname, item.path) ? "page" : undefined
                }
              >
                <span className={classes["svg-icon"]}>{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
          <li className={classes["nav-text"]}>
            <ThemeToggle className={classes["theme-toggle"]} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
