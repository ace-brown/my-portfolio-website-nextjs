import React from "react";
import { Fragment } from "react";
import { useRouter } from "next/router";

import ProjectList from "../../components/projects/project-list";
import ProjectSearch from "../../components/projects/project-search";

import { getAllProject } from "../../dummy-project";

export default function AllProjectsPage() {
  const allProjects = getAllProject();
  const router = useRouter();

  const findProjectHandler = (year, month) => {
    const filterdProjectFullPath = `/projects/${year}/${month}`;
    router.push(filterdProjectFullPath);
  };

  return (
    <Fragment>
      <ProjectSearch onSearch={findProjectHandler} />
      <ProjectList items={allProjects} />
    </Fragment>
  );
}
