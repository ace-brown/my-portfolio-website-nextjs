import Head from "next/head";
import { useRouter } from "next/router";

import { SITE } from "../lib/site";

type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
};

export default function Seo({
  title,
  description = SITE.description,
  image = SITE.ogImage,
}: SeoProps) {
  const router = useRouter();
  const fullTitle = title
    ? `${title} | ${SITE.shortName}`
    : `${SITE.name} – Full-Stack Engineer`;
  const url = `${SITE.url}${router.asPath === "/" ? "" : router.asPath.split(/[?#]/)[0]}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE.url}${image}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
