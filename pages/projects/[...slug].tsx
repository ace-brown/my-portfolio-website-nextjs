import type { GetStaticPaths, GetStaticProps } from "next";

import Seo from "../../components/seo";
import ProjectDetail from "../../components/project-details/project-detail";
import ProjectGrid from "../../components/projects/project-grid";
import ProjectsListingLayout, {
  PROJECTS_LISTING_KEY,
} from "../../components/projects/projects-listing-layout";
import {
  getAllProjects,
  getFilteredProjects,
  getNextProject,
  getProjectById,
  getProjectMonths,
  getProjectYears,
  type Project,
} from "../../data/projects";
import type { PageWithLayout } from "../../lib/page-layout";
import { monthName } from "../../lib/site";

/*
 * One catch-all route serves both:
 *   /projects/<id>                project detail, e.g. /projects/p1
 *   /projects/<year>[/<month>]    projects filtered by date, e.g. /projects/2022/7
 * They can't be separate pages: a [projectId] page would also match /projects/2022.
 */

type ProjectPageProps = {
  kind: "project";
  project: Project;
  nextProject: Project;
};

type FilterPageProps = {
  kind: "filter";
  year: number;
  month: number | null;
  years: number[];
  months: number[];
  projects: Project[];
};

type ProjectsSlugPageProps = ProjectPageProps | FilterPageProps;

function ProjectPage({ project, nextProject }: ProjectPageProps) {
  return (
    <>
      <Seo
        title={project.title}
        description={`${project.title}: ${project.tech}. ${project.descriptionFull.slice(0, 120).trim()}…`}
        image={project.image?.src}
      />
      <ProjectDetail project={project} nextProject={nextProject} />
    </>
  );
}

// the header and filter bar come from ProjectsListingLayout (see getLayout below)
function FilterPage({ year, month, projects }: FilterPageProps) {
  const period = month ? `${monthName(month)} ${year}` : String(year);

  return (
    <>
      <Seo title={`Projects from ${period}`} />
      <ProjectGrid
        projects={projects}
        emptyMessage={`No projects from ${period}.`}
      />
    </>
  );
}

const ProjectsSlugPage: PageWithLayout<ProjectsSlugPageProps> = (props) => {
  return props.kind === "project" ? (
    <ProjectPage {...props} />
  ) : (
    <FilterPage {...props} />
  );
};

ProjectsSlugPage.getLayout = (page, props) =>
  props.kind === "filter" ? (
    <ProjectsListingLayout
      years={props.years}
      count={props.projects.length}
      selectedYear={props.year}
      selectedMonth={props.month ?? undefined}
      months={props.months}
    >
      {page}
    </ProjectsListingLayout>
  ) : (
    page
  );

ProjectsSlugPage.layoutKey = (props) =>
  props.kind === "filter" ? PROJECTS_LISTING_KEY : undefined;

export default ProjectsSlugPage;

// Every project id, every year with projects, and all 12 months of those years
// (so older month links keep working). Anything else gets the 404 page.
export const getStaticPaths: GetStaticPaths = () => ({
  paths: [
    ...getAllProjects().map((project) => ({ params: { slug: [project.id] } })),
    ...getProjectYears().flatMap((year) => [
      { params: { slug: [String(year)] } },
      ...Array.from({ length: 12 }, (_, index) => ({
        params: { slug: [String(year), String(index + 1)] },
      })),
    ]),
  ],
  fallback: false,
});

export const getStaticProps: GetStaticProps<
  ProjectsSlugPageProps,
  { slug: string[] }
> = ({ params }) => {
  const [first, second] = params?.slug ?? [];

  const project = second === undefined ? getProjectById(first) : undefined;
  if (project) {
    return {
      props: {
        kind: "project",
        project,
        nextProject: getNextProject(project.id),
      },
    };
  }

  const year = Number(first);
  const month = second ? Number(second) : null;

  return {
    props: {
      kind: "filter",
      year,
      month,
      years: getProjectYears(),
      months: getProjectMonths(year),
      projects: getFilteredProjects({ year, month: month ?? undefined }),
    },
  };
};
