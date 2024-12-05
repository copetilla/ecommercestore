export interface Billboard {
    id: string;
    label: string;
    imageUrl: string
}

export interface Category {
    id: string;
    label: string;
    billboards: Billboard;

}

export interface Product {
    id: string;
    Category: Category;
    name: string;
    isFeatured: boolean;
    ImageProduct: Image[];
    description: string
    price: number
}

export interface Image {
    id: string
    url: string
}