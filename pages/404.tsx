import Seo from "../components/seo";
import Button from "../components/ui/button";
import styles from "../styles/shame.module.css";

export default function NotFoundPage() {
  return (
    <div className={`${styles.contact} ${styles.container}`}>
      <Seo title="Page not found" />
      <h1>Page not found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Button link="/">Back to home</Button>
    </div>
  );
}
