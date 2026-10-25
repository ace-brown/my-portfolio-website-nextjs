import Link from "next/link";
import { LayoutGroup, motion } from "motion/react";

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
  group: string;
};

function Chip({ href, label, active, group }: ChipProps) {
  return (
    <li>
      <Link
        href={href}
        scroll={false}
        className={classes.chip}
        aria-current={active ? "page" : undefined}
      >
        {active && (
          <motion.span
            layoutId={`filter-${group}`}
            className={classes.active}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
          />
        )}
        <span className={classes.label}>{label}</span>
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
      <LayoutGroup>
        <ul className={classes.row}>
          <Chip
            href="/projects"
            label="All"
            active={!selectedYear}
            group="year"
          />
          {years.map((year) => (
            <Chip
              key={year}
              href={`/projects/${year}`}
              label={String(year)}
              active={year === selectedYear}
              group="year"
            />
          ))}
        </ul>
        {selectedYear && months.length > 0 && (
          <motion.ul
            className={`${classes.row} ${classes.months}`}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Chip
              href={`/projects/${selectedYear}`}
              label="All months"
              active={!selectedMonth}
              group="month"
            />
            {months.map((month) => (
              <Chip
                key={month}
                href={`/projects/${selectedYear}/${month}`}
                label={monthName(month)}
                active={month === selectedMonth}
                group="month"
              />
            ))}
          </motion.ul>
        )}
      </LayoutGroup>
    </nav>
  );
}
