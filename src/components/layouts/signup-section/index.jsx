import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import SignUpBG from "assets/images/sign-up-img.png";
import PolygonBG from "assets/images/polygon.png";
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
    const [error, setError] = useState([])

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
        country_code: '',
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
                    console.log(res);
                    setLoading(false);
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

    return (
        <>
            <div className="relative w-5/12 h-full flex flex-col gap-8 justify-start items-start bg-primary-700 px-20 py-16" ref={ref}>
                <p className="text-start font-bold text-28 leading-36 text-white">
                    Raise money for causes you believe in by becoming a mentor
                </p>
                <div className="w-full flex justify-start">
                    <div className="w-28 h-1 rounded-sm bg-primary-300" />
                </div>
                <div className="w-720 relative flex flex-col">
                    <Image src={SignUpBG} alt="sign up" className='z-20' />
                    <div className='w-[50px] h-[68px] absolute right-[118px] -bottom-[67px] z-10'>
                        <Image src={PolygonBG} alt="sign up" />
                    </div>
                </div>
            </div>
            <div className="w-7/12 h-full flex flex-col justify-start items-center bg-white p-24 py-16">
                <div className="w-full flex flex-col justify-start items-start gap-8">
                    <div className="w-full flex justify-center items-center gap-16">
                        <div />
                        <div className="flex flex-col justify-center items-center gap-1 cursor-pointer"
                            onClick={() => setTabs(0)}
                        >
                            <p className={`font-400 text-24 leading-32 text-primary-100 ${tabs === 1 && "opacity-50"}`}>Find a Mentor</p>
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
                            <p className={`font-400 text-24 leading-32 text-primary-100 ${tabs === 0 && "opacity-50"}`}>Become a Mentor</p>
                            {
                                tabs === 1 && (
                                    <div className="w-116 h-1 rounded-sm bg-primary-450" />
                                )
                            }
                        </div>
                        <div />
                    </div>
                    <div className="w-full flex flex-col gap-8 items-start justify-start">
                        <Input
                            type="email"
                            placeholder="Email*"
                            value={values.email}
                            className="w-full"
                            onChange={(e) => setValues({ ...values, email: e.target.value })}
                            required={error.email}
                        />
                        <div className="w-full flex justify-between items-start gap-10">
                            <Input
                                type="text"
                                placeholder="First Name*"
                                value={values.first_name}
                                className="w-1/2"
                                onChange={(e) => setValues({ ...values, first_name: e.target.value })}
                                required={error.first_name}
                            />
                            <Input
                                type="text"
                                placeholder="Last Name*"
                                value={values.last_name}
                                className="w-1/2"
                                onChange={(e) => setValues({ ...values, last_name: e.target.value })}
                                required={error.last_name}
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
                                        country_code: value.values
                                    })
                                    setString({
                                        ...string,
                                        phoneCode: value.values
                                    })
                                }}
                                filled={!values.country_code}
                            />
                            <Input
                                type="tel"
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
                            required={error.industry_id}
                            filled={!values.industry_id}
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
            </div>
        </>
    )
}

export default SignUp