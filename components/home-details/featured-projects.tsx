import Link from "next/link";
import { useRef, type CSSProperties } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";

import Button from "../ui/button";
import BrowserFrame from "../ui/browser-frame";
import SiteMirror from "../ui/site-mirror";
import SectionHeading from "../ui/section-heading";
import TechChips from "../projects/tech-chips";
import {
  getAllProjects,
  getFeaturedProjects,
  type Project,
} from "../../data/projects";
import { formatDate } from "../../lib/site";
import { useMediaQuery } from "../../lib/use-media-query";

import classes from "./featured-projects.module.css";

// how many featured projects the home page shows
const FEATURED_COUNT = 4;

type StackCardProps = {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
  stacked: boolean;
};

function excerpt(text: string, length = 190) {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length > length
    ? `${clean
        .slice(0, length)
        .replace(/\s\S*$/, "")
        .replace(/[\s.,;:]+$/, "")}…`
    : clean;
}

function StackCard({
  project,
  index,
  total,
  progress,
  stacked,
}: StackCardProps) {
  // cards further back in the stack shrink a little as later cards slide over them
  const targetScale = 1 - (total - 1 - index) * 0.04;
  const scale = useTransform(
    progress,
    [index / total, 1],
    [1, stacked ? targetScale : 1],
  );

  return (
    <div className={classes.item} style={{ "--index": index } as CSSProperties}>
      <motion.article
        className={`${classes.card} pan-trigger`}
        style={{ scale }}
      >
        <div className={classes.info}>
          <p className={classes.counter}>
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </p>
          <h3 className={classes.title}>
            <Link
              href={`/projects/${project.id}`}
              className={classes["title-link"]}
            >
              {project.title}
            </Link>
          </h3>
          <p className={classes.excerpt}>{excerpt(project.descriptionFull)}</p>
          <TechChips project={project} />
          <div className={classes.footer}>
            <time dateTime={project.date} className={classes.date}>
              {formatDate(project.date)}
            </time>
            <Link href={`/projects/${project.id}`} className={classes.more}>
              Case study
              <span className={classes["more-icon"]}>
                <FiArrowUpRight aria-hidden />
              </span>
            </Link>
          </div>
        </div>
        <div className={classes.preview}>
          <BrowserFrame
            bare={project.ownChrome}
            image={project.image}
            alt={`Screenshot of ${project.title}`}
            url={project.link}
            sizes="(max-width: 56em) 90vw, 600px"
          >
            {!project.image && (
              <SiteMirror alt={`${project.title}, shown inside itself`} />
            )}
          </BrowserFrame>
        </div>
      </motion.article>
    </div>
  );
}

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const projects = getFeaturedProjects().slice(0, FEATURED_COUNT);
  const stacked = useMediaQuery("(min-width: 56em)");
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className={classes.section} aria-labelledby="work-title">
      <div className="container">
        <SectionHeading
          id="work-title"
          eyebrow="04 — Selected work"
          title="Featured projects"
          aside={
            <Button link="/projects" variant="ghost" arrow>
              All {getAllProjects().length} projects
            </Button>
          }
        />
        <div ref={containerRef} className={classes.stack}>
          {projects.map((project, index) => (
            <StackCard
              key={project.id}
              project={project}
              index={index}
              total={projects.length}
              progress={scrollYProgress}
              stacked={stacked}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
