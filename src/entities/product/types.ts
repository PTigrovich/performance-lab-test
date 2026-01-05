import { CATEGORIES } from './constants';

export type Category = (typeof CATEGORIES)[keyof typeof CATEGORIES];
export interface Product {
    id: number;
    title: string;
    category: Category;
    price: number;
}
