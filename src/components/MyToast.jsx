import { AlertCircleIcon, CheckIcon, CircleSlashIcon, SendIcon } from "lucide-react";

import { cn } from "../utils";

// eslint-disable-next-line react/prop-types
function myToast(message, type) {
   const NormalizedIcon = () => {
      switch (type) {
         case "success":
            return <CheckIcon size={20} color="currentColor" />;
         case "error":
            return <CircleSlashIcon size={20} color="currentColor" />;
         case "warning":
            return <AlertCircleIcon size={20} color="currentColor" />;
         default:
            return <SendIcon size={20} color="currentColor" />;
      }
   };

   // eslint-disable-next-line react/display-name, no-unused-vars
   return (t) => {
      return (
         <div
            className={cn(
               "tw-flex tw-items-center tw-w-full tw-max-w-xs tw-p-4 tw-space-x-4 rtl:tw-space-x-reverse  tw-divide-x rtl:tw-divide-x-reverse tw-rounded-lg tw-shadow tw-text-gray-400 tw-divide-gray-700 tw-space-x tw-bg-gray-800 tw-font-poppins tw-transition-all tw-duration-300 tw-ease-in-out",
               {
                  "tw-text-rose-400": type === "error",
                  "tw-text-green-400": type === "success",
                  "tw-text-orange-400": type === "warning",
               },
               {
                  "tw-opacity-100 tw-translate-y-0": t.visible, // when the toast is visible i.e. onEnter,
                  "tw-opacity-0 tw-translate-y-[100%]": !t.visible, // when toast is hidden i.e. onLeave,
               }
            )}
            role="alert"
         >
            <div className="tw-shrink-0">{NormalizedIcon()}</div>
            <div className="tw-ps-4 tw-text-sm tw-font-normal">{message}</div>
         </div>
      );
   };
}

export default myToast;
