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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni natus distinctio ducimus numquam suscipit vitae quisquam neque voluptatibus amet eius similique eligendi, nesciunt, possimus cumque aperiam provident a nobis illo.
            </div>
        </div>
    )
}

export default AccordionPay