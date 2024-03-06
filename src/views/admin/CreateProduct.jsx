/* eslint-disable react/prop-types */
import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowLeftIcon, IndianRupeeIcon, LinkIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

// import ImageUpload from "../../components/ImageUpload";
import ImageUpload from "../../components/ImageUpload";
import Input, { IconInput, SelectInput } from "../../components/form/Input";
import AdminLayout from "../../layouts/AdminLayout";
import supabase from "../../supabase";

const validationSchema = yup
   .object({
      title: yup.string().required(),
      imageUrl: yup.string().url("Please provide the valid image url").required(),
      description: yup.string().required(),
      price: yup.number().positive().min(10, "Minimun price must be 10").required(),
      category: yup.string().required(),
   })
   .required();

function CreateProduct() {
   const navigate = useNavigate();

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
      reset,
      setValue,
   } = useForm({
      resolver: yupResolver(validationSchema),
      defaultValues: {
         title: "",
         description: "",
         imageUrl: "",
         price: 10,
         category: "",
      },
   });

   const imageUrl = watch("imageUrl");

   const onProductCreate = async (product) => {
      // {
      //   category: 'one',
      //   price: 999,
      //   description: 'This is a product description',
      //   imageUrl: 'https://images.unsplash.com/photo-1503602642458-232111445657...',
      //   title: 'Great Chair'
      // }
      console.log(product);

      const { data, error } = await supabase
         .from("products")
         .insert([
            {
               name: product.title,
               description: product.description,
               price: product.price,
               image_url: product.imageUrl,
               categoryId: "e59b6e9d-c67b-4247-9056-fd22c2a63fa8",
            },
         ])
         .select();

      if (error) {
         console.log(error);
         return;
      }

      console.log(data);
      reset();
      navigate("/admin");
   };

   return (
      <AdminLayout>
         <div className="tw-flex tw-items-center tw-justify-between tw-gap-3 tw-mb-6 sm:tw-flex-row tw-font-poppins">
            <h2 className="tw-text-2xl tw-font-medium tw-text-white tw-font-poppins">
               Create a Product
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
            {/* <div className="tw-relative tw-col-span-1 tw-p-3 tw-overflow-hidden tw-rounded-md tw-bg-slate-200/10 md:tw-col-span-5 tw-group">
               <img
                  src={
                     imageUrl
                        ? imageUrl
                        : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                  }
                  alt={""}
                  className="tw-object-contain tw-w-full tw-h-full tw-max-h-[450px] tw-rounded-md"
                  onError={(e) => {
                     e.target.src =
                        "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
                     e.onerror = null;
                  }}
               />
               <div className="tw-absolute tw-inset-0 tw-z-10 tw-items-center tw-justify-center tw-hidden tw-bg-black/60 group-hover:tw-flex">
                  <div className="tw-flex tw-items-center tw-justify-center tw-p-2 tw-rounded-md tw-bg-gray-400/50 tw-font-poppins">
                     <label
                        htmlFor="dropzone-file"
                        className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full tw-border-2 tw-border-gray-700 tw-border-dashed tw-rounded-lg tw-cursor-pointer hover:tw-border-gray-500 hover:tw-bg-gray-600"
                     >
                        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-3">
                           <svg
                              className="tw-w-8 tw-h-8 tw-mb-4 tw-text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                           >
                              <path
                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                           </svg>
                           <p className="tw-mb-2 tw-text-sm tw-text-gray-400">
                              <span className="tw-font-semibold">Click to upload</span> or drag and
                              drop
                           </p>
                           <p className="tw-text-xs tw-text-gray-400">
                              SVG, PNG, JPG or GIF (MAX. 800x400px)
                           </p>
                        </div>
                        <input id="dropzone-file" type="file" className="tw-hidden" />
                     </label>
                  </div>
               </div>
            </div> */}

            <div className="tw-relative tw-col-span-1 tw-p-3 tw-overflow-hidden tw-rounded-md tw-bg-slate-200/10 md:tw-col-span-5 tw-group">
               <img
                  src={imageUrl}
                  alt={"Create a product"}
                  className="tw-object-contain tw-w-full tw-h-full tw-max-h-[450px] tw-rounded-md"
               />
               <div className="tw-absolute tw-inset-0 tw-z-10 tw-items-center tw-justify-center tw-hidden tw-bg-black/60 group-hover:tw-flex">
                  <ImageUpload setImageURL={(url) => setValue("imageUrl", url)} />
               </div>
            </div>

            <div className="tw-col-span-1 tw-p-6 tw-rounded-md md:tw-col-span-7 tw-bg-slate-200/10">
               <form className="tw-font-poppins" onSubmit={handleSubmit(onProductCreate)}>
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
                     placeholder="Product image URL"
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
                        options={[{ value: "one", label: "One" }]}
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

export default CreateProduct;
