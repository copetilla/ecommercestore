'use client'

import React, { useEffect, useState } from 'react'

const formatter = new Intl.NumberFormat("es-CR", {
    style: 'currency',
    currency: 'CRC',
    minimumFractionDigits: 0, // No muestra decimales por defecto
    maximumFractionDigits: 2  // Muestra hasta 2 decimales
})

interface CurrencyProps {
    value?: string | number
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <div className=' font-medium'>
            {formatter.format(Number(value))}
        </div>
    )
}

export default Currency