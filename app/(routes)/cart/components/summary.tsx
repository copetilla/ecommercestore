'use client'
import React, { useState } from 'react'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import toast from 'react-hot-toast'

import Button from '@/components/ui/button'
import Currency from '@/components/ui/currency'

import useCart from '@/hooks/use-cart'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

const Sumary = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const items = useCart((state) => state.items)
    const removeAll = useCart((state) => state.removeAll)
    const pathname = usePathname();

    useEffect(() => {
        if (searchParams.get('success')) {
            toast.success('Pago completado');
            removeAll();
        }

        if (searchParams.get('canceled')) {
            toast.error('Error al realizar el pedido');
        }
    }, [])

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price) * item.quantity;
    }, 0);


    const pushButton = () => {
        if (pathname === '/cart' && items.length > 0) {
            router.push('/pay')
        }
    }

    return (
        <div
            className='lg:sticky top-10 mt-16 lg:shadow-lg rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'
        >
            <h2 className='text-lg font-medium text-gray-900'>
                Resumen del pedido
            </h2>
            <div className='mt-6 space-y-4'>
                <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
                    <div className='text-base font-medium text-gray-900'>
                        Total
                    </div>
                    <Currency value={totalPrice} />
                </div>
            </div>
            <Button onClick={pushButton} className={cn(
                'w-full mt-6',
                pathname !== '/cart' && 'hidden')}>
                Ir a pago
            </Button>
        </div>
    )

}

export default Sumary