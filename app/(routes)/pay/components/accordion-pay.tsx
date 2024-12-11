'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
import React from 'react'

interface AccordionPayProps {
    phoneNumber: string
    name: string
    value: string | null
    onChange: (value: string | null) => void
}

const AccordionPay: React.FC<AccordionPayProps> = ({ phoneNumber, name, value, onChange }) => {
    // const isChecked = value === 'sinpe'
    const isChecked = true

    return (
        <div>
            <div
                className={cn(
                    'flex items-center px-3 py-4 rounded-t-md border gap-x-4',
                    !isChecked && 'rounded-md'
                )}
            >
                <Checkbox
                    checked={isChecked}
                    onCheckedChange={(state) => {
                        onChange(state ? 'sinpe' : null)
                    }}
                />
                <p className="text-sm">SINPE MOVIL</p>
            </div>
            <div
                className={cn(
                    'transition-all duration-500 ease-in-out overflow-hidden',
                    isChecked ? 'max-h-[500px]' : 'max-h-0'
                )}
            >
                <div className="px-3 rounded-b-md bg-gray-50 py-4">
                    <p>
                        SINPE Móvil: {phoneNumber} a nombre de {name} - Por favor agregar su nombre como
                        detalle - Enviar al mismo número de WhatsApp el comprobante para que nuestro equipo pueda iniciar procesando su orden.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default AccordionPay
