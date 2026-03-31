export const fetchProducts = async () => {
  const response = await fetch('http://localhost:3000/api/products');
  return response.json();
};

export const fetchProductById = async (id) => {
  const response = await fetch(`http://localhost:3000/api/products/${id}`);
  return response.json();
};