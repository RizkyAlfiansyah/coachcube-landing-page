import { FooterSection } from 'components/layouts'
import React, { useEffect } from 'react'
import SuccessSVG from "assets/icons/icon-success.svg";
import InstagramSVG from "assets/icons/icon-instagram.svg";
import FacebookSVG from "assets/icons/icon-facebook.svg";
import TwitterSVG from "assets/icons/icon-twitter.svg";
import YoutubeSVG from "assets/icons/icon-youtube.svg";
import RedditSVG from "assets/icons/icon-reddit.svg";
import LogoPNG from "assets/icons/icon-coachcube.png";
import { useRouter } from 'next/router';
import Image from 'next/image';

const Notification = () => {
    const router = useRouter();

    useEffect(() => {
        if (router.query.m) return;
        router.push('/')
    }, [router])

    const socials = [
        InstagramSVG,
        FacebookSVG,
        TwitterSVG,
        YoutubeSVG,
        RedditSVG,
    ];

    return (
        <div className='w-full flex flex-col justify-center items-center gap-32 lg:py-16 px-2 pt-16'>
            <div className="w-full flex items-center justify-center">
                <Image src={LogoPNG} alt="Logo" width={367} height={64} className='hidden lg:flex' />
                <Image src={LogoPNG} alt="Logo" width={230} height={40} className='lg:hidden' />
            </div>
            <div className='w-full h-full flex flex-col justify-center items-center gap-7 lg:px-24'>
                <div>
                    <Image
                        src={SuccessSVG}
                        alt="success"
                    />
                </div>
                <p className='font-bold text-28 leading-36 text-center text-primary-100'>You are registered!</p>
                <p className='lg:w-[578px] text-center font-normal text-20 leading-28 text-primary-100 opacity-50'>
                    We have sent a confirmation email to <span className='font-bold'>{router.query?.m || "coachcuba@example.com"}</span> Please press the confirmation button to confirm your registration.
                </p>
                <div className="w-full flex flex-col justify-center items-center gap-2.5 lg:mt-7 mt-0">
                    <p className="font-400 text-14 leading-22 text-primary-100 opacity-50 text-center">
                        Connect with us
                    </p>
                    <div className="flex justify-center items-center gap-4">
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
            <footer className="w-full flex flex-col justify-start xl:items-start items-center">
                <FooterSection />
            </footer>
        </div>
    )
}

export default Notification