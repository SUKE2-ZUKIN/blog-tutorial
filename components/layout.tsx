import { ReactNodeChildren } from "interfaces";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }: ReactNodeChildren) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
