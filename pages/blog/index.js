import Container from "components/container";
import Meta from "components/meta";

const { default: Hero } = require("components/hero");

function Blog() {
  return (
    <Container>
      <Meta 
        pageTitle="Blog"
        pageDesc="最近の投稿"
      />

      <Hero 
        title={"Blog"}
        subtitle={"最近の投稿"}
      />
    </Container>
  )
}

export default Blog;