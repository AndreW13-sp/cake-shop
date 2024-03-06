import { useState } from "react";
import { Link } from "react-router-dom";

import CalendarIcon from "../icons/Calendar";
import DashboardIcon from "../icons/Dashboard";
import ProfileIcon from "../icons/ProfileIcons";

const links = [
	{
		icon: <DashboardIcon />,
		text: "Dashboard",
		href: "#",
		childLinks: [
			{ icon: "", text: "eCommerce", href: "#" },
			{ icon: "", text: "Analytics", href: "#" },
			{ icon: "", text: "Marketing", href: "#" },
			{ icon: "", text: "CRM", href: "#" },
			{ icon: "", text: "Stocks", href: "#" },
		],
	},
	{
		icon: <CalendarIcon />,
		text: "Calender",
		href: "#",
		childLinks: [
			{ icon: "", text: "eCommerce", href: "#" },
			{ icon: "", text: "Analytics", href: "#" },
			{ icon: "", text: "Marketing", href: "#" },
			{ icon: "", text: "CRM", href: "#" },
			{ icon: "", text: "Stocks", href: "#" },
		],
	},
	{
		icon: <ProfileIcon />,
		text: "Profile",
		href: "#",
		childLinks: [
			{ icon: "", text: "eCommerce", href: "#" },
			{ icon: "", text: "Analytics", href: "#" },
			{ icon: "", text: "Marketing", href: "#" },
			{ icon: "", text: "CRM", href: "#" },
			{ icon: "", text: "Stocks", href: "#" },
		],
	},
];

// eslint-disable-next-line react/prop-types
function Sidebar({ isOpen, toggleSidebar }) {
	const [active, setActive] = useState("");

	return (
		<aside
			className={`tw-absolute tw-top-0 tw-left-0 tw-flex tw-flex-col tw-h-screen tw-overflow-y-hidden tw-duration-300 tw-ease-linear tw--translate-x-full tw-bg-slate-800 lg:tw-static lg:tw-translate-x-0 tw-shrink-0 lg:tw-min-w-[250px] ${
				isOpen ? "tw-translate-x-0 tw-z-[100]" : "tw--translate-x-full"
			}`}
		>
			{/* Sidebar Header */}
			<div className="tw-flex tw-items-center tw-justify-between tw-gap-8 tw-px-6 tw-py-5 tw-border-b lg:tw-py-6 tw-border-slate-700">
				<Link to="/" className="tw-inline-flex tw-items-center tw-gap-3 tw-text-white">
					<img
						src="https://th.bing.com/th/id/OIG3.GXgDPVptnOnDH47OeZJT?w=1024&h=1024&rs=1&pid=ImgDetMain"
						alt="logo"
						className="tw-object-contain tw-w-5 tw-h-5 tw-rounded md:tw-w-8 md:tw-h-8"
					/>
					<span className="tw-text-base tw-font-semibold md:tw-text-xl">Grocery.in</span>
				</Link>
				<button
					className="tw-block tw-text-white lg:tw-hidden"
					onClick={() => toggleSidebar(false)}
				>
					<svg
						className="tw-fill-current"
						width="15"
						height="18"
						viewBox="0 0 20 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
							fill=""
						></path>
					</svg>
				</button>
			</div>

			{/* Links */}
			<div className="tw-flex tw-flex-col tw-px-2 tw-py-4 tw-overflow-y-auto sm:tw-p-4">
				<h3 className="tw-ml-2 tw-tracking-wider tw-uppercase tw-text-slate-400 tw-font-poppins">
					Menu
				</h3>

				<ul className="tw-mt-3 tw-space-y-1">
					{links.map((link) => (
						<li key={link.text}>
							<Link
								to={link.href}
								onClick={(e) => {
									e.preventDefault();
									setActive((prevLink) => (prevLink === link.text ? "" : link.text));
								}}
							>
								<div
									className={`tw-inline-flex tw-items-center tw-w-full tw-gap-2 tw-p-3 tw-text-white tw-rounded-md tw-font-poppins hover:tw-bg-slate-100/10 ${
										active === link.text && "tw-bg-slate-100/20"
									}`}
								>
									{link.icon}
									<span className="tw-flex-grow tw-text-sm">{link.text}</span>
									<svg
										className={`tw-fill-current tw-transition ${
											active === link.text ? "tw-rotate-180" : ""
										}`}
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
											fill=""
										></path>
									</svg>
								</div>
							</Link>

							{link?.childLinks && (
								<div
									className={`tw-mt-3 tw-ml-6 ${
										active === link.text ? "tw-block" : "tw-hidden"
									}`}
								>
									<ul className="tw-space-y-2 tw-text-sm tw-font-poppins tw-text-slate-400">
										{link.childLinks.map((child) => (
											<li
												key={child.text}
												className="tw-cursor-pointer hover:tw-text-white"
											>
												<Link key={child.text} to={child.href}>
													{child.text}
												</Link>
											</li>
										))}
									</ul>
								</div>
							)}
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
}

export default Sidebar;
