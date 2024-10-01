import React from "react";
import { useRouter } from "next/router";

import ProjectSummary from "../../components/project-details/project-summary";
import { getProjectById } from "../../dummy-project";


export default function ProjectDetailPage() {
  const router = useRouter();

  const projectId = router.query.projectId;
  console.log(projectId);
  const project = getProjectById(projectId);

  if (!project) {
    return <p>Loading...</p>;
  }

  return (

    <ProjectSummary
      title={project.title}
      descriptionFull={project.descriptionFull}
      tech={project.tech}
      link={project.link}
      image={project.image}
    />


  );
}
