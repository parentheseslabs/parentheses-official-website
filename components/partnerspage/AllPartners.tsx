"use client"
import React, { useEffect, useState } from 'react'
import PartnerCard from './PartnerCard'
import axios from 'axios';


const filters = [
    {
        name: "Industry",
        filters: [
            {
                title: "Articles",
                tag: "articles"
            },
            {
                title: "Technical writing",
                tag: "technical writing"
            },
            {
                title: "Software development",
                tag: "software development"
            },
            {
                title: "UI/UX",
                tag: "ui/ux"
            },
        ]

    },
    {
        name: "Partner Type",
        filters: [
            {
                title: "Industry expert",
                tag: "industry expert"
            },
            {
                title: "Agency partner",
                tag: "agency partner"
            },
            {
                title: "Technology partner",
                tag: "technology partner"
            },
        ]

    },
]

// const data = [
//     {
//         name: "Sourav Das",
//         img: "",
//         designation: "Core member",
//         tags: ["articles"],
//         email: "sd@gmail.com"
//     },
//     {
//         name: "Sourav Das",
//         img: "",
//         designation: "",
//         tags: ["articles"],
//         email: "sd@gmail.com"
//     },
//     {
//         name: "Sourav Das",
//         img: "",
//         designation: "",
//         tags: ["articles"],
//         email: "sd@gmail.com"
//     },
//     {
//         name: "Sourav Das",
//         img: "",
//         designation: "",
//         tags: ["articles"],
//         email: "sd@gmail.com"
//     },
//     {
//         name: "Sourav Das",
//         img: "",
//         designation: "",
//         tags: ["articles"],
//         email: "sd@gmail.com"
//     },
//     {
//         name: "Sourav Das",
//         img: "",
//         designation: "",
//         tags: ["articles"],
//         email: "sd@gmail.com"
//     },
// ]

// interface fetchData {values:string[][]}

interface filteredArrayType {
    name: string;
    img: string;
    designation: string;
    tags: string[];
    email: string;
}[]

const AllPartners = () => {
    const [filterSet, setFilterSet] = useState<any[]>([])
    const [industrySet, setIndusrtySet] = useState<any[]>([])
    const [partnerSet, setPartnerSet] = useState<any[]>([])
    const [filteredArray, setFilteredArray] = useState<any[]>([])
    const [data,setData]=useState<string[][]>()
    const handleChange = (name: string, val: boolean, type: string) => {
        if (val) {
            if (type === "industry" && !industrySet.includes(name)) {
                const newFilters = [...industrySet, name]
                setIndusrtySet(newFilters);
                const finalFilter = [...industrySet, ...partnerSet]
                setFilterSet(finalFilter)
                // console.log(newFilters);
                console.log(finalFilter);

            } else if (type === "partner type" && !partnerSet.includes(name)) {
                const newFilters = [...partnerSet, name]
                setPartnerSet(newFilters);
                const finalFilter = [...industrySet, ...partnerSet]
                setFilterSet(finalFilter)
                // console.log(newFilters);
                console.log(finalFilter);
            } else {

                console.log(partnerSet, industrySet);
            }

        } else {
            if (type === "industry" && industrySet.includes(name)) {
                const newFilter = industrySet.filter((item) => item !== name)
                setIndusrtySet(newFilter);
                const finalFilter = [...industrySet, ...partnerSet]
                setFilterSet(finalFilter)
                // console.log(newFilter);
                console.log(finalFilter);

            } else if (type === "partner type" && partnerSet.includes(name)) {
                const newFilter = partnerSet.filter((item) => item !== name)
                setPartnerSet(newFilter);
                const finalFilter = [...industrySet, ...partnerSet]
                setFilterSet(finalFilter)
                // console.log(newFilter);
                console.log(finalFilter);
            } else {
                console.log(partnerSet, industrySet);
            }

        }
    }

    const clearAll = () => {
        setFilterSet([""]);
    }
    useEffect(() => {
        const key = process.env.NEXT_PUBLIC_API_KEY;
        async function getServerSideProps() {
            const url = `https://sheets.googleapis.com/v4/spreadsheets/1M8iUZOv8cpvEAKAbk2AC5V-5BDiLwkQibuhYZYX7WWg/values/Partners!A2:B?key=${key}`;
          
            let fetchData = [];
          
            try {
              const response = await axios.get(url);
              fetchData = response.data.values;
              setData(fetchData);
              console.log(data); 
            } catch (error) {
              console.error('Error fetching data from Google Sheets:', error);
            }
          }
        // const empty = [""]
        // if (filterSet === empty || filterSet===null) {
        //     setFilteredArray(data)
        // } else {
        //     let newArray = [{}]
        //     filterSet.forEach(element => {
        //         newArray = data.filter(item=>{if(!newArray.includes(item)) return item.tags.includes(element)});
                
        //     });
        //     setFilteredArray(newArray)
        // }
        // console.log(filteredArray);
        getServerSideProps();

    }, [])
    return (
        <div className='min-h-[200svh] flex py-10'>
            <div className=' sticky top-10 h-fit border-r-[0.5px] px-4 py-8 w-[15rem] flex flex-col gap-10'>
                <div className='space-y-4'>
                    <div className='flex justify-between border-b'>
                        <h1 className='font-sfpd-semibold text-xl'>Filters</h1>
                        <button
                            onClick={clearAll}
                            className='text-primary_blue'>Clear All</button>
                    </div>
                </div>
                {
                    filters.map((item, idx) => (
                        <div key={idx} className='space-y-3'>
                            <div className='flex justify-between'>
                                <h1 className='font-sfpd-semibold text-xl'>{item.name}</h1>
                                <button className='text-primary_blue'>Clear</button>
                            </div>
                            {
                                item.filters.map((filter, ind) => (
                                    <div key={ind} className=' border-b flex justify-between'>
                                        <label htmlFor="">{filter.title}</label>
                                        <input onChange={(e) => handleChange(e.target.name, e.target.checked, item.name.toLowerCase())} type="checkbox" name={filter.tag} id="" className='size-4 appearance-auto' />
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
                <button className='rounded-full bg-primary_blue text-white md:w-full py-3 active:scale-95 duration-200 hover:bg-blue-700'>Apply</button>
            </div>
            <div className='flex flex-wrap gap-8 justify-center w-fit '>
                {
                   data && data?.map((item,idx)=>(
                        <PartnerCard key={idx} {...item}/>
                    ))
                }
            </div>
        </div>
    )
}

export default AllPartners