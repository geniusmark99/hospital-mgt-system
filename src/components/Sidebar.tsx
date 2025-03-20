import React from 'react'
import { Logo } from '@/components/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboardIcon, User, Hospital, Files, Settings, ChartLine } from 'lucide-react'


type SidebarProps = {
    className?: string
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {

    const pathname = usePathname();
    return (
        <section className={`${className ? className : 'hidden'} lg:fixed lg:flex flex-col lg:w-2/12 p-4 lg:p-3 bg-blue-600 h-screen`}>
            <div className='flex  p-3 lg:p-3 gap-x-2'>
                <Logo className='size-4 text-white' />
                <p className='text-white text-sm font-bold'>
                    Hospital System
                </p>
            </div>

            <div className='flex flex-col justify-between  h-screen'>
                <ul role='list' className='mx-2 mt-4 space-y-3 '>
                    <Link href='/dashboard' className={`${pathname === '/dashboard' ? 'bg-blue-400 ' : 'hover:bg-blue-400'}
                    py-2.5  rounded-lg px-2 text-white flex items-start gap-x-2`}>
                        <LayoutDashboardIcon />
                        <div>Dashboard</div>
                    </Link>

                    <Link href='/patience'
                        className={`${pathname === '/patience' ? 'bg-blue-400 ' : 'hover:bg-blue-400'}
                    py-2.5  rounded-lg px-2 text-white flex items-start gap-x-2`}
                    >
                        <User />
                        <div>Patience</div>
                    </Link>

                    <Link href='/staff'
                        className={`${pathname === '/staff' ? 'bg-blue-400 ' : 'hover:bg-blue-400'}
                    py-2.5  rounded-lg px-2 text-white flex items-start gap-x-2`}>
                        <Hospital />
                        <div>Staff</div>
                    </Link>


                    <Link href='/analytics'

                        className={`${pathname === '/analytics' ? 'bg-blue-400 ' : 'hover:bg-blue-400'}
                    py-2.5  rounded-lg px-2 text-white flex items-start gap-x-2`}
                    >
                        <ChartLine />
                        <div>Analytics</div>
                    </Link>



                    <Link href='/resource'

                        className={`${pathname === '/resource' ? 'bg-blue-400 ' : 'hover:bg-blue-400'}
                    py-2.5  rounded-lg px-2 text-white flex items-start gap-x-2`}
                    >
                        <Files />
                        <div>Resource</div>
                    </Link>

                </ul>


                <Link href='/settings'

                    className={`${pathname === '/settings' ? 'bg-blue-400 ' : 'hover:bg-blue-400'}
                py-2.5  rounded-lg px-2 text-white flex items-start gap-x-2`}
                >
                    <Settings />
                    <div>Settings</div>
                </Link>


            </div>

        </section>
    )
}

export default Sidebar;