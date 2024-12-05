'use client'

import { Product } from '@/types'
import React from 'react'
import Currency from './ui/currency'
import Button from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'

interface InfoProps {
    data: Product
}

const Info: React.FC<InfoProps> = ({ data }) => {
    return (
        <div className=''>
            <h1 className='text-3xl font-bold text-gray-900'>
                {data.name}
            </h1>
            <div className=' mt-3 flex items-end justify-between'>
                <div className='text-2xl text-gray-900'>
                    <Currency value={data.price} />
                </div>
            </div>
            <hr className='my-4' />
            <div>
                {data.description}
            </div>
            <div className='mt-10 flex items-center gap-x-3'>
                <Button className='flex items-center gap-x-2'>
                    Añadir al carrito
                    <ShoppingCart />
                </Button>
            </div>
        </div>
    )
}

export default Info