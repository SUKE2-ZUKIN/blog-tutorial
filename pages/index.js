import Container from 'components/container'
import Hero from 'components/hero'

export default function Home() {
  return (
    <Container>
      <Hero 
        title={"React Blog"}
        subtitle={"Next.js / Reactについてアウトプットしていきます。"}
        imageOn
      />
    </Container>
  )
}
