import React from 'react'

import { Billboard } from '@/types'

interface BillboardProps {
    data: Billboard
}

const billboard: React.FC<BillboardProps> = ({
    data
}) => {

    return (
        <div className='py-4 sm:p-6 lg:p-8 md:rounded-xl overflow-hidden'>
            <div
                className='md:rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-center'
                style={{ backgroundImage: `url(${data?.imageUrl})` }}>
                <div className='h-full w-full flex flex-col justify-center items-center text-center gap-y-8'>
                    <div className='font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs'>
                        {data.label}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default billboard