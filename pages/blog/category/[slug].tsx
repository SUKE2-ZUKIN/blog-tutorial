import Container from "components/container";
import Meta from "components/meta";
import PostHeader from "components/post-header";
import Posts from "components/posts";
import { Category, PostType } from "interfaces";
import { getAllCategories, getAllPostsByCategory } from "lib/api";
import { eyecatchLocal } from "lib/constants";
import { GetStaticPaths, GetStaticProps } from "next";
import { getPlaiceholder } from "plaiceholder";

type CategoryType = {
  name: string
  posts: PostType[]
}

export default function Category({ name, posts }: CategoryType) {
  return (
    <Container>
      <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
      <PostHeader title={name} subtitle="Blog Category" />
      <Posts posts={posts} />
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allCats = await getAllCategories();
  return {
    paths: allCats.map(({ slug }: {slug: string}) => `/blog/category/${slug}`),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const catSlug = context.params?.slug ;

  const allCats = await getAllCategories();

  const cat: Category = allCats.find(({ slug }: {slug: string}) => slug === catSlug);

  const posts = await getAllPostsByCategory(cat.id);

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }

  return {
    props: {
      name: cat.name,
      posts: posts,
    },
  };
}
