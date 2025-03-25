'use client';
import React from 'react'
import Image from 'next/image';
import { AppContainer } from '@/components';


export default function Analytics() {

    const AllUnitData = [
        { id: 0, unit: "Orthopedics", name: "David Onus", designation: 20, occupied: 10, available: 10, occupancyRate: 50, user: "/images/user-1.jpeg" },
        { id: 1, unit: "Oncology", name: "Samuel Fabien", designation: 30, occupied: 15, available: 15, occupancyRate: 50, user: "/images/user-2.jpeg" },
        { id: 2, unit: "Oncology", name: "Samuel Fabien", designation: 30, occupied: 15, available: 15, occupancyRate: 50, user: "/images/user-2.jpeg" },
        { id: 3, unit: "Oncology", name: "Samuel Fabien", designation: 30, occupied: 15, available: 15, occupancyRate: 50, user: "/images/user-2.jpeg" },
        { id: 4, unit: "Oncology", name: "Samuel Fabien", designation: 30, occupied: 15, available: 15, occupancyRate: 50, user: "/images/user-2.jpeg" },
        { id: 5, unit: "Oncology", name: "Samuel Fabien", designation: 30, occupied: 15, available: 15, occupancyRate: 50, user: "/images/user-2.jpeg" },
        { id: 6, unit: "Oncology", name: "Samuel Fabien", designation: 30, occupied: 15, available: 15, occupancyRate: 50, user: "/images/user-2.jpeg" },
    ];

    return (
        <AppContainer>
            <div className='overflow-x-hidden'>
                <div className='space-y-4 '>
                    <h1 className='text-lg md:text-lg lg:text-3xl font-semibold'>Staff Management</h1>
                    <div className='grid grid-cols-1  gap-y-4 md:grid-cols-2 md:gap-3 lg:grid-cols-4 lg:gap-6 lg:items-center'>
                        <div className='flex flex-col gap-y-2'>
                            <h3 className='font-semibold'>Search Staff</h3>
                            <input type="text" placeholder='Name,ID or Designation' className='border-2 border-gray-400 focus:border-blue-500 py-2.5 px-3 rounded-md outline-none ring-0 focus:ring-blue-600' />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <h3 className='font-semibold'>Unit</h3>
                            <input type="text" placeholder='Name,ID or Designation' className='border-2 border-gray-400 focus:border-blue-500 py-2.5 px-3 rounded-md outline-none ring-0 focus:ring-blue-600' />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <h3 className='font-semibold'>Designation</h3>
                            <input type="text" placeholder='Name,ID or Designation' className='border-2 border-gray-400 focus:border-blue-500 py-2.5 px-3 rounded-md outline-none ring-0 focus:ring-blue-600' />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <div className='h-5'></div>
                            <button className='bg-blue-500 text-white border-none py-2.5 px-3 rounded-md outline-none ring-0 focus:ring-blue-600'>
                                Apply filter
                            </button>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <h2 className='mt-10 mb-5 text-2xl font-semibold'>Staff Summary</h2>
                        <div className='grid grid-cols-1  gap-y-4 md:grid-cols-2 md:gap-3 lg:grid-cols-4 lg:gap-6 lg:items-center'>
                            <div className='flex flex-col gap-y-4 shadow bg-blue-50 p-4 rounded-md'>
                                <div className='size-12 rounded-full shadow-md shadow-blue-300/50'></div>
                                <div>
                                    <h2 className='text-2xl font-semibold'>Gynecology Unit</h2>
                                    <p className='mt-2 text-base'>I5 staffs (5 doctors, 8 Nurses, 2 supports)</p>
                                </div>
                                <div className='w-full'>
                                    <button className='bg-blue-500 text-white border-none py-2.5 px-3 rounded-md outline-none ring-0 focus:ring-blue-600'>
                                        View Details
                                    </button>
                                </div>
                            </div>


                            <div className='flex flex-col gap-y-4 shadow bg-blue-50 p-4 rounded-md'>
                                <div className='size-12 rounded-full shadow-md shadow-blue-300/50'></div>
                                <div>
                                    <h2 className='text-2xl font-semibold'>Pediatrics Unit</h2>
                                    <p className='mt-2 text-base'>I8 staffs (6 doctors, 10 Nurses, 2 supports)</p>
                                </div>
                                <div className='w-full'>
                                    <button className='bg-blue-500 text-white border-none py-2.5 px-3 rounded-md outline-none ring-0 focus:ring-blue-600'>
                                        View Details
                                    </button>
                                </div>
                            </div>


                            <div className='flex flex-col gap-y-4 shadow bg-blue-50 p-4 rounded-md'>
                                <div className='size-12 rounded-full shadow-md shadow-blue-300/50'></div>
                                <div>
                                    <h2 className='text-2xl font-semibold'>Cardiology Unit</h2>
                                    <p className='mt-2 text-base'>20 staffs (8 doctors, 10 Nurses, 2 supports)</p>
                                </div>
                                <div className='w-full'>
                                    <button className='bg-blue-500 text-white border-none py-2.5 px-3 rounded-md outline-none ring-0 focus:ring-blue-600'>
                                        View Details
                                    </button>
                                </div>
                            </div>


                            <div className='flex flex-col gap-y-4 shadow bg-blue-50 p-4 rounded-md'>
                                <div className='size-12 rounded-full shadow-md shadow-blue-300/50'></div>
                                <div>
                                    <h2 className='text-2xl font-semibold'>Emergency Unit</h2>
                                    <p className='mt-2 text-base'>25 staffs (10 doctors, 12 Nurses, 3 supports)</p>
                                </div>
                                <div className='w-full'>
                                    <button className='bg-blue-500 text-white border-none py-2.5 px-3 rounded-md outline-none ring-0 focus:ring-blue-600'>
                                        View Details
                                    </button>
                                </div>
                            </div>



                        </div>

                    </div>

                    <div>
                        <div className="bg-white p-3 border border-gray-200 rounded-xl shadow-2xs overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>

                                        <th
                                            scope="col"
                                            className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase text-gray-800 ">
                                                    ID
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-start">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase text-gray-800 ">
                                                    Name
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-start">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase text-gray-800 whitespace-nowrap">
                                                    Designation
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-start">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs font-semibold uppercase text-gray-800 ">
                                                    Unit
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
                                                <span className="text-xs font-semibold uppercase text-gray-800 whitespace-nowrap">
                                                    Active
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
                                                    {data.name}

                                                </div>
                                            </td>
                                            <td className="size-px whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    {data.designation}
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
                                            <td className="size-px whitespace-nowrap">
                                                <div className="px-6 py-1.5">
                                                    <a
                                                        className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium "
                                                        href="#"
                                                    >
                                                        {data.occupancyRate}%
                                                    </a>
                                                </div>
                                            </td>


                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <h2 className='mt-10 mb-5 text-2xl font-semibold'>Staff Query Results</h2>
                        <div className='grid grid-cols-1  gap-y-4 md:grid-cols-2 md:gap-3 lg:grid-cols-4 lg:gap-6 lg:items-center'>
                            <div className='flex flex-col gap-y-4 shadow bg-blue-50 p-4 rounded-md'>
                                <div className='size-12 rounded-full shadow-md shadow-blue-300/50'></div>
                                <div>
                                    <h2 className='text-2xl font-semibold'>Total Doctors</h2>
                                    <p className='mt-2 text-base'>29 Hospital-wide</p>
                                </div>
                                <div className='w-full'>
                                    <button className='bg-blue-500 text-white border-none py-2.5 px-3 rounded-md outline-none ring-0 focus:ring-blue-600'>
                                        View Details
                                    </button>
                                </div>
                            </div>


                            <div className='flex flex-col gap-y-4 shadow bg-blue-50 p-4 rounded-md'>
                                <div className='size-12 rounded-full shadow-md shadow-blue-300/50'></div>
                                <div>
                                    <h2 className='text-2xl font-semibold'>Total Nurses</h2>
                                    <p className='mt-2 text-base'>40 Hospital-wide</p>
                                </div>
                                <div className='w-full'>
                                    <button className='bg-blue-500 text-white border-none py-2.5 px-3 rounded-md outline-none ring-0 focus:ring-blue-600'>
                                        View Details
                                    </button>
                                </div>
                            </div>


                            <div className='flex flex-col gap-y-4 shadow bg-blue-50 p-4 rounded-md'>
                                <div className='size-12 rounded-full shadow-md shadow-blue-300/50'></div>
                                <div>
                                    <h2 className='text-2xl font-semibold'>Total Support Staff</h2>
                                    <p className='mt-2 text-base'>9 Hospital-wide</p>
                                </div>
                                <div className='w-full'>
                                    <button className='bg-blue-500 text-white border-none py-2.5 px-3 rounded-md outline-none ring-0 focus:ring-blue-600'>
                                        View Details
                                    </button>
                                </div>
                            </div>


                            <div className='flex flex-col gap-y-4 shadow bg-blue-50 p-4 rounded-md'>
                                <div className='size-12 rounded-full shadow-md shadow-blue-300/50'></div>
                                <div>
                                    <h2 className='text-2xl font-semibold'>On-Duty Staff</h2>
                                    <p className='mt-2 text-base'>45 currently working</p>
                                </div>
                                <div className='w-full'>
                                    <button className='bg-blue-500 text-white border-none py-2.5 px-3 rounded-md outline-none ring-0 focus:ring-blue-600'>
                                        View Details
                                    </button>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>

        </AppContainer>
    )
}
