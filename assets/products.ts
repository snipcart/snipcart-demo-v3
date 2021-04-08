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

const Products: Product[] = [
  {
    id: "demo-starry-night",
    name: "Starry Night",
    prices: {
      physical: 79.95,
      digital: 29.75
    },
    description: "High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.",
    image: "/images/starry-night.jpg",
    fileGuid: "09e589c7-3d18-4c2e-9cee-4f447e9f054a",
    plans: [],
  },
  {
    id: "demo-magazine-subscription",
    name: "Magazine subscription",
    prices: {
      physical: 10.00,
      digital: 0,
    },
    description: "Subscribe to our painter's magazine. You can opt-in for a weekly or monthly subscription.",
    image: "/images/painting.jpg",
    plans: [{
      frequency: 'monthly',
      id: 'magazine-monthly-plan',
      interval: 1,
      name: 'Monthly subscription',
      price: 20
    },{
      frequency: 'weekly',
      id: 'magazine-weekly-plan',
      interval: 1,
      name: 'Weekly subscription',
      price: 10
    }],
  },
  {
    id: "demo-rosy",
    name: "Rosy-Fingered Dawn at Louse Point",
    prices: {
      physical: 49.95,
      digital: 29.75
    },
    description: "The title Rosy-Fingered Dawn at Louse Point refers to one of Willem de Kooning's favourite places in Long Island.",
    image: "/images/rosy.jpg",
    fileGuid: "98dbd416-159d-4f76-8a59-30703cf6189f",
    plans: [],
  },
  {
    id: "demo-irises",
    name: "Irises",
    prices: {
      physical: 65.95,
      digital: 29.75
    },
    description: "Irises is yet again, another painting by the Dutch artist Vincent van Gogh.",
    image: "/images/irises.jpg",
    fileGuid: "66edfe7f-0851-4418-93e8-785975df7318",
    plans: [],
  },
  {
    id: "demo-almond",
    name: "Branches with Almond Blossom",
    prices: {
      physical: 99.95,
      digital: 29.75
    },
    description: "Branches with Almond Blossom is another van Gogh painted in 1890.",
    image: "/images/almond.jpg",
    fileGuid: "79b1504d-9127-4e7f-bcdb-dff84a337775",
    plans: [],
  },
]

export default Products;