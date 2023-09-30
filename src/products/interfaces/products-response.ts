// Generated by https://quicktype.io

export interface IProductsResponse {
    data: ISimpleProduct[];
}

export interface ISimpleProduct {
    id:          string;
    name:        string;
    slug:        string;
    stock:       number;
    price:       number;
    description: string;
    category:    Category;
    images:      Image[];
}

interface Category {
    id:          string;
    name:        string;
    slug:        string;
    image:       string;
    description: string;
}

interface Image {
    id:  number;
    url: string;
}