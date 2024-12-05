import { Product } from "@/types";
import qs from 'query-string'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query {
    categoryId?: string,
    isFeatured?: boolean
}

const getProduct = async (query: Query): Promise<Product[]> => {

    const url = qs.stringifyUrl({
        url: URL,
        query: {
            categoryId: query.categoryId,
            isFeatured: query.isFeatured
        }
    });

    const res = await fetch(url)
    const json = await res.json();
    return json.data;
}

export default getProduct;
