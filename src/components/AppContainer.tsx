'use client';
import React, { useState } from 'react'
import Image from 'next/image';
import { Search, Menu, Bell, X } from 'lucide-react'
import { motion } from 'framer-motion';
import { Sidebar } from '@/components'


const AppContainer = ({ children }: any) => {

    const [clickmenu, setClickmenu] = useState(false);
    const handleClickMenu = () => setClickmenu(!clickmenu);

    return <>
        <main className='flex overflow-x-hidden'>
            <Sidebar />
            {clickmenu && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className='bg-gray-500/60 fixed h-screen w-full lg:hidden flex justify-between overflow-hidden'>
                    <Sidebar className={clickmenu ? 'flex w-9/12' : 'hidden'} />
                    <button className=' text-center size-5 pr-13 pt-6 cursor-pointer' onClick={handleClickMenu}>
                        <X className='stroke-white' />
                    </button>
                </motion.div>
            )}

            <section className='w-full  lg:w-10/12 lg:ml-[280px]  h-auto'>
                <header className='flex items-center justify-around md:justify-between px-2 md:px-5 py-4  border-b border-transparent shadow-xs'>
                    <div className='flex items-center justify-between gap-x-3'>

                        <button onClick={handleClickMenu} className='lg:hidden flex items-center gap-x-2'>
                            <Menu className='size-6 stroke-gray-500' />
                            <div className='h-5 w-[1px] bg-gray-300'></div>
                        </button>

                        <div className='flex items-center pr-2'>
                            <div className='flex items-center'>
                                <Search className='size-5 stroke-gray-500' />
                                <input type="text" placeholder='Search' className='outline-none placeholder:text-gray-500 border-none  px-4 py-2 rounded-xl' />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-x-3'>
                        <div>
                            <Bell className='size-5 stroke-gray-500' />
                        </div>
                        <div className='rounded-full size-10  shadow-sm overflow-hidden'>
                            <Image src="/images/doctor-user.jpg" className='rounded-full size-10 object-cover' alt='Doctor Image' width={200} height={200} />
                        </div>
                    </div>
                </header>
                <div className='mx-5 mt-4 pb-20 '>
                    {children}
                </div>
            </section>


        </main>
    </>
}

export default AppContainer;