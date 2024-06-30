import React from 'react'

const OneBlueWordHeading = ({ heading,wordNum,className }: { heading: string,wordNum:number,className?:string }) => {
    const words = heading.split(" ");
    return (
        <div className={`${className} flex gap-2 flex-wrap`}>
            {
                words.map((word,idx)=>(
                    <h1 key={idx} className={`${idx+1===wordNum && "text-primary_blue"} font-sfpd-bold text-[3.4vmax]`}>{word}</h1>
                ))
            }

        </div>
    )
}

export default OneBlueWordHeading