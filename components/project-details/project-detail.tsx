import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { motion } from "motion/react";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";

import Button from "../ui/button";
import BrowserFrame from "../ui/browser-frame";
import SiteMirror from "../ui/site-mirror";
import Reveal from "../ui/reveal";
import SplitText from "../ui/split-text";
import TechChips from "../projects/tech-chips";
import type { Project } from "../../data/projects";
import { richText } from "../../lib/rich-text";
import { formatDate } from "../../lib/site";

import classes from "./project-detail.module.css";

type ProjectDetailProps = {
  project: Project;
  nextProject: Project;
};

export default function ProjectDetail({
  project,
  nextProject,
}: ProjectDetailProps) {
  const { title, descriptionFull, link, repo, image, date } = project;
  const isCode = link.includes("github.com");
  const longestWord = Math.max(...title.split(" ").map((word) => word.length));
  const paragraphs = descriptionFull
    .split("\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <article>
      <header className={`container ${classes.header}`}>
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/projects" className={classes.back}>
            <FiArrowLeft aria-hidden /> All projects
          </Link>
        </motion.div>
        <h1
          className={classes.title}
          // the font size scales with the longest word so it never overflows
          style={{ "--chars": longestWord } as CSSProperties}
        >
          <SplitText text={title} delay={0.1} stagger={0.025} />
        </h1>

        <motion.dl
          className={classes.meta}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <dt>Date</dt>
            <dd>
              <time dateTime={date}>{formatDate(date)}</time>
            </dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>
              <TechChips project={project} />
            </dd>
          </div>
          <div>
            <dt className="visually-hidden">Links</dt>
            <dd className={classes.links}>
              <Button link={link} external arrow>
                {isCode ? "View code" : "Visit site"}
              </Button>
              {repo && (
                <Button link={repo} external variant="ghost" arrow>
                  View code
                </Button>
              )}
            </dd>
          </div>
        </motion.dl>
      </header>

      <Reveal className={`container ${classes.preview}`} delay={0.3}>
        <BrowserFrame
          bare={project.ownChrome}
          image={image}
          alt={`Screenshot of ${title}`}
          url={link}
          mode="scroll"
          priority
          sizes="(max-width: 1200px) 95vw, 1200px"
        >
          {!image && <SiteMirror alt={`${title}, shown inside itself`} />}
        </BrowserFrame>
        {image && (
          <p className={classes.hint}>
            Scroll inside the window to see the full page
          </p>
        )}
      </Reveal>

      <section
        className={`container ${classes.overview}`}
        aria-labelledby="overview-title"
      >
        <Reveal>
          <h2 id="overview-title" className="eyebrow">
            Overview
          </h2>
        </Reveal>
        <div className={classes.text}>
          {paragraphs.map((paragraph, index) => (
            <Reveal as="p" key={index} delay={index * 0.08}>
              {paragraph}
            </Reveal>
          ))}
        </div>
      </section>

      {project.highlights && (
        <section
          className={`container ${classes.overview}`}
          aria-labelledby="highlights-title"
        >
          <Reveal>
            <h2 id="highlights-title" className="eyebrow">
              Highlights
            </h2>
          </Reveal>
          <ul className={classes.highlights}>
            {project.highlights.map((highlight, index) => (
              <Reveal as="li" key={highlight} delay={index * 0.06}>
                {richText(highlight)}
              </Reveal>
            ))}
          </ul>
        </section>
      )}

      <Link href={`/projects/${nextProject.id}`} className={classes.next}>
        <div className={`container ${classes["next-inner"]}`}>
          <div>
            <p className="eyebrow">Next project</p>
            <p className={classes["next-title"]}>
              {nextProject.title}
              <FiArrowUpRight aria-hidden className={classes["next-icon"]} />
            </p>
          </div>
          <div className={classes["next-thumb"]}>
            {nextProject.image ? (
              <Image
                src={nextProject.image}
                alt=""
                fill
                sizes="320px"
                className={classes["next-img"]}
              />
            ) : (
              <SiteMirror />
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
