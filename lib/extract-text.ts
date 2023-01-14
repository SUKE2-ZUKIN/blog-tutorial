import { convert } from "html-to-text";

type Params = {
  html: string
  length: number
  more: string
}

export function extractText({html, length = 80, more = "..."}: Params) {
  const text = convert(html, {
    selectors: [
      { selector: "img", format: "skip" },
      { selector: "a", options: { ignoreHref: true } },
    ],
  });
  return text.slice(0, length) + more;
}
