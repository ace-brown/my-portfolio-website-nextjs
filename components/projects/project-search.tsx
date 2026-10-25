import { useRef, type FormEvent } from "react";
import { useRouter } from "next/router";

import Button from "../ui/button";
import { monthName } from "../../lib/site";

import classes from "./project-search.module.css";
import styles from "../../styles/shame.module.css";

type ProjectSearchProps = {
  years: number[];
  selectedYear?: number;
  selectedMonth?: number;
};

const MONTHS = Array.from({ length: 12 }, (_, index) => index + 1);

export default function ProjectSearch({
  years,
  selectedYear,
  selectedMonth,
}: ProjectSearchProps) {
  const router = useRouter();
  const monthInputRef = useRef<HTMLSelectElement>(null);
  const yearInputRef = useRef<HTMLSelectElement>(null);

  const projectSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const year = yearInputRef.current?.value;
    const month = monthInputRef.current?.value;

    router.push(`/projects/${year}/${month}`);
  };

  return (
    <form
      className={` ${styles.container} ${classes.form}`}
      onSubmit={projectSubmitHandler}
      aria-label="Filter projects by date"
    >
      <div className={classes["form__controls"]}>
        <div className={classes["form__control"]}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef} defaultValue={selectedYear}>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className={classes["form__control"]}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef} defaultValue={selectedMonth}>
            {MONTHS.map((month) => (
              <option key={month} value={month}>
                {monthName(month)}
              </option>
            ))}
          </select>
        </div>

        <Button type="submit">Find</Button>
      </div>
    </form>
  );
}
