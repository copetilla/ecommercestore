import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import getSettings from '@/actions/get-settings';
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 0;

const HomePage = async () => {
    const settings = await getSettings()
    const products = await getProducts({ isFeatured: true, isArchived: false })
    const billboard = await getBillboard(settings.billboardId)

    return (
        <div>
            <Container>
                <div className='space-y-10 pb-10'>
                    <Billboard data={billboard} />
                    <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
                        <ProductList title='Productos destacados' items={products} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomePage