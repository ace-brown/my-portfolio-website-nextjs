import Button from "../ui/button";
import Reveal from "../ui/reveal";
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
        <Reveal
          as="li"
          key={project.id}
          delay={(index % 3) * 0.08}
          className={classes.item}
        >
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </ul>
  );
}
