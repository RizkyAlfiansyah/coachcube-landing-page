import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import LogoSVG from "assets/icons/icon-coachcube.svg";
import LogoPNG from "assets/icons/icon-coachcube.png";
import VcallSVG from "assets/icons/icon-vcall.svg";
import BriefCaseSVG from "assets/icons/icon-briefcase.svg";
import UniversitySVG from "assets/icons/icon-university.svg";
import CommunitySVG from "assets/icons/icon-community.svg";
import ExamSVG from "assets/icons/icon-exam.svg";

const Hero = ({
    onClick = () => { },
}) => {

    const icons = [
        {
            id: 1,
            icon: VcallSVG,
            desc: "On demand 1-on-1 video calls with industry experts",
        },
        {
            id: 2,
            icon: BriefCaseSVG,
            desc: "Get the inside scoop on how to land your dream job",
        },
        {
            id: 3,
            icon: UniversitySVG,
            desc: "Learn what it takes to study at your dream university",
        },
        {
            id: 4,
            icon: CommunitySVG,
            desc: "Elimante procrastination and improve efficiency with our accountability service",
        },
        {
            id: 5,
            icon: ExamSVG,
            desc: "Purchase cutting edge research from industry professionals",
        },
    ];
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const delay = 2500;
    const [items, setItems] = useState({
        id: 1,
        icon: ExamSVG,
        desc: "On demand 1-on-1 video calls with industry experts",
    });

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
            <div className="w-full flex items-center justify-center">
                <Image src={LogoPNG} alt="Logo" width={367} height={64} className='hidden lg:flex' />
                <Image src={LogoPNG} alt="Logo" width={230} height={40} className='lg:hidden' />
            </div>
            <div className="xl:w-6/12 w-full flex flex-col items-center justify-center md:mt-6">
                <h1 className="lg:text-48 md:text-32 text-20 font-bold text-primary-500 text-center lg:leading-80 leading-32 bg-white bg-opacity-50 lg:p-5 md:p-6 py-2 px-4 rounded-lg">
                    1-on-1 Mentorship from
                </h1>
                <h1 className="lg:text-48 md:text-32 text-20 font-bold text-primary-500 text-center lg:leading-80 leading-32 bg-white bg-opacity-50 lg:p-5 md:p-6 py-2 px-4 rounded-b-lg">
                    Industry Experts
                </h1>
                <div className="flex md:flex-row flex-col items-center justify-center mt-11 gap-4 text-center font-bold text-white lg:text-20 lg:leading-25 md:text-16 md:leading-20 text-14 leading-18">
                    <button className="lg:w-262 md:w-226 w-170 flex items-center justify-center bg-primary-710 py-4 rounded-lg hover:shadow-xl"
                        onClick={() => onClick(0)}
                    >
                        Find a Mentor
                    </button>
                    <button className="lg:w-262 md:w-226 w-170 flex items-center justify-center text-center bg-primary-100 py-4 rounded-lg hover:shadow-xl"
                        onClick={() => onClick(1)}
                    >
                        Become a Mentor
                    </button>
                </div>
            </div>
            <div className="hidden w-full md:flex items-start justify-center lg:justify-between xl:gap-20 md:gap-4 bg-primary-200 bg-opacity-80 pt-8 pb-6 xl:px-24 md:px-4 lg:mt-4">
                {icons.map((item) => (
                    <div
                        className="flex flex-col gap-4 justify-center items-center"
                        key={item.id}
                    >
                        <div>
                            <Image src={item.icon} alt={item.id} width={72} className="md:hidden lg:flex" />
                            <Image src={item.icon} alt={item.id} width={48} className="lg:hidden md:flex" />
                        </div>
                        <p className="2xl:w-64 font-400 lg:text-16 lg:leading-28 text-14 leading-22 text-center text-white">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
            <div className="w-full lg:h-auto h-48 flex flex-col xl:hidden md:hidden items-center xl:justify-center justify-between xl:gap-20 gap-5 bg-primary-200 bg-opacity-80 py-5 px-24">
                <div
                    className="w-56 flex flex-col gap-1 justify-between items-center"
                >
                    {
                        items !== [] && (
                            <>
                                <Image src={items?.icon} alt={items?.desc} width={54} height={32} />
                                <p className="font-400 text-14 leading-22 text-center text-white">
                                    {items?.desc}
                                </p>
                            </>
                        )
                    }
                </div>
                <div className="flex gap-2">
                    {
                        icons?.map((item, idx) => (
                            <div className='flex gap-2' key={idx}>
                                <div className={`${index === idx ? 'w-7 bg-white' : 'w-2 bg-white bg-opacity-40'} h-2 rounded-md`} onClick={
                                    () => {
                                        setIndex(idx)
                                        setItems(item)
                                    }
                                } />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Hero