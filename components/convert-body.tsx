import parse, { Element } from "html-react-parser";
import Image from "next/legacy/image";

export default function ConvertBody({ contentHTML }: {contentHTML: string}) {
  const contentReact = parse(contentHTML, {
    replace: (node) => {
      if (node instanceof Element && node.name === "img") {
        const { src, alt, width, height } = node.attribs;
        return (
          <Image
            layout="responsive"
            src={src}
            width={Number(width)}
            height={Number(height)}
            alt={alt}
            sizes="(min-width: 768px) 768px, 100vw"
          />
        );
      }
    },
  });
  return <>{contentReact}</>;
}
