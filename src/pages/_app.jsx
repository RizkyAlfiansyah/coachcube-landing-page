import { Header } from "components/layouts";
import Head from "next/head";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import Script from "next/script";
import { useRouter } from "next/router";

function FacebookPixel() {
  const router = useRouter();
  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('2201003503416575');
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  });
  return null;
}

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
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-X6CX52G145" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-X6CX52G145', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Header />
        <FacebookPixel />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5DHJRSL');
      `}
        </Script>
        <Component {...pageProps} />
      </>
    );
  } else {
    return <></>
  }
}

export default MyApp;
