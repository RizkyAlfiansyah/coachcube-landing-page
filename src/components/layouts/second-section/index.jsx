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
import MorganSVG from "assets/icons/icon-morgan.svg";
import Image from "next/image";

const SecondSection = () => {

    const icons = [
        [
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
        ],
        [
            AmazonSVG,
            MicrosoftSVG,
            TeslaSVG,
            JPMorganSVG,
            WhiteCaseSVG,
            GoldManSVG,
            HarvardSVG,
            StanfordSVG,
            MorganSVG,
            MorganSVG,
        ],
    ];

    const desktopIcon = [
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
        AmazonSVG,
        MicrosoftSVG,
        TeslaSVG,
        JPMorganSVG,
        WhiteCaseSVG,
    ];

    const tabletIcons = [
        [
            GoogleSVG,
            MetaSVG,
            AmazonSVG,
            MicrosoftSVG,
            TeslaSVG,
            JPMorganSVG,
        ],
        [
            WhiteCaseSVG,
            GoldManSVG,
            HarvardSVG,
            StanfordSVG,
            AmazonSVG,
            MicrosoftSVG,
        ],
        [
            TeslaSVG,
            JPMorganSVG,
            AmazonSVG,
            MicrosoftSVG,
            HarvardSVG,
            StanfordSVG,
        ]
    ];

    const [index, setIndex] = useState(0);
    const [tabIndex, setTabIndex] = useState(0);
    const timeoutRef = useRef(null);
    const tabletTimeoutRef = useRef(null);
    const delay = 2500;
    const tabDelay = 2500;
    const [items, setItems] = useState(0);
    const [tabItems, setTabItems] = useState(0);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };
    const resetTimeoutTable = () => {
        if (tabletTimeoutRef.current) {
            clearTimeout(tabletTimeoutRef.current);
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
            setItems(index);
        };
    }, [index]);

    useEffect(() => {
        resetTimeoutTable();
        tabletTimeoutRef.current = setTimeout(
            () =>
                setTabIndex((prevIndex) =>
                    prevIndex === tabletIcons.length - 1 ? 0 : prevIndex + 1
                ),
            tabDelay
        );

        return () => {
            resetTimeoutTable();
            setTabItems(tabIndex);
        };
    }, [tabIndex]);


    return (
        <>
            <div className="xl:w-8/12 w-full flex flex-col justify-center items-center gap-4">
                <p className="w-full text-center font-bold xl:text-48 text-24 xl:leading-61 leading-31 text-primary-100">
                    Our Mentors
                </p>
                <p className="w-full text-center font-400 lg:text-20 text-16 leading-32 text-primary-600 lg:px-44 md:px-14 xl:px-28 px-4">
                    Our mentors are industry leading experts who are passionate about helping to educate and inpire the next generation.
                </p>
            </div>
            <div className="hidden w-full md:grid lg:grid-cols-5 md:grid-cols-3 items-center justify-center xl:gap-20 lg:gap-10 md:gap-20 gap-10">
                {
                    Array(desktopIcon.length).fill().map((_, index) => (
                        <div className="hidden lg:flex w-40 h-14" key={index}>
                            <Image src={desktopIcon[index]} alt={index} />
                        </div>
                    ))
                }
                {
                    Array(tabletIcons[tabIndex].length).fill().map((_, index) => (
                        <div className="lg:hidden w-40 h-14" key={index}>
                            <Image src={tabletIcons[tabItems][index]} alt={index} />
                        </div>
                    ))
                }
            </div>
            <div className="md:hidden w-full grid grid-cols-2 justify-items-center gap-y-5 gap-x-0 my-8">
                {
                    Array(icons[index].length).fill().map((_, index) => (
                        <div className="w-40 h-14" key={index}>
                            <Image src={icons[items][index] ? icons[items][index] : GoogleSVG} alt={index} />
                        </div>
                    ))
                }
            </div>
            {/* {
                icons.length > 10 ? (
                    <div className="flex gap-2">
                        <div className="w-7 h-2 bg-primary-700 rounded-md" />
                        <div className="w-2 h-2 bg-primary-700 bg-opacity-40 rounded-full" />
                        <div className="w-2 h-2 bg-primary-700 bg-opacity-40 rounded-full" />
                        <div className="w-2 h-2 bg-primary-700 bg-opacity-40 rounded-full" />
                    </div>
                ) : (
                    <div />
                )
            } */}
            <div className='md:hidden w-full flex justify-center items-center gap-1'>
                {
                    icons?.map((item, idx) => (
                        <div className='flex gap-2' key={idx}>
                            <div className={`${index === idx ? 'w-7 h-2 bg-primary-700 rounded-md' : 'w-2 h-2 bg-primary-700 bg-opacity-40 rounded-full cursor-pointer'}`} onClick={
                                () => {
                                    setIndex(idx)
                                    setItems(idx)
                                }
                            } />
                        </div>
                    ))
                }
            </div>
            <div className='hidden w-full md:flex lg:hidden justify-center items-center gap-1'>
                {
                    tabletIcons?.map((item, idx) => (
                        <div className='flex gap-2' key={idx}>
                            <div className={`${tabIndex === idx ? 'w-7 h-2 bg-primary-700 rounded-md' : 'w-2 h-2 bg-primary-700 bg-opacity-40 rounded-full cursor-pointer'}`} onClick={
                                () => {
                                    setTabIndex(idx)
                                    setTabItems(idx)
                                }
                            } />
                        </div>
                    ))
                }
            </div>
            <div className='hidden lg:flex' />
        </>
    )
}

export default SecondSection