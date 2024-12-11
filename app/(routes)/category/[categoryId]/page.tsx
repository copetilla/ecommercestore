import getCategory from '@/actions/get-category';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard';
import Container from '@/components/ui/container';
import ProductCard from '@/components/ui/product-card';
import NoResults from '@/components/ui/no-results';

export const revalidate = 0;

interface Props {
    params: {
        categoryId: string;
    };
}

export default async function CategoryPage({ params }: Props) {
    const products = await getProducts({ categoryId: params.categoryId, isArchived: false });
    const category = await getCategory(params.categoryId);

    return (
        <div className="bg-white">
            <Container>
                <Billboard data={category.billboards} />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="grid lg:grid-cols-5 lg:gap-x-8">
                        <div className="lg:col-span-4">
                            {products.length === 0 ? (
                                <NoResults />
                            ) : (
                                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {products.map((item) => (
                                        <ProductCard key={item.id} data={item} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
