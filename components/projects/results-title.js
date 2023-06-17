import Button from "../ui/button";
import classes from "./results-title.module.css";

function ResultsTitle(props) {
  const { date } = props;

  return (
    <section className={classes.title}>
      <Button className={classes["btn--mod"]} link="/projects">
        Show all projects
      </Button>
    </section>
  );
}

export default ResultsTitle;
