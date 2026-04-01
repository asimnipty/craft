// export const fetchProducts = async () => {
//   const response = await fetch('http://localhost:3000/api/products');
//   return response.json();
// };

// export const fetchProductById = async (id) => {
//   const response = await fetch(`http://localhost:3000/api/products/${id}`);
//   return response.json();
// };

// 1. Create our "Fake Database"
const mockProducts = [
  {
    _id: "1",
    name: "Handcrafted Clay Vase",
    price: 45.00,
    description: "A beautiful handmade clay vase perfect for dried flowers.",
    image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=500&q=80",
    category: "Home Decor"
  },
  {
    _id: "2",
    name: "Woven Wall Hanging",
    price: 65.00,
    description: "Intricate macrame wall hanging made from natural cotton.",
    image: "https://images.unsplash.com/photo-1522757626176-d18db0718e5b?w=500&q=80",
    category: "Art"
  },
  {
    _id: "3",
    name: "Ceramic Coffee Mug",
    price: 24.00,
    description: "Minimalist ceramic mug with a matte finish.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80",
    category: "Kitchen"
  },
  {
    _id: "4",
    name: "Linen Throw Blanket",
    price: 85.00,
    description: "Soft, breathable linen throw blanket in earthy tones.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&q=80",
    category: "Home Decor"
  }
];

// 2. Simulate fetching all products
export const fetchProducts = async () => {
  // We use setTimeout to simulate the slight delay of a real database!
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 400); // 400ms delay
  });
};

// 3. Simulate fetching a single product by its ID
export const fetchProductById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = mockProducts.find((p) => p._id === id);
      resolve(product);
    }, 400);
  });
};