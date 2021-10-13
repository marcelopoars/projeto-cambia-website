import type { AppProps } from "next/app";
import { Footer, Header } from "../components";
import "../styles/GlobalStyles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
