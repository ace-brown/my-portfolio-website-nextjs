import Seo from "../components/seo";
import Button from "../components/ui/button";
import classes from "../styles/shame.module.css";

export default function About() {
  return (
    <div className={classes.about}>
      <Seo
        title="About"
        description="About Kazem Abdi Dehnoei, a web developer in Stuttgart working with React, Next.js, Node.js and blockchain technologies."
      />
      <h1>More about me</h1>
      <p>
        Hello! My name is Kazem Abdi Dehnoei, and I am delighted to welcome you
        to my portfolio website. My current base is in the beautiful city of
        Stuttgart, Germany, where I am immersing myself in professional
        pursuits. With several years of experience in web development, I have
        honed my skills in crafting exceptional digital experiences. My
        expertise lies in building responsive web applications using a wide
        range of technologies, including HTML, CSS, JavaScript, React, Next.js,
        Node.js, and REST APIs, as well as Python, Rust, Java, Solidity, and
        more.
        <br /> <br />
        Through my work, I strive to create intuitive and user-friendly
        interfaces that captivate and engage users. While my passion lies in web
        development, I am also enthusiastic about emerging technologies such as
        blockchain and AI. I closely follow the latest trends and developments
        in the blockchain space, recognizing its potential to revolutionize
        industries and disrupt traditional systems.
        <br /> <br />
        Through this portfolio website, I aim to showcase my skills, projects,
        and experiences, providing you with a glimpse into my journey as a web
        developer. I invite you to explore my work and connect with me for
        exciting collaborations or opportunities. Let&apos;s bring our ideas to
        life and make a positive impact on the digital landscape together.
      </p>
      <div className={classes["about-cta"]}>
        <Button link="/projects">See my projects</Button>
        <Button link="/contact">Get in touch</Button>
      </div>
    </div>
  );
}
