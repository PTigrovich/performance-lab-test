import { Product } from '../../entities/product/types';
import { CATEGORIES } from '../../entities/product/constants';

export const mockProducts: Product[] = [
    { id: 1, title: 'Яблоки', category: CATEGORIES.FOOD, price: 100 },
    { id: 2, title: 'Хлеб', category: CATEGORIES.FOOD, price: 50 },
    { id: 3, title: 'Футболка', category: CATEGORIES.CLOTHES, price: 1200 },
    { id: 4, title: 'Джинсы', category: CATEGORIES.CLOTHES, price: 3500 },
    { id: 5, title: 'Телефон', category: CATEGORIES.ELECTRONICS, price: 25000 },
    { id: 6, title: 'Ноутбук', category: CATEGORIES.ELECTRONICS, price: 90000 },
    { id: 7, title: 'Кофе', category: CATEGORIES.FOOD, price: 300 },
    { id: 8, title: 'Куртка', category: CATEGORIES.CLOTHES, price: 7000 },
    { id: 9, title: 'Наушники', category: CATEGORIES.ELECTRONICS, price: 8000 },
    { id: 10, title: 'Штаны', category: CATEGORIES.CLOTHES, price: 9000 },
    { id: 11, title: 'Кроссовки', category: CATEGORIES.CLOTHES, price: 12000 },
    { id: 12, title: 'Бутылка', category: CATEGORIES.FOOD, price: 100 },
    { id: 13, title: 'Кофе', category: CATEGORIES.FOOD, price: 300 },
    { id: 14, title: 'Куртка', category: CATEGORIES.CLOTHES, price: 7000 },
    { id: 15, title: 'Наушники', category: CATEGORIES.ELECTRONICS, price: 8000 },
    { id: 16, title: 'Штаны', category: CATEGORIES.CLOTHES, price: 9000 },
    { id: 17, title: 'Кроссовки', category: CATEGORIES.CLOTHES, price: 12000 },
    { id: 18, title: 'Бутылка', category: CATEGORIES.FOOD, price: 100 },
    { id: 19, title: 'Кофе', category: CATEGORIES.FOOD, price: 300 },
    { id: 20, title: 'Куртка', category: CATEGORIES.CLOTHES, price: 7000 },
];
