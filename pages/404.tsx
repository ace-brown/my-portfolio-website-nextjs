import Seo from "../components/seo";
import Button from "../components/ui/button";

import classes from "../styles/not-found.module.css";

export default function NotFoundPage() {
  return (
    <section className={`container ${classes.page}`}>
      <Seo title="Page not found" />
      <p className={classes.code} data-text="404" aria-hidden>
        404
      </p>
      <h1 className={classes.title}>This page drifted out to sea.</h1>
      <p className={classes.text}>
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <div className={classes.actions}>
        <Button link="/" arrow>
          Back to home
        </Button>
        <Button link="/projects" variant="ghost">
          Browse projects
        </Button>
      </div>
    </section>
  );
}
