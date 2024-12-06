'use client'

import Container from '@/components/ui/container'
import useCart from '@/hooks/use-cart'
import React, { useEffect, useState } from 'react'
import Summary from '../cart/components/summary'
import PayForm from './components/pay-form'

const PayPage = () => {
    const [isMounted, setIsMounted] = useState(false)
    const cart = useCart()

    useEffect(() => {
        setIsMounted(true)

    }, [])

    if (!isMounted) {
        return null
    }


    return (
        <div className='bg-white'>
            <Container>
                <div className='px-4 lg:py-16 py-8 sm:px-6 lg:px-8'>
                    <h1 className=' text-3xl font-bold text-black'>
                        Finalizar compra
                    </h1>
                    <div className='lg:mt-12 mt-8 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
                        <PayForm />
                        <Summary />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default PayPage