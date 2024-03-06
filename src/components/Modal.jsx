/* eslint-disable react/prop-types */
import { useRef } from "react";
import useOutsideClick from "../hooks/useClickOutside";

function Modal({ isOpen, children, onClose }) {
	const modalRef = useRef(null);

	useOutsideClick(modalRef, () => {
		onClose(false);
	});

	return (
		<div
			tabIndex={-1}
			aria-hidden="true"
			className={`tw-overflow-y-auto tw-overflow-x-hidden tw-absolute tw-inset-0 tw-z-50 tw-flex tw-justify-center tw-items-center tw-backdrop-blur-sm tw-bg-slate-800/50 ${
				isOpen ? "" : "tw-hidden"
			}`}
		>
			<div className="tw-max-w-2xl tw-max-h-full tw-p-4">
				<div ref={modalRef} className="tw-bg-gray-700 tw-rounded-lg tw-shadow">
					{children}
				</div>
			</div>
		</div>
	);
}

export default Modal;
