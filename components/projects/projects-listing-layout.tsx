import type { ReactNode } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "motion/react";

import PageHeader from "../ui/page-header";
import ProjectFilter from "./project-filter";
import { monthName } from "../../lib/site";

type ProjectsListingLayoutProps = {
  children: ReactNode;
  years: number[];
  /** number of projects in the current view */
  count: number;
  selectedYear?: number;
  selectedMonth?: number;
  months?: number[];
};

// Stays mounted while switching filters, so the header and the filter bar
// don't re-animate or move; only the project grid (children) changes.
export default function ProjectsListingLayout({
  children,
  years,
  count,
  selectedYear,
  selectedMonth,
  months,
}: ProjectsListingLayoutProps) {
  const router = useRouter();
  const period = selectedYear
    ? [selectedMonth && monthName(selectedMonth), selectedYear]
        .filter(Boolean)
        .join(" ")
    : null;

  return (
    <>
      <PageHeader
        eyebrow={period ? `Work · ${period}` : "Work"}
        title="Projects"
        sup={count}
        intro="A collection of things I've built, from production websites to experiments with React, Node.js and the blockchain. Hover a card to scroll through the page."
      />
      <ProjectFilter
        years={years}
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        months={months}
      />
      {/* crossfade: the old grid fades out, then the new cards ease in (see ProjectGrid) */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.asPath}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeOut" } }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

/** Shared by every projects listing page so they count as one page for animations. */
export const PROJECTS_LISTING_KEY = "projects-listing";
