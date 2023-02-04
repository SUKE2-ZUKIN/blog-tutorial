import Contact from "components/contact";
import Container from "components/container";
import Hero from "components/hero";
import PostBody from "components/post-body";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/two-column";
import Image from "next/legacy/image";
import eyecatch from "images/about.jpg";
import Meta from "components/meta";
import Description from "components/description";

function About() {
  return (
    <Container>
      <Meta pageTitle="About" pageDesc="このサイトについて" />

      <Hero title={"About"} subtitle={"このサイトについて"} />

      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          placeholder="blur"
        />
      </figure>

      <Description />
      {/* <TwoColumn>
        <TwoColumnMain>
          <PostBody>
          <p>本ブログに用いている技術スタックは下記の通りです。</p>
          <ul>
            <li>フロントエンド
              <ul>
                <li>React : 18.2.0</li>
                <li>Next.js : 13.0.7</li>
                <li>TypeScript : 4.9.4</li>
              </ul>
            </li>
            <li>バックエンド
              <ul>
                <li>microCMS</li>
              </ul>
            </li>
          </ul>
          <h2>このサイトで意識していること</h2>
          <p>元々こちらのサイトは、フロントエンドの知見を得るために、下記の書籍をベースに作成しました。（実務ではNuxt.jsでの実装経験のみであるため。）</p>
          <ul>
            <li>
              <a href="https://ebisu.com/next-react-website/" target="_blank" rel="noopener noreferrer">Next.jsによるWeb構築の基本と実践 - エビスコム</a>
            </li>
          </ul>
          <p>既存のプログラムに対して、下記のような変更を加えています。（それぞれがどんなツールなのかを触って確かめるため。）</p>
          <ul>
            <li>JavaScriptからTypeScript へ書き換え</li>
            <li>Jestでのテストを一部追加</li>
            <li>Storybook導入（途中）</li>
          </ul>                  
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn> */}
    </Container>
  );
}

export default About;
