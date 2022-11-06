import React, { useEffect, useState } from 'react'
import { countdownTimer, useCountdown } from 'utils/countdown-timer';

const CountDown = () => {
    const [days, hours, minutes, seconds] = useCountdown();
    const [time, setTime] = useState([]);

    const timevariabels = [
        "DAYS",
        "HOURS",
        "MINUTES",
        "SECONDS",
    ];

    useEffect(() => {
        setTime([days, hours, minutes, seconds]);
    }, [days, hours, minutes, seconds]);

    return (
        <>
            <div className="w-full h-screen bg-countdown bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center gap-8 px-64">
                <p className="font-bold text-48 leading-61 text-white text-center">
                    A HOME FOR HIGH ACHIVERS
                </p>
                <div className="w-full flex flex-col justify-center items-center gap-9 py-45 px-86 rounded-4xl bg-primary-650 bg-opacity-10">
                    <p className="font-bold text-32 leading-41 text-white">
                        LAUNCHING IN
                    </p>
                    <div className='w-full flex justify-center items-center gap-6'>
                        {
                            Array(4).fill(0).map((_, index) => (
                                <div className="w-full flex justify-center items-center gap-6" key={index}>
                                    <div className="w-160 flex flex-col justify-center items-center gap-2.5">
                                        <div className="flex justify-start items-start gap-2">
                                            <div className="p-2 text-black font-400 text-9xl leading-128 bg-white rounded-lg font-sharetech text-center">
                                                {time[index]?.toString().length > 1 ? time[index]?.toString().slice(0, 1) : 0 || 0}
                                            </div>
                                            <div className="p-2 text-black font-400 text-9xl leading-128 bg-white rounded-lg font-sharetech text-center">
                                                {time[index]?.toString().length > 1 ? time[index]?.toString().slice(1) : 0 || 0}
                                            </div>
                                        </div>
                                        <div className="flex justify-start items-start gap-40">
                                            <p className="text-white">
                                                {timevariabels[index]}
                                            </p>
                                        </div>
                                    </div>
                                    {
                                        index !== 3 && (
                                            <div className="h-full flex flex-col justify-center items-center gap-3 pb-8">
                                                <div className="w-2 h-2 rounded-full bg-white" />
                                                <div className="w-2 h-2 rounded-full bg-white" />
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