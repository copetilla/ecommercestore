import getCategory from '@/actions/get-category';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard';
import Container from '@/components/ui/container';
import React from 'react'
import Filter from './components/filter';
import NoResults from '@/components/ui/no-results';
import ProductCard from '@/components/ui/product-card';
import MobileFilters from './components/mobile-filter';

export const revalidate = 0;

interface CategoryPageProps {
    params: {
        categoryId: string;
    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
    const products = await getProducts({ categoryId: params.categoryId, isArchived: false })
    const category = await getCategory(params.categoryId)
    return (
        <div className='bg-white'>
            <Container>
                <Billboard data={category.billboards} />
                <div className='px-4 sm:px-6 lg:px-8 pb-24'>
                    <div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
                        {/* mobile */}
                        {/* <MobileFilters data={[{ id: '1', name: 'Tamaño' }, { id: '2', name: 'Grande' }]} valueKey='llaveId' name='Size' />
                        <div className='hidden lg:block'>
                            <Filter
                                valueKey='llaveId'
                                name='llaves'
                                data={[{ id: '1', name: 'Tamano' }, { id: '2', name: 'Grande' }]}
                            />
                        </div> */}
                        <div className='mt-6 lg:col-span-4 lg:mt-0'>
                            {products.length === 0 && <NoResults />}
                            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                                {products.map((item) => (
                                    <ProductCard
                                        key={item.id}
                                        data={item}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CategoryPage