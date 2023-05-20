import React from "react";

import { getFeaturedProject } from "../dummy-project";
import ProjectList from "../components/projects/project-list";

export default function HomePage() {
  const featuredProjects = getFeaturedProject();

  return (
    <ul>
      <ProjectList items={featuredProjects} />
    </ul>
  );
}
