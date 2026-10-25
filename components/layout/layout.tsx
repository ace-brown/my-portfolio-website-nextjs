import type { ReactNode } from "react";
import { useRouter } from "next/router";

import MainHeader from "./main-header";
import Footer from "./footer";

import styles from "../../styles/shame.module.css";

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  // On the home page the header floats over the video hero.
  const isHomePage = router.pathname === "/";

  return (
    <div className={styles.wrapper}>
      <a className={styles["skip-link"]} href="#main-content">
        Skip to content
      </a>
      <MainHeader transparent={isHomePage} />
      <main id="main-content" className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
