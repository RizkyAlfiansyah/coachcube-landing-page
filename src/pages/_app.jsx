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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Share+Tech&display=swap" rel="stylesheet" />
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
