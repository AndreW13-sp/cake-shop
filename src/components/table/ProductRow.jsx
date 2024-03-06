/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function ProductRow({ product, isSelected, onSelectionChange, onDeleteClick }) {
	console.log(product);

	return (
		<tr className="tw-w-full odd:tw-bg-gray-900 even:tw-bg-gray-50 even:dark:tw-bg-gray-800 dark:tw-border-gray-700">
			<td className="tw-w-4 tw-p-4">
				<div className="tw-flex tw-items-center">
					<input
						type="checkbox"
						checked={isSelected}
						onChange={(e) => onSelectionChange(e.target.checked)}
						className="tw-w-4 tw-h-4 tw-text-blue-600 tw-bg-gray-100 tw-border-gray-300 tw-rounded tw-focus:ring-blue-500 dark:focus:tw-ring-blue-600 dark:tw-ring-offset-gray-800 dark:focus:tw-ring-offset-gray-800 focus:tw-ring-2 dark:tw-bg-gray-700 dark:tw-border-gray-600"
					/>
					<label htmlFor="checkbox-table-search-1" className="tw-sr-only">
						checkbox
					</label>
				</div>
			</td>
			<th
				scope="row"
				className="tw-flex-grow tw-px-6 tw-py-4 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap dark:tw-text-white"
			>
				<div className="tw-inline-flex tw-items-center tw-gap-3">
					<img
						src={product.image_url}
						alt="Product"
						className="tw-object-cover tw-w-8 tw-h-8 tw-rounded-full"
					/>
					<span className="tw-truncate lg:tw-max-w-[400px] tw-text-sm">
						{product?.title || product?.name}
					</span>
				</div>
			</th>
			<td className="tw-px-6 tw-py-4 tw-capitalize">{product?.category?.name}</td>
			<td className="tw-px-6 tw-py-4">₹{product.price}</td>
			<td className="tw-px-6 tw-py-4">
				<div className="tw-flex tw-gap-2">
					<Link
						to={`/admin/edit-product/${product.id}`}
						className="tw-px-3 tw-py-1.5 tw-text-xs tw-font-medium tw-text-blue-400 tw-bg-blue-200/20 tw-rounded hover:tw-bg-blue-500 focus:tw-outline-none hover:tw-text-white"
					>
						Edit
					</Link>
					<button
						className="tw-px-3 tw-py-1.5 tw-text-xs tw-font-medium tw-text-red-400 tw-bg-red-200/20 tw-rounded hover:tw-bg-red-500 focus:tw-outline-none hover:tw-text-white"
						onClick={() => onDeleteClick()}
					>
						Delete
					</button>
				</div>
			</td>
		</tr>
	);
}

export default ProductRow;
