// From the CV. Wrap a phrase in **double asterisks** to show it in bold.

export type Job = {
  role: string;
  /** shown after the role, e.g. "Junior" */
  level?: string;
  company: string;
  location?: string;
  /** what the company does */
  about: string;
  start: string;
  end: string;
  highlights: string[];
  tech: string[];
};

export const EXPERIENCE: Job[] = [
  {
    role: "Software Engineer",
    company: "MATVIS GmbH",
    location: "Tübingen",
    about: "ML-powered security applications",
    start: "Aug 2025",
    end: "Sep 2026",
    highlights: [
      "Built an **ICAP server in Python** that connects the security service to proxies and gateways.",
      "Owned frontend architecture end to end: **migrated the codebase from JavaScript to TypeScript**, introduced a consistent, colocated folder structure and clean-code conventions, and upgraded Next.js 14 → 16, MUI 5 → 7 and Webpack → Turbopack, making **builds ~2.5× faster**.",
      "Ran **security testing** of frontend and APIs with **OWASP ZAP** and fixed the findings: CSRF, XSS, cross-domain JavaScript source inclusion, a permissive Access-Control-Allow-Origin header, clickjacking and a Content Security Policy weakness; added automated tests with Playwright and Vitest.",
      "Built a **user-management dashboard** connecting Keycloak and FastAPI services into one end-to-end flow for login, roles and API access (keycloak-js, JWT validation via JWKS).",
      "Developed features and REST endpoints in **Python/FastAPI services** in a microservice setup with PostgreSQL and Docker.",
      "Maintained and improved the **analytics page for AI data** with Recharts, turning thousands of data points into clear, responsive charts; tuned the task table's filtering to be fast and accurate.",
      "**Mentored a junior frontend developer** through daily code reviews and pair programming, and advised colleagues, including backend developers, on clean-code principles.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "TypeScript",
      "Next.js",
      "MUI",
      "Keycloak",
      "PostgreSQL",
      "Docker",
      "OWASP ZAP",
      "Playwright",
    ],
  },
  {
    role: "Software Developer",
    level: "Junior",
    company: "PayperChain GmbH",
    location: "Gladenbach",
    about: "Fintech platform for automated pay-per-use payments",
    start: "Oct 2023",
    end: "Jun 2025",
    highlights: [
      "**Main frontend developer** of a React/Next.js dashboard in a microservice architecture.",
      "**Migrated the company website from TYPO3 to Next.js**: analyzed the page tree, content and templates of the TYPO3 instance and rebuilt them as a React site.",
      "Worked with **Corda**, a private distributed ledger that recorded usage and **automated pay-per-use transactions and payments**.",
      "Built a **fast data table for large API-driven datasets**, with filtering tuned for speed and accuracy.",
      "Built a **library of reusable UI components** with React, TypeScript, MUI and Formik.",
      "Made the dashboard **bilingual (German/English)** with i18next.",
      "Wrote **end-to-end tests with Cypress** and migrated Next.js and MUI to new major versions.",
      "Learned **Spring Boot** to understand the backend team's microservices and work with them effectively.",
      "Maintained the **CI/CD pipeline** and Docker- and Kubernetes-based development and deployment workflows.",
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "MUI",
      "Corda",
      "i18next",
      "Cypress",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Institute of Biochemistry, University of Stuttgart",
    about: "Research institute",
    start: "Mar 2023",
    end: "Sep 2023",
    highlights: [
      "Designed, built and delivered the **FairChemistry web application** in React from scratch.",
      "Maintained the institute's websites (OpenCMS, WordPress, Hugo).",
    ],
    tech: ["React", "OpenCMS", "WordPress", "Hugo"],
  },
  {
    role: "Student Assistant – Web Development",
    company: "IAT, University of Stuttgart",
    about: "In cooperation with Fraunhofer IAO",
    start: "May 2022",
    end: "Mar 2023",
    highlights: [
      "Built custom, interactive **WordPress sites** with PHP, JavaScript and the WordPress REST API.",
    ],
    tech: ["WordPress", "PHP", "JavaScript", "REST API"],
  },
];
