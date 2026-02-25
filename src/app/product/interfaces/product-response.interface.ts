import { User } from "../../auth/interfaces/user.interface";

export interface ProductResponse {
    count: number;
    pages: number;
    products: Product[];
}

export interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    slug: string;
    stock: number;
    sizes: Size[];
    gender: Gender;
    tags: string[];
    images: string[];
    user: User;
}

export enum Size {
    XS = 'XS',
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL',
    XXL = 'XXL'
}

export enum Gender {
    Kids = 'kids',
    Men = 'men',
    Unisex = 'unisex',
    Women = 'women'
}

export enum Role {
    Admin = 'admin',
    User = 'user'
}