import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import LogoSVG from "assets/icons/icon-coachcube.svg";
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
            <div className="w-full flex items-center justify-center">
                <Image src={LogoSVG} alt="Logo" width={367} />
            </div>
            <div className="lg:w-6/12 w-full flex flex-col items-center justify-center">
                <h1 className="lg:text-48 text-24 lg:font-normal font-bold text-primary-500 text-center lg:leading-80 leading-32 bg-primary-350 bg-opacity-50 lg:px-6 py-5 px-4 rounded-lg">
                    1-on-1 Mentorship From
                </h1>
                <h1 className="lg:text-48 text-24 lg:font-normal font-bold text-primary-500 text-center lg:leading-80 leading-32 bg-primary-350 bg-opacity-50 lg:px-6 py-5 px-4 rounded-b-lg">
                    Industry Experts
                </h1>
                <div className="w-6/12 flex items-center justify-center mt-11">
                    <button className="w-72 flex items-center justify-center text-center py-4 px-6 font-bold text-white text-20 leading-25 bg-primary-100 rounded-lg hover:shadow-xl"
                        onClick={onClick}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
            <div className="hidden w-full lg:flex items-center justify-around gap-20 bg-primary-200 bg-opacity-80 py-5 px-24">
                {icons.map((item) => (
                    <div
                        className="w-48 flex flex-col gap-1 justify-between items-center"
                        key={item.id}
                    >
                        <Image src={item.icon} alt={item.id} />
                        <p className="font-400 text-16 leading-28 text-center text-white">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
            <div className="w-full lg:h-auto h-64 flex flex-col lg:hidden items-center lg:justify-center justify-between lg:gap-20 gap-5 bg-primary-200 bg-opacity-80 py-5 px-24">
                <div
                    className="w-48 flex flex-col gap-1 justify-between items-center"
                >
                    <Image src={items.icon} alt={1} />
                    <p className="font-400 text-16 leading-28 text-center text-white">
                        {items.desc}
                    </p>
                </div>
                <div className="flex gap-2">
                    {/* <div className="w-7 h-2 bg-primary-580 rounded-md" />
                    <div className="w-2 h-2 bg-primary-580 bg-opacity-40 rounded-full" />
                    <div className="w-2 h-2 bg-primary-580 bg-opacity-40 rounded-full" />
                    <div className="w-2 h-2 bg-primary-580 bg-opacity-40 rounded-full" /> */}
                    {
                        icons?.map((item, idx) => (
                            <div className='flex gap-2' key={idx}>
                                <div className={`${index === idx ? 'w-7 bg-opacity-40' : 'w-2'} h-2 bg-primary-580 rounded-md`} onClick={
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