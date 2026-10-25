import Link from "next/link";
import Image from "next/image";

import classes from "./about-summary.module.css";
import styles from "../../styles/shame.module.css";
import Button from "../ui/button";
import profileImg from "../../public/images/kazem-abdi.jpg";

export default function AboutSummary() {
  return (
    <section className={`${styles.container} ${classes["about-sum"]}`}>
      <Image
        src={profileImg}
        alt="Portrait of Kazem Abdi Dehnoei"
        className={classes["about-sum__img"]}
        sizes="(max-width: 50em) 90vw, 35vw"
        placeholder="blur"
      />
      <div className={classes["about-sum__content"]}>
        <p className={classes["about-sum__text"]}>
          Hi there. My name is Kazem Abdi Dehnoei, a web developer based in
          Stuttgart, Germany, with extensive experience in crafting responsive
          web apps using HTML, CSS, JavaScript, React, Next.js as well as REST
          APIs among others. Alongside my proficiency in web development, I am
          also interested in innovative technologies such as Blockchain and AI.
          I am also fond of nature; that&apos;s why you see pictures of the sea
          and jungle. On my portfolio website, you can browse through my
          projects and get a glimpse of my skills and expertise. I&apos;m always
          eager to connect with fellow professionals and discuss exciting
          opportunities. Let&apos;s <Link href="/contact">connect</Link>
          and transform our ideas into reality!
        </p>
        <Button link="/about">Learn More</Button>
      </div>
    </section>
  );
}
