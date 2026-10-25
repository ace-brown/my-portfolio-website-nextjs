import Seo from "../../components/seo";
import PageHeader from "../../components/ui/page-header";
import ProjectFilter from "../../components/projects/project-filter";
import ProjectGrid from "../../components/projects/project-grid";
import { getAllProjects, getProjectYears } from "../../data/projects";

export default function AllProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <Seo
        title="Projects"
        description="Web, React, Next.js and blockchain projects built by Kazem Abdi Dehnoei."
      />
      <PageHeader
        eyebrow="Work"
        title="Projects"
        sup={projects.length}
        intro="A collection of things I've built, from production websites to experiments with React, Node.js and the blockchain. Hover a card to scroll through the page."
      />
      <ProjectFilter years={getProjectYears()} />
      <ProjectGrid projects={projects} />
    </>
  );
}
