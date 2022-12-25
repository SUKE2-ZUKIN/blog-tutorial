import { siteMeta } from "lib/constants";
import { Head, Html, Main, NextScript } from "next/document";

const { siteLang } = siteMeta

export default function() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}