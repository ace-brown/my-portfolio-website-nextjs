import React from "react";

import classes from "./hero.module.css";

export default function Hero() {
  return (
    <div>
      <h1>I am Kazem Abdi Dehnoei</h1>
      <video className={classes["video-bg"]} autoPlay muted loop>
        <source src="/shore.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
