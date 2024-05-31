import React from 'react'
import OneBlueWordHeading from '../OneBlueWordHeading'
import TeamsCard from './TeamsCard'
import PrimaryButton from '../buttons/PrimaryButton'
import BlockImageLight from '@/public/svgs/blockImageLight.svg'



const team = [
    {
        img: "/raster/demoUserLogo.svg",
        designation: "Chief of Engineering",
        userName: "Sourav Das",
        edu: "Btech, IITKGP",
        linkedin: "https://www.linkedin.com/in/souravudo/"
    },
    {
        img: "/raster/demoUserLogo.svg",
        designation: "Chief of Engineering",
        userName: "Sourav Das",
        edu: "Btech, IITKGP",
        linkedin: "https://www.linkedin.com/in/souravudo/"
    },
    {
        img: "/raster/demoUserLogo.svg",
        designation: "Chief of Engineering",
        userName: "Sourav Das",
        edu: "Btech, IITKGP",
        linkedin: "https://www.linkedin.com/in/souravudo/"
    },
    {
        img: "/raster/demoUserLogo.svg",
        designation: "Chief of Engineering",
        userName: "Sourav Das",
        edu: "Btech, IITKGP",
        linkedin: "https://www.linkedin.com/in/souravudo/"
    },
    {
        img: "/raster/demoUserLogo.svg",
        designation: "Chief of Engineering",
        userName: "Sourav Das",
        edu: "Btech, IITKGP",
        linkedin: "https://www.linkedin.com/in/souravudo/"
    },
    {
        img: "/raster/demoUserLogo.svg",
        designation: "Chief of Engineering",
        userName: "Sourav Das",
        edu: "Btech, IITKGP",
        linkedin: "https://www.linkedin.com/in/souravudo/"
    },
    {
        img: "/raster/demoUserLogo.svg",
        designation: "Chief of Engineering",
        userName: "Sourav Das",
        edu: "Btech, IITKGP",
        linkedin: "https://www.linkedin.com/in/souravudo/"
    },
    {
        img: "/raster/demoUserLogo.svg",
        designation: "Chief of Engineering",
        userName: "Sourav Das",
        edu: "Btech, IITKGP",
        linkedin: "https://www.linkedin.com/in/souravudo/"
    },
    {
        img: "/raster/demoUserLogo.svg",
        designation: "Chief of Engineering",
        userName: "Sourav Das",
        edu: "Btech, IITKGP",
        linkedin: "https://www.linkedin.com/in/souravudo/"
    },
    {
        img: "/raster/demoUserLogo.svg",
        designation: "Chief of Engineering",
        userName: "Sourav Das",
        edu: "Btech, IITKGP",
        linkedin: "https://www.linkedin.com/in/souravudo/"
    },
    {
        img: "/raster/demoUserLogo.svg",
        designation: "Chief of Engineering",
        userName: "Sourav Das",
        edu: "Btech, IITKGP",
        linkedin: "https://www.linkedin.com/in/souravudo/"
    },
]

const advisor =[
    {
        img: "/raster/demoUserLogo.svg",
        designation: "Chief of Engineering",
        userName: "Sourav Das",
        edu: "Btech, IITKGP",
        linkedin: "https://www.linkedin.com/in/souravudo/"
    },
    {
        img: "/raster/demoUserLogo.svg",
        designation: "Chief of Engineering",
        userName: "Sourav Das",
        edu: "Btech, IITKGP",
        linkedin: "https://www.linkedin.com/in/souravudo/"
    },
    {
        img: "/raster/demoUserLogo.svg",
        designation: "Chief of Engineering",
        userName: "Sourav Das",
        edu: "Btech, IITKGP",
        linkedin: "https://www.linkedin.com/in/souravudo/"
    },

]

const Team = () => {
    return (
        <section className='w-full flex flex-col items-center justify-center py-24 gap-32 relative'>
            <div className='flex flex-col items-center justify-center w-[92%] gap-28'>
                <OneBlueWordHeading heading='Meet our core team' wordNum={3} />
                <div className='flex gap-10 flex-wrap justify-24 justify-center'>
                    {
                        team.map((member, idx) => (

                            <TeamsCard key={idx} {...member}/>
                        ))
                    }
                </div>
                <PrimaryButton title='View All Members'/>
            </div>
            <div className='flex flex-col items-center justify-center w-[92%] gap-28'>
                <OneBlueWordHeading heading='Our Advisors' wordNum={2}/>
                <div className='flex gap-10 flex-wrap justify-24 justify-center'>
                    {
                        advisor.map((advisor,idx)=>(
                            <TeamsCard key={idx} {...advisor}/>
                        ))
                    }
                </div>
            </div>
            <BlockImageLight className='absolute top-48 md:top-[5%] right-0 -z-[1] w-[15rem] md:w-[30rem]'/>
        </section>
    )
}

export default Team