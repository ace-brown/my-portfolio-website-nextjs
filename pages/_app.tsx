import type { AppProps } from "next/app";
import Head from "next/head";
import { Lato, Montserrat } from "next/font/google";

import Layout from "../components/layout/layout";

import "../styles/globals.css";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style jsx global>{`
        :root {
          --font-text: ${lato.style.fontFamily};
          --font-title: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
