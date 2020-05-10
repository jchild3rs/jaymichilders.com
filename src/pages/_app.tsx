import { AppProps } from "next/app";
import Header from "../components/Header";
import "../app.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
