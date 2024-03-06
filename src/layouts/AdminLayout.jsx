import { useState } from "react";

import "../admin.css";
import { Navbar, Sidebar } from "../components/dashboard";

// eslint-disable-next-line react/prop-types
function AdminLayout({ children }) {
	const [isSidebarActive, setIsSidebarActive] = useState(false);

	return (
		<div className="tw-bg-boxdark-2 tw-text-bodydark">
			<div className="tw-flex tw-h-screen tw-overflow-hidden">
				<Sidebar isOpen={isSidebarActive} toggleSidebar={setIsSidebarActive} />

				<div className="tw-relative tw-flex tw-flex-col tw-flex-grow tw-overflow-x-hidden tw-overflow-y-auto">
					<Navbar isOpen={isSidebarActive} toggleSidebar={setIsSidebarActive} />

					<main>
						<div className="tw-p-4 tw-mx-auto tw-max-w-screen-2xl md:tw-p-6 2xl:tw-p-10">
							{children}
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default AdminLayout;
