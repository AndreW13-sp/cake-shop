/* eslint-disable react/prop-types */
import { SearchIcon } from "lucide-react";
import { useCallback, useState } from "react";
import Select from "react-select";

import { Link } from "react-router-dom";
import NotFound from "../../assets/img/not-found.svg";
import useStore from "../../store/products";
import ProductRow from "./ProductRow";

const options = [{ value: "test", label: "Test" }];

const customStyles = {
	container: (styles) => ({
		...styles,
		minWidth: 240,
	}),
	control: (styles) => ({
		...styles,
		fontSize: 14,
		fontFamily: "Poppins, sans-serif",
		background: "transparent",
		border: "1px solid rgba(241 245 249 / 0.3)",
	}),
	menu: (styles) => ({ ...styles, backgroundColor: "rgb(51 65 85)" }),
	singleValue: (styles) => ({ ...styles, color: "white" }),
};

function ProductTable({ onDeleteClick }) {
	const [, setFilterOption] = useState("");
	const [selectedProductIds, setSelectedProductIds] = useState(new Set());
	const products = useStore((state) => state.products);

	const toggleSelectAll = useCallback(
		(isChecked) => {
			if (isChecked) {
				const allProductIds = new Set(products.map((product) => product.id));
				setSelectedProductIds(allProductIds);
			} else {
				setSelectedProductIds(new Set());
			}
		},
		[products]
	);

	const handleProductSelectToggle = useCallback((productId, isChecked) => {
		setSelectedProductIds((prevSelectedProductIds) => {
			const updatedSet = new Set(prevSelectedProductIds);
			if (isChecked) {
				updatedSet.add(productId);
			} else {
				updatedSet.delete(productId);
			}
			return updatedSet;
		});
	}, []);

	const isAllSelected = products?.length > 0 && selectedProductIds.size === products?.length;

	return (
		<div className="tw-relative tw-shadow-md md:tw-border md:tw-rounded-lg tw-border-slate-500/50 tw-font-poppins">
			<div className="tw-flex tw-flex-col-reverse tw-mb-5 tw-sm:mb-0 tw-items-center tw-justify-between tw-gap-2.5 tw-py-2 sm:tw-p-5 sm:tw-px-7 sm:tw-flex-row">
				<div className="tw-w-full sm:tw-w-auto">
					<Select
						isClearable
						options={options}
						onChange={(selectedOption) => setFilterOption(selectedOption?.value)}
						styles={customStyles}
					/>
				</div>

				<div className="tw-w-full sm:tw-w-auto">
					<div className="tw-inline-flex tw-w-full tw-gap-3 tw-px-3 tw-py-2 tw-border tw-rounded-md sm:tw-w-auto tw-border-slate-700 focus-within:tw-ring-2 focus-within:tw-ring-blue-600 tw-group">
						<span className="tw-mt-[2px] group-focus-within:tw-text-blue-500">
							<SearchIcon size={20} color="currentColor" />
						</span>
						<input
							type="text"
							className="tw-font-light tw-bg-transparent focus:tw-outline-none"
							placeholder="Search for items"
						/>
					</div>
				</div>
			</div>

			{products?.length > 0 ? (
				<div className="tw-overflow-x-auto">
					<table className="tw-w-full tw-overflow-x-auto tw-text-sm tw-text-left tw-text-gray-500 rtl:tw-text-right dark:tw-text-gray-400">
						<thead className="tw-text-xs tw-text-gray-700 tw-uppercase tw-bg-gray-50 dark:tw-bg-gray-700 dark:tw-text-gray-400">
							<tr>
								<th scope="col" className="tw-p-4">
									<div className="tw-flex tw-items-center">
										<input
											id="checkbox-all-search"
											type="checkbox"
											checked={isAllSelected}
											onChange={(e) => toggleSelectAll(e.target.checked)}
											className="tw-w-4 tw-h-4 tw-text-blue-600 tw-bg-gray-100 tw-border-gray-300 tw-rounded tw-focus:ring-blue-500 dark:focus:tw-ring-blue-600 dark:tw-ring-offset-gray-800 dark:focus:tw-ring-offset-gray-800 focus:tw-ring-2 dark:tw-bg-gray-700 dark:tw-border-gray-600"
										/>
										<label htmlFor="checkbox-all-search" className="tw-sr-only">
											checkbox
										</label>
									</div>
								</th>
								<th scope="col" className="tw-px-6 tw-py-3">
									Product name
								</th>
								<th scope="col" className="tw-px-6 tw-py-3">
									Category
								</th>
								<th scope="col" className="tw-px-6 tw-py-3">
									Price
								</th>
								<th scope="col" className="tw-px-6 tw-py-3">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{products.map((product) => (
								<ProductRow
									key={product.id}
									product={product}
									isSelected={selectedProductIds.has(product.id)}
									onSelectionChange={(isChecked) =>
										handleProductSelectToggle(product.id, isChecked)
									}
									onDeleteClick={() => onDeleteClick(product)}
								/>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-5 tw-rounded-md sm:tw-border tw-mx-7 tw-mb-7 tw-border-slate-600">
					<img
						src={NotFound}
						alt="No products listed"
						className="tw-object-contain sm:tw-w-72"
					/>
					<p className="tw--mt-6 tw-text-sm tw-font-light sm:tw--mt-8 sm:tw-text-base">
						There are no products listed yet!
					</p>
					<Link
						to="/admin/create-product"
						className="tw-bg-slate-600/35 tw-py-2 tw-px-4 tw-text-sm tw-mt-3 tw-rounded hover:tw-bg-purple-500 hover:tw-text-white"
					>
						Create a Product
					</Link>
				</div>
			)}
		</div>
	);
}

export default ProductTable;
