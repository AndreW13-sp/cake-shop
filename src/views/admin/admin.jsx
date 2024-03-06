import { useEffect, useState } from "react";

import DeleteProductModal from "../../components/modals/DeleteProductModal";
import ProductTable from "../../components/table/ProductTable";
import AdminLayout from "../../layouts/AdminLayout";
import useStore from "../../store/products";

function Admin() {
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [currentProduct, setCurrentProduct] = useState(null);
	const fetchProducts = useStore((state) => state.getProducts);

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	const handleDeleteClick = (product) => {
		setCurrentProduct(product);
		setIsEditModalOpen(true);
	};

	return (
		<AdminLayout>
			<ProductTable onDeleteClick={handleDeleteClick} />
			<DeleteProductModal
				isOpen={isEditModalOpen}
				setModalOpen={setIsEditModalOpen}
				product={currentProduct}
			/>
		</AdminLayout>
	);
}

export default Admin;
