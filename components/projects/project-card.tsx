import Link from "next/link";
import type { PointerEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";

import BrowserFrame from "../ui/browser-frame";
import TechChips from "./tech-chips";
import type { Project } from "../../data/projects";

import classes from "./project-card.module.css";

const MotionLink = motion.create(Link);

/** Whole card links to the project; it tilts towards the pointer in 3D. */
export default function ProjectCard({ project }: { project: Project }) {
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const springConfig = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(
    useTransform(pointerY, [0, 1], [7, -7]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(pointerX, [0, 1], [-7, 7]),
    springConfig,
  );

  const moveHandler = (event: PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width);
    pointerY.set((event.clientY - rect.top) / rect.height);
  };

  const leaveHandler = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  return (
    <MotionLink
      href={`/projects/${project.id}`}
      className={`${classes.card} pan-trigger`}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      onPointerMove={moveHandler}
      onPointerLeave={leaveHandler}
    >
      <BrowserFrame
        bare={project.ownChrome}
        image={project.image}
        alt=""
        url={project.link}
        sizes="(max-width: 40em) 90vw, (max-width: 70em) 45vw, 380px"
      />
      <div className={classes.body}>
        <div className={classes.top}>
          <h2 className={classes.title}>{project.title}</h2>
          <span className={classes.icon} aria-hidden>
            <FiArrowUpRight />
          </span>
        </div>
        <TechChips project={project} small />
        <p className={classes.year}>
          {new Date(project.date).getUTCFullYear()}
        </p>
      </div>
    </MotionLink>
  );
}
