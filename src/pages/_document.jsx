import { Head, Html, Main, NextScript } from 'next/document'
import React, { useEffect, useState } from 'react'

const Document = () => {
    return (
        <Html>
            <Head>
                <meta charSet="UTF-8" />
                <meta property="og:image" content="https://i.postimg.cc/VLYZwZ8y/icon.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />
                <meta property="og:url" content="https://coach-cube.com/" />
                <meta property="og:type" content="website" />
                <meta property="fb:app_id" content="your fb id" />
                <meta property="og:title" content="Coachcube" />
                <meta name="twitter:card" content="summary" />
                <meta
                    property="og:description"
                    content="1-on-1 career coaching from industry expert mentors"
                />
                <meta name="twitter:site" content="@coachcube" />
                <meta name="twitter:url" content="https://coach-cube.com/" />
                <meta name="twitter:title" content="Coachcube" />
                <meta name="twitter:description" content="1-on-1 career coaching from industry expert mentors" />
                <meta name="facebook-domain-verification" content="6s71ulvymu3vmnoyikjgfo507znykk" />
                <meta name="facebook-domain-verification" content="ezu4nppe32jvzj3ovlugicynpjj6nv&quo" />
                <link rel="icon" href="/icon.png" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Share+Tech&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5DHJRSL" height="0" width="0" style="display: none; visibility: hidden;" />`,
                    }}
                />
            </body>
        </Html>
    )
}

export default Document