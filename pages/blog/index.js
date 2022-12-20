const { default: Hero } = require("components/hero");

function Blog() {
  return (
    <Hero 
      title={"Blog"}
      subtitle={"最近の投稿"}
    />
  )
}

export default Blog;