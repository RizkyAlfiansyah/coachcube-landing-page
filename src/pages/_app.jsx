import { Header } from "components/layouts";
import Head from "next/head";
import { useEffect, useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

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
        <Component {...pageProps} />
      </>
    );
  } else {
    return <></>
  }
}

export default MyApp;
