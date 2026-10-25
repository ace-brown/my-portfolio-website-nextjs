import { motion } from "motion/react";

import Button from "../ui/button";
import ProjectCard from "./project-card";
import type { Project } from "../../data/projects";

import classes from "./project-grid.module.css";

type ProjectGridProps = {
  projects: Project[];
  emptyMessage?: string;
};

export default function ProjectGrid({
  projects,
  emptyMessage = "No projects found.",
}: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className={`container ${classes.empty}`}>
        <p>{emptyMessage}</p>
        <Button link="/projects" variant="ghost">
          Show all projects
        </Button>
      </div>
    );
  }

  return (
    <ul className={`container ${classes.grid}`}>
      {projects.map((project, index) => (
        <motion.li
          key={project.id}
          className={classes.item}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -5% 0px" }}
          // the fade eases in and out gently; the rise settles slowly at the end.
          // Cards follow one another, capped so long lists don't lag.
          transition={{
            opacity: {
              duration: 1.2,
              ease: [0.4, 0, 0.2, 1],
              delay: Math.min(index, 5) * 0.12,
            },
            y: {
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1],
              delay: Math.min(index, 5) * 0.12,
            },
          }}
        >
          <ProjectCard project={project} />
        </motion.li>
      ))}
    </ul>
  );
}
