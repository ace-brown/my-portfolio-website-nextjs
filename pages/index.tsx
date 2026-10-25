import Seo from "../components/seo";
import Hero from "../components/home-details/hero";
import AboutSummary from "../components/home-details/about-summary";
import Skills from "../components/home-details/skills";
import ProjectSummary from "../components/home-details/project-summary";

export default function HomePage() {
  return (
    <>
      <Seo />
      <Hero />
      <AboutSummary />
      <Skills />
      <ProjectSummary />
    </>
  );
}
