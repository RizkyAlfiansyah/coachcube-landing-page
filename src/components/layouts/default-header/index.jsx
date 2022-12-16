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
            <title>coachcube</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
        </Head>
    )
}

export default Header;