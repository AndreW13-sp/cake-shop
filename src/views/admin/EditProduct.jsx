/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowLeftIcon, IndianRupeeIcon, LinkIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import toast from "react-hot-toast";

import Input, { IconInput, SelectInput } from "../../components/form/Input";
import AdminLayout from "../../layouts/AdminLayout";
import supabase from "../../supabase";
import ImageUpload from "../../components/ImageUpload";
import myToast from "../../components/MyToast";

const validationSchema = yup
   .object({
      title: yup.string().required(),
      imageUrl: yup.string().url("Please provide the valid image url").required(),
      description: yup.string().required(),
      price: yup.number().positive().min(10, "Minimum price must be 10").required(),
      category: yup.string().required(),
   })
   .required();

function EditProduct() {
   const { productId } = useParams();
   const navigate = useNavigate();
   const [product, setProduct] = useState(null);

   const {
      register,
      handleSubmit,
      reset,
      watch,
      setValue,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(validationSchema),
   });

   useEffect(() => {
      const fetchProduct = async () => {
         const { data, error } = await supabase
            .from("products")
            .select("*, category (id, name)")
            .eq("id", productId)
            .single();
         if (error) {
            console.log(error);
         } else {
            setProduct(data);
            reset({
               title: data?.name || "",
               imageUrl: data?.image_url || "",
               description: data?.description || "",
               price: data?.price || 10,
               category: data?.category?.id || "",
            });
         }
      };
      fetchProduct();
   }, [productId, reset]);

   const imageUrl = watch("imageUrl");

   const onProductSave = async (formData) => {
      if (Object.keys(errors).length > 0) {
         console.log(errors);
         return;
      }

      const { data, error } = await supabase
         .from("products")
         .update({
            name: formData.title,
            description: formData.description,
            price: formData.price,
            categoryId: formData.category,
            image_url: formData.imageUrl,
         })
         .eq("id", productId)
         .select();
      if (error) {
         console.log(error);
      } else {
         toast.custom(myToast("Product was updated successfully", "success"));
         console.log(data);
         navigate("/admin");
      }
   };

   return (
      <AdminLayout>
         <div className="tw-flex tw-items-center tw-justify-between tw-gap-3 tw-mb-6 sm:tw-flex-row tw-font-poppins">
            <h2 className="tw-text-2xl tw-font-medium tw-text-white tw-font-poppins">
               Edit Product
            </h2>
            <Link
               to="#"
               className="tw-inline-flex tw-items-center tw-gap-1 tw-px-3 tw-py-2 tw-transition tw-rounded tw-bg-slate-400/15 hover:tw-bg-slate-400/10 hover:tw-text-white"
               onClick={(e) => {
                  e.preventDefault();
                  navigate(-1);
               }}
            >
               <ArrowLeftIcon size={16} />
               <span className="tw-text-sm">Go Back</span>
            </Link>
         </div>

         <div className="tw-grid tw-items-start tw-grid-cols-1 tw-gap-4 sm:tw-grid-cols-12 md:tw-grid-cols-12">
            <div className="tw-relative tw-col-span-1 tw-p-3 tw-overflow-hidden tw-rounded-md tw-bg-slate-200/10 md:tw-col-span-5 tw-group">
               <img
                  src={imageUrl}
                  alt={product?.title}
                  className="tw-object-contain tw-w-full tw-h-full tw-max-h-[450px] tw-rounded-md"
               />
               <div className="tw-absolute tw-inset-0 tw-z-10 tw-items-center tw-justify-center tw-hidden tw-bg-black/60 group-hover:tw-flex">
                  <ImageUpload setImageURL={(url) => setValue("imageUrl", url)} />
               </div>
            </div>

            <div className="tw-col-span-1 tw-p-6 tw-rounded-md md:tw-col-span-7 tw-bg-slate-200/10">
               <form className="tw-font-poppins" onSubmit={handleSubmit(onProductSave)}>
                  <Input
                     id="title"
                     label="Title"
                     placeholder="Product title"
                     error={errors.title}
                     wire={register("title")}
                     className="tw-mb-5"
                  />

                  <IconInput
                     id="imageUrl"
                     label="Image URL"
                     placeholder="Product title"
                     icon={<LinkIcon size={20} color="currentColor" />}
                     error={errors.imageUrl}
                     wire={register("imageUrl")}
                     className="tw-mb-5"
                  />

                  <Input
                     id="description"
                     label="Description"
                     placeholder="Product description"
                     error={errors.description}
                     wire={register("description")}
                     className="tw-mb-5"
                  />

                  <div className="tw-flex tw-flex-col tw-gap-3 tw-mb-5 lg:tw-flex-row">
                     <IconInput
                        id="price"
                        label="Price"
                        placeholder="Price"
                        error={errors.price}
                        wire={register("price")}
                        icon={<IndianRupeeIcon size={20} color="currentColor" />}
                        className="lg:tw-w-1/2"
                        mobileErrorOnly
                     />

                     <SelectInput
                        id="category"
                        label="Category"
                        wire={register("category")}
                        placeholder="Select Category"
                        options={[{ value: product?.category?.id, label: product?.category?.name }]}
                        className="lg:tw-w-1/2"
                     />
                  </div>

                  <button
                     type="submit"
                     className="tw-inline-flex tw-items-center tw-justify-center tw-w-full tw-px-4 tw-py-3 tw-mt-2 tw-font-medium tw-text-center tw-text-white tw-bg-purple-500 tw-rounded-md hover:tw-bg-opacity-70"
                  >
                     Save
                  </button>
               </form>
            </div>
         </div>
      </AdminLayout>
   );
}

export default EditProduct;
