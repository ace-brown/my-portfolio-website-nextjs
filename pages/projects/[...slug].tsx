import type { GetStaticPaths, GetStaticProps } from "next";

import Seo from "../../components/seo";
import PageHeader from "../../components/ui/page-header";
import ProjectFilter from "../../components/projects/project-filter";
import ProjectGrid from "../../components/projects/project-grid";
import {
  getFilteredProjects,
  getProjectMonths,
  getProjectYears,
  type Project,
} from "../../data/projects";
import { monthName } from "../../lib/site";

type FilteredProjectPageProps = {
  year: number;
  month: number | null;
  years: number[];
  months: number[];
  projects: Project[];
};

export default function FilteredProjectPage({
  year,
  month,
  years,
  months,
  projects,
}: FilteredProjectPageProps) {
  const period = month ? `${monthName(month)} ${year}` : String(year);

  return (
    <>
      <Seo title={`Projects from ${period}`} />
      <PageHeader
        eyebrow={`Work · ${period}`}
        title="Projects"
        sup={projects.length}
        intro={`Everything I built in ${period}.`}
      />
      <ProjectFilter
        years={years}
        selectedYear={year}
        selectedMonth={month ?? undefined}
        months={months}
      />
      <ProjectGrid
        projects={projects}
        emptyMessage={`No projects from ${period}.`}
      />
    </>
  );
}

// /projects/<year> for every year with projects, plus /projects/<year>/<month>
// for all 12 months so older links keep working. Anything else gets the 404 page.
export const getStaticPaths: GetStaticPaths = () => ({
  paths: getProjectYears().flatMap((year) => [
    { params: { slug: [String(year)] } },
    ...Array.from({ length: 12 }, (_, index) => ({
      params: { slug: [String(year), String(index + 1)] },
    })),
  ]),
  fallback: false,
});

export const getStaticProps: GetStaticProps<
  FilteredProjectPageProps,
  { slug: string[] }
> = ({ params }) => {
  const year = Number(params?.slug[0]);
  const month = params?.slug[1] ? Number(params.slug[1]) : null;

  return {
    props: {
      year,
      month,
      years: getProjectYears(),
      months: getProjectMonths(year),
      projects: getFilteredProjects({ year, month: month ?? undefined }),
    },
  };
};
