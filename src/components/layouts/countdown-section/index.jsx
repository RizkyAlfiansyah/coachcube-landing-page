import React, { useEffect, useState } from 'react'
import { useCountdown } from 'utils/countdown-timer';

const CountDown = () => {
    const [...times] = useCountdown();

    const timevariabels = [
        "Days",
        "Hours",
        "Minutes",
        "Seconds",
    ];

    return (
        <>
            <div className="w-full lg:h-screen h-full bg-countdown bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center gap-8 px-6">
                <p className="font-bold lg:text-48 text-24 lg:leading-61 leading-31 md:text-32 md:leading-41 text-white text-center">
                    A home for high achievers
                </p>
                <div className="xl:w-10/12 lg:w-[98%] flex flex-col justify-center items-center lg:gap-9 gap-4 py-3 px-4 lg:py-45 lg:px-20 lg:pr-12 md:px-11 md:py-6 lg:rounded-4xl rounded-xl bg-primary-860 bg-opacity-[0.35]">
                    <p className="font-bold lg:text-32 text-xs md:text-16 md:leading-22 lg:leading-41 leading-[14px] text-white">
                        Launching In
                    </p>
                    <div className='w-full flex justify-center items-center lg:gap-2 gap-0'>
                        {
                            Array(4).fill(0).map((_, index) => (
                                <div className={`flex ${index !== 3 ? "items-center justify-center" : "items-center justify-around"} lg:gap-4 md:gap-3 gap-4`} key={index}>
                                    <div className="flex flex-col justify-center items-center gap-1">
                                        <div className="flex justify-start items-start md:gap-2 gap-1">
                                            <div className="xl:w-24 lg:w-20 md:w-9 w-7 lg:p-2 p-1 text-primary-100 font-700 xl:text-110 lg:text-8xl lg:leading-128 md:text-48 md:leading-41 text-4xl bg-white rounded-lg text-center">
                                                {times[index] ? times[index][0] : "0"}
                                            </div>
                                            <div className="xl:w-24 lg:w-20 md:w-9 w-7 lg:p-2 p-1 text-primary-100 font-700 xl:text-110 lg:text-8xl lg:leading-128 md:text-48 md:leading-41 text-4xl bg-white rounded-lg text-center">
                                                {times[index] ? times[index][1] : "0"}
                                            </div>
                                        </div>
                                        <div className="flex justify-start items-start gap-40">
                                            <p className="text-white text-[8px] font-400 leading-[9px] lg:text-24 lg:leading-28">
                                                {timevariabels[index]}
                                            </p>
                                        </div>
                                    </div>
                                    {
                                        index !== 3 && (
                                            <>
                                                <div className={`h-full flex flex-col justify-center ${index !== 3 ? "items-center" : "items-start"} gap-2.5 lg:pb-8 pb-4`}>
                                                    <div className="lg:w-4 lg:h-4 w-[4px] h-[4px] rounded-full bg-white" />
                                                    <div className="lg:w-4 lg:h-4 w-[4px] h-[4px] rounded-full bg-white" />
                                                </div>
                                                <div />
                                            </>
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