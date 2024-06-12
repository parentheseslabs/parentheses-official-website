"Use client"
import React, { useState } from 'react';
import PrimaryButton from '../buttons/PrimaryButton';
import Logo from '@/public/logo/moblieLogo.svg'
import Link from 'next/link';

const services = ["Product Expertise", "Web Development", "SEO", "UI/UX", "App Development", "iOS Development", "Dashboards"]

const ConversationCard = () => {

    const [selectedOption, setSelectedOption] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false)

    const allFormData = {}

    const handleOptionClick = () => {
        setButtonVisible(false)
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false);
            setSelectedOption(true)
        }, 3000)
    };

    const handleChooseOption = (option: string) => {

        if (!options.includes(option)) {
            const newOptions = [...options, option];
            setOptions(newOptions);
        } else {
            const newOptions = [...options];
            const index = newOptions.indexOf(option)
            newOptions.splice(index, 1);
            setOptions(newOptions);

        }

    }

    function goToForm() {
        setIsSubmitting(true);
    }

    return (
        <div className={`w-full md:w-[80%] lg:w-[40%] shadow-allside bg-white py-4 md:py-6 lg:py-8 px-10 rounded-3xl ${isSubmitting ? "h-full" : "h-[25rem]"} flex flex-col gap-3 justify-end overflow-scroll text-sm sm:text-base md:text-lg`}>
            {!isSubmitting ?
                <div className='flex flex-col justify-end gap-3 overflow-scroll'>
                    <div className=' space-y-3'>
                        <h1 className='bg-primary_blue/30 w-fit p-4 rounded-2xl rounded-bl-none'>Hey there, Welcome to Parenthesis Labs!</h1>
                        <h1 className='bg-primary_blue/30 w-fit p-4 rounded-2xl rounded-bl-none'>Wanna see what services do we offer?</h1>
                    </div>
                    <div className="flex justify-end">
                        <button onClick={() => handleOptionClick()} className={`${buttonVisible ? "flex" : "hidden"} border-dashed border border-gray-400 p-4 rounded-2xl hover:bg-gray-200 duration-300`}>Yeah sure!</button>
                        <h1 className={`${buttonVisible ? "hidden" : "flex"} bg-primary_blue/30 w-fit p-4 rounded-2xl rounded-br-none`}>Yeah sure!</h1>
                        {/* Add more options as needed */}
                    </div>

                    <div className={``}>
                        <div className={` ${isLoading ? "scale-100 duration-300 h-fit p-4" : "scale-0 h-0"} origin-bottom-left bg-primary_blue w-fit rounded-2xl flex gap-1`}>
                            <div className={` ${isLoading ? "scale-100 duration-300 h-fit p-1" : "scale-0 h-0"} p-1 bg-white rounded-full animate-pulse `}></div>
                            <div className={` ${isLoading ? "scale-100 duration-300 h-fit p-1" : "scale-0 h-0"} p-1 bg-white rounded-full animate-pulse `}></div>
                            <div className={` ${isLoading ? "scale-100 duration-300 h-fit p-1" : "scale-0 h-0"} p-1 bg-white rounded-full animate-pulse `}></div>
                        </div>
                        <h1 className={` ${selectedOption ? "scale-100 duration-300 h-fit" : "scale-0 h-0"} origin-bottom-left bg-primary_blue/30 w-fit p-4 rounded-2xl rounded-bl-none`}>We are capable of Developing Apps tailored to your vision.</h1>

                    </div>

                    <div className=" space-y-6">
                        <h1 className={` text-black/60 ${selectedOption ? "flex" : "hidden h-0"}`}>Select the services you&apos;re interested in.</h1>
                        <div className='flex justify-start flex-wrap gap-1'>

                            {
                                services.map((service, idx) => (
                                    <button key={idx} onClick={() => handleChooseOption(service)} className={`${selectedOption ? "flex" : "hidden"} border-dashed border border-gray-400 ${options.includes(service) ? "bg-primary_blue hover:bg-primary_blue/80 text-white/80" : "hover:bg-gray-200"} p-2 rounded-2xl  duration-300 mt-1`}>{service}</button>
                                ))
                            }
                        </div>
                        {
                            options.length > 0 &&
                            <PrimaryButton title='Send Request' className='w-fit' handleClick={goToForm} />
                        }
                    </div>
                </div>
                :
                <>
                    <Form />
                </>
            }
        </div>
    );
};


export const Form = () => {
    const [formSubmitted, setFormSubmitted] = useState(false)
    function formSubmission() {
        setFormSubmitted(true);
    }
    return (
        <div className='flex justify-start items-center flex-col gap-4 h-full text-center'>
            {
                formSubmitted ?
                    <>
                        <div className='flex flex-col gap-4'>
                            <div className='relative flex justify-center items-center p-6'>
                                <div className=' bg-primary_blue/20 p-5 rounded-full  animate-ping'></div>
                                <div className='bg-primary_blue p-2 rounded-full left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] absolute -z-0'></div>
                                <div className='bg-primary_blue/20 p-5 rounded-full left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] absolute -z-0'></div>
                            </div>
                            <h1 className='text-3xl font-sfpd-semibold'>Sit & Explore!!</h1>
                            <h2 className='text-black/50'>Our team will contact you ASAP.</h2>
                            <Link href={"/casestudies"} className=''>
                                <PrimaryButton title='Explore Case Studies' />
                            </Link>
                        </div>
                    </>
                    :
                    <>
                        <Logo />
                        <h1 className='text-3xl font-sfpd-semibold'>Almost Done</h1>
                        <h2 className='text-black/50'>Please provide your details below.</h2>
                        <form action="" className='space-y-4'>
                            <input type="text" placeholder='Enter your domain(e.g. Marketing)' className='p-3 w-full border border-gray-200 bg-gray-50 rounded-lg' />
                            <input type="email" name="email" id="" placeholder='Enter your email' className='p-3 w-full border border-gray-200 bg-gray-50 rounded-lg' />
                        </form>
                        <PrimaryButton title='Send' handleClick={formSubmission} />
                    </>
            }
        </div>
    )
}

export default ConversationCard;
