import React from 'react'
import Image from 'next/image'
import OneBlueWordHeading from '../OneBlueWordHeading'


const data = [
    {
        title: "REAL-TIME & PREDICTIVE ANALYTICS",
        img: "/subservices/1.png"
    },
    {
        title: "DATA FEDERATION",
        img: "/subservices/2.png"
    },
    {
        title: "CLOUD SERVERS",
        img: "/subservices/3.png"
    },
    {
        title: "ALERTS AND NOTIFICATIONS",
        img: "/subservices/4.png"
    },
]

interface props {
    heading: string,
    sub_heading: string,
    color_word_no: number,
    feature_card: {
        title: string,
        feature_icon: {
            url: string
        }
    }[]
}

const Description = ({heading,sub_heading,color_word_no,feature_card}:props) => {
    return (
        <section className='min-w-full min-h-svh flex lg:flex-row flex-col px-[10%] items-center'>
            <div className=' lg:w-[60%] h-fit py-16 space-y-4'>
                <OneBlueWordHeading heading={heading} wordNum={color_word_no}/>
                {/* < className='text-4xl md:text-5xl font-sfpd-bold'>{heading}</h1> */}
                <p className='text-black/50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae labore eveniet a praesentium libero nulla tempore vel quo dicta mollitia.</p>
            </div>
            <div className='lg:w-[50%] h-fit justify-center grid grid-cols-2 lg:pl-20 gap-8'>
                {
                    data.map((item, idx) => (
                        <div key={idx} className='rounded-xl shadow-allside px-7 py-5 text-sm space-y-4 text-black/70'>
                            <Image src={item.img} width={40} height={40} alt='service description' aria-label='This are small description images for each service we provide'></Image>
                            <p>{item.title}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Description