import Seo from "../components/seo";
import Hero from "../components/home-details/hero";
import AboutSummary from "../components/home-details/about-summary";
import Skills from "../components/home-details/skills";
import Experience from "../components/home-details/experience";
import FeaturedProjects from "../components/home-details/featured-projects";
import { SITE } from "../lib/site";
import { LANGUAGES } from "../data/profile";

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: "Full-Stack Engineer",
  url: SITE.url,
  image: `${SITE.url}${SITE.ogImage}`,
  description: SITE.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stuttgart",
    addressCountry: "DE",
  },
  sameAs: [SITE.github, SITE.linkedin],
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "NestJS",
    "Python",
    "FastAPI",
    "AI agents",
    "LLM integration",
    "Web security",
  ],
  knowsLanguage: LANGUAGES.map((language) => language.name),
};

export default function HomePage() {
  return (
    <>
      <Seo jsonLd={PERSON_JSON_LD} />
      <Hero />
      <AboutSummary />
      <Skills />
      <Experience />
      <FeaturedProjects />
    </>
  );
}
