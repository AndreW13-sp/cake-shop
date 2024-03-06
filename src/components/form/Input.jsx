/* eslint-disable react/prop-types */
import { ChevronDownIcon } from "lucide-react";

import { cn } from "../../utils";

function Input({
   error,
   wire,
   id,
   label,
   placeholder,
   type = "text",
   className = "",
   labelStyles = "",
   mobileErrorOnly = false,
}) {
   return (
      <div className={`tw-w-full ${className}`}>
         <div className="tw-inline-flex tw-flex-col tw-gap-1 tw-mb-3 tw-md:flex-row tw-md:items-center tw-md:gap-2">
            <label
               htmlFor={id}
               className={cn(
                  "tw-block tw-text-sm tw-font-medium",
                  error ? "tw-text-rose-500" : "tw-text-white",
                  labelStyles
               )}
            >
               {label}
            </label>
            {error && (
               <span
                  className={`tw-text-xs tw-text-rose-300 ${mobileErrorOnly ? "tw-lg:hidden" : ""}`}
               >
                  <span className="tw-hidden tw-sm:inline-block">- &nbsp;</span> {error.message}
               </span>
            )}
         </div>
         <input
            type={type || "text"}
            id={id}
            className={`no-bg-input tw-w-full tw-px-5 tw-py-3 tw-text-sm tw-font-normal tw-text-white tw-transition tw-border-2 tw-rounded-lg tw-outline-none tw-bg-gray-800/40 tw-disabled:cursor-default tw-disabled:bg-slate-300/15 focus:tw-border-purple-400 placeholder:tw-text-slate-500 ${
               error ? "tw-border-rose-500" : "tw-border-slate-400"
            }`}
            placeholder={placeholder || "This is a default placeholder"}
            {...wire}
         />
      </div>
   );
}

// eslint-disable-next-line react/prop-types
export function IconInput({
   error,
   wire,
   id,
   label,
   placeholder,
   type = "text",
   icon,
   className = "",
   mobileErrorOnly = false,
}) {
   return (
      <div className={`tw-w-full ${className}`}>
         <div className="tw-inline-flex tw-flex-col tw-gap-1 tw-mb-3 tw-md:flex-row tw-md:items-center tw-md:gap-2">
            <label
               htmlFor={id}
               className={`tw-block tw-text-sm tw-font-medium ${
                  error ? "tw-text-rose-500" : "tw-text-white"
               }`}
            >
               {label}
            </label>
            {error && (
               <span
                  className={`tw-text-xs tw-text-rose-300 ${mobileErrorOnly ? "tw-lg:hidden" : ""}`}
               >
                  <span className="tw-hidden tw-sm:inline-block">- &nbsp;</span> {error.message}
               </span>
            )}
         </div>
         <div
            className={`tw-inline-flex tw-w-full tw-transition tw-border-2 tw-rounded-lg focus-within:tw-text-purple-400 focus-within:tw-border-purple-400 tw-bg-gray-800/40 ${
               error ? "tw-border-rose-500" : "tw-border-slate-400"
            }`}
         >
            <span className="tw-inline-flex tw-items-center tw-px-3 tw-bg-slate-300/10">
               {icon}
            </span>
            <input
               type={type || "text"}
               id={id}
               className="no-bg-input tw-w-full tw-p-3 tw-text-sm tw-text-white tw-bg-transparent tw-outline-none tw-disabled:cursor-default tw-disabled:bg-slate-300/15 tw-placeholder:text-slate-500"
               placeholder={placeholder || "https://www.yoursite.com/path/to/image.png"}
               {...wire}
            />
         </div>
      </div>
   );
}

// eslint-disable-next-line react/prop-types
export function SelectInput({ error, wire, id, label, placeholder, className = "", options = [] }) {
   return (
      <div className={`tw-w-full ${className}`}>
         <div className="tw-inline-flex tw-flex-col tw-gap-1 tw-mb-3 tw-md:flex-row tw-md:items-center tw-md:gap-2">
            <label
               htmlFor={id}
               className={`tw-block tw-text-sm tw-font-medium ${
                  error ? "tw-text-rose-500" : "tw-text-white"
               }`}
            >
               {label}
            </label>
            {error && (
               <span className="tw-text-xs tw-text-rose-300">
                  <span className="tw-hidden tw-sm:inline-block">- &nbsp;</span> {error.message}
               </span>
            )}
         </div>
         <div
            className={`no-bg-input tw-inline-flex tw-items-center tw-w-full tw-transition tw-border-2 tw-rounded-lg tw-bg-gray-800/40 focus-within:tw-border-purple-400 ${
               error ? "tw-border-rose-500" : "tw-border-slate-400"
            }`}
         >
            <select
               id={id}
               className="no-bg-input tw-w-full tw-p-3 tw-text-sm tw-font-normal tw-text-white tw-bg-transparent tw-outline-none tw-appearance-none tw-active:border-purple-400 tw-disabled:cursor-default tw-disabled:bg-slate-300/15 tw-placeholder:text-slate-500"
               {...wire}
            >
               <option value="" className="tw-text-white tw-bg-slate-600">
                  {placeholder || "Select"}
               </option>
               {options.map((opt) => {
                  return (
                     <option
                        key={opt.value}
                        value={opt.value}
                        className="tw-text-white tw-bg-slate-600"
                     >
                        {opt.label}
                     </option>
                  );
               })}
            </select>

            <span className="tw-mr-2">
               <ChevronDownIcon size={20} />
            </span>
         </div>
      </div>
   );
}

export default Input;
