import React from "react";

import styles from "../styles/shame.module.css";

export default function Contact() {
  return (
    <div className={`${styles.contact} ${styles.container}`}>
      <h1>Contact</h1>
      <p>
        My Github:{" "}
        <a href="https://github.com/ace-brown">https://github.com/ace-brown</a>
      </p>
      <p>
        My LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/kazem-abdi-dehnoei-3373b1a8/">
          https://www.linkedin.com/in/kazem-abdi-dehnoei-3373b1a8
        </a>
      </p>
      <p>Contact form is comming soon</p>
    </div>
  );
}
