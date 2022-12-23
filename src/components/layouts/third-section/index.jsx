import React from 'react'
import GroupImagePNG from 'assets/images/group-person.png'
import WomanPNG from 'assets/images/woman.png'
import Image from 'next/image'

const ThirdSection = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row justify-center items-center xl:gap-36 lg:gap-7 gap-7 xl:py-32 lg:py-12 lg:px-12 py-8 px-4'>
            <div>
                <Image src={GroupImagePNG} alt='Group Image' width={492} height={381} className='hidden lg:flex' />
                <Image src={WomanPNG} alt='Group Image' className='lg:hidden flex' />
            </div>
            <div className='lg:w-[541px] md:w-8/12 flex flex-col gap-9 justify-start items-start'>
                <p className=' text-primary-100 font-bold lg:text-32 lg:leading-36 text-24 leading-32'>
                    Avoid career missteps by receiving <br className='hidden lg:flex' /> coaching and mentorship from <br className='hidden lg:flex' /> industry experts
                </p>
                <p className='text-primary-600 text-16 leading-25'>
                    Get job application support, practice interviews, CV reviews and general Q&A sessions with experienced professionals in your target industry.
                    <br />
                    <br />
                    Improve your chances of career success by receiving 1-on-1 mentorship from an experienced professional in your industry. Get behind-the-scenes knowledge and insights that will help you avoid common career pitfalls and help you allow you to successfully climb the career ladder.
                    <br />
                    <br />
                    Increase your productivity, expand your knowledge base and build your network by connecting with mentors on Coachcube.
                </p>
            </div>
        </div>
    )
}

export default ThirdSection