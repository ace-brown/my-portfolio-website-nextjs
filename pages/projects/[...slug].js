import React from "react";
import { Fragment } from "react";
import { useRouter } from "next/router";

import { getFilteredProject } from "../../dummy-project";
import ProjectList from "../../components/projects/project-list";
import ProjectSearch from "../../components/projects/project-search";
import ResultsTitle from "../../components/projects/results-title";

export default function FilteredProjectPage() {
  const router = useRouter();
  const filteredDate = router.query.slug;

  if (!filteredDate) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filteredDate[0];
  const filteredMonth = filteredDate[1];

  // filteredYear and month are string, but we want number, so by adding a + we make them number
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  // checking if the entered date is valid
  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numMonth > 12 ||
    numMonth < 1 ||
    numYear < 2021 ||
    numYear > 2030
  ) {
    return (
      <Fragment>
        <ProjectSearch />
        <p className="center">
          Invalid filter. Please adjust your values and try again.
        </p>
        ;
      </Fragment>
    );
  }

  const filteredProject = getFilteredProject({
    year: numYear,
    month: numMonth,
  });

  if (!filteredProject || filteredProject.length === 0) {
    return (
      <Fragment>
        <ProjectSearch />
        <ResultsTitle />
        <p className="center">No project found</p>;
      </Fragment>
    );
  }

  return (
    <Fragment>
      <ProjectSearch />
      <ResultsTitle />
      <ProjectList items={filteredProject} />
    </Fragment>
  );
}
