'use client';
import React from 'react'
import { AppContainer, PatientTabs } from '@/components';
import Image from 'next/image';


export default function Patience() {
    return (
        <AppContainer>
            <div className='overflow-x-hidden'>
                <div className='space-y-4 '>
                    <h1 className='text-lg md:text-lg lg:text-xl font-semibold'>Patience</h1>
                    <div className='grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-3 lg:grid-cols-4 lg:gap-6'>
                        <div className='rounded-2xl py-4 px-3 shadow-sm  shadow-gray-300 flex flex-col gap-y-4'>
                            <div>
                                <Image src="/images/user.webp" alt='Patients' width={40} height={40} />
                            </div>
                            <h2 className='text-sm md:text-lg lg:text-xl font-semibold uppercase'>Total Patients</h2>
                            <p className='font-semibold text-sm md:text-base lg:text-xl'>457</p>
                            <p className='text-xs md:text-sm lg:text-base'>Current Hospital Occupancy</p>
                        </div>
                        <div className='rounded-2xl py-4 px-3 shadow-sm  shadow-gray-300 flex flex-col gap-y-4'>
                            <div>
                                <Image src="/images/bed.webp" alt='Patients' width={40} height={40} />

                            </div>
                            <h2 className='text-sm md:text-lg lg:text-xl font-semibold uppercase'>Impatients</h2>
                            <p className='font-semibold text-sm md:text-base lg:text-xl '>457</p>
                            <p className='text-xs md:text-sm lg:text-base'>65% of total capacity</p>

                        </div>
                        <div className='rounded-2xl py-4 px-3 shadow-sm  shadow-gray-300 flex flex-col gap-y-4'>
                            <div>
                                <Image src="/images/worker.webp" alt='Patients' width={40} height={40} />

                            </div>
                            <h2 className='text-sm md:text-lg lg:text-xl font-semibold uppercase'>Outpatients</h2>
                            <p className='font-semibold text-sm md:text-base lg:text-xl '>175</p>
                            <p className='text-xs md:text-sm lg:text-base'>Daily appointments</p>

                        </div>
                        <div className='rounded-2xl py-4 px-3 shadow-sm  shadow-gray-300 flex flex-col gap-y-4'>
                            <div>
                                <Image src="/images/file.webp" alt='Patients' width={40} height={40} />

                            </div>
                            <h2 className='text-sm md:text-lg lg:text-xl font-semibold uppercase'>NEW Registrations</h2>
                            <p className='font-semibold text-sm md:text-base lg:text-xl '>28</p>
                            <p className='text-xs md:text-sm lg:text-base'>Today&apos; new patients</p>

                        </div>
                    </div>
                    <PatientTabs />
                    <div className='p-3 bg-white rounded-2xl shadow-sm'>
                        <h1 className='text-lg md:text-2xl font-semibold'>Recent Patient Activity</h1>
                        <div className='mt-10'>
                            <div className='space-y-5'>
                                <div className='flex justify-between items-center border-b border-gray-100 py-2'>
                                    <div className='flex gap-x-4 items-center'>
                                        <div className='bg-blue-400 rounded-full size-14 shadow-amber-50 shadow-2xl '></div>
                                        <div className='flex flex-col gap-y-1 '>
                                            <h2 className='text-lg font-semibold '>Mark Okechukwu</h2>
                                            <p className='w-[180px] lg:w-[300px]'>Admitted to Cardiology .  30 minutes ago</p>
                                        </div>
                                    </div>
                                    <div>
                                        <select className='px-4 outline-none border border-gray-200 rounded-lg py-2'>
                                            <option>Select</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='flex justify-between items-center border-b border-gray-100 py-2'>
                                    <div className='flex gap-x-4 items-center'>
                                        <div className='bg-blue-400 rounded-full size-14 shadow-amber-50 shadow-2xl '></div>
                                        <div className='flex flex-col gap-y-1 '>
                                            <h2 className='text-lg font-semibold '>Mark Okechukwu</h2>
                                            <p className='w-[180px] lg:w-[300px]'>Admitted to Cardiology .  30 minutes ago</p>
                                        </div>
                                    </div>
                                    <div>
                                        <select className='px-4 outline-none border border-gray-200 rounded-lg py-2'>
                                            <option>Select</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='flex justify-between items-center border-b border-gray-100 py-2'>
                                    <div className='flex gap-x-4 items-center'>
                                        <div className='bg-blue-400 rounded-full size-14 shadow-amber-50 shadow-2xl '></div>
                                        <div className='flex flex-col gap-y-1 '>
                                            <h2 className='text-lg font-semibold '>Mark Okechukwu</h2>
                                            <p className='w-[180px] lg:w-[300px]'>Admitted to Cardiology .  30 minutes ago</p>
                                        </div>
                                    </div>
                                    <div>
                                        <select className='px-4 outline-none border border-gray-200 rounded-lg py-2'>
                                            <option>Select</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='flex justify-between items-center border-b border-gray-100 py-2'>
                                    <div className='flex gap-x-4 items-center'>
                                        <div className='bg-blue-400 rounded-full size-14 shadow-amber-50 shadow-2xl '></div>
                                        <div className='flex flex-col gap-y-1 '>
                                            <h2 className='text-lg font-semibold '>Mark Okechukwu</h2>
                                            <p className='w-[180px] lg:w-[300px]'>Admitted to Cardiology .  30 minutes ago</p>
                                        </div>
                                    </div>
                                    <div>
                                        <select className='px-4 outline-none border border-gray-200 rounded-lg py-2'>
                                            <option>Select</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </AppContainer>
    )
}
