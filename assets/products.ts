export interface Product {
  id: string,
  name: string,
  prices: ProductPrices,
  description: string,
  image: string,
  fileGuid: string,
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
    fileGuid: "09e589c7-3d18-4c2e-9cee-4f447e9f054a"
  },
  {
    id: "demo-rosy",
    name: "Rosy-Fingered Dawn at Louse Point",
    prices: {
      physical: 49.95,
      digital: 29.75
    },
    description: "The title Rosy-Fingered Dawn at Louse Point refers to one of Willem de Kooning's favourite places in Long Island, New York. During his period in Long Island De Kooning rode his bike daily to Louse Point where he observed the water.",
    image: "/images/rosy.jpg",
    fileGuid: "98dbd416-159d-4f76-8a59-30703cf6189f"
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
    fileGuid: "66edfe7f-0851-4418-93e8-785975df7318"
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
    fileGuid: "79b1504d-9127-4e7f-bcdb-dff84a337775"
  },
]

export default Products;