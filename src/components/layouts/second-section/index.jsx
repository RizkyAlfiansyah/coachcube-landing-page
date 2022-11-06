import React, { useEffect, useRef, useState } from 'react'
import GoogleSVG from "assets/icons/icon-google.svg";
import MetaSVG from "assets/icons/icon-meta.svg";
import AmazonSVG from "assets/icons/icon-amazon.svg";
import MicrosoftSVG from "assets/icons/icon-microsoft.svg";
import TeslaSVG from "assets/icons/icon-tesla.svg";
import JPMorganSVG from "assets/icons/icon-jpmorgan.svg";
import WhiteCaseSVG from "assets/icons/icon-whitecase.svg";
import GoldManSVG from "assets/icons/icon-goldman.svg";
import HarvardSVG from "assets/icons/icon-harvard.svg";
import StanfordSVG from "assets/icons/icon-stanford.svg";
import Image from "next/image";

const SecondSection = () => {

    const icons = [
        GoogleSVG,
        MetaSVG,
        AmazonSVG,
        MicrosoftSVG,
        TeslaSVG,
        JPMorganSVG,
        WhiteCaseSVG,
        GoldManSVG,
        HarvardSVG,
        StanfordSVG,
    ];

    const icons2 = [

    ]

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const delay = 2500;
    const [items, setItems] = useState([]);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === icons.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
            setItems(icons[index]);
        };
    }, [index]);


    return (
        <>
            <div className="lg:w-8/12 w-full flex flex-col justify-center items-center gap-4">
                <p className="w-full text-center font-bold lg:text-48 text-24 lg:leading-61 leading-31 text-primary-100">
                    Our Mentors
                </p>
                <p className="w-full text-center font-400 lg:text-20 text-16 leading-32 text-primary-600">
                    Our mentors are industry leading experts who are passionate about helping to educate and inpire the next generation.
                </p>
            </div>
            <div className="hidden w-full lg:grid lg:grid-cols-5 items-center justify-center lg:gap-20 gap-10">
                {
                    Array(icons.length).fill().map((_, index) => (
                        <div className="w-40 h-14" key={index}>
                            <Image src={icons[index]} alt={index} />
                        </div>
                    ))
                }
            </div>
            <div className="lg:hidden w-full flex flex-col items-center justify-center gap-10">
                {
                    Array(5).fill().map((_, index) => (
                        <div className="w-40 h-14" key={index}>
                            <Image src={icons[index]} alt={index} />
                        </div>
                    ))
                }
            </div>
            <div className="flex gap-2">
                <div className="w-7 h-2 bg-primary-700 rounded-md" />
                <div className="w-2 h-2 bg-primary-700 bg-opacity-40 rounded-full" />
                <div className="w-2 h-2 bg-primary-700 bg-opacity-40 rounded-full" />
                <div className="w-2 h-2 bg-primary-700 bg-opacity-40 rounded-full" />
            </div>
        </>
    )
}

export default SecondSection