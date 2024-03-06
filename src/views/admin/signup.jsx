import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import toast from "react-hot-toast";

import useAuth from "../../store/auth";
import myToast from "../../components/MyToast";

const validationSchema = yup.object({
   firstName: yup.string().required(),
   lastName: yup.string().required(),
   email: yup.string().email().required(),
   password: yup.string().required(),
});

function AdminSignup() {
   const { register, handleSubmit } = useForm({
      resolver: yupResolver(validationSchema),
      defaultValues: {
         firstName: "",
         lastName: "",
         email: "",
         password: "",
      },
   });
   const signup = useAuth((state) => state.signup);
   const navigate = useNavigate();

   const onFormSubmit = (formData) => {
      signup({ ...formData, isAdmin: true }, (error, data) => {
         if (error) {
            const { message } = error;
            toast.custom(myToast(message, "error"));
            return;
         }
         console.log(data);
         navigate("/admin", { replace: true });
      });
   };

   const handleGoogleAuth = () => {
      toast.custom(myToast("Google authentication has not been implemented yet", "warning"));
   };

   const handleGithubAuth = () => {
      toast.custom(myToast("Github authentication has not been implemented yet", "warning"));
   };

   return (
      <section className="tw-p-5 tw-bg-slate-800">
         <div className="tw-grid tw-grid-cols-1 tw-gap-5 md:tw-grid-cols-12">
            <div className="tw-flex tw-flex-col tw-col-span-1 tw-gap-6 tw-px-10 tw-py-8 tw-rounded-lg tw-bg-slate-500/10 md:tw-col-span-6 tw-font-poppins">
               <div className="tw-flex tw-items-center tw-gap-3">
                  <img
                     src="https://th.bing.com/th/id/OIG3.GXgDPVptnOnDH47OeZJT?w=1024&h=1024&rs=1&pid=ImgDetMain"
                     alt="logo"
                     className="tw-object-contain tw-w-5 tw-h-5 tw-rounded md:tw-w-10 md:tw-h-10"
                  />
                  <h1 className="tw-text-2xl tw-font-bold tw-text-slate-300 tw-font-poppins">
                     Caramel
                  </h1>
               </div>

               <div className="tw-space-y-3">
                  <h2 className="tw-text-2xl tw-font-semibold tw-text-white tw-font-poppins">
                     Become A New Admin
                  </h2>
                  <p className="tw-text-sm tw-text-slate-400">
                     Start your business journey with no time wastage. Already have an account?{" "}
                     <Link to="/admin/login" className="tw-text-blue-500">
                        Login here
                     </Link>
                     .
                  </p>
               </div>

               <form className="tw-space-y-5" onSubmit={handleSubmit(onFormSubmit)}>
                  <div className="tw-space-y-6">
                     <div className="tw-flex tw-gap-5">
                        <div className="tw-w-full tw-space-y-3">
                           <label htmlFor="email" className="tw-block tw-text-sm tw-text-slate-300">
                              Your Email
                           </label>
                           <input
                              type="text"
                              id="email"
                              className="no-bg-input tw-w-full tw-px-4 tw-py-3 tw-text-sm tw-text-white tw-rounded tw-outline-none tw-bg-slate-500/15 focus:tw-ring focus:tw-ring-purple-500"
                              placeholder="name@company.com"
                              {...register("email")}
                           />
                        </div>
                        <div className="tw-w-full tw-space-y-3">
                           <label
                              htmlFor="firstName"
                              className="tw-block tw-text-sm tw-text-slate-300"
                           >
                              First Name
                           </label>
                           <input
                              type="text"
                              id="firstName"
                              className="no-bg-input tw-w-full tw-px-4 tw-py-3 tw-text-sm tw-text-white tw-rounded tw-outline-none tw-bg-slate-500/15 focus:tw-ring focus:tw-ring-purple-500"
                              placeholder="John"
                              {...register("firstName")}
                           />
                        </div>
                     </div>
                     <div className="tw-flex tw-gap-5">
                        <div className="tw-w-full tw-space-y-3">
                           <label
                              htmlFor="lastName"
                              className="tw-block tw-text-sm tw-text-slate-300"
                           >
                              Last Name
                           </label>
                           <input
                              type="text"
                              id="lastName"
                              className="no-bg-input tw-w-full tw-px-4 tw-py-3 tw-text-sm tw-text-white tw-rounded tw-outline-none tw-bg-slate-500/15 focus:tw-ring focus:tw-ring-purple-500"
                              placeholder="Doe"
                              {...register("lastName")}
                           />
                        </div>
                        <div className="tw-w-full tw-space-y-3">
                           <label
                              htmlFor="password"
                              className="tw-block tw-text-sm tw-text-slate-300"
                           >
                              Password
                           </label>
                           <input
                              type="password"
                              id="password"
                              className="no-bg-input tw-w-full tw-px-4 tw-py-3 tw-text-sm tw-text-white tw-rounded tw-outline-none tw-bg-slate-500/15 focus:tw-ring focus:tw-ring-purple-500"
                              placeholder="Super Secret Password"
                              {...register("password")}
                           />
                        </div>
                     </div>
                  </div>

                  <div className="tw-flex tw-items-center tw-gap-5">
                     <hr className="tw-w-full tw-border-slate-300/60" />
                     <span className="tw-text-slate-400">or</span>
                     <hr className="tw-w-full tw-border-slate-300/60" />
                  </div>

                  <div className="tw-flex tw-flex-col tw-gap-4">
                     <button
                        type="button"
                        className="tw-py-2.5 tw-text-slate-400 tw-border tw-rounded-md tw-border-slate-500 tw-inline-flex tw-items-center tw-justify-center tw-gap-3"
                        onClick={handleGoogleAuth}
                     >
                        <img
                           src="https://cdn.iconscout.com/icon/free/png-256/free-google-160-189824.png"
                           alt="google signup"
                           className="tw-object-cover tw-w-5"
                        />
                        Signup with Google
                     </button>
                     <button
                        type="button"
                        className="tw-py-2.5 tw-text-slate-400 tw-border tw-rounded-md tw-border-slate-500 tw-inline-flex tw-items-center tw-justify-center tw-gap-3"
                        onClick={handleGithubAuth}
                     >
                        <img
                           src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                           alt="google signup"
                           className="tw-object-cover tw-w-6"
                        />
                        Signup with Github
                     </button>
                  </div>

                  <button className="tw-py-3 tw-w-full tw-bg-blue-800 tw-rounded-md tw-inline-flex tw-items-center tw-justify-center tw-gap-3 tw-text-white hover:tw-opacity-80">
                     Signup
                  </button>
               </form>
            </div>

            <div className="tw-hidden tw-col-span-1 tw-rounded-lg md:tw-col-span-6 md:tw-block">
               <div className="tw-flex tw-items-center tw-justify-center">
                  <img
                     src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg"
                     alt=""
                     className="tw-object-cover tw-w-full"
                  />
               </div>
            </div>
         </div>
      </section>
   );
}

export default AdminSignup;
