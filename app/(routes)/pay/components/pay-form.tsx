'use client'

import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import AccordionPay from './accordion-pay'



const formSchema = z.object({
    country: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    name: z.string().min(2).max(50),
    lastname: z.string().min(2).max(50),
    address: z.string().min(2).max(50),
    house: z.string().min(2).max(50),
    province: z.string().min(2).max(50),
    city: z.string().min(2).max(50),
    postal: z.string().min(2).max(50),
    phone: z.string().min(2).max(50),
    shipping: z.string().min(2).max(50),
})



const PayForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            country: "",
            email: "",
            name: "",
            lastname: "",
            address: "",
            house: "",
            province: "",
            city: "",
            postal: "",
            phone: "",
            shipping: "",
        },
    })
    return (

        <div className='lg:col-span-7 gap-y-4 grid'>
            <div className=" border-gray-100 border rounded-md lg:p-6 py-6 px-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(() => { })} className="space-y-8">
                        {/* Contacto */}
                        <div className="gap-2 flex flex-col">
                            <h3 className="font-semibold text-lg">Contacto</h3>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Correo electrónico" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <hr className="my-8" />

                        {/* Dirección de entrega */}
                        <div className="gap-2 flex flex-col">
                            <h3 className="font-semibold text-lg">Dirección de entrega</h3>


                            {/* Nombre y Apellidos */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-2">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nombre</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Nombre" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastname"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Apellidos</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Apellidos" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            {/* Phone */}
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Número de teléfono</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Número de teléfono" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="country"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>País</FormLabel>
                                        <FormControl>
                                            <Input placeholder="País" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* País */}
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-2'>

                                <FormField
                                    control={form.control}
                                    name="province"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Provincia</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Provincia" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="city"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Ciudad</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Ciudad" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Dirección</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Dirección" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="house"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Casa, apartamento, etc.</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Casa, apartamento, etc (opcional)" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="postal"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Código postal</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Código postal" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                        </div>
                    </form>
                </Form>
            </div>

            <div className='border-gray-100 border rounded-md lg:p-6 py-6 px-4'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(() => { })} className="space-y-8">
                        <div className="gap-2 flex flex-col">
                            <h3 className="font-semibold text-lg">Metodo de envio</h3>
                            <FormField
                                control={form.control}
                                name="shipping"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Metodo de envio" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </form>
                </Form>
            </div>

            <div className='border-gray-100 border rounded-md lg:p-6 py-6 px-4'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(() => { })} className="space-y-8">
                        <div className="gap-2 flex flex-col">
                            <h3 className="font-semibold text-lg">Metodo de pago</h3>
                            <FormField
                                control={form.control}
                                name="shipping"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <AccordionPay />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>

                                )}
                            />
                        </div>
                    </form>
                </Form>
            </div>
        </div>


    )
}

export default PayForm