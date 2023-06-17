import React, { Fragment } from "react";
import MainHeader from "./main-header";
import Footer from "./footer";

import styles from "../../styles/shame.module.css";

export default function Layout(props) {
  return (
    <div className={styles.wrapper}>
      <MainHeader />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
}
