import React from "react";

import styles from "../styles/shame.module.css";

export default function Contact() {
  return (
    <div className={`${styles.contact} ${styles.container}`}>
      <h1>Contact</h1>
      <p>
        Github:
        <a href="https://github.com/ace-brown" target="_blank" rel="noopener noreferrer">https://github.com/ace-brown</a>
      </p>
      <p>
        LinkedIn:
        <a href="https://www.linkedin.com/in/kazem-a-3373b1a8/" target="_blank" rel="noopener noreferrer">
          https://www.linkedin.com/in/kazem-a-3373b1a8/
        </a>
      </p>
      <p>
        Email: kazem_abdi@yahoo.com
      </p>
    </div>
  );
}
