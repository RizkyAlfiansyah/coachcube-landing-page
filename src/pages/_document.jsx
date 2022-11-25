import { Head, Html, Main, NextScript } from 'next/document'
import React, { useEffect, useState } from 'react'

const Document = () => {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await fetch('https://jsonplaceholder.typicode.com/photos/1')
                .then((response) => response.json())
                .then((json) => {
                    setPhotos(json)
                })
        }
        fetchData()
    }, [])

    console.log(photos)
    return (
        <Html>
            <Head>
                <title>Coachcube</title>
                <meta charSet="UTF-8" />
                <meta property="og:image" content="https://via.placeholder.com/600/92c952" />
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="600" />
                <meta property="og:url" content="https://coach-cube.com/" />
                <meta property="og:type" content="website" />
                <meta property="fb:app_id" content="your fb id" />
                <meta property="og:title" content={photos?.title} />
                <meta name="twitter:card" content="summary" />
                <meta
                    property="og:description"
                    content="Hurray!! Yes Social Media Preview is Working"
                />
                <link rel="icon" href="/icon.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
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