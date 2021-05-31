export interface Food {
  id: number;
  foodName: string;
  avatar: string;
  price: number;
  quantity: number;
  category: Category;
}

export interface Category {
  categoryId: number;
  categoryName: string;
}
