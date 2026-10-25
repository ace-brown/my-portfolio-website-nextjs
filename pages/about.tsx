import Image from "next/image";

import Seo from "../components/seo";
import Journey from "../components/about/journey";
import Button from "../components/ui/button";
import PageHeader from "../components/ui/page-header";
import Reveal from "../components/ui/reveal";
import profileImg from "../public/images/kazem-abdi.jpg";

import classes from "../styles/about.module.css";

const BIO = [
  "Hello! My name is Kazem Abdi Dehnoei, and I am delighted to welcome you to my portfolio website. My current base is in the beautiful city of Stuttgart, Germany, where I am immersing myself in professional pursuits. With several years of experience in web development, I have honed my skills in crafting exceptional digital experiences. My expertise lies in building responsive web applications using a wide range of technologies, including HTML, CSS, JavaScript, React, Next.js, Node.js, and REST APIs, as well as Python, Rust, Java, Solidity, and more.",
  "Through my work, I strive to create intuitive and user-friendly interfaces that captivate and engage users. While my passion lies in web development, I am also enthusiastic about emerging technologies such as blockchain and AI. I closely follow the latest trends and developments in the blockchain space, recognizing its potential to revolutionize industries and disrupt traditional systems.",
  "Through this portfolio website, I aim to showcase my skills, projects, and experiences, providing you with a glimpse into my journey as a web developer. I invite you to explore my work and connect with me for exciting collaborations or opportunities. Let's bring our ideas to life and make a positive impact on the digital landscape together.",
];

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="About Kazem Abdi Dehnoei, a web developer in Stuttgart working with React, Next.js, Node.js and blockchain technologies."
      />
      <PageHeader
        eyebrow="About"
        title="More about me"
        intro="Web developer in Stuttgart. Curious about blockchain and AI. Happiest near the sea."
      />

      <section className={`container ${classes.bio}`}>
        <Reveal className={classes.portrait}>
          <Image
            src={profileImg}
            alt="Portrait of Kazem Abdi Dehnoei"
            sizes="(max-width: 56em) 90vw, 420px"
            placeholder="blur"
            priority
            className={classes["portrait-img"]}
          />
        </Reveal>
        <div className={classes.text}>
          {BIO.map((paragraph, index) => (
            <Reveal as="p" key={index} delay={index * 0.08}>
              {paragraph}
            </Reveal>
          ))}
          <Reveal className={classes.actions} delay={0.2}>
            <Button link="/projects" arrow>
              See my projects
            </Button>
            <Button link="/contact" variant="ghost">
              Get in touch
            </Button>
          </Reveal>
        </div>
      </section>

      <Journey />
    </>
  );
}
