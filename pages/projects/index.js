import React from "react";

import ProjectList from "../../components/projects/project-list";
import ProjectSearch from "../../components/projects/project-search";

import { getAllProject } from "../../dummy-project";

export default function AllProjectsPage() {
  const allProjects = getAllProject();

  return (
    <ul>
      <ProjectSearch />
      <ProjectList items={allProjects} />
    </ul>
  );
}
