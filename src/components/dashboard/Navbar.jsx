import { BellIcon, MessageSquareMoreIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../store/auth";

// eslint-disable-next-line react/prop-types
function Navbar({ isOpen, toggleSidebar }) {
   const [isDarkMode, setIsDarkMode] = useState(false);
   const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
   const logout = useAuth((state) => state.logout);

   const handleLogout = () => {
      logout((error) => {
         if (error) {
            console.log(error);
         }
      });
   };

   return (
      <header className="tw-sticky tw-top-0 tw-z-50 tw-flex tw-w-full tw-bg-slate-800 tw-drop-shadow-none">
         <div className="tw-flex tw-items-center tw-justify-between tw-flex-grow tw-px-4 tw-py-4 tw-shadow md:tw-px-6 2xl:tw-px-11">
            <div className="tw-flex tw-items-center tw-gap-2 sm:tw-gap-4 lg:tw-hidden">
               <button
                  className="tw-z-10 tw-block tw-rounded-sm tw-border tw-border-slate-400 tw-p-1.5 tw-shadow-sm lg:tw-hidden"
                  onClick={() => toggleSidebar((prev) => !prev)}
               >
                  <span className="tw-relative tw-block tw-w-5 tw-h-5 tw-cursor-pointer">
                     <span className="tw-absolute tw-right-0 tw-w-full tw-h-full">
                        <span
                           className={`tw-relative tw-left-0 tw-top-0 tw-my-1 tw-block tw-h-0.5 tw-w-0 tw-rounded-sm tw-bg-black tw-delay-[0] tw-duration-200 tw-ease-in-out dark:tw-bg-white ${
                              !isOpen && "tw-!w-full tw-delay-300"
                           }`}
                        />
                        <span
                           className={`tw-relative tw-left-0 tw-top-0 tw-my-1 tw-block tw-h-0.5 tw-w-0 tw-rounded-sm tw-bg-black tw-delay-150 tw-duration-200 tw-ease-in-out dark:tw-bg-white ${
                              !isOpen && "tw-!w-full tw-delay-300"
                           }`}
                        />
                        <span
                           className={`tw-relative tw-left-0 tw-top-0 tw-my-1 tw-block tw-h-0.5 tw-w-0 tw-rounded-sm tw-bg-black tw-delay-200 tw-duration-200 tw-ease-in-out dark:tw-bg-white ${
                              !isOpen && "tw-!w-full tw-delay-300"
                           }`}
                        />
                     </span>

                     <span className="tw-absolute tw-right-0 tw-w-full tw-h-full tw-rotate-45">
                        <span className="tw-absolute tw-left-2.5 tw-top-0 tw-block tw-w-0.5 tw-rounded-sm tw-bg-black tw-duration-200 tw-ease-in-out dark:bg-white tw-!h-0 tw-delay-[0]" />
                        <span className="tw-delay-400 tw-absolute tw-left-0 tw-top-2.5 tw-block tw-w-full tw-rounded-sm tw-bg-black tw-duration-200 tw-ease-in-out dark:tw-bg-white tw-!h-0 tw-delay-200" />
                     </span>
                  </span>
               </button>

               <Link to="#" className="tw-flex-shrink tw-block lg:hidden">
                  <img
                     src="https://th.bing.com/th/id/OIG3.GXgDPVptnOnDH47OeZJT?w=1024&h=1024&rs=1&pid=ImgDetMain"
                     alt="logo"
                     className="tw-object-contain tw-w-10 tw-h-10 tw-rounded"
                  />
               </Link>
            </div>

            <div className="tw-hidden sm:tw-block">
               <form>
                  <div className="tw-flex tw-gap-3 tw-p-3 tw-rounded-md tw-text-slate-400 focus-within:tw-ring-2 tw-ring-slate-600">
                     <button className="hover:tw-text-white">
                        <svg
                           width="20"
                           height="20"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                              fill=""
                           ></path>
                           <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                              fill=""
                           ></path>
                        </svg>
                     </button>

                     <input
                        type="text"
                        placeholder="Type to search..."
                        className="tw-text-sm tw-bg-transparent tw-font-poppins focus:tw-outline-0"
                     />
                  </div>
               </form>
            </div>

            <div className="tw-flex tw-items-center tw-gap-4">
               <ul className="tw-inline-flex tw-items-center tw-gap-3">
                  <li className="tw-inline-flex tw-items-center">
                     <label className="tw-inline-flex tw-items-center tw-cursor-pointer">
                        <input
                           type="checkbox"
                           className="tw-sr-only tw-peer"
                           checked={isDarkMode}
                           onChange={(e) => setIsDarkMode(e.target.checked)}
                        />
                        <div className="tw-relative tw-w-11 tw-h-6 tw-bg-gray-200 peer-focus:tw-outline-none peer-focus:tw-ring-4 peer-focus:tw-ring-blue-300 dark:peer-focus:tw-ring-blue-800 tw-rounded-full peer dark:tw-bg-gray-700 peer-checked:after:tw-translate-x-full rtl:peer-checked:after:tw--translate-x-full peer-checked:after:tw-border-white after:tw-content-[''] after:tw-absolute after:tw-top-[2px] after:tw-start-[2px] after:tw-bg-white after:tw-border-gray-300 after:tw-border after:tw-rounded-full after:tw-h-5 after:tw-w-5 after:tw-transition-all dark:tw-border-gray-600 peer-checked:tw-bg-blue-600" />
                     </label>
                  </li>
                  <li>
                     <button className="tw-p-1.5 tw-transition-colors tw-rounded-full tw-text-slate-400 tw-bg-zinc-300/20 hover:tw-text-white">
                        <BellIcon color="currentColor" size={20} strokeWidth={1.5} />
                     </button>
                  </li>
                  <li>
                     <button className="tw-p-1.5 tw-transition-colors tw-rounded-full tw-text-slate-400 tw-bg-zinc-300/20 hover:tw-text-white">
                        <MessageSquareMoreIcon color="currentColor" size={20} strokeWidth={1.5} />
                     </button>
                  </li>
               </ul>

               <div className="tw-relative">
                  <button
                     className="tw-inline-flex tw-items-center tw-gap-3 tw-font-poppins"
                     onClick={() => setIsSubmenuOpen((prev) => !prev)}
                  >
                     <span className="tw-hidden tw-text-right lg:tw-block">
                        <span className="tw-block tw-text-sm tw-font-medium dark:tw-text-white">
                           Ayush Dedhia
                        </span>
                        <span className="tw-block tw-text-xs tw-font-medium dark:tw-text-slate-400">
                           Web Developer
                        </span>
                     </span>
                     <span className="tw-block tw-w-12 tw-h-12 tw-rounded-full">
                        <img
                           src="https://demo.tailadmin.com/src/images/user/user-01.png"
                           alt="User"
                           className="tw-object-contain tw-w-full tw-h-full"
                        />
                     </span>
                     <svg
                        className="tw-hidden tw-fill-slate-400 sm:tw-block"
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           fillRule="evenodd"
                           clipRule="evenodd"
                           d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                           fill=""
                        ></path>
                     </svg>
                  </button>

                  <div
                     className={`tw-absolute tw-right-0 tw-flex-col tw-mt-4 tw-border tw-rounded-md tw-shadow tw-text-slate-300 tw-w-60 tw-bg-slate-800 tw-font-poppins ${
                        isSubmenuOpen ? "tw-block" : "tw-hidden"
                     }`}
                  >
                     <button
                        className="tw-flex tw-items-center tw-gap-3.5 tw-px-6 tw-py-4 tw-text-sm tw-font-medium tw-duration-300 tw-ease-in-out hover:tw-text-primary lg:tw-text-base"
                        onClick={handleLogout}
                     >
                        <svg
                           className="tw-fill-current"
                           width="22"
                           height="22"
                           viewBox="0 0 22 22"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M15.5375 0.618744H11.6531C10.7594 0.618744 10.0031 1.37499 10.0031 2.26874V4.64062C10.0031 5.05312 10.3469 5.39687 10.7594 5.39687C11.1719 5.39687 11.55 5.05312 11.55 4.64062V2.23437C11.55 2.16562 11.5844 2.13124 11.6531 2.13124H15.5375C16.3625 2.13124 17.0156 2.78437 17.0156 3.60937V18.3562C17.0156 19.1812 16.3625 19.8344 15.5375 19.8344H11.6531C11.5844 19.8344 11.55 19.8 11.55 19.7312V17.3594C11.55 16.9469 11.2062 16.6031 10.7594 16.6031C10.3125 16.6031 10.0031 16.9469 10.0031 17.3594V19.7312C10.0031 20.625 10.7594 21.3812 11.6531 21.3812H15.5375C17.2219 21.3812 18.5625 20.0062 18.5625 18.3562V3.64374C18.5625 1.95937 17.1875 0.618744 15.5375 0.618744Z"
                              fill=""
                           ></path>
                           <path
                              d="M6.05001 11.7563H12.2031C12.6156 11.7563 12.9594 11.4125 12.9594 11C12.9594 10.5875 12.6156 10.2438 12.2031 10.2438H6.08439L8.21564 8.07813C8.52501 7.76875 8.52501 7.2875 8.21564 6.97812C7.90626 6.66875 7.42501 6.66875 7.11564 6.97812L3.67814 10.4844C3.36876 10.7938 3.36876 11.275 3.67814 11.5844L7.11564 15.0906C7.25314 15.2281 7.45939 15.3312 7.66564 15.3312C7.87189 15.3312 8.04376 15.2625 8.21564 15.125C8.52501 14.8156 8.52501 14.3344 8.21564 14.025L6.05001 11.7563Z"
                              fill=""
                           ></path>
                        </svg>
                        Log Out
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
}

export default Navbar;
