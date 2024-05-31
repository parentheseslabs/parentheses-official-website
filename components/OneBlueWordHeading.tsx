import React from 'react'

const OneBlueWordHeading = ({ heading,wordNum }: { heading: string,wordNum:number }) => {
    const words = heading.split(" ");
    return (
        <div className='flex gap-2'>
            {
                words.map((word,idx)=>(
                    <h1 key={idx} className={`${idx+1===wordNum && "text-primary_blue"} font-sfpd-bold text-[3.4vmax]`}>{word}</h1>
                ))
            }

        </div>
    )
}

export default OneBlueWordHeading