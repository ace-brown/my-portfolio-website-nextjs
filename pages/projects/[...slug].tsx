import type { GetStaticPaths, GetStaticProps } from "next";

import Seo from "../../components/seo";
import ProjectList from "../../components/projects/project-list";
import ProjectSearch from "../../components/projects/project-search";
import ResultsTitle from "../../components/projects/results-title";
import {
  getFilteredProjects,
  getProjectYears,
  type Project,
} from "../../data/projects";
import { monthName } from "../../lib/site";

type FilteredProjectPageProps = {
  year: number;
  month: number;
  years: number[];
  projects: Project[];
};

export default function FilteredProjectPage({
  year,
  month,
  years,
  projects,
}: FilteredProjectPageProps) {
  return (
    <>
      <Seo title={`Projects from ${monthName(month)} ${year}`} />
      {/* key resets the selects when navigating between filters */}
      <ProjectSearch
        key={`${year}-${month}`}
        years={years}
        selectedYear={year}
        selectedMonth={month}
      />
      <ResultsTitle year={year} month={month} />
      {projects.length === 0 ? (
        <p className="center">No project found</p>
      ) : (
        <ProjectList items={projects} />
      )}
    </>
  );
}

// One page per month for every year that has projects, e.g. /projects/2022/7.
// Anything else (invalid dates, other years) gets the 404 page.
export const getStaticPaths: GetStaticPaths = () => ({
  paths: getProjectYears().flatMap((year) =>
    Array.from({ length: 12 }, (_, index) => ({
      params: { slug: [String(year), String(index + 1)] },
    })),
  ),
  fallback: false,
});

export const getStaticProps: GetStaticProps<
  FilteredProjectPageProps,
  { slug: string[] }
> = ({ params }) => {
  const year = Number(params?.slug[0]);
  const month = Number(params?.slug[1]);

  return {
    props: {
      year,
      month,
      years: getProjectYears(),
      projects: getFilteredProjects({ year, month }),
    },
  };
};
