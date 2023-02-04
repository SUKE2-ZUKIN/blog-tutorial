import styles from "styles/description.module.css";

export default function Description() {
  return (
    <div className={styles.stack}>
      <p>本ブログに用いている技術スタックは下記の通りです。</p>
      <ul>
        <li><p className={styles.strong}>フロントエンド</p>
          <ul>
            <li>React : 18.2.0</li>
            <li>Next.js : 13.0.7</li>
            <li>TypeScript : 4.9.4</li>
          </ul>
        </li>
        <li><p className={styles.strong}>バックエンド</p>
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
        <li>JavaScript から <p className={styles.strong}>TypeScript</p> へ書き換え</li>
        <li><p className={styles.strong}>Jest</p>でのテストを一部追加</li>
        <li><p className={styles.strong}>Storybook</p>導入（途中）</li>
      </ul>         
    </div>
  );
}
