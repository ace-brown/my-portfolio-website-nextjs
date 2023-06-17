import React from "react";

import ProjectList from "../projects/project-list";
import getFeaturedProject from "../../dummy-project";

export default function ProjectSummary() {
  const projects = getFeaturedProject();

  return <ProjectList items={projects} />;
}
