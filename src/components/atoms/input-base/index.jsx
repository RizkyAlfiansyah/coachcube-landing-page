import React from 'react'

const Input = ({
    type,
    name,
    value,
    placeholder,
    className,
    onChange = () => { },
    required = false,
}) => {
    if (type === 'textarea') {
        return (
            <textarea
                maxLength={150}
                name={name}
                value={value}
                placeholder={placeholder}
                className={`${className} py-5 px-4 bg-primary-550 border-1 border-primary-550 focus:ring-0 focus:outline-none rounded-lg text-20 font-400 leading-25 resize-none`}
                onChange={onChange}
            />
        )
    } else {
        return (
            <div className={`${className} flex flex-col gap-3`}>
                <input
                    type={type}
                    pattern={type === 'tel' ? '[0-9]{3}-[0-9]{2}-[0-9]{3}' : ''}
                    placeholder={placeholder}
                    className={`w-full py-5 px-4 bg-primary-550 border-1 ${required ? "border-red-500" : "border-primary-550"} focus:ring-0 focus:outline-none rounded-lg text-20 font-400 leading-25`}
                    value={value}
                    onChange={onChange}
                    required={required}
                />
            </div>
        )
    }
}

export default Input