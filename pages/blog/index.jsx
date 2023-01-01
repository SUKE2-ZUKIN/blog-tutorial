import Container from "components/container";
import Hero from "components/hero";
import Meta from "components/meta";
import Posts from "components/posts";
import { getAllPosts } from "lib/api";
import { eyecatchLocal } from "lib/constants";
import { getPlaiceholder } from "plaiceholder";

export default function Blog({ posts }) {
  return (
    <Container>
      <Meta pageTitle="Blog" pageDesc="最近の投稿" />

      <Hero title={"Blog"} subtitle={"最近の投稿"} />

      <Posts posts={posts} />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts(4);

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }

  return {
    props: {
      posts: posts,
    },
  };
}
