export const prodottoProva = {
  id: "prod_123",
  sku: "TSHIRT-BLK",
  slug: "tshirt-nera-basic",
  name: "T-shirt Nera Basic",
  descriptionHtml: "<p>...</p>",
  shortDescription: "Cotone 100%, vestibilità regular.",
  brand: { id: "brand_1", name: "MyBrand" },
  categories: [{ id: "cat_10", name: "T-shirt", slug: "t-shirt" }],
  tags: ["cotone", "basic"],

  status: "active",
  visibility: "public",
  publishedAt: "2026-02-01T10:00:00Z",

  pricing: {
    currency: "EUR",
    price: 19.99,
    compareAtPrice: 29.99,
    cost: 6.5,
    taxClass: "standard",
    taxIncluded: true,
  },
  discounts: {
    isOnSale: true,
    saleEndsAt: "2026-03-01T23:59:59Z",
  },

  inventory: {
    track: true,
    stockStatus: "in_stock",
    quantityAvailable: 42,
    lowStockThreshold: 5,
    backorder: "deny",
  },

  type: "variable",
  options: [
    { name: "Size", values: ["S", "M", "L", "XL"] },
    { name: "Color", values: ["Black", "White"] },
  ],
  variants: [
    {
      id: "var_1",
      sku: "TSHIRT-BLK-M",
      title: "Black / M",
      optionValues: { Size: "M", Color: "Black" },
      pricing: { price: 19.99, compareAtPrice: 29.99 },
      inventory: { quantityAvailable: 10 },
      barcode: "8000000000000",
      weight: { value: 0.2, unit: "kg" },
      images: [{ id: "img_2", url: "https://...", alt: "T-shirt nera M" }],
    },
  ],

  images: [
    { id: "img_1", url: "https://...", alt: "T-shirt nera", position: 1 },
  ],

  shipping: {
    requiresShipping: true,
    weight: { value: 0.2, unit: "kg" },
    dimensions: { l: 30, w: 20, h: 2, unit: "cm" },
    hsCode: "610910",
    countryOfOrigin: "IT",
  },

  attributes: {
    material: "Cotton",
    gender: "Unisex",
    fit: "Regular",
  },

  seo: {
    title: "T-shirt Nera Basic | MyBrand",
    description: "T-shirt 100% cotone, comoda e resistente.",
    canonicalUrl: "https://shop.it/products/tshirt-nera-basic",
  },

  rating: { average: 4.6, count: 128 },

  relations: {
    relatedProductIds: ["prod_200", "prod_201"],
    crossSellIds: ["prod_300"],
    upSellIds: ["prod_400"],
  },

  audit: {
    createdAt: "2026-01-10T09:00:00Z",
    updatedAt: "2026-02-20T12:30:00Z",
    version: 7,
  },
};
