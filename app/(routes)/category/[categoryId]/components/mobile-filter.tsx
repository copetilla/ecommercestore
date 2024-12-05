'use client'

import Button from '@/components/ui/button';
import IconButton from '@/components/ui/icon-button';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Plus, X } from 'lucide-react';
import React, { useState } from 'react'
import Filter from './filter';

interface MobileFiltersProps {
    data: { id: string; name: string; }[]
    name: string;
    valueKey: string
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ data, name, valueKey }) => {
    const [open, setOpen] = useState(false)

    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)

    return (
        <>
            <Button onClick={onOpen} className='flex items-center gap-x-2 lg:hidden'>
                Filters
                <Plus size={20} />
            </Button>

            <Dialog open={open} as='div' className='relative z-40 lg:hidden' onClose={onClose}>
                {/* Background */}
                <div className='fixed inset-0 bg-black bg-opacity-25' />

                {/* Dialog */}

                <div className='fixed inset-0 z-40 flex'>
                    <DialogPanel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white pt-4 pb-6 shadow-xl'>
                        {/* Close */}

                        <div className='flex items-center justify-end px-4'>
                            <IconButton icon={<X size={15} />} onClick={onClose} />
                        </div>

                        {/* Filters */}

                        <div className='p-4'>
                            <Filter
                                valueKey='llaveId'
                                name='llaves'
                                data={[{ id: '1', name: 'Tamano' }, { id: '2', name: 'Grande' }]}
                            />
                        </div>

                    </DialogPanel>
                </div>

            </Dialog>
        </>
    )
}

export default MobileFilters