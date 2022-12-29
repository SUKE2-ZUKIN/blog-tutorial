import { siteMeta } from "lib/constants";
import { Head, Html, Main, NextScript } from "next/document";

const { siteLang } = siteMeta

export default function _Document() {
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