import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import SignUpBG from "assets/images/sign-up-img.png";
import SignUpMaleBG from "assets/images/signup-male.png";
import PolygonBG from "assets/images/polygon.png";
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

const SignUp = ({ ref }) => {

    const [collapsed, setCollapsed] = useState(false);
    const [collapseCategory, setCollapseCategory] = useState(false);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState([]);
    const [string, setString] = useState({
        phoneCode: '+44',
        categories: 'Industry',
    });
    const [tabs, setTabs] = useState(0);
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
        payload.is_mentor = tabs === 1 ? true : false;

        setLoading(true);

        try {
            axiosApiInstance.post('/signups', payload)
                .then((res) => {
                    setLoading(false);
                    setSuccess(true);
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
    }

    return (
        <>
            <div className="relative lg:w-5/12 w-full xl:h-full lg:h-full h-96 flex flex-col lg:gap-8 gap-6 justify-start items-start bg-primary-710 xl:px-20 px-5 xl:py-16 py-12" ref={ref}>
                <p className="lg:text-start font-bold lg:text-28 text-24 lg:leading-36 leading-31 text-white text-center lg:px-0 px-4">
                    Raise money for causes you believe in by becoming a mentor
                </p>
                <div className="w-full flex lg:justify-start justify-center lg:items-start items-center">
                    <div className="lg:w-28 w-56 h-1 rounded-sm bg-primary-300" />
                </div>
                <div className="xl:w-720 lg:w-[450px] w-full flex flex-col lg:justify-start justify-center lg:items-start items-center mt-9">
                    <Image src={tabs === 0 ? SignUpBG : SignUpMaleBG} alt="sign up" className='z-20' />
                </div>
            </div>
            <div className="lg:w-7/12 w-full lg:h-full h-3/4 flex flex-col justify-start items-center bg-white xl:p-24 xl:pb-4 lg:pb-4 lg:py-12 xl:pl-36 lg:pr-6 lg:px-14 py-8 pt-56 md:pt-96 sm:pt-[400px] md:px-20 px-6 overflow-auto">
                {
                    !success ? (
                        <div className="w-full h-full flex flex-col justify-start items-start gap-8 overflow-auto">
                            <div className="w-full flex justify-evenly items-center xl:gap-16 md:gap-4 gap-6 md:px-10 lg:px-0">
                                <div className="w-full flex flex-col justify-center items-center gap-1 cursor-pointer"
                                    onClick={() => {
                                        setTabs(0)
                                        setError([])
                                        emptyValues()
                                        setString({
                                            ...string,
                                            categories: 'Industry'
                                        })
                                    }}
                                >
                                    <p className={`font-400 lg:text-24 text-16 lg:leading-32 leading-22 text-primary-100 ${tabs === 1 && "opacity-50"}`}>Find a Mentor</p>
                                    {
                                        tabs === 0 && (
                                            <div className="w-116 h-1 rounded-sm bg-primary-450" />
                                        )
                                    }
                                </div>
                                <div>
                                    <div className="w-1 h-9 bg-primary-850" />
                                </div>
                                <div className="w-full flex flex-col justify-center items-center gap-1 cursor-pointer"
                                    onClick={() => {
                                        setTabs(1)
                                        setError([])
                                        emptyValues()
                                        setString({
                                            ...string,
                                            categories: 'Industry'
                                        })
                                    }}>
                                    <p className={`lg:font-400 font-500 lg:text-24 text-16 lg:leading-32 leading-22 text-primary-100 ${tabs === 0 && "opacity-50"}`}>Become a Mentor</p>
                                    {
                                        tabs === 1 && (
                                            <div className="w-116 h-1 rounded-sm bg-primary-450" />
                                        )
                                    }
                                </div>
                            </div>
                            <div className={`w-full flex flex-col ${error?.length === 0 ? "gap-8" : "gap-4"} items-start justify-start`}>
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    value={values.email}
                                    className="w-full"
                                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                                    required
                                    errorMessage={error.email}
                                />
                                {
                                    error.email && (
                                        <p className='lg:hidden font-400 text-14 leading-28 text-red-500'>
                                            {error.email}
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
                                        errorMessage={error.first_name || error.last_name}
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Last Name"
                                        value={values.last_name}
                                        className="w-1/2"
                                        onChange={(e) => setValues({ ...values, last_name: e.target.value })}
                                        required
                                        errorMessage={error.first_name && ""}
                                    />
                                </div>
                                {
                                    error.first_name && (
                                        <p className='lg:hidden font-400 text-14 leading-28 text-red-500'>
                                            {error.first_name || error.last_name}
                                        </p>
                                    )
                                }
                                <div className="w-full flex justify-between items-start lg:gap-8 gap-4">
                                    <SelectInput
                                        text={string.phoneCode}
                                        data={dataPhonecode}
                                        className="md:w-3/12 w-4/12 text-primary-950"
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
                                        required={tabs === 1}
                                        errorMessage={error.phone == "The phone field is required." ? "Phone number cannot be empty." : error.phone}
                                    />
                                </div>
                                {
                                    error.phone && (
                                        <p className='lg:hidden font-400 text-14 leading-28 text-red-500'>
                                            {error.phone == "The phone field is required." ? "Phone number cannot be empty." : error.phone}
                                        </p>
                                    )
                                }
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
                                    required={tabs === 1}
                                    filled={values.industry_id}
                                    errorMessage={error.industry_id && "Please choose one industry."}
                                />
                                {
                                    error.industry_id && (
                                        <p className='lg:hidden font-400 text-14 leading-28 text-red-500'>
                                            {error.industry_id && "Please choose one industry."}
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
                    ) : (
                        <div className='w-full h-full flex flex-col justify-center items-center gap-7 pt-24 px-16'>
                            <div>
                                <Image
                                    src={SuccessSVG}
                                    alt="success"
                                />
                            </div>
                            <p className='w-full lg:text-justify text-center font-bold text-20 leading-28 text-primary-100 opacity-50'>
                                We have sent a confirmation email to <span className='font-extrabold'>{values.email}</span> Please press the confirmation button to confirm your registration.
                            </p>
                            <div className="w-full flex flex-col justify-center items-center gap-2.5 lg:mt-7 mt-0">
                                <p className="font-400 text-14 leading-22 text-primary-100 opacity-50 text-center">
                                    Connect with us
                                </p>
                                <div className="flex justify-center items-center gap-4">
                                    {
                                        Array(socials.length).fill(0).map((_, index) => (
                                            <div key={index} className="cursor-pointer">
                                                <Image src={socials[index]} alt="logo" />
                                            </div>

                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default SignUp