import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";

/**
 * A page can wrap itself in a layout that stays mounted while navigating
 * between pages that use the same layout (React keeps the element because its
 * type and position don't change), and can share a `layoutKey` so the
 * page-enter animation and scroll-to-top are skipped between those pages.
 */
export type PageWithLayout<P = object> = NextPage<P> & {
  getLayout?: (page: ReactElement, props: P) => ReactNode;
  layoutKey?: (props: P) => string | undefined;
};
