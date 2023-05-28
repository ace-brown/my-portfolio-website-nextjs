import React from "react";

import ProjectList from "../../components/projects/project-list";

import { getFeaturedProject } from "../../dummy-project";

export default function AllProjectsPage() {
  const featuredProjects = getFeaturedProject();

  return (
    <ul>
      <ProjectList items={featuredProjects} />
    </ul>
  );
}
