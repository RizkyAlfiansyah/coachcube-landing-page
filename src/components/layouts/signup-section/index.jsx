import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import SignUpBG from "assets/images/sign-up-img.png";
import SignUpMaleBG from "assets/images/signup-male.png";
import ArrowSVG from "assets/icons/icon-arrow-left.svg";
import SuccessSVG from "assets/icons/icon-success.svg";
import InstagramSVG from "assets/icons/icon-instagram.svg";
import FacebookSVG from "assets/icons/icon-facebook.svg";
import TwitterSVG from "assets/icons/icon-twitter.svg";
import YoutubeSVG from "assets/icons/icon-youtube.svg";
import RedditSVG from "assets/icons/icon-reddit.svg";
import { Input } from "components/atoms";
import { SelectInput } from 'components/molecules';
import { phoneCode } from 'helpers/phone-code';
import { axiosApiInstance } from 'helpers/axios';
import { useRouter } from 'next/router';

const SignUp = () => {
    const router = useRouter();
    const [collapsed, setCollapsed] = useState(false);
    const [collapseCategory, setCollapseCategory] = useState(false);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState([]);
    const [string, setString] = useState({
        phoneCode: '+44',
        categories: 'Industry',
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState([])

    const socials = [
        InstagramSVG,
        FacebookSVG,
        TwitterSVG,
        YoutubeSVG,
        RedditSVG,
    ];


    const dataPhonecode = phoneCode.map((item) => {
        return {
            labels: item.name,
            values: item.dial_code
        }
    });

    const [values, setValues] = useState({
        industry_id: '',
        first_name: '',
        last_name: '',
        email: '',
        country_code: '+44',
        phone: '',
        message: '',
    });

    const fetchCategory = async () => {
        try {
            const res = await axiosApiInstance.get('/public-categories?group_by=industries');
            setCategory(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCategory();
    }, []);

    const categories = category.map((item) => {
        return {
            labels: item.label,
            values: item.id
        }
    });

    const _handleSubmit = () => {
        setError([]);
        const payload = values;
        payload.is_mentor = router.pathname === '/find-a-mentor' ? false : true;
        setLoading(true);
        try {
            axiosApiInstance.post('/signups', payload)
                .then((res) => {
                    setLoading(false);
                    if (router.pathname === '/find-a-mentor') {
                        router.push(`/thankyoumentee`);
                    } else {
                        router.push(`/thankyoumentor`);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setError(err.response?.data?.message);
                    setLoading(false);
                });
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const emptyValues = () => {
        setValues({
            industry_id: '',
            first_name: '',
            last_name: '',
            email: '',
            country_code: '+44',
            phone: '',
            message: '',
        });
        setCollapseCategory(false);
        setCollapsed(false);
    }

    return (
        <div className='w-full flex justify-start items-start bg-mix-horizontal xl:p-20 xl:pt-8 lg:p-8 xl:pr-20 2xl:gap-0 xl:gap-16 lg:gap-14'>
            <div className="relative hidden lg:w-6/12 w-full h-full lg:flex flex-col lg:gap-8 gap-6 justify-start items-start">
                <div className='w-full flex justify-start items-center gap-4'>
                    <div className='cursor-pointer' onClick={() => router.push('/')}>
                        <Image src={ArrowSVG} alt="arrow" />
                    </div>
                    <p className='text-28 leading-36 text-white'>
                        Back
                    </p>
                </div>
                <p className="xl:w-[475px] lg:w-96 lg:text-start font-bold lg:text-28 text-24 lg:leading-36 leading-31 text-white text-center">
                    {
                        router.pathname === '/find-a-mentor' ? "Raise money for causes you believe in by becoming a mentor" : "Bespoke career advice from industry experts"
                    }
                </p>
                <div className="w-full flex lg:justify-start justify-center lg:items-start items-center">
                    <div className="lg:w-28 w-56 h-1 rounded-sm bg-primary-300" />
                </div>
                <div className="w-full flex flex-col lg:justify-start justify-center lg:items-start items-center mt-9">
                    <div className='w-full relative'>
                        <Image src={router.pathname === '/find-a-mentor' ? SignUpBG : SignUpMaleBG} alt="sign up" width={604} />
                        <div className='absolute bottom-4 left-4 flex flex-col justify-start items-start gap-2 drop-shadow-3xl'>
                            <p className='text-white font-bold text-32 leading-25'>{router.pathname === '/find-a-mentor' ? "Sarah Liu" : "James Austin"}</p>
                            <p className='text-white font-light text-24 leading-25'>{router.pathname === '/find-a-mentor' ? "Student" : "Architect"}</p>
                        </div>
                    </div>
                    {
                        router.pathname === '/find-a-mentor' ? (
                            <p className='w-9/12 text-16 leading-28 text-white mt-12'>
                                In an increasingly competitive job environment it is important to prepare as much as possible to give yourself the best chance of a successful job application and the best chance of early promotion.
                                Mentorship from industry professionals is the best way to prepare for your dream career. Get insights into how to craft the perfect application, conduct practice interviews and conduct Q&A sessions with experts in your industry to make sure you are well prepared to
                                succeed. By connecting with mentors on Coachcube you expand your professional network and in
                                doing so you open yourself up to more potential opportunities.
                            </p>
                        ) : (
                            <p className='w-9/12 text-16 leading-28 text-white mt-12'>
                                <span className='font-bold text-20 leading-28'>Raise money for your favourite charities by becoming a mentor</span> <br /> <br />
                                Use your years of knowledge and experience to help train students and young professionals who are keen to follow in your footsteps. Each mentor session you complete will raise money for your favourite charities whilst helping to sharpen your mentoring and
                                communication skills and expand your network of junior professionals in your industry.
                            </p>
                        )
                    }
                    <div className='text-white text-opacity-50 text-16 leading-20 mt-20'>
                        Home / {router.pathname === '/find-a-mentor' ? "Find a mentor" : "Become a mentor"}
                    </div>
                </div>
            </div>
            <div className="lg:w-6/12 w-full lg:h-full h-3/4 flex flex-col gap-12 lg:gap-0 justify-start items-start lg:bg-white lg:bg-none bg-mix lg:p-0 lg:py-0 py-16 pt-12 md:px-20 lg:px-0 px-6 overflow-auto">
                <div className="lg:hidden w-full flex flex-col gap-4 justify-start">
                    <div className='flex justify-start items-center gap-2'>
                        <div className='cursor-pointer' onClick={() => router.push('/')}>
                            <Image src={ArrowSVG} alt="arrow" height={18} width={18} />
                        </div>
                        <p className='text-16 leading-20 text-white'>
                            Back
                        </p>
                    </div>
                    <p className="lg:text-start font-bold lg:text-28 text-24 lg:leading-36 leading-31 text-white text-center lg:px-0 px-4">
                        {
                            router.pathname === '/find-a-mentor' ? "Raise money for causes you believe in by becoming a mentor" : "Bespoke career advice from industry experts"
                        }
                    </p>
                    <div className="w-full flex lg:justify-start justify-center lg:items-start items-center">
                        <div className="lg:w-28 w-56 h-1 rounded-sm bg-primary-300" />
                    </div>
                    <figure className="relative text-center mt-4 mx-auto">
                        <Image src={router.pathname === '/find-a-mentor' ? SignUpBG : SignUpMaleBG} alt="sign up" className='m-auto' />
                        <figcaption className='absolute bottom-4 left-4 flex flex-col text-16 leading-14 gap-2 justify-start items-start drop-shadow-3xl'>
                            <p className='text-white font-bold'>{router.pathname === '/find-a-mentor' ? "Sarah Liu" : "James Austin"}</p>
                            <p className='text-white font-light'>{router.pathname === '/find-a-mentor' ? "Student" : "Architect"}</p>
                        </figcaption>
                    </figure>
                </div>
                {
                    router.pathname === '/find-a-mentor' ? (
                        <p className='lg:hidden w-full text-16 leading-28 lg:text-white'>
                            In an increasingly competitive job environment it is important to prepare as much as possible to give yourself the best chance of a successful job application and the best chance of early promotion.
                            Mentorship from industry professionals is the best way to prepare for your dream career. Get insights into how to craft the perfect application, conduct practice interviews and conduct Q&A sessions with experts in your industry to make sure you are well prepared to
                            succeed. By connecting with mentors on Coachcube you expand your professional network and in
                            doing so you open yourself up to more potential opportunities.
                        </p>
                    ) : (
                        <p className='lg:hidden w-full text-16 leading-28 lg:text-white'>
                            <span className='font-bold text-20 leading-28'>Raise money for your favourite charities by becoming a mentor</span> <br /> <br />
                            Use your years of knowledge and experience to help train students and young professionals who are keen to follow in your footsteps. Each mentor session you complete will raise money for your favourite charities whilst helping to sharpen your mentoring and
                            communication skills and expand your network of junior professionals in your industry.
                        </p>
                    )
                }
                <p className='lg:hidden text-primary-100 text-opacity-50 text-16 leading-20 text-start'>
                    Home / {router.pathname === '/find-a-mentor' ? "Find a mentor" : "Become a mentor"}
                </p>
                <div className="w-full lg:h-full flex flex-col justify-start items-start gap-8">
                    <div className="w-full flex justify-between items-center md:px-10 lg:px-0 gap-2">
                        <div className="w-full flex flex-col justify-center items-center gap-4"
                        // onClick={() => {
                        //     setTabs(0)
                        //     setError([])
                        //     emptyValues()
                        //     setString({
                        //         ...string,
                        //         categories: 'Industry'
                        //     })
                        // }}
                        >
                            <p className={`xl:text-24 md:text-24 text-center text-16 md:leading-32 leading-22 text-primary-100 font-bold`}>{router.pathname === '/find-a-mentor' ? "Find a Mentor" : "Become a Mentor"}</p>
                            <div className="w-170 h-1 rounded-sm bg-primary-450" />
                        </div>
                    </div>
                    <div className={`w-full flex flex-col gap-4 items-start justify-start`}>
                        <Input
                            type="email"
                            placeholder="Email"
                            value={values.email}
                            className="w-full"
                            onChange={(e) => setValues({ ...values, email: e.target.value })}
                            required
                            errorMessage={error?.email}
                        />
                        {
                            error?.email && (
                                <p className='lg:hidden font-400 text-14 leading-28 text-red-500'>
                                    {error?.email}
                                </p>
                            )
                        }
                        <div className="w-full flex justify-between items-start lg:gap-10 gap-4">
                            <Input
                                type="text"
                                placeholder="First Name"
                                value={values.first_name}
                                className="w-1/2"
                                onChange={(e) => setValues({ ...values, first_name: e.target.value })}
                                required
                                errorMessage={(error?.first_name || error?.last_name) ? "First Name and Last Name cannot be empty" : null}
                            />
                            <Input
                                type="text"
                                placeholder="Last Name"
                                value={values.last_name}
                                className="w-1/2"
                                onChange={(e) => setValues({ ...values, last_name: e.target.value })}
                                required
                                isLastname={error?.first_name || error?.last_name}
                            // errorMessage={(error?.first_name || error?.last_name) ? "First Name and Last Name cannot be empty" : null}
                            />
                        </div>
                        {
                            (error?.first_name || error?.last_name) ? (
                                <p className='lg:hidden font-400 text-14 leading-28 text-red-500'>
                                    First Name and Last Name cannot be empty
                                </p>
                            ) : null
                        }
                        <div className="w-full flex justify-between items-start lg:gap-8 gap-4">
                            <SelectInput
                                withFilter
                                text={string.phoneCode}
                                data={dataPhonecode}
                                className="md:w-3/12 w-4/12"
                                dropdownWidth='w-58'
                                collapse={collapsed}
                                onClick={() => {
                                    setCollapsed((prev) => !prev)
                                    setCollapseCategory(false)
                                }}
                                onClickItem={(value) => {
                                    setCollapsed(false)
                                    setValues({
                                        ...values,
                                        country_code: value.values.replace('+', '')
                                    })
                                    setString({
                                        ...string,
                                        phoneCode: value.values
                                    })
                                }}
                                filled={values.country_code}
                            />
                            <Input
                                type="number"
                                placeholder="Phone Number"
                                value={values.phone}
                                className="w-9/12"
                                onChange={(e) => setValues({ ...values, phone: e.target.value })}
                            />
                        </div>
                        <SelectInput
                            text={string.categories}
                            data={categories}
                            className="w-full"
                            collapse={collapseCategory}
                            category
                            onClick={() => { setCollapseCategory((prev) => !prev); setCollapsed(false) }}
                            onClickItem={(value) => {
                                setCollapseCategory(false)
                                setValues({
                                    ...values,
                                    industry_id: value.values
                                })
                                setString({
                                    ...string,
                                    categories: value.labels
                                })
                            }}
                            required
                            filled={values.industry_id}
                            errorMessage={error?.industry_id && "Please choose one industry."}
                        />
                        {
                            error?.industry_id && (
                                <p className='lg:hidden font-400 text-14 leading-28 text-red-500'>
                                    {error?.industry_id && "Please choose one industry."}
                                </p>
                            )
                        }
                        <Input
                            type="textarea"
                            placeholder="Messages (Max 150 characters)"
                            value={values.message}
                            className="w-full h-[153px]"
                            onChange={(e) => setValues({ ...values, message: e.target.value })}
                        />
                    </div>
                    <button className={`${loading && "disabled:bg-primary-310"} w-full flex gap-4 justify-center items-center rounded-lg bg-primary-300 py-4 px-6 hover:shadow-xl`}
                        onClick={_handleSubmit}
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <p className='text-white font-bold text-20 leading-25'>Registering...</p>
                                <div>
                                    <div className="border-t-transparent w-6 h-6 border-[3px] border-white border-solid rounded-full animate-spin"></div>
                                </div>
                            </>
                        )
                            : <p className='text-white font-bold text-20 leading-25'>Register Now</p>
                        }
                    </button>
                </div>
                {/* <div className='w-full'>
                    {
                        router.pathname === "/find-a-mentor" ? (
                            <div className="klaviyo-form-XCgpwv"></div>
                        ) : (
                            <div className="klaviyo-form-UB7Fyw"></div>
                        )
                    }
                </div> */}
            </div>
        </div>
    )
}

export default SignUp