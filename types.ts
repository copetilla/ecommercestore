export interface Billboard {
    id: string;
    name: string;
    imageUrl: string
}

export interface Category {
    id: string;
    name: string;
    storeId: string;
    billboardId: string;
    created_at: string;
    updated_at: string;
}