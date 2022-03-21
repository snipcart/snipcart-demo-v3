export interface Product {
  id: string,
  name: string,
  prices: ProductPrices,
  description: string,
  image: string,
  fileGuid?: string,
  plans: ProductPlan[],
}

export interface ProductPlan {
  name: string;
  price: number;
  frequency: 'daily' | 'weekly' | 'monthly',
  interval: number;
  id: string;
}

export interface ProductPrices {
  physical: number,
  digital: number
}
