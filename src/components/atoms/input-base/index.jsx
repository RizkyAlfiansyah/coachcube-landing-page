import React, { useEffect, useState } from 'react'

const Input = ({
    type,
    name,
    value,
    placeholder,
    className,
    onChange = () => { },
    required = false,
    errorMessage = '',
    isLastname = false,
}) => {

    if (type === 'textarea') {
        return (
            <textarea
                maxLength={150}
                name={name}
                value={value}
                placeholder={placeholder}
                className={`${className} py-5 px-4 bg-primary-550 text-primary-100 border-1 border-primary-550 focus:ring-0 focus:outline-none rounded-lg text-20 font-400 leading-25 resize-none`}
                onChange={onChange}
            />
        )
    } else {
        return (
            <div className={`${className} relative flex flex-col gap-[2px]`}>
                <div className={`w-full relative flex flex-col gap-[2px]`}>
                    <div className={`w-full relative flex flex-col gap-[2px]`}>
                        <input
                            type={type}
                            pattern={type === 'tel' || type === 'number' ? '[0-9]' : ''}
                            // placeholder={placeholder}
                            className={`w-full py-5 px-4 text-primary-100 bg-primary-550 border-1 ${errorMessage || isLastname ? "border-red-500" : "border-primary-550"} focus:ring-0 focus:outline-none rounded-lg text-20 font-400 leading-25`}
                            value={value}
                            onChange={onChange}
                            required={required}
                        />
                    </div>
                    {
                        !value && (
                            <p className='absolute top-1/3 left-5 text-20 font-400 leading-25 text-primary-950'>
                                {placeholder}<span className={
                                    `${required ? "text-red-500" : "hidden"}`
                                }>*</span>
                            </p>
                        )
                    }
                </div>
                {
                    errorMessage && (
                        <p className='hidden lg:flex font-400 text-14 leading-28 text-red-500'>
                            {errorMessage}
                        </p>
                    )
                }
            </div>
        )
    }
}

export default Input