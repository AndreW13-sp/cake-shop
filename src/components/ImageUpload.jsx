import { ImageIcon } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
function ImageUpload({ setImageURL }) {
   const cloudinaryRef = useRef();
   const widgetRef = useRef();

   const responseHandler = useCallback(
      (err, result) => {
         if (err) {
            console.log(err);
            return;
         }
         if (result.event === "success") {
            console.log(result.info.secure_url);
            setImageURL(result.info.secure_url);
         }
         console.log(result);
      },
      [setImageURL]
   );

   useEffect(() => {
      cloudinaryRef.current = window.cloudinary;

      widgetRef.current = cloudinaryRef.current.createUploadWidget(
         {
            cloudName: "dav5ps3uu",
            uploadPreset: "f3hyytlm",
         },
         responseHandler
      );
   }, [responseHandler]);

   return (
      <button
         className="tw-bg-sky-500 tw-border-2 tw-border-sky-300 tw-font-poppins tw-text-white tw-px-4 tw-py-2 tw-rounded-md tw-shadow-md hover:tw-bg-opacity-70 hover:tw-text-opacity-90 tw-transition-opacity tw-text-sm tw-inline-flex tw-items-center tw-gap-1"
         onClick={() => widgetRef.current.open()}
      >
         <ImageIcon size={20} color="currentColor" />
         <span>Upload an Image</span>
      </button>
   );
}

export default ImageUpload;
