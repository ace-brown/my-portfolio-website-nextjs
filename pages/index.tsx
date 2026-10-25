import Seo from "../components/seo";
import Hero from "../components/home-details/hero";
import AboutSummary from "../components/home-details/about-summary";
import Skills from "../components/home-details/skills";
import Experience from "../components/home-details/experience";
import FeaturedProjects from "../components/home-details/featured-projects";

export default function HomePage() {
  return (
    <>
      <Seo />
      <Hero />
      <AboutSummary />
      <Skills />
      <Experience />
      <FeaturedProjects />
    </>
  );
}
