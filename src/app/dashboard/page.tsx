'use client';
import React from 'react'
import Image from 'next/image';
import { AppContainer } from '@/components';


export default function Dashboard() {



    return (
        <AppContainer>
            <div className=''>
                <div className='space-y-4'>
                    <h1 className='text-lg md:text-lg lg:text-3xl font-semibold'>Dashboard</h1>
                    <div className='grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-3 lg:grid-cols-4 lg:gap-6'>
                        <div className='rounded-2xl py-4 px-3 shadow-sm  shadow-gray-300 flex flex-col gap-y-4'>
                            <div>
                                <Image src="/images/user.webp" alt='Patients' width={40} height={40} priority />
                            </div>
                            <h2 className='text-base md:text-xl lg:text-2xl font-semibold uppercase'>Patients</h2>
                            <p className='font-semibold text-sm md:text-base lg:text-xl '>457</p>
                            <button className='px-6 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600'>View details</button>
                        </div>
                        <div className='rounded-2xl py-4 px-3 shadow-sm  shadow-gray-300 flex flex-col gap-y-4'>
                            <div>
                                <Image src="/images/bed.webp" alt='Patients' width={40} height={40} priority />

                            </div>
                            <h2 className='text-base md:text-xl lg:text-2xl font-semibold uppercase'>Occupancy</h2>
                            <p className='font-semibold text-sm md:text-base lg:text-xl '>457</p>
                            <button className='px-6 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600'>View details</button>
                        </div>
                        <div className='rounded-2xl py-4 px-3 shadow-sm  shadow-gray-300 flex flex-col gap-y-4'>
                            <div>
                                <Image src="/images/worker.webp" alt='Patients' width={40} height={40} priority />

                            </div>
                            <h2 className='text-base md:text-xl lg:text-2xl font-semibold uppercase'>Staff</h2>
                            <p className='font-semibold text-sm md:text-base lg:text-xl '>457</p>
                            <button className='px-6 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600'>View details</button>
                        </div>
                        <div className='rounded-2xl py-4 px-3 shadow-sm  shadow-gray-300 flex flex-col gap-y-4'>
                            <div>
                                <Image src="/images/file.webp" alt='Patients' width={40} height={40} priority />

                            </div>
                            <h2 className='text-base md:text-xl lg:text-2xl font-semibold uppercase'>Projects</h2>
                            <p className='font-semibold text-sm md:text-base lg:text-xl '>457</p>
                            <button className='px-6 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600'>View details</button>
                        </div>
                    </div>
                </div>


                <div className='mt-8 space-y-4'>
                    <h1 className='text-xl md:text-2xl font-semibold'>Patient Statistics</h1>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='shadow-sm rounded-2xl px-4 py-4 bg-blue-50/50 space-y-4'>
                            <div>
                                <div className='rounded-full size-[70px] flex justify-center items-center shadow-sm'>
                                    <Image src="/images/user.webp" alt='User Icon' width={40} height={40} style={{ width: 'auto', height: 'auto' }} priority />
                                </div>

                            </div>
                            <div className='flex flex-col gap-y-4'>
                                <h2 className='font-semibold text-base md:text-lg lg:text-xl'>Patience Traffic</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat magnam voluptatum labore, quidem temporibus dolore beatae, blanditiis ut aperiam molestiae quisquam animi ratione sequi. Debitis, dicta libero. Voluptatibus, labore natus.</p>
                            </div>
                        </div>
                        <div className='shadow-sm rounded-2xl px-4 py-4 bg-blue-50/50 space-y-4'>
                            <div>
                                <div className='rounded-full size-[70px] flex justify-center items-center shadow-sm'>
                                    <Image src="/images/user.webp" alt='User Icon' width={40} height={40} style={{ width: 'auto', height: 'auto' }} priority />
                                </div>

                            </div>
                            <div className='flex flex-col gap-y-4'>
                                <h2 className='font-semibold text-base md:text-lg lg:text-xl'>Ward Distribution</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat magnam voluptatum labore, quidem temporibus dolore beatae, blanditiis ut aperiam molestiae quisquam animi ratione sequi. Debitis, dicta libero. Voluptatibus, labore natus.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-8 space-y-4'>
                    <h1 className='text-xl md:text-2xl font-semibold'>Reseource Allocation</h1>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='shadow-sm rounded-2xl px-4 py-4 bg-blue-50/50 space-y-4'>
                            <div>
                                <div className='rounded-full size-[70px] flex justify-center items-center shadow-sm'>
                                    <Image src="/images/resource.webp" alt='User Icon' width={40} height={40} style={{ width: 'auto', height: 'auto' }} priority />
                                </div>

                            </div>
                            <div className='flex flex-col gap-y-4'>
                                <h2 className='font-semibold text-base md:text-lg lg:text-xl'>Resource Distribution</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat magnam voluptatum labore, quidem temporibus dolore beatae, blanditiis ut aperiam molestiae quisquam animi ratione sequi. Debitis, dicta libero. Voluptatibus, labore natus.</p>
                            </div>
                        </div>
                        <div className='shadow-sm rounded-2xl px-4 py-4 bg-blue-50/50 space-y-4'>
                            <div>
                                <div className='rounded-full size-[70px] flex justify-center items-center shadow-sm'>
                                    <Image src="/images/bed.webp" alt='User Icon' width={40} height={40} style={{ width: 'auto', height: 'auto' }} priority />
                                </div>

                            </div>
                            <div className='flex flex-col gap-y-4'>
                                <h2 className='font-semibold text-base md:text-lg lg:text-xl'>Bed Availability Trend</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat magnam voluptatum labore, quidem temporibus dolore beatae, blanditiis ut aperiam molestiae quisquam animi ratione sequi. Debitis, dicta libero. Voluptatibus, labore natus.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div >
                    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        {/* Card */}
                        <div className="flex flex-col">
                            <div className="-m-1.5 overflow-x-auto">
                                <div className="p-1.5 min-w-full inline-block align-middle">
                                    <div className="bg-white border border-gray-200 rounded-xl shadow-2xs overflow-hidden">

                                        {/* Table */}
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="ps-6 py-3 text-start">
                                                        <label
                                                            htmlFor="hs-at-with-checkboxes-main"
                                                            className="flex"
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none    "
                                                                id="hs-at-with-checkboxes-main"
                                                            />
                                                            <span className="sr-only">Checkbox</span>
                                                        </label>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
                                                    >
                                                        <div className="flex items-center gap-x-2">
                                                            <span className="text-xs font-semibold uppercase text-gray-800 ">
                                                                Staff name
                                                            </span>
                                                        </div>
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-start">
                                                        <div className="flex items-center gap-x-2">
                                                            <span className="text-xs font-semibold uppercase text-gray-800 ">
                                                                Position
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
                                                                Portfolio
                                                            </span>
                                                        </div>
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-start">
                                                        <div className="flex items-center gap-x-2">
                                                            <span className="text-xs font-semibold uppercase text-gray-800 ">
                                                                Created
                                                            </span>
                                                        </div>
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-end" />
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="ps-6 py-3">
                                                            <label htmlFor="hs-at-with-checkboxes-1" className="flex">
                                                                <input
                                                                    type="checkbox"
                                                                    className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none    "
                                                                    id="hs-at-with-checkboxes-1"
                                                                />
                                                                <span className="sr-only">Checkbox</span>
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                                            <div className="flex items-center gap-x-3">
                                                                <Image
                                                                    className="inline-block size-9.5 rounded-full"
                                                                    src="/images/user.webp"
                                                                    alt="Avatar"
                                                                    width={500}
                                                                    height={500}
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
                                                            <span className="block text-sm font-semibold text-gray-800 ">
                                                                Director
                                                            </span>
                                                            <span className="block text-sm text-gray-500 ">
                                                                Human resources
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full ">
                                                                <svg
                                                                    className="size-2.5"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={16}
                                                                    height={16}
                                                                    fill="currentColor"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                                </svg>
                                                                Active
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <div className="flex items-center gap-x-3">
                                                                <span className="text-xs text-gray-500 ">
                                                                    1/5
                                                                </span>
                                                                <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden ">
                                                                    <div
                                                                        className="flex flex-col justify-center overflow-hidden bg-gray-800 "
                                                                        role="progressbar"
                                                                        style={{ width: "25%" }}
                                                                        aria-valuenow={25}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    >
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <span className="text-sm text-gray-500 ">
                                                                28 Dec, 12:12
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-1.5">
                                                            <a
                                                                className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium "
                                                                href="#"
                                                            >
                                                                Edit
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="ps-6 py-3">
                                                            <label htmlFor="hs-at-with-checkboxes-2" className="flex">
                                                                <input
                                                                    type="checkbox"
                                                                    className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none    "
                                                                    id="hs-at-with-checkboxes-2"
                                                                />
                                                                <span className="sr-only">Checkbox</span>
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                                            <div className="flex items-center gap-x-3">
                                                                <Image
                                                                    className="inline-block size-9.5 rounded-full"
                                                                    src="/images/user.webp"
                                                                    alt='User'
                                                                    width={500}
                                                                    height={500}
                                                                    priority
                                                                />
                                                                <div className="grow">
                                                                    <span className="block text-sm font-semibold text-gray-800 ">
                                                                        David Harrison
                                                                    </span>
                                                                    <span className="block text-sm text-gray-500 ">
                                                                        david@site.com
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="h-px w-72 whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <span className="block text-sm font-semibold text-gray-800 ">
                                                                Seller
                                                            </span>
                                                            <span className="block text-sm text-gray-500 ">
                                                                Branding products
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full  ">
                                                                <svg
                                                                    className="size-2.5"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={16}
                                                                    height={16}
                                                                    fill="currentColor"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                                </svg>
                                                                Warning
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <div className="flex items-center gap-x-3">
                                                                <span className="text-xs text-gray-500 ">
                                                                    3/5
                                                                </span>
                                                                <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden ">
                                                                    <div
                                                                        className="flex flex-col justify-center overflow-hidden bg-gray-800 "
                                                                        role="progressbar"
                                                                        style={{ width: "78%" }}
                                                                        aria-valuenow={78}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <span className="text-sm text-gray-500 ">
                                                                20 Dec, 09:27
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-1.5">
                                                            <a
                                                                className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium "
                                                                href="#"
                                                            >
                                                                Edit
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="ps-6 py-3">
                                                            <label htmlFor="hs-at-with-checkboxes-3" className="flex">
                                                                <input
                                                                    type="checkbox"
                                                                    className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none    "
                                                                    id="hs-at-with-checkboxes-3"
                                                                />
                                                                <span className="sr-only">Checkbox</span>
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                                            <div className="flex items-center gap-x-3">
                                                                <span className="inline-flex items-center justify-center size-9.5 rounded-full bg-white border border-gray-300  ">
                                                                    <span className="font-medium text-sm text-gray-800 ">
                                                                        A
                                                                    </span>
                                                                </span>
                                                                <div className="grow">
                                                                    <span className="block text-sm font-semibold text-gray-800 ">
                                                                        Anne Richard
                                                                    </span>
                                                                    <span className="block text-sm text-gray-500 ">
                                                                        anne@site.com
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="h-px w-72 whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <span className="block text-sm font-semibold text-gray-800 ">
                                                                Designer
                                                            </span>
                                                            <span className="block text-sm text-gray-500 ">
                                                                IT department
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full ">
                                                                <svg
                                                                    className="size-2.5"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={16}
                                                                    height={16}
                                                                    fill="currentColor"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                                </svg>
                                                                Active
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <div className="flex items-center gap-x-3">
                                                                <span className="text-xs text-gray-500 ">
                                                                    5/5
                                                                </span>
                                                                <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden ">
                                                                    <div
                                                                        className="flex flex-col justify-center overflow-hidden bg-gray-800 "
                                                                        role="progressbar"
                                                                        style={{ width: "100%" }}
                                                                        aria-valuenow={100}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <span className="text-sm text-gray-500 ">
                                                                18 Dec, 15:20
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-1.5">
                                                            <a
                                                                className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium "
                                                                href="#"
                                                            >
                                                                Edit
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="ps-6 py-3">
                                                            <label htmlFor="hs-at-with-checkboxes-4" className="flex">
                                                                <input
                                                                    type="checkbox"
                                                                    className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none    "
                                                                    id="hs-at-with-checkboxes-4"
                                                                />
                                                                <span className="sr-only">Checkbox</span>
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                                            <div className="flex items-center gap-x-3">
                                                                <Image
                                                                    className="inline-block size-9.5 rounded-full"
                                                                    src="/images/user.webp"
                                                                    alt="Avatar"
                                                                    width={500}
                                                                    height={500}
                                                                    priority
                                                                />
                                                                <div className="grow">
                                                                    <span className="block text-sm font-semibold text-gray-800 ">
                                                                        Samia Kartoon
                                                                    </span>
                                                                    <span className="block text-sm text-gray-500 ">
                                                                        samia@site.com
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="h-px w-72 whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <span className="block text-sm font-semibold text-gray-800 ">
                                                                Executive director
                                                            </span>
                                                            <span className="block text-sm text-gray-500 ">
                                                                Marketing
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full ">
                                                                <svg
                                                                    className="size-2.5"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={16}
                                                                    height={16}
                                                                    fill="currentColor"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                                </svg>
                                                                Active
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <div className="flex items-center gap-x-3">
                                                                <span className="text-xs text-gray-500 ">
                                                                    0/5
                                                                </span>
                                                                <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden ">
                                                                    <div
                                                                        className="flex flex-col justify-center overflow-hidden bg-gray-800 "
                                                                        role="progressbar"
                                                                        style={{ width: "1%" }}
                                                                        aria-valuenow={1}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <span className="text-sm text-gray-500 ">
                                                                18 Dec, 15:20
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-1.5">
                                                            <a
                                                                className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium "
                                                                href="#"
                                                            >
                                                                Edit
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="ps-6 py-3">
                                                            <label htmlFor="hs-at-with-checkboxes-5" className="flex">
                                                                <input
                                                                    type="checkbox"
                                                                    className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none    "
                                                                    id="hs-at-with-checkboxes-5"
                                                                />
                                                                <span className="sr-only">Checkbox</span>
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                                                            <div className="flex items-center gap-x-3">
                                                                <span className="inline-flex items-center justify-center size-9.5 rounded-full bg-white border border-gray-300  ">
                                                                    <span className="font-medium text-sm text-gray-800 ">
                                                                        D
                                                                    </span>
                                                                </span>
                                                                <div className="grow">
                                                                    <span className="block text-sm font-semibold text-gray-800 ">
                                                                        David Harrison
                                                                    </span>
                                                                    <span className="block text-sm text-gray-500 ">
                                                                        david@site.com
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="h-px w-72 whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <span className="block text-sm font-semibold text-gray-800 ">
                                                                Developer
                                                            </span>
                                                            <span className="block text-sm text-gray-500 ">
                                                                Mobile app
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full  ">
                                                                <svg
                                                                    className="size-2.5"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={16}
                                                                    height={16}
                                                                    fill="currentColor"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                                </svg>
                                                                Danger
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <div className="flex items-center gap-x-3">
                                                                <span className="text-xs text-gray-500 ">
                                                                    3/5
                                                                </span>
                                                                <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden ">
                                                                    <div
                                                                        className="flex flex-col justify-center overflow-hidden bg-gray-800 "
                                                                        role="progressbar"
                                                                        style={{ width: "78%" }}
                                                                        aria-valuenow={78}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}
                                                                    >
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <span className="text-sm text-gray-500 ">
                                                                15 Dec, 14:41
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-1.5">
                                                            <a
                                                                className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium "
                                                                href="#"
                                                            >
                                                                Edit
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                        {/* End Table */}

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Card */}
                    </div>
                </div>

            </div>
        </AppContainer>
    )
}
