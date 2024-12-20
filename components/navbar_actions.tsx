'use client'

import React, { useEffect, useState } from 'react'
import Button from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import useCart from '@/hooks/use-cart'
import { useRouter } from 'next/navigation'

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)

    }, [])

    const router = useRouter()
    const cart = useCart();
    const totalItems = useCart((state) => state.getTotalQuantity());


    if (!isMounted) {
        return null
    }

    return (
        <div className='ml-auto flex items-center gap-x-4'>
            <Button onClick={() => router.push('/cart')} className='flex items-center rounded-full bg-black px-4 py-2'>
                <ShoppingBag
                    size={20}
                    color='white'
                />
                <span className='ml-2 text-sm font-medium text-white'>
                    {totalItems}
                </span>
            </Button>
        </div>
    )
}

export default NavbarActions