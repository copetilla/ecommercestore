'use client'

import React, { useState } from 'react'
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
import SelectCountry from './select-country'
import SelectProvince from './select-province'
import ShippingMethod from './shipping'
import Button from '@/components/ui/button'
import { Product, Settings } from '@/types'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import useCart from '@/hooks/use-cart'
import getSettings from '@/actions/get-settings'



const formSchema = z.object({
    country: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    name: z.string().min(2).max(50),
    lastname: z.string().min(2).max(50),
    address: z.string().min(2).max(50),
    house: z.string().max(50),
    province: z.string().min(2).max(50),
    city: z.string().min(2).max(50),
    postal: z.string().max(50),
    phone: z.string().min(2).max(50),
    shipping: z.string().min(2).max(50),
    payMethod: z.string().max(50),
})

interface items extends Product {
    quantity: number
}

interface PayFormProps {
    items: items[]
}

const PayForm: React.FC<PayFormProps> = ({ items }) => {
    const router = useRouter();
    const cart = useCart()
    const [settings, setSettings] = React.useState<Settings | null>(null);

    const [isLoading, setIsLoading] = useState(false)
    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price) * item.quantity;
    }, 0);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            country: "costarica",
            email: "",
            name: "",
            lastname: "",
            address: "",
            house: "",
            province: "",
            city: "",
            postal: "",
            phone: "",
            shipping: "Envío gratis",
            payMethod: "sinpe"
        },
    })

    const createOrder = async (data: any) => {
        try {
            setIsLoading(true)
            const fullName = data.name + ' ' + data.lastname
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    status: 'new',
                    phone: data.phone,
                    address: data.address,
                    fullName: fullName,
                    city: data.city,
                    province: data.province,
                    postalCode: data.postal,
                    country: data.country,
                    shippingMethod: data.shipping,
                    payMethod: data.payMethod,
                    email: data.email,
                    house: data.house,
                    totalAmount: totalPrice,
                    orderItems: items
                }),
            }
            )
            if (!response.ok) {
                const mensaje = await response.json();
                console.error('Error al crear la orden:', mensaje);

            }

            cart.removeAll()
            setIsLoading(false)
            router.push(`/`)
            router.refresh()
            toast.success('Orden creada con éxito!')

        } catch (error) {
            setIsLoading(false)
            router.push(`/`)
            router.refresh()
            toast.error('Error al crear orden')
        }
    }
    React.useEffect(() => {
        const fetchSettings = async () => {
            try {
                const data = await getSettings();
                setSettings(data);
            } catch (error) {
                console.error('Error al obtener los ajustes', error);
            }
        };

        fetchSettings();
    }, []);

    if (!settings) {
        return <div>Cargando...</div>;
    }
    return (

        <div className='lg:col-span-7 gap-y-4 grid'>
            <div className="border-gray-100 border rounded-md lg:p-6 py-6 px-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(createOrder)} className="space-y-8">
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
                                            <SelectCountry
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* País */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-2">
                                <FormField
                                    control={form.control}
                                    name="province"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Provincia</FormLabel>
                                            <FormControl>
                                                <SelectProvince
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
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
                                            <Input placeholder="Código postal (opcional)" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="border-gray-100 border rounded-md lg:p-6 py-6 px-4">
                            <div className="gap-2 flex flex-col">
                                <h3 className="font-semibold text-lg">Método de envío</h3>
                                <FormField
                                    control={form.control}
                                    name="shipping"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <ShippingMethod
                                                    options={[{ name: 'Envío gratis', value: 0 }]}
                                                    value={field.value}
                                                    onChange={field.onChange} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="border-gray-100 border rounded-md lg:p-6 py-6 px-4">
                            <div className="gap-2 flex flex-col">
                                <h3 className="font-semibold text-lg">Método de pago</h3>
                                <FormField
                                    control={form.control}
                                    name="payMethod"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <AccordionPay
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    phoneNumber={settings.numberSINPE}
                                                    name={settings.nameSINPE}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <Button disabled={isLoading} className='w-full mt-6 hidden: lg:block' >
                            Finalizar compra
                        </Button>
                    </form>
                </Form>
            </div>
        </div >


    )
}

export default PayForm