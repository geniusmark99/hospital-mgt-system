'use client';
import React from 'react'
import { AppContainer, AnalysisTabs } from '@/components';


export default function Analytics() {
    return (
        <AppContainer>

            <div className='overflow-x-hidden'>
                <div className='space-y-4 '>
                    <h1 className='text-lg md:text-lg lg:text-2xl font-semibold'>Analytics & Decision support </h1>
                </div>
            </div>

            <AnalysisTabs className='mt-5' />

        </AppContainer>
    )
}
