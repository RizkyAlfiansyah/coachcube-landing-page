import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import SignUpBG from "assets/images/sign-up-img.png";
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
        categories: 'Industry (Your Expertise)',
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

    console.log(error?.phone);

    return (
        <>
            <div className="relative lg:w-5/12 w-full lg:h-screen h-96 flex flex-col lg:gap-8 gap-6 justify-start items-start lg:bg-primary-700 bg-primary-720 lg:px-20 px-5 lg:py-16 py-12" ref={ref}>
                <p className="lg:text-start font-bold lg:text-28 text-24 lg:leading-36 leading-31 text-white text-center lg:px-0 px-4">
                    Raise money for causes you believe in by becoming a mentor
                </p>
                <div className="w-full flex lg:justify-start justify-center lg:items-start items-center">
                    <div className="w-28 h-1 rounded-sm bg-primary-300" />
                </div>
                <div className="lg:w-720 w-full relative flex flex-col lg:justify-start justify-center lg:items-start items-center">
                    <Image src={SignUpBG} alt="sign up" className='z-20' />
                    <div className='hidden lg:flex w-[50px] h-[68px] lg:absolute right-[118px] -bottom-[67px] z-10'>
                        <Image src={PolygonBG} alt="sign up" />
                    </div>
                </div>
            </div>
            <div className="lg:w-7/12 w-full lg:h-full h-3/4 flex flex-col justify-start items-center bg-white lg:p-24 lg:py-16 py-8 pt-44 md:pt-60 lg:pt-0 px-6">
                {
                    !success ? (
                        <div className="w-full flex flex-col justify-start items-start gap-8">
                            <div className="w-full flex justify-center items-center lg:gap-16 gap-6">
                                <div />
                                <div className="flex flex-col justify-center items-center gap-1 cursor-pointer"
                                    onClick={() => setTabs(0)}
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
                                <div className="flex flex-col justify-center items-center gap-1 cursor-pointer" onClick={() => setTabs(1)}>
                                    <p className={`lg:font-400 font-500 lg:text-24 text-16 lg:leading-32 leading-22 text-primary-100 ${tabs === 0 && "opacity-50"}`}>Become a Mentor</p>
                                    {
                                        tabs === 1 && (
                                            <div className="w-116 h-1 rounded-sm bg-primary-450" />
                                        )
                                    }
                                </div>
                                <div />
                            </div>
                            <div className={`w-full flex flex-col ${error?.length === 0 ? "gap-8" : "gap-4"} items-start justify-start`}>
                                <Input
                                    type="email"
                                    placeholder="Email*"
                                    value={values.email}
                                    className="w-full"
                                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                                    required={error.email}
                                    errorMessage={error.email}
                                />
                                <div className="w-full flex justify-between items-start gap-10">
                                    <Input
                                        type="text"
                                        placeholder="First Name*"
                                        value={values.first_name}
                                        className="w-1/2"
                                        onChange={(e) => setValues({ ...values, first_name: e.target.value })}
                                        required={error.first_name}
                                        errorMessage={error.first_name || error.last_name}
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Last Name*"
                                        value={values.last_name}
                                        className="w-1/2"
                                        onChange={(e) => setValues({ ...values, last_name: e.target.value })}
                                        required={error.last_name}
                                        errorMessage={error.first_name && ""}
                                    />
                                </div>
                                <div className="w-full flex justify-between items-start gap-10">
                                    <SelectInput
                                        text={string.phoneCode}
                                        data={dataPhonecode}
                                        className="w-2/12"
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
                                        filled={!values.country_code}
                                    />
                                    <Input
                                        type="number"
                                        placeholder={tabs === 1 ? "Phone Number*" : "Phone Number"}
                                        value={values.phone}
                                        className="w-9/12"
                                        onChange={(e) => setValues({ ...values, phone: e.target.value })}
                                        required={error.phone}
                                        errorMessage={error.phone == "The phone field is required." ? "Phone number cannot be empty." : error.phone}
                                    />
                                </div>
                                <SelectInput
                                    text={tabs === 1 ? "Industry (Your Expertise)*" : "Industry (Your Expertise)"}
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
                                    required={error.industry_id}
                                    filled={!values.industry_id}
                                    errorMessage={error.industry_id && "Please choose one industry."}
                                />
                                <Input
                                    type="textarea"
                                    placeholder="Messages (Max 150 characters)"
                                    value={values.message}
                                    className="w-full"
                                    onChange={(e) => setValues({ ...values, message: e.target.value })}
                                />
                            </div>
                            <button className={`${loading && "disabled:bg-primary-550 disabled:text-primary-250"} w-full rounded-lg bg-primary-300 text-white font-bold text-20 leading-25 py-4 px-6 hover:shadow-xl`}
                                onClick={_handleSubmit}
                                disabled={loading}
                            >
                                Register Now
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