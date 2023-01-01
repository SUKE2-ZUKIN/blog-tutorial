import Head from "next/head";

import { siteMeta } from "lib/constants";
import { useRouter } from "next/router";
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } =
  siteMeta;

import siteImg from "images/next.png";

export default function Meta({
  pageTitle,
  pageDesc,
  pageImg,
  pageImgW,
  pageImgH,
}) {
  // タイトル
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;

  // 説明
  const desc = pageDesc ? pageDesc : siteDesc;

  // URL
  const router = useRouter();
  const url = `${siteUrl}${router.asPath}`;

  // OGP画像
  const img = pageImg || siteImg.src;
  const imgW = pageImgW || siteImg.width;
  const imgH = pageImgH || siteImg.height;
  const imgUrl = img.startsWith("http") ? img : `${siteUrl}${img}`;

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />

      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />

      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={imgW} />
      <meta property="og:image:height" content={imgH} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
