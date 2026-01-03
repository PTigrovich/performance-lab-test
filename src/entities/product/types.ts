export type Category = 'food' | 'clothes' | 'electronics';

export interface Product {
	id: number;
	title: string;
	category: Category;
	price: number;
}