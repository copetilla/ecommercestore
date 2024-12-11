import React from 'react'

import Image from 'next/image'
import { Minus, Plus, X } from 'lucide-react'

import IconButton from '@/components/ui/icon-button'
import Currency from '@/components/ui/currency'
import useCart from '@/hooks/use-cart'

import { Product } from '@/types'

interface CartItemProps {
    data: Product & { quantity: number };
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
    const cart = useCart();

    const onRemove = () => {
        cart.removeItems(data.id)
    }
    return (
        <li className='flex py-6 border-b '>
            <div className='relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48'>
                <Image
                    fill
                    src={data.ImageProduct[0].url}
                    alt=''
                    className=' object-cover object-center'
                />
            </div>
            <div className='relative ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
                <div className='absolute z-10 right-0 top-0'>
                    <IconButton onClick={onRemove} icon={<X size={15} />} />
                </div>
                <div className='relative flex justify-between pr-9 sm:grid sm:grid-cols-2 gap-x-4 sm:gap-x-6 mr-5 sm:pr-0'>
                    <div className='flex flex-col justify-between'>
                        <p className='text-lg font-semibold text-black'>
                            {data.name}
                        </p>
                        <p className='text-gray-500'>
                            {/* details */}
                            {data.Category.name}
                        </p>
                    </div>
                    <div className='mt-1 flex text-sm'>
                        <div className='flex border h-min gap-x-4 justify-center items-center p-1 rounded-md'>
                            <Minus size={15} className=' cursor-pointer' onClick={() => cart.removeItem(data.id)} />
                            {data.quantity}
                            <Plus size={15} className=' cursor-pointer' onClick={() => cart.addSame(data.id)} />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Currency value={data.price} />
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CartItem