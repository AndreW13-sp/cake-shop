import { NavLink } from "react-router-dom";

import Logo from "../assets/img/logo/logo.png";

function Header() {
	return (
		// <!--header area start-->
		<header className="header_section">
			<div className="header_top">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="header_top_inner d-flex justify-content-between">
								<div className="welcome_text">
									<p>World Wide Completely Free Returns and Free Shipping</p>
								</div>
								<div className="header_top_sidebar d-flex align-items-center">
									<ul className="d-flex">
										<li>
											<i className="icofont-phone"></i>{" "}
											<a href="tel:+00123456789">+00 123 456 789</a>
										</li>
										<li>
											<i className="icofont-envelope"></i>{" "}
											<a href="mailto:demo@example.com">demo@example.com</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="main_header d-flex justify-content-between align-items-center">
							<div className="header_logo">
								<a className="sticky_none" href="index.html">
									<img src={Logo} alt="" />
								</a>
							</div>
							{/* <!--main menu start--> */}
							<div className="main_menu d-none d-lg-block">
								<nav>
									<ul className="d-flex">
										<li>
											<NavLink
												to="/"
												className={({ isActive }) => (isActive ? "active" : "")}
											>
												Home
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/about"
												className={({ isActive }) => (isActive ? "active" : "")}
											>
												About
											</NavLink>
										</li>
										<li className="megamenu-holder">
											<NavLink
												to="/shop"
												className={({ isActive }) => (isActive ? "active" : "")}
											>
												Shop
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/blogs"
												className={({ isActive }) => (isActive ? "active" : "")}
											>
												Blogs
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/contact"
												className={({ isActive }) => (isActive ? "active" : "")}
											>
												Contact
											</NavLink>
										</li>
									</ul>
								</nav>
							</div>
							{/* <!--main menu end--> */}
							<div className="header_account">
								<div className="canvas_open">
									<a href="#">
										<i className="ion-navicon"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
