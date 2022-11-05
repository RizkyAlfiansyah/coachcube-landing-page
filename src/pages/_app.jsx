import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <title>Coachcube Landing Page</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
