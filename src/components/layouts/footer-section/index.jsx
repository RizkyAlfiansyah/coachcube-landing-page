import React from 'react'
import Image from 'next/image';
import LogoSVG from "assets/icons/logo.svg";
import LocationSVG from "assets/icons/icon-location.svg";
import EmailSVG from "assets/icons/icon-email.svg";
import InstagramSVG from "assets/icons/icon-instagram.svg";
import FacebookSVG from "assets/icons/icon-facebook.svg";
import TwitterSVG from "assets/icons/icon-twitter.svg";
import YoutubeSVG from "assets/icons/icon-youtube.svg";
import RedditSVG from "assets/icons/icon-reddit.svg";

const CountDown = () => {

    const socials = [
        InstagramSVG,
        FacebookSVG,
        TwitterSVG,
        YoutubeSVG,
        RedditSVG,
    ];

    return (
        <>
            <div className="w-full lg:h-40 flex flex-col items-start justify-center lg:px-24 lg:py-0 gap-4 px-6 py-12">
                <div className="w-full flex lg:flex-row flex-col justify-between items-start border-b-1 border-primary-250 pb-6 lg:gap-0 gap-8">
                    <div className="flex lg:flex-row flex-col lg:justify-start lg:items-start justify-center items-center gap-2.5">
                        <div>
                            <Image src={LogoSVG} alt="logo" />
                        </div>
                        <p className="lg:w-636 font-400 text-16 leading-28 text-primary-600 lg:text-start text-center">
                            Coachcube is an artificial intelligence education technology platform that connects student and those in the early stages of their career with indsutry professional for the purposes of mentoring via online video tele conference.
                        </p>
                    </div>
                    <div className="w-full lg:w-auto flex flex-col lg:justify-start lg:items-start justify-center items-center gap-5">
                        <div className="flex gap-5 justify-start items-center">
                            <div>
                                <Image src={LocationSVG} alt="logo" />
                            </div>
                            <p className="font-400 text-16 leading-28 text-primary-600">
                                1 St Katherines Way, London, E1W 1UN
                            </p>
                        </div>
                        <div className="flex gap-5 justify-start items-center">
                            <div>
                                <Image src={EmailSVG} alt="logo" />
                            </div>
                            <p className="font-400 text-16 leading-28 text-primary-600">
                                hello@coach-cube.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:justify-start lg:items-start justify-center items-center gap-2.5">
                    <p className="font-400 text-14 leading-22 text-primary-100 opacity-50">
                        Connect with us
                    </p>
                    <div className="flex lg:justify-start lg:items-start gap-4 justify-center items-center">
                        {
                            Array(socials.length).fill(0).map((_, index) => (
                                <div key={index} className="cursor-pointer">
                                    <Image src={socials[index]} alt="logo" />
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountDown