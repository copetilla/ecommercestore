'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

import { cn } from '@/lib/utils'
import { Category } from '@/types'
import { Menu } from 'lucide-react'

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetTrigger,
} from "@/components/ui/sheet"

interface MainNavProps {
    data: Category[]
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
    const [isSheetOpen, setIsSheetOpen] = useState(false)

    const pathname = usePathname()

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }))

    return (
        <nav className='mx-6 flex items-center space-x-4 lg:space-x-6'>




            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        'text-sm font-medium transition-colors hover:text-black hidden lg:block',
                        route.active ? 'text-black' : 'text-neutral-500'
                    )}
                >
                    {route.label}
                </Link>
            ))}
            <div className='lg:hidden cursor-pointer'>
                <Sheet>
                    <SheetTrigger>
                        <Menu size={50} onClick={() => setIsSheetOpen(true)} />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader className='pb-8'>
                            <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>
                        <div className="space-y-4">
                            {routes.map((route) => (
                                <Link
                                    key={route.href}
                                    href={route.href}
                                    className={cn(
                                        "flex flex-col font-normal text-neutral-600 transition-colors hover:text-black",
                                        route.active ? 'text-black' : 'text-neutral-500'
                                    )}
                                >
                                    {route.label}
                                </Link>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}

export default MainNav
