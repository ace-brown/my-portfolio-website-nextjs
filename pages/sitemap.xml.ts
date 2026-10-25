import type { GetServerSideProps } from "next";

import { getAllProjects } from "../data/projects";
import { SITE } from "../lib/site";

function buildSitemap() {
  const paths = [
    "",
    "/about",
    "/contact",
    "/projects",
    ...getAllProjects().map((project) => `/projects/${project.id}`),
  ];
  const urls = paths
    .map((path) => `  <url><loc>${SITE.url}${path}</loc></url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "application/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate",
  );
  res.write(buildSitemap());
  res.end();
  return { props: {} };
};

export default function Sitemap() {
  return null;
}
