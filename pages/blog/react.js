import Container from "components/container";
import ConvertBody from "components/convert-body";
import Meta from "components/meta";
import PostBody from "components/post-body";
import PostCategories from "components/post-categories";
import PostHeader from "components/post-header";
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "components/two-column";
import { getPostBySlug  } from "lib/api";
import { extractText } from "lib/extract-text";
import Image from "next/legacy/image";

export default function Schedule({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description,
}) {
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      
      <article>
        <PostHeader
          title={title}
          subtitle="Blog Articles"
          publish={publish}
        />

        <figure>
          <Image
            src={eyecatch.url}
            alt="アイキャッチ画像"
            layout="responsive"
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-witdh: 1152px) 1152px, 100vw"
            priority
          />
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>
      </article>
    </Container>
  )
}

export async function getStaticProps() {
  const slug = "react-basic"

  const post = await getPostBySlug(slug)

  const description = extractText(post.content)
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
      description: description,
    },
  }
}