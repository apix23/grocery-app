// Option 1

interface Product {
  productId: number;
  productName: string;
  checked: boolean;
  categoryId: number;
}

interface Category {
  categoryId: string;
  categoryName: string;
  products: Product[];
  color: string;
}
