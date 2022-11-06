import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Coachcube</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Coachcube" />
        <meta name="og:title" property="og:title" content="Coachcube" />
        <link rel="icon" href="/icon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
