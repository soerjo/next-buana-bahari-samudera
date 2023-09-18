'use client'

import React from 'react'
import SectionComp from '../SectionComp'
import Image from 'next/image';
import listimage from './listdata.json'
import listdata from './listdata02.json'

const SectionAbout = () => {
    return (
        <SectionComp id="about" classname="bg-blue-950 ">
            <div className="w-full h-full flex flex-col justify-between">
                <div className="m-auto flex flex-col justify-center items-center pt-14 md:pt-12">
                    <h1 className="text-white text-center text-5xl font-bold mb-6 ">
                        {'Company Value'}
                    </h1>

                    <div className='grid gap-4 grid-cols-2'>
                        {
                            listdata.value.map((data, index) => {
                                return (
                                    <div key={index} className='flex justify-center items-center max-w-xl'>
                                        <Image
                                            className='bg-white rounded-full p-2'
                                            alt={`image_`}
                                            src={`/icon/vision-01.svg`}
                                            height={120}
                                            width={120}
                                            priority
                                        />
                                        <div className='flex flex-col justify-center items-start px-8'>
                                            <h3 className='text-2xl font-bold text-white'>{`Value`}</h3>
                                            <p className="text-white">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
                                                reprehenderit quos sed modi! Id harum, incidunt reprehenderit natus.
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <Image
                    className="object-cover w-full h-[157px] md:h-[217px] overflow-hidden"
                    alt={`image_`}
                    src={'/images/pexels-lucas-pezeta-1996162.jpg'}
                    height={187}
                    width={370}
                    priority
                />
                <div className="m-auto flex flex-col justify-center items-center">
                    <div className='grid gap-4 grid-cols-2'>
                        {
                            listdata.vision.map((data, index) => {
                                return (
                                    <div key={index} className='flex justify-center items-center max-w-xl'>
                                        <Image
                                            className='bg-white rounded-full p-2'
                                            alt={`image_`}
                                            src={`/icon/vision-01.svg`}
                                            height={120}
                                            width={120}
                                            priority
                                        />
                                        <div className='flex flex-col justify-center items-start px-8'>
                                            <h3 className='text-2xl font-bold text-white'>{`Value`}</h3>
                                            <p className="text-white">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
                                                reprehenderit quos sed modi! Id harum, incidunt reprehenderit natus.
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


            </div>        </SectionComp>

    )
}

export default SectionAbout