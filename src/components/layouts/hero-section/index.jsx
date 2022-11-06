import React from 'react';
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

    return (
        <>
            <div className="w-full flex items-center justify-center">
                <Image src={LogoSVG} alt="Logo" width={367} />
            </div>
            <div className="w-6/12 flex flex-col items-center justify-center">
                <h1 className="text-48 font-normal text-primary-500 text-center leading-80 bg-primary-350 bg-opacity-50 px-6 rounded-lg">
                    1-on-1 Mentorship From
                </h1>
                <h1 className="text-48 font-normal text-primary-500 text-center leading-80 bg-primary-350 bg-opacity-50 px-6 rounded-lg">
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
            <div className="w-full flex items-center justify-around gap-20 bg-primary-200 bg-opacity-80 py-5 px-24">
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
        </>
    )
}

export default Hero