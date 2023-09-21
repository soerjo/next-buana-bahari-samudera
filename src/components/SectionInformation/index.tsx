import React from 'react'
import SectionComp from '../SectionComp'
import listdata from './listdata.json'
import Image from 'next/image'

const SectionInformation = () => {
    return (
        <SectionComp id="news" classname="bg-white">
            <div className="relative w-full h-full flex justify-center items-center flex-col py-8 gap-8 container p-8 mx-auto">
                <div className="max-w-[653px] mx-auto flex flex-col justify-center items-center pt-14 md:pt-12">
                    <h1 className="text-[#2b1656] text-center text-5xl font-bold mb-2">
                        {listdata.title}
                    </h1>
                    <p className="text-[#130d20] text-center py-4">
                        {listdata.description}
                    </p>
                </div>

                <div className='relative w-full overflow-hidden'>
                    <div className='bg-gradient-to-l from-white to-transparent w-[2vw] h-full absolute right-0' />
                    <div className='bg-gradient-to-r from-white to-transparent w-[2vw] h-full absolute left-0' />
                    <div className='flex gap-8 overflow-x-auto w-full'>
                        {
                            listdata.informations.map((information, index) => {
                                return (
                                    <div key={index} className='bg-gray-300 min-w-full md:min-w-[20vw] rounded-[8px] overflow-hidden my-4 shadow-lg border-2 border-black/10'>
                                        <Image src={information.imagesrc} alt='flyer' width={720} height={300} />
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </SectionComp>

    )
}

export default SectionInformation