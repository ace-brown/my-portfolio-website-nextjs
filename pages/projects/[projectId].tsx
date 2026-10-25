import type { GetStaticPaths, GetStaticProps } from "next";

import Seo from "../../components/seo";
import ProjectSummary from "../../components/project-details/project-summary";
import {
  getAllProjects,
  getProjectById,
  type Project,
} from "../../data/projects";

type ProjectDetailPageProps = {
  project: Project;
};

export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <>
      <Seo
        title={project.title}
        description={`${project.title}: ${project.tech}. ${project.descriptionFull.slice(0, 120).trim()}…`}
        image={project.image.src}
      />
      <ProjectSummary project={project} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: getAllProjects().map((project) => ({
    params: { projectId: project.id },
  })),
  // unknown ids get the 404 page
  fallback: false,
});

export const getStaticProps: GetStaticProps<
  ProjectDetailPageProps,
  { projectId: string }
> = ({ params }) => {
  const project = params && getProjectById(params.projectId);

  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
};
