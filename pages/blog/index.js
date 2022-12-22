import Container from "components/container";

const { default: Hero } = require("components/hero");

function Blog() {
  return (
    <Container>
      <Hero 
        title={"Blog"}
        subtitle={"最近の投稿"}
      />
    </Container>
  )
}

export default Blog;