/* eslint-disable react/prop-types */
import { AlertTriangleIcon } from "lucide-react";

import toast from "react-hot-toast";
import supabase from "../../supabase";
import Modal from "../Modal";
import myToast from "../MyToast";

function DeleteProductModal({ isOpen, setModalOpen, product }) {
   const handleProductDelete = async () => {
      const { error } = await supabase.from("products").delete().eq("id", product.id).select();

      if (error) {
         console.log(error);
         return;
      }

      toast.custom(myToast("Delete deleted successfully", "success"));
      setModalOpen(false);
   };

   const onClose = () => {
      setModalOpen(false);
   };

   return (
      <Modal isOpen={isOpen} onClose={onClose}>
         <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-10 tw-px-14 tw-font-poppins tw-gap-7">
            <img
               src={product?.image_url}
               alt={product?.name}
               className="tw-object-contain tw-rounded-md tw-shadow-lg tw-w-60 tw-shadow-slate-500"
            />
            <div className="tw-flex tw-flex-col tw-items-center tw-gap-3">
               <div className="tw-text-rose-500">
                  <AlertTriangleIcon size={60} color="currentColor" />
               </div>

               <div className="tw-flex tw-flex-col tw-items-center">
                  <h2 className="tw-text-xl tw-font-semibold tw-text-white tw-font-poppins">
                     Delete this product?
                  </h2>
                  <p className="tw-mt-2">Are your sure you want to delete this product?</p>
               </div>
            </div>

            <div className="tw-flex tw-gap-5">
               <button
                  className="tw-px-5 tw-py-3 tw-text-white tw-transition-opacity tw-rounded-md tw-bg-slate-800/50 tw-hover:bg-opacity-90"
                  onClick={() => onClose()}
               >
                  Cancel
               </button>
               <button
                  className="tw-px-5 tw-py-3 tw-text-white tw-transition-opacity tw-bg-red-500 tw-rounded-md tw-hover:bg-opacity-80"
                  onClick={handleProductDelete}
               >
                  Yes, Delete it
               </button>
            </div>
         </div>
      </Modal>
   );
}

export default DeleteProductModal;
