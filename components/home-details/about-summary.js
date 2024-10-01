import Link from "next/link";

import classes from "./about-summary.module.css";
import styles from "../../styles/shame.module.css";
import Button from "../ui/button";

export default function AboutSummary() {
  return (
    <div className={`${styles.container} ${classes["about-sum"]}`}>
      <img
        src="./images/kazem-abdi.jpg"
        className={classes["about-sum__img"]}
      ></img>
      <div className={classes["about-sum__content"]}>
        <p className={classes["about-sum__text"]}>
          Hi there. My name is Kazem Abdi Dehnoei, a web developer based in
          Stuttgart, Germany, with extensive experience in crafting responsive
          web apps using HTML, CSS, JavaScript, React, Next.js as well as Rest
          Api among others. Alongside my proficiency in web development, I am
          also interested in innovative technologies such as Blockchain and AI.
          I am also fond of nature; that's why you see pictures of the sea and
          jungle. On my portfolio website, you can browse through my projects
          and get a glimpse of my skills and expertise. I'm always eager to
          connect with fellow professionals and discuss exciting opportunities.
          Let's <Link href="./contact">connect</Link>
          and transform our ideas into reality!
        </p>
        <Button link="./about">Learn More</Button>
      </div>
    </div>
  );
}
