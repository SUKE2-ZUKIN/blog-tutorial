import Container from "./container";
import Logo from "./logo";
import styles from 'styles/footer.module.css';
import Social from "./social";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social iconSize="24px"/>
        </div> 
      </Container>
    </footer>
  );
}