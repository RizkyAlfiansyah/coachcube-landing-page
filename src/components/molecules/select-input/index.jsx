import React, { useEffect, useState } from 'react'
import ArrowDownSVG from 'assets/icons/icon-arrow-down.svg'
import Image from 'next/image'

const SelectInput = ({
    className,
    text,
    onClick = () => { },
    data,
    collapse = false,
    onClickItem = () => { },
    category = false,
    required = false,
    filled = false,
    withFilter = false,
    errorMessage = '',
    dropdownWidth = 'w-full',
}) => {

    const [searchFilter, setSearchFilter] = useState('')

    const dataSearch = data.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchFilter.toLowerCase())
    });

    return (
        <div className={`${className} relative flex flex-col gap-1`}>
            <div
                className={`${errorMessage ? "border-red-500" : "border-primary-550"} w-full flex gap-2.5 justify-between cursor-pointer hover:shadow-lg items-center py-5 px-4 bg-primary-550 border-1 focus:ring-0 focus:outline-none rounded-lg z-10`}
                onClick={onClick}
            >
                <p className={`${!filled && "text-primary-950"} md:text-20 font-400 md:leading-25 text-16 leading-20 text-primary-100`}>
                    {text}{required && text === "Industry" ? <span>*</span> : ''}
                    {/* <span className={`${required && text === "Industry" ? "text-red-500" : "hidden"}`}>*</span> */}
                </p>
                <div className={`${collapse && "rotate-180"}`}>
                    <Image src={ArrowDownSVG} alt="arrow down" />
                </div>
            </div>
            {
                errorMessage && (
                    <p className='hidden lg:flex font-400 text-14 leading-28 text-red-500'>
                        {errorMessage}
                    </p>
                )
            }
            {
                collapse && (
                    <div className={`${dropdownWidth} min-h-[48px] max-h-[238px] p-2 pt-0 flex flex-col gap-2 justify-start items-start bg-white rounded-lg shadow-md absolute top-20 overflow-auto z-20`}>
                        {
                            withFilter && (
                                <div className='w-full sticky top-0 py-4 pt-6 bg-white'>
                                    <input type="text" placeholder='Search Item' className='w-full rounded-lg bg-primary-550 p-2 focus:ring-0 focus:outline-none'
                                        value={searchFilter}
                                        onChange={(e) => setSearchFilter(e.target.value)}
                                    />
                                </div>
                            )
                        }
                        {
                            data.length > 0 &&
                            dataSearch.map((item, index) => {
                                return (
                                    <div className='w-full text-primary-100 hover:bg-primary-550 rounded-lg flex gap-4 cursor-pointer p-2' onClick={() => onClickItem(item)} key={index}>
                                        <p className='text-16 font-400 leading-25'>
                                            {item.labels}
                                        </p>
                                        {
                                            !category && (
                                                <p className='text-16 font-400 leading-25'>
                                                    ({item.values})
                                                </p>
                                            )
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}

export default SelectInput