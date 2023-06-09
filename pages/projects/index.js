import React from "react";
import { Fragment } from "react";

import ProjectList from "../../components/projects/project-list";
import ProjectSearch from "../../components/projects/project-search";
import { getAllProject } from "../../dummy-project";

export default function AllProjectsPage() {
  const allProjects = getAllProject();

  return (
    <Fragment>
      <ProjectSearch />
      <ProjectList items={allProjects} />
    </Fragment>
  );
}
