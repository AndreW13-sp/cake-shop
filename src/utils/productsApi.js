import { products } from "../constants/data";

export function createProduct(newProduct) {
	return [...products, newProduct];
}

export function readProduct(id) {
	return products.find((product) => product.id === id);
}

export function updateProduct(id, updatedProduct) {
	return products.map((product) =>
		product.id === id ? { ...product, ...updatedProduct } : product
	);
}

export function deleteProduct(id) {
	return products.filter((product) => product.id !== id);
}
