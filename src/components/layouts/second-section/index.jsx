import React from 'react'
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

    return (
        <>
            <div className="w-8/12 flex flex-col justify-center items-center gap-4">
                <p className="w-full text-center font-bold text-48 leading-61 text-primary-100">
                    Our Mentors
                </p>
                <p className="w-full text-center font-400 text-20 leading-32 text-primary-600">
                    Our mentors are industry leading experts who are passionate about helping to educate and inpire the next generation.
                </p>
            </div>
            <div className="w-full grid grid-cols-5 items-center justify-center gap-20">
                {
                    Array(icons.length).fill().map((_, index) => (
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