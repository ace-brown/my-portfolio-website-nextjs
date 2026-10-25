import Button from "../ui/button";
import { monthName } from "../../lib/site";

import classes from "./results-title.module.css";

type ResultsTitleProps = {
  year: number;
  month: number;
};

export default function ResultsTitle({ year, month }: ResultsTitleProps) {
  return (
    <section className={classes.title}>
      <h1>
        Projects from {monthName(month)} {year}
      </h1>
      <Button className={classes["btn--mod"]} link="/projects">
        Show all projects
      </Button>
    </section>
  );
}
