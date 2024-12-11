export interface Billboard {
    id: string;
    label: string;
    imageUrl: string
}

export interface Settings {
    id: string;
    billboardId: string;
    name: string;
    userId: string;
    nameSINPE: string;
    numberSINPE: string;
}


export interface Category {
    id: string;
    name: string;
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