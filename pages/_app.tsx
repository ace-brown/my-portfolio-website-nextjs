import type { AppProps } from "next/app";
import Head from "next/head";
import { JetBrains_Mono, Manrope, Syne } from "next/font/google";
import { MotionConfig } from "motion/react";

import Layout from "../components/layout/layout";

import "lenis/dist/lenis.css";
import "../styles/globals.css";

const syne = Syne({ subsets: ["latin"], weight: ["600", "700", "800"] });
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style jsx global>{`
        :root {
          --font-display: ${syne.style.fontFamily};
          --font-body: ${manrope.style.fontFamily};
          --font-mono: ${jetbrainsMono.style.fontFamily};
        }
      `}</style>
      {/* "user" turns transform animations off for prefers-reduced-motion */}
      <MotionConfig reducedMotion="user">
        <Layout pageKey={router.asPath}>
          <Component {...pageProps} />
        </Layout>
      </MotionConfig>
    </>
  );
}
