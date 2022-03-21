import { Product } from "./products"

const Products: Product[] = [
  {
    id: "demo-starry-night",
    name: "Nuit étoilée",
    prices: {
      physical: 79.95,
      digital: 29.75
    },
    description: "Réplique d'excellente qualité de La Nuit Étoilée par le paintre Vincent van Gogh.",
    image: "/images/starry-night.jpg",
    fileGuid: "09e589c7-3d18-4c2e-9cee-4f447e9f054a",
    plans: [],
  },
  {
    id: "demo-magazine-subscription",
    name: "Abonnement au magazine",
    prices: {
      physical: 10.00,
      digital: 0,
    },
    description: "Abonnez-vous à notre magazine pour paintres. Un abonnement hebdomadaire ou mensuel est disponible.",
    image: "/images/painting.jpg",
    plans: [{
      frequency: 'monthly',
      id: 'magazine-monthly-plan',
      interval: 1,
      name: 'Abonnement mensuel',
      price: 20
    },{
      frequency: 'weekly',
      id: 'magazine-weekly-plan',
      interval: 1,
      name: 'Abonnement hebdomadaire',
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
    description: "Le titre Rosy-Fingered Dawn at Louse Point réfère à un des endroits préférés de Willem de Kooning's à Long Island.",
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
    description: "Irises est, encore une fois, une peinture de Vincent van Gogh.",
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
    description: "Branches with Almond Blossom est un autre van Gogh peint en 1890.",
    image: "/images/almond.jpg",
    fileGuid: "79b1504d-9127-4e7f-bcdb-dff84a337775",
    plans: [],
  },
]

export default Products;
