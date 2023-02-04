import Container from "components/container";
import Hero from "components/hero";
import Meta from "components/meta";
import Description from "components/description";

export default function Home() {
  return (
    <Container>
      <Meta />

      <Hero
        title={"React Blog"}
        subtitle={"Next.jsを使用したブログサイトです。"}
        imageOn
      />

      <Description />
    </Container>
  );
}
