import Seo from "../../components/seo";
import ProjectGrid from "../../components/projects/project-grid";
import ProjectsListingLayout, {
  PROJECTS_LISTING_KEY,
} from "../../components/projects/projects-listing-layout";
import { getAllProjects, getProjectYears } from "../../data/projects";
import type { PageWithLayout } from "../../lib/page-layout";

const AllProjectsPage: PageWithLayout = () => {
  return (
    <>
      <Seo
        title="Projects"
        description="Web, React, Next.js and blockchain projects built by Kazem Abdi Dehnoei."
      />
      <ProjectGrid projects={getAllProjects()} />
    </>
  );
};

AllProjectsPage.getLayout = (page) => (
  <ProjectsListingLayout
    years={getProjectYears()}
    count={getAllProjects().length}
  >
    {page}
  </ProjectsListingLayout>
);

AllProjectsPage.layoutKey = () => PROJECTS_LISTING_KEY;

export default AllProjectsPage;
