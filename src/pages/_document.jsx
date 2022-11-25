import { Head, Html, Main, NextScript } from 'next/document'
import React, { useEffect, useState } from 'react'

const Document = () => {
    return (
        <Html>
            <Head>
                <meta charSet="UTF-8" />
                <meta property="og:image" content="https://www.linkpicture.com/q/icon.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />
                <meta property="og:url" content="https://coach-cube.com/" />
                <meta property="og:type" content="website" />
                <meta property="fb:app_id" content="your fb id" />
                <meta property="og:title" content="Coach-cube" />
                <meta name="twitter:card" content="summary" />
                <meta
                    property="og:description"
                    content="Coachcube is an artificial intelligence education technology platform that connects student and those in the early stages of their career with industry professional for the purposes of mentoring via online video teleconference"
                />
                <meta name="twitter:site" content="@coachcube" />
                <meta name="twitter:url" content="https://coach-cube.com/" />
                <meta name="twitter:title" content="Coach-cube" />
                <meta name="twitter:description" content="Coachcube is an artificial intelligence education technology platform that connects student and those in the early stages of their career with industry professional for the purposes of mentoring via online video teleconference" />
                <link rel="icon" href="/icon.png" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Share+Tech&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document