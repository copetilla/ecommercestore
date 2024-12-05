'use client'
import React from 'react'

import { Product } from '@/types'
import Image from 'next/image';

import IconButton from '@/components/ui/icon-button';
import { Expand, ShoppingCart } from 'lucide-react';
import Currency from '@/components/ui/currency';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
    data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
    const router = useRouter()
    const handleClick = () => {
        router.push(`/product/${data?.id}`)
    }
    return (
        <div onClick={handleClick} className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'>
            {/* Images and Actions */}
            <div className=' aspect-square rounded-xl bg-gray-100 relative'>
                <Image
                    src={data.ImageProduct[0].url}
                    fill
                    alt={data.name}
                    className=' aspect-square object-cover rounded-md'
                />
                <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
                    <div className='flex gap-x-6 justify-center'>
                        <IconButton
                            onClick={() => { }}
                            icon={<Expand size={20} />}
                            className='text-gray-600' />
                        <IconButton
                            onClick={() => { }}
                            icon={<ShoppingCart size={20} />}
                            className='text-gray-600' />
                    </div>
                </div>
            </div>
            {/* description */}
            <div>
                <p className='font-semibold text-lg'>
                    {data.name}
                </p>
                <p className='text-gray-500 text-sm'>
                    {data.Category?.name}
                </p>
            </div>
            {/* price */}
            <div className='flex items-center justify-between'>
                <Currency value={data.price} />
            </div>
        </div>
    )
}

export default ProductCard