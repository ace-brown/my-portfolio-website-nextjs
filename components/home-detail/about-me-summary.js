import classes from "./about-me-summary.module.css";
import styles from "../../styles/shame.module.css";
import Button from "../ui/button";

export default function AboutMeSummary() {
  return (
    <div className={`${styles.container} ${classes["about-me-sum"]}`}>
      <img
        src="./images/philipp.jpg"
        className={classes["about-me-sum__img"]}
      ></img>
      <div className={classes["about-me-sum__content"]}>
        <p className={classes["about-me-sum__text"]}>
          My name is Kazem Abdi Dehnoei, a web developer based in Stuttgart,
          Germany, with extensive experience in crafting responsive web apps
          using HTML, CSS, JavaScript, React, and Next.js. Alongside my
          proficiency in web development, I am deeply passionate about
          blockchain technology and its potential for driving innovation. On my
          portfolio website, you can explore my projects and find opportunities
          for collaboration to create impactful digital solutions. Let's connect
          and transform our ideas into reality!
        </p>
        <Button>Learn More</Button>
      </div>
    </div>
  );
}
