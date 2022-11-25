import Head from 'next/head'
import React, { useEffect, useState } from 'react'

const Header = ({ photo }) => {
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

    return (
        <Head>
            <title>Coachcube</title>
            <meta charSet="UTF-8" />
            <meta property="og:url" content="coach-cube.com" />
            <meta property="og:type" content="website" />
            <meta property="fb:app_id" content="your fb id" />
            <meta property="og:title" content={photos?.title} />
            <meta name="twitter:card" content="summary" />
            <meta
                property="og:description"
                content="Hurray!! Yes Social Media Preview is Working"
            />
            <meta property="og:image" content={photos?.url} />
            <link rel="icon" href="/icon.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
        </Head>
    )
}

export default Header;