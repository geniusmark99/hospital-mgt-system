'use client';
import React from 'react'
import Image from 'next/image';
import { AppContainer } from '@/components';


export default function Resource() {

    const AllUnitData = [
        { id: 0, unit: "Orthopedics", location: "1st Floor", totalBeds: 20, occupied: 10, available: 10, occupancyRate: 50, user: "/images/user-1.jpeg" },
        { id: 1, unit: "Oncology", location: "2nd Floor", totalBeds: 30, occupied: 15, available: 15, occupancyRate: 50, user: "/images/user-2.jpeg" },
    ];


    return (


        <AppContainer>
            <div className=' h-auto'>
                <div className='space-y-4 '>
                    <h1 className='text-2xl font-semibold'>Ward & Bed Management</h1>
                    <div className='grid grid-cols-1  gap-y-4 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-6 lg:items-center lg:w-[700px]'>
                        <div className='flex flex-col gap-y-2'>
                            <h3 className='font-semibold'>Search</h3>
                            <input type="text" placeholder='Name,ID or Designation' className='border-2 border-gray-400 focus:border-blue-500 py-2.5 px-3 rounded-md outline-none ring-0 focus:ring-blue-600' />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <h3 className='font-semibold'>Filter by Unit</h3>
                            <input type="text" placeholder='Name,ID or Designation' className='border-2 border-gray-400 focus:border-blue-500 py-2.5 px-3 rounded-md outline-none ring-0 focus:ring-blue-600' />
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <div className='h-5'></div>
                            <button className='bg-blue-500 text-white border-none py-2.5 px-3 rounded-md outline-none ring-0 focus:ring-blue-600'>
                                Apply filter
                            </button>
                        </div>
                    </div>

                    <div className='mt-5 lg:mt-10'>
                        <h2 className='mt-10 mb-5 text-2xl font-semibold'>Ward Status Overview</h2>
                        <div className='grid grid-cols-1  gap-y-4 md:grid-cols-2 md:gap-3 lg:grid-cols-4 lg:gap-6 lg:items-center'>
                            <div className='lg:min-h-[250px] flex flex-col gap-y-4 shadow bg-blue-50 p-4 rounded-md'>
                                <div className='size-12 rounded-full shadow-md shadow-blue-300/50'></div>
                                <div>
                                    <h2 className='text-2xl font-semibold'>Gynecology Unit</h2>
                                    <p className='mt-2 text-base'>I5 staffs (5 doctors, 8 Nurses, 2 supports)</p>
                                </div>
                                <div className='justify-between flex items-center lg:mt-5'>
                                    <button className='bg-blue-500 text-white border-none py-2.5 px-3 rounded-md outline-none ring-0 focus:ring-blue-600'>
                                        View Details
                                    </button>

                                    <button className='bg-blue-500 text-white border-none py-2.5 px-3 rounded-md outline-none ring-0 focus:ring-blue-600'>
                                        Manage Beds
                                    </button>
                                </div>
                            </div>


                            <div className='lg:min-h-[250px] flex flex-col gap-y-4 shadow bg-blue-50 p-4 rounded-md'>
                                <div className='size-12 rounded-full shadow-md shadow-blue-300/50'></div>
                                <div>
                                    <h2 className='text-2xl font-semibold'>Pediatrics Unit</h2>
                                    <p className='mt-2 text-base'>I8 staffs (6 doctors, 10 Nurses, 2 supports)</p>
                                </div>
                                <div className='justify-between flex items-center'>
                                    <button className='bg-blue-500 text-white border-none py-2.5 px-3 rounded-md outline-none ring-0 focus:ring-blue-600'>
                                        View Details
                                    </button>

                                    <button className='bg-blue-500 text-white border-none py-2.5 px-3 rounded-md outline-none ring-0 focus:ring-blue-600'>
                                        Manage Beds
                                    </button>
                                </div>
                            </div>


                            <div className='lg:min-h-[250px] flex flex-col gap-y-4 shadow bg-blue-50 p-4 rounded-md'>
                                <div className='size-12 rounded-full shadow-md shadow-blue-300/50'></div>
                                <div>
                                    <h2 className='text-2xl font-semibold'>Cardiology Unit</h2>
                                    <p className='mt-2 text-base'>20 staffs (8 doctors, 10 Nurses, 2 supports)</p>
                                </div>
                                <div className='justify-between flex items-center'>
                                    <button className='bg-blue-500 text-white border-none py-2.5 px-3 rounded-md outline-none ring-0 focus:ring-blue-600'>
                                        View Details
                                    </button>

                                    <button className='bg-blue-500 text-white border-none py-2.5 px-3 rounded-md outline-none ring-0 focus:ring-blue-600'>
                                        Manage Beds
                                    </button>
                                </div>
                            </div>


                            <div className='lg:min-h-[250px] flex flex-col gap-y-4 shadow bg-blue-50 p-4 rounded-md'>
                                <div className='size-12 rounded-full shadow-md shadow-blue-300/50'></div>
                                <div>
                                    <h2 className='text-2xl font-semibold'>Emergency Unit</h2>
                                    <p className='mt-2 text-base'>25 staffs (10 doctors, 12 Nurses, 3 supports)</p>
                                </div>
                                <div className='justify-between flex items-center'>
                                    <button className='bg-blue-500 text-white border-none py-2.5 px-3 rounded-md outline-none ring-0 focus:ring-blue-600'>
                                        View Details
                                    </button>

                                    <button className='bg-blue-500 text-white border-none py-2.5 px-3 rounded-md outline-none ring-0 focus:ring-blue-600'>
                                        Manage Beds
                                    </button>
                                </div>
                            </div>



                        </div>

                    </div>

                    <div className='mt-5 lg:mt-10'>
                        <h1 className='text-2xl font-semibold'>Gynecollogy Unit - Bed Details</h1>

                        <div className='mt-5'>
                            <div className="-m-1.5 overflow-x-auto">
                                <div className="p-1.5 min-w-full inline-block align-middle">
                                    <div className="bg-white p-3 overflow-hidden">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50 px-4">
                                                <tr>

                                                    <th
                                                        scope="col"
                                                        className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
                                                    >
                                                        <div className="flex items-center gap-x-2">
                                                            <span className="text-xs font-semibold uppercase text-gray-800 ">
                                                                Bed ID
                                                            </span>
                                                        </div>
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-start">
                                                        <div className="flex items-center gap-x-2">
                                                            <span className="text-xs font-semibold uppercase text-gray-800 ">
                                                                Occupied
                                                            </span>
                                                        </div>
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-start">
                                                        <div className="flex items-center gap-x-2">
                                                            <span className="text-xs font-semibold uppercase text-gray-800 whitespace-nowrap">
                                                                Patient ID
                                                            </span>
                                                        </div>
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-start">
                                                        <div className="flex items-center gap-x-2">
                                                            <span className="text-xs font-semibold uppercase text-gray-800 ">
                                                                Status
                                                            </span>
                                                        </div>
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-start">
                                                        <div className="flex items-center gap-x-2">
                                                            <span className="text-xs font-semibold uppercase text-gray-800 ">
                                                                Discharged
                                                            </span>
                                                        </div>
                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">

                                                {AllUnitData.map((data) => (
                                                    <tr key={data.id} >

                                                        <td className="size-px whitespace-nowrap">
                                                            <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                                                <div className="flex items-center gap-x-3">
                                                                    <Image
                                                                        className="inline-block size-9.5 rounded-full"
                                                                        src={data.user}
                                                                        alt="Avatar"
                                                                        width={200}
                                                                        height={200}
                                                                        priority
                                                                    />
                                                                    <div className="grow">
                                                                        <span className="block text-sm font-semibold text-gray-800 ">
                                                                            Christina Bersh
                                                                        </span>
                                                                        <span className="block text-sm text-gray-500 ">
                                                                            christina@site.com
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="h-px w-72 whitespace-nowrap">
                                                            <div className="px-6 py-3">
                                                                {data.location}

                                                            </div>
                                                        </td>
                                                        <td className="size-px whitespace-nowrap">
                                                            <div className="px-6 py-3">
                                                                {data.totalBeds}
                                                            </div>
                                                        </td>
                                                        <td className="size-px whitespace-nowrap">
                                                            <div className="px-6 py-3">
                                                                {data.occupied}
                                                            </div>
                                                        </td>
                                                        <td className="size-px whitespace-nowrap">
                                                            <div className="px-6 py-3">
                                                                <span className="text-sm text-gray-500 ">
                                                                    {data.available}
                                                                </span>
                                                            </div>
                                                        </td>


                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5 lg:mt-10'>
                        <h2 className='mt-10 mb-5 text-2xl font-semibold'>Recent Bed Assignments</h2>
                        <div className='mt-5'>
                            <div className='flex items-center justify-between w-full border-b border-blue-100 py-3'>
                                <div className='lg:w-full flex gap-x-4 items-center'>
                                    <div className='size-10 rounded-full shadow-2xs shadow-gray-200'></div>
                                    <div className='flex flex-row md:flex-col gap-2'>
                                        <h1 className='text-sm md:text-xl font-semibold'>Patient 12 Transferred to Cardiology Unit, Bed #18</h1>
                                        <p className='text-xs md:text-sm font-normal'>Assigned by Dr. Roberts . 10 minutes ago</p>
                                    </div>
                                </div>
                                <div className='lg:w-full'>lsdhvsdcsdcsd</div>
                            </div>

                            <div className='flex items-center justify-between w-full border-b border-blue-100 py-3'>
                                <div className='lg:w-full flex gap-x-4 items-center'>
                                    <div className='size-10 rounded-full shadow-2xs shadow-gray-200'></div>
                                    <div className='flex flex-row md:flex-col gap-2'>
                                        <h1 className='text-sm md:text-xl font-semibold'>Patient 12 Transferred to Cardiology Unit, Bed #18</h1>
                                        <p className='text-xs md:text-sm font-normal'>Assigned by Dr. Roberts . 10 minutes ago</p>
                                    </div>
                                </div>
                                <div className='lg:w-full'>lsdhvsdcsdcsd</div>
                            </div>

                            <div className='flex items-center justify-between w-full border-b border-blue-100 py-3'>
                                <div className='lg:w-full flex gap-x-4 items-center'>
                                    <div className='size-10 rounded-full shadow-2xs shadow-gray-200'></div>
                                    <div className='flex flex-row md:flex-col gap-2'>
                                        <h1 className='text-sm md:text-xl font-semibold'>Patient 12 Transferred to Cardiology Unit, Bed #18</h1>
                                        <p className='text-xs md:text-sm font-normal'>Assigned by Dr. Roberts . 10 minutes ago</p>
                                    </div>
                                </div>
                                <div className='lg:w-full'>lsdhvsdcsdcsd</div>
                            </div>

                            <div className='flex items-center w-full lg:w-[500px] gap-x-2 lg:gap-x-5 mt-5 '>
                                <button className='bg-blue-500 border border-transparent text-white rounded-2xl p-3 hover:cursor-pointer hover:bg-white hover:text-blue-600 hover:border-blue-400 transition'>Generate Bed Allocation Report</button>
                                <button className='bg-blue-200 text-blue-500 rounded-2xl p-3 hover:cursor-pointer hover:bg-blue-300 font-semibold transition'>Manage Ward Configuration</button>
                            </div>
                        </div>

                    </div>



                </div>
            </div>

        </AppContainer >
    )
}
