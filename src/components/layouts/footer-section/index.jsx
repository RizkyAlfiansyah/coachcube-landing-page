import React from 'react'
import Image from 'next/image';
import LogoSVG from "assets/icons/icon.png";
import LocationSVG from "assets/icons/icon-location.svg";
import EmailSVG from "assets/icons/icon-email.svg";
import InstagramSVG from "assets/icons/icon-instagram.svg";
import FacebookSVG from "assets/icons/icon-facebook.svg";
import TwitterSVG from "assets/icons/icon-twitter.svg";
import YoutubeSVG from "assets/icons/icon-youtube.svg";
import RedditSVG from "assets/icons/icon-reddit.svg";
import Link from 'next/link';

const CountDown = () => {

    const socials = [
        InstagramSVG,
        FacebookSVG,
        TwitterSVG,
        YoutubeSVG,
        RedditSVG,
    ];

    const links = [
        "https://www.instagram.com/coachcube/",
        "https://www.facebook.com/coachcubementors/",
        "https://twitter.com/coachcubementor",
        "https://www.youtube.com/channel/UC2oOMY19E7g9RJAP6H5h0GQ",
        "https://www.reddit.com/user/Coachcube/"
    ]

    return (
        <>
            <div className="w-full flex flex-col items-start justify-start xl:px-24 xl:py-[72px] gap-4 px-6 py-12">
                <div className="w-full flex lg:flex-row flex-col justify-between items-start border-b-1 border-primary-250 pb-6 xl:gap-0 gap-8">
                    <div className="md:w-full lg:w-auto flex md:flex-row flex-col lg:justify-start md:justify-between lg:items-start justify-center items-center gap-2.5 md:gap-6 lg:gap-8">
                        <div className='md:w-1/12 lg:w-auto'>
                            <Image src={LogoSVG} alt="logo" width={60} height={64} loading="lazy" />
                        </div>
                        <p className="lg:w-636 md:w-full font-400 text-16 leading-28 text-primary-600 md:text-start text-center">
                            Coachcube is an artificial intelligence education technology platform that connects students and those in the early stages of their career with industry professionals for the purpose of mentoring via online video teleconference
                        </p>
                    </div>
                    <div className="w-full lg:w-auto flex flex-col lg:justify-start lg:items-start md:flex-row lg:flex-col md:w-full md:justify-between justify-start items-start gap-5">
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
                <div className="w-full flex flex-col md:justify-start md:items-start justify-center items-center gap-2.5">
                    <p className="font-400 text-14 leading-22 text-primary-100 opacity-50">
                        Connect with us
                    </p>
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className='flex md:justify-start md:items-start gap-4'>
                            {
                                Array(socials.length).fill(0).map((_, index) => (
                                    <div key={index} className="cursor-pointer">
                                        <Link
                                            href={links[index]}
                                        >
                                            <Image src={socials[index]} alt="logo" />
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='w-full flex md:justify-end justify-center items-center'>
                            <p className='font-400 text-16 leading-28 text-primary-600'>Copyright Coach Cube Limited 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountDown