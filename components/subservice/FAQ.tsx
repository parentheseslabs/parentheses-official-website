"use client"
import React, { useEffect, useState } from 'react'


const faq = [
    {
        question: "What is your name?",
        answer: "Bhupendra Yogi"
    },
    {
        question: "What is your name?",
        answer: "Bhupendra Yogi"
    },
    {
        question: "What is your name?",
        answer: "Bhupendra Yogi"
    },
    {
        question: "What is your name?",
        answer: "Bhupendra Yogi"
    },
    {
        question: "What is your name?",
        answer: "Bhupendra Yogi"
    },
]

interface prop{
    allProp:{
        question:string,
        answer:string
    }[]
}

const FAQ = ({allProp}:prop) => {
    const [selectedQuestion, setSelectedQuestion] = useState(0)
    useEffect(() => { }, [selectedQuestion])
    function handleClick(idx: number) {

        if (selectedQuestion !== idx) {
            setSelectedQuestion(idx);
        } else {
            setSelectedQuestion(-1)
        }
    }

    return (
        <section className='flex flex-col items-center gap-8 py-20'>
            <h1 className='text-primary_blue md:text-lg font-sfpd-semibold'>FREQUENTLY ASKED QUESTIONS</h1>
            <div className='space-y-6'>
                {
                    allProp.map((item, idx) => {
                        const i = { ...item, idx }
                        return (
                            <div key={idx} className={`${idx == selectedQuestion?"h-full":"h-[4.4rem]"}  shadow-allside bg-white rounded-xl px-5 md:px-8 py-6 md:w-[45rem] w-[20rem] space-y-8 overflow-hidden `}>
                                <div
                                    onClick={() => handleClick(idx)}
                                    className='flex justify-between'>
                                    <h1>{item.question}</h1>
                                    <div className={`size-2 border-t-2 border-l-2 border-black  translate-y-2 ${idx === selectedQuestion ? "rotate-45" : "-rotate-[135deg]"} duration-300`}></div>
                                </div>
                                <h1 className={` duration-300 text-neutral-400`}>{item.answer}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}



export default FAQ