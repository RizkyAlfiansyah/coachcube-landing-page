import Head from "next/head";
import { useEffect, useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps, photo }) {

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  if (typeof window !== "undefined") {
    return (
      <>
        <Head>
          <title>Coachcube</title>
          <meta charSet="UTF-8" />
          <meta property="og:url" content="www.coach-cube.com" />
          <meta property="og:type" content="website" />
          <meta property="fb:app_id" content="your fb id" />
          <meta property="og:title" content={photo?.title} />
          <meta name="twitter:card" content="summary" />
          <meta
            property="og:description"
            content="Hurray!! Yes Social Media Preview is Working"
          />
          <meta property="og:image" content={photo?.url} />
          <link rel="icon" href="/icon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  } else {
    return <></>
  }
}

export default MyApp;

export const getServerSideProps = async () => {
  let photo = null;
  await fetch('https://jsonplaceholder.typicode.com/photos/1')
    .then((response) => response.json())
    .then((json) => {
      photo = json
    })

  return {
    props: {
      photo,
    },
  };
};
