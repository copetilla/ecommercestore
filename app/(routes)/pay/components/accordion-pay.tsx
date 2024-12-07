import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'

const AccordionPay = () => {

    return (
        <div className=''>
            <div className=' flex items-center px-3 py-4 rounded-t-md border border-1 gap-x-4'>
                <Checkbox />
                <p className='text-sm'>SINPE MOVIL</p>
            </div>
            <div className='flex items-center px-3 py-4 rounded-b-md bg-gray-100 gap-x-4'>
                SINPE Móvil: 84551337 a nombre de DIEGO ESTEBAN SABORIO
                - Por favor agregar su nombre como detalle
                - Enviar al mismo número de WhatsApp el comprobante para que nuestro equipo pueda iniciar procesando su orden            </div>
        </div>
    )
}

export default AccordionPay