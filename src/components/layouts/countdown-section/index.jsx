import React, { useEffect, useState } from 'react'
import { useCountdown } from 'utils/countdown-timer';

const CountDown = () => {
    const [...times] = useCountdown();

    const timevariabels = [
        "DAYS",
        "HOURS",
        "MINUTES",
        "SECONDS",
    ];

    return (
        <>
            <div className="w-full xl:h-screen h-full bg-countdown bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center gap-8 xl:px-64 px-6 md:px-44">
                <p className="font-bold xl:text-48 text-24 xl:leading-61 leading-31 text-white text-center">
                    A HOME FOR HIGH ACHIVERS
                </p>
                <div className="w-full flex flex-col justify-center items-center xl:gap-9 gap-4 py-3 px-4 xl:py-45 xl:px-86 xl:rounded-4xl rounded-xl bg-primary-650 bg-opacity-10">
                    <p className="font-bold xl:text-32 text-xs xl:leading-41 leading-[14px] text-white">
                        LAUNCHING IN
                    </p>
                    <div className='w-full flex justify-center items-center xl:gap-6 gap-1'>
                        {
                            Array(4).fill(0).map((_, index) => (
                                <div className={`w-full xl:w-auto flex ${index !== 3 ? "items-center justify-center" : "items-center justify-around"} xl:gap-6 gap-3`} key={index}>
                                    <div className="xl:w-160 flex flex-col justify-center items-center gap-2.5">
                                        <div className="flex justify-start items-start gap-2">
                                            <div className="xl:p-2 p-1 text-black font-400 xl:text-9xl xl:leading-128 text-40 leading-41 bg-white rounded-lg font-sharetech text-center">
                                                {times[index] ? times[index][0] : "0"}
                                            </div>
                                            <div className="xl:p-2 p-1 text-black font-400 xl:text-9xl xl:leading-128 text-40 leading-41 bg-white rounded-lg font-sharetech text-center">
                                                {times[index] ? times[index][1] : "0"}
                                            </div>
                                        </div>
                                        <div className="flex justify-start items-start gap-40">
                                            <p className="text-white text-[8px] font-400 leading-[9px] xl:text-24 xl:leading-28">
                                                {timevariabels[index]}
                                            </p>
                                        </div>
                                    </div>
                                    {
                                        index !== 3 && (
                                            <div className={`h-full flex flex-col justify-center ${index !== 3 ? "items-center" : "items-start"} gap-3 xl:pb-8 pb-4`}>
                                                <div className="xl:w-2 xl:h-2 w-[6px] h-[6px] rounded-full bg-white" />
                                                <div className="xl:w-2 xl:h-2 w-[6px] h-[6px] rounded-full bg-white" />
                                            </div>
                                        )
                                    }
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