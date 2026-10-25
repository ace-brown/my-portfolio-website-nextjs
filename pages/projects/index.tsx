import Seo from "../../components/seo";
import ProjectList from "../../components/projects/project-list";
import ProjectSearch from "../../components/projects/project-search";
import { getAllProjects, getProjectYears } from "../../data/projects";

export default function AllProjectsPage() {
  return (
    <>
      <Seo
        title="Projects"
        description="Web, React, Next.js and blockchain projects built by Kazem Abdi Dehnoei."
      />
      <h1 className="visually-hidden">All projects</h1>
      <ProjectSearch years={getProjectYears()} />
      <ProjectList items={getAllProjects()} />
    </>
  );
}
