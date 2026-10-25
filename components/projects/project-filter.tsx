import Link from "next/link";

import { monthName } from "../../lib/site";

import classes from "./project-filter.module.css";

type ProjectFilterProps = {
  years: number[];
  selectedYear?: number;
  selectedMonth?: number;
  /** months of the selected year that have projects */
  months?: number[];
};

type ChipProps = {
  href: string;
  label: string;
  active: boolean;
};

function Chip({ href, label, active }: ChipProps) {
  return (
    <li>
      <Link
        href={href}
        scroll={false}
        className={classes.chip}
        aria-current={active ? "page" : undefined}
      >
        {label}
      </Link>
    </li>
  );
}

export default function ProjectFilter({
  years,
  selectedYear,
  selectedMonth,
  months = [],
}: ProjectFilterProps) {
  return (
    <nav
      className={`container ${classes.filter}`}
      aria-label="Filter projects by date"
    >
      <ul className={classes.row}>
        <Chip href="/projects" label="All" active={!selectedYear} />
        {years.map((year) => (
          <Chip
            key={year}
            href={`/projects/${year}`}
            label={String(year)}
            active={year === selectedYear}
          />
        ))}
      </ul>
      {selectedYear && months.length > 0 && (
        <ul className={`${classes.row} ${classes.months}`}>
          <Chip
            href={`/projects/${selectedYear}`}
            label="All months"
            active={!selectedMonth}
          />
          {months.map((month) => (
            <Chip
              key={month}
              href={`/projects/${selectedYear}/${month}`}
              label={monthName(month)}
              active={month === selectedMonth}
            />
          ))}
        </ul>
      )}
    </nav>
  );
}
