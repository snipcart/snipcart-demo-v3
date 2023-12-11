export interface Product {
  id: string,
  name: string,
  prices: ProductPrices,
  description: string,
  image: string,
  fileGuid?: string,
  plans: ProductPlan[],
  weight: number | null,
  length: number | null,
  width: number | null,
  height: number | null,
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
