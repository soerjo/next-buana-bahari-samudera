import React from 'react'
import SectionComp from '../SectionComp'
import listdata from './listdata.json'

const SectionInformation = () => {
    return (
        <SectionComp id="information" classname="bg-blue-950 ">
            <div className="w-full h-full flex justify-center items-center flex-col py-8 gap-8 container p-8 mx-auto">
                <div className="max-w-[653px] mx-auto flex flex-col justify-center items-center pt-14 md:pt-12">
                    <h1 className="text-white text-center text-5xl font-bold mb-2">
                        {listdata.title}
                    </h1>
                    <p className="text-white text-center py-4 font-light">
                        {listdata.description}
                    </p>
                </div>
                <div className='w-full flex flex-col lg:flex-row container mx-auto gap-12 overflow-y-auto'>
                    {
                        listdata.informations.map((information, index) => {
                            return (
                                <div key={index} className='bg-[#204D67] w-full lg:w-1/3 p-8 rounded-[8px]'>
                                    <h3 className='text-white text-2xl pb-4 text-center border-b-2 border-white'>{information.title}</h3>
                                    <p className='text-white text-sm text-justify py-4 whitespace-pre-wrap'>{information.description}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </SectionComp>

    )
}

export default SectionInformation