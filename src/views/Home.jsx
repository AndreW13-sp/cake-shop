import Banner1 from "../assets/img/bg/banner1.png";
import Banner2 from "../assets/img/bg/banner2.png";
import HeroBannerShape from "../assets/img/bg/hero-banner-shape.png";

import MiniShape1 from "../assets/img/others/hero-mini-shape1.png";
import MiniShape2 from "../assets/img/others/hero-mini-shape2.png";
import MiniShape3 from "../assets/img/others/hero-mini-shape3.png";
import MiniShape4 from "../assets/img/others/hero-mini-shape4.png";
import MiniShape5 from "../assets/img/others/hero-mini-shape5.png";

import Product1 from "../assets/img/product/mini-product/product1.png";
import Product2 from "../assets/img/product/mini-product/product2.png";
import Product3 from "../assets/img/product/mini-product/product3.png";
import Product4 from "../assets/img/product/mini-product/product4.png";
import Product5 from "../assets/img/product/mini-product/product5.png";
import Product6 from "../assets/img/product/mini-product/product6.png";
import Product7 from "../assets/img/product/mini-product/product7.png";

import Service1 from "../assets/img/others/services1.png";
import Service2 from "../assets/img/others/services2.png";
import Service3 from "../assets/img/others/services3.png";

function Home() {
	return (
		<>
			<div className="body_overlay"></div>
			<div className="offcanvas_menu">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="offcanvas_menu_wrapper">
								<div className="canvas_close">
									<a href="#">
										<i className="ion-android-close"></i>
									</a>
								</div>
								<div className="welcome_text text-center">
									<p>Welcome to Caramel</p>
								</div>
								<div id="menu" className="text-left">
									<ul className="offcanvas_main_menu">
										<li className="menu-item-has-children active">
											<a href="#">Home</a>
										</li>
										<li>
											<a href="about.html">About Us</a>
										</li>
										<li className="menu-item-has-children">
											<a href="./shop.html">Product</a>
										</li>
										<li className="menu-item-has-children">
											<a href="blog.html">blog</a>
										</li>
										<li className="menu-item-has-children">
											<a href="contact.html">Contact Us</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mini_cart">
				<div className="cart_gallery">
					<div className="cart_close">
						<div className="cart_text">
							<h3>cart</h3>
						</div>
						<div className="mini_cart_close">
							<a href="#">
								<i className="ion-android-close"></i>
							</a>
						</div>
					</div>
					<div className="cart_item">
						<div className="cart_img">
							<a href="product-1.html">
								<img src={Product1} alt="" />
							</a>
						</div>
						<div className="cart_info">
							<a href="product-1.html">Primis In Faucibus</a>
							<p>
								1 x <span> $65.00 </span>
							</p>
						</div>
						<div className="cart_remove">
							<a href="#">
								<i className="ion-android-close"></i>
							</a>
						</div>
					</div>
					<div className="cart_item">
						<div className="cart_img">
							<a href="product-1.html">
								<img src={Product2} alt="" />
							</a>
						</div>
						<div className="cart_info">
							<a href="product-1.html">Letraset Sheets</a>
							<p>
								1 x <span> $60.00 </span>
							</p>
						</div>
						<div className="cart_remove">
							<a href="#">
								<i className="ion-android-close"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="mini_cart_table">
					<div className="cart_table_border">
						<div className="cart_total">
							<span>Sub total:</span>
							<span className="price">$125.00</span>
						</div>
						<div className="cart_total mt-10">
							<span>total:</span>
							<span className="price">$125.00</span>
						</div>
					</div>
				</div>
				<div className="mini_cart_footer">
					<div className="cart_button">
						<a href="cart.html">View cart</a>
					</div>
					<div className="cart_button">
						<a href="checkout.html">
							<i className="fa fa-sign-in"></i> Checkout
						</a>
					</div>
				</div>
			</div>

			<div className="page_search_box">
				<div className="search_close">
					<i className="ion-close-round"></i>
				</div>
				<form className="border-bottom" action="#">
					<input className="border-0" placeholder="Search products..." type="text" />
					<button type="submit">
						<span className="pe-7s-search"></span>
					</button>
				</form>
			</div>

			<div className="hero_banner_section d-flex align-items-center mb-110">
				<div className="container">
					<div className="hero_banner_inner">
						<div className="row align-items-center">
							<div className="col-lg-5">
								<div className="hero_content">
									<h3
										className="wow fadeInUp"
										data-wow-delay="0.1s"
										data-wow-duration="1.1s"
									>
										<span>70%</span> Sale Off
									</h3>
									<h1
										className="wow fadeInUp"
										data-wow-delay="0.2s"
										data-wow-duration="1.2s"
									>
										Quality Products Bakery Items
									</h1>
									<a
										className="btn btn-link wow fadeInUp"
										data-wow-delay="0.3s"
										data-wow-duration="1.3s"
										href="#"
									>
										View Products
									</a>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="hero_shape_banner">
									<img
										className="banner_keyframes_animation wow"
										src={HeroBannerShape}
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="hero_mini_shape shape1">
					<img src={MiniShape1} alt="" />
				</div>
				<div className="hero_mini_shape shape2">
					<img src={MiniShape2} alt="" />
				</div>
				<div className="hero_mini_shape shape3">
					<img src={MiniShape3} alt="" />
				</div>
				<div className="hero_mini_shape shape4">
					<img src={MiniShape4} alt="" />
				</div>
				<div className="hero_mini_shape shape5">
					<img src={MiniShape5} alt="" />
				</div>
			</div>

			<div className="service_section mb-86">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="services_section_inner d-flex justify-content-between">
								<div
									className="single_services one text-center wow fadeInUp"
									data-wow-delay="0.1s"
									data-wow-duration="1.1s"
								>
									<div className="services_thumb">
										<img src={Service1} alt="" />
									</div>
									<div className="services_content">
										<h3>
											<a href="shop.html">Pastry</a>
										</h3>
										<p>Lorem ipsum dolor sit ametgtol consecr adipiscing elit.</p>
									</div>
								</div>
								<div
									className="single_services two text-center wow fadeInUp"
									data-wow-delay="0.2s"
									data-wow-duration="1.2s"
								>
									<div className="services_thumb">
										<img src={Service2} alt="" />
									</div>
									<div className="services_content">
										<h3>
											<a href="shop.html">Breakfast</a>
										</h3>
										<p>Lorem ipsum dolor sit ametgtol consecr adipiscing elit.</p>
									</div>
								</div>
								<div
									className="single_services three text-center wow fadeInUp"
									data-wow-delay="0.3s"
									data-wow-duration="1.3s"
								>
									<div className="services_thumb">
										<img src={Service3} alt="" />
									</div>
									<div className="services_content">
										<h3>
											<a href="shop.html">Cofee Cake</a>
										</h3>
										<p>Lorem ipsum dolor sit ametgtol consecr adipiscing elit.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="banner_section mb-105">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-6">
							<div
								className="single_banner wow fadeInUp"
								data-wow-delay="0.1s"
								data-wow-duration="1.1s"
							>
								<div className="banner_thumb">
									<a href="#" className="discount-banners">
										<img src={Banner1} alt="" />
									</a>
									<div className="banner_text">
										<h3>
											<span>70%</span> Sale Off
										</h3>
										<h2>
											Best Quality <br />
											Products
										</h2>
										<a className="btn btn-link" href="./shop.html">
											View Products
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div
								className="single_banner wow fadeInUp"
								data-wow-delay="0.2s"
								data-wow-duration="1.2s"
							>
								<div className="banner_thumb">
									<a href="#" className="discount-banners">
										<img src={Banner2} alt="" />
									</a>
									<div className="banner_text">
										<h3>
											<span>25%</span> Sale Off
										</h3>
										<h2>
											Hot & Spicy <br />
											Pastry
										</h2>
										<a className="btn btn-link" href="shop.html">
											View Products
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="product_section mb-80 wow fadeInUp"
				data-wow-delay="0.1s"
				data-wow-duration="1.1s"
			>
				<div className="container">
					<div className="product_header">
						<div className="section_title text-center">
							<h2>New Products</h2>
						</div>
						<div className="product_tab_button">
							<ul className="nav justify-content-center" role="tablist" id="nav-tab">
								<li>
									<a
										className="active"
										data-toggle="tab"
										href="#features"
										role="tab"
										aria-controls="features"
										aria-selected="false"
									>
										Our Features
									</a>
								</li>
								<li>
									<a
										data-toggle="tab"
										href="#seller"
										role="tab"
										aria-controls="seller"
										aria-selected="false"
									>
										Best Sellers
									</a>
								</li>
								<li>
									<a
										data-toggle="tab"
										href="#sales"
										role="tab"
										aria-controls="sales"
										aria-selected="false"
									>
										New Items
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="tab-content product_container">
						<div className="tab-pane fade show active" id="features" role="tabpanel">
							<div className="product_gallery">
								<div className="row">
									<div className="col-lg-3 col-md-4 col-sm-6">
										<article className="single_product">
											<figure>
												<div className="product_thumb">
													<a href="product-1.html">
														<img src={Product1} alt="" />
													</a>
													<div className="action_links">
														<ul className="d-flex justify-content-center">
															<li className="quick_button">
																<a
																	href="#"
																	title="Quick View"
																	data-bs-toggle="modal"
																	data-bs-target="#modal_box"
																>
																	<span className="pe-7s-look"></span>
																</a>
															</li>
														</ul>
													</div>
												</div>
												<figcaption className="product_content text-center">
													<h4>
														<a href="product-1.html">Products Name Here</a>
													</h4>
													<div className="price_box">
														<span className="current_price">$22.00</span>
													</div>
												</figcaption>
											</figure>
										</article>
									</div>
									<div className="col-lg-3 col-md-4 col-sm-6">
										<article className="single_product">
											<figure>
												<div className="product_thumb">
													<a href="product-1.html">
														<img src={Product2} alt="" />
													</a>
													<div className="action_links">
														<ul className="d-flex justify-content-center">
															<li className="quick_button">
																<a
																	href="#"
																	title="Quick View"
																	data-bs-toggle="modal"
																	data-bs-target="#modal_box"
																>
																	<span className="pe-7s-look"></span>
																</a>
															</li>
														</ul>
													</div>
												</div>
												<figcaption className="product_content text-center">
													<h4>
														<a href="product-1.html">Lorem, ipsum dolor.</a>
													</h4>
													<div className="price_box">
														<span className="current_price">$24.00</span>
													</div>
												</figcaption>
											</figure>
										</article>
									</div>
									<div className="col-lg-3 col-md-4 col-sm-6">
										<article className="single_product">
											<figure>
												<div className="product_thumb">
													<a href="product-1.html">
														<img src={Product3} alt="" />
													</a>
													<div className="action_links">
														<ul className="d-flex justify-content-center">
															<li className="quick_button">
																<a
																	href="#"
																	title="Quick View"
																	data-bs-toggle="modal"
																	data-bs-target="#modal_box"
																>
																	<span className="pe-7s-look"></span>
																</a>
															</li>
														</ul>
													</div>
												</div>
												<figcaption className="product_content text-center">
													<h4>
														<a href="product-1.html">Praesentium vero nesciu.</a>
													</h4>
													<div className="price_box">
														<span className="current_price">$28.00</span>
													</div>
												</figcaption>
											</figure>
										</article>
									</div>
									<div className="col-lg-3 col-md-4 col-sm-6">
										<article className="single_product">
											<figure>
												<div className="product_thumb">
													<a href="product-1.html">
														<img src={Product4} alt="" />
													</a>
													<div className="action_links">
														<ul className="d-flex justify-content-center">
															<li className="quick_button">
																<a
																	href="#"
																	title="Quick View"
																	data-bs-toggle="modal"
																	data-bs-target="#modal_box"
																>
																	<span className="pe-7s-look"></span>
																</a>
															</li>
														</ul>
													</div>
												</div>
												<figcaption className="product_content text-center">
													<h4>
														<a href="product-1.html">Sit amet consectetur elit.</a>
													</h4>
													<div className="price_box">
														<span className="current_price">$32.00</span>
													</div>
												</figcaption>
											</figure>
										</article>
									</div>
									<div className="col-lg-3 col-md-4 col-sm-6">
										<article className="single_product">
											<figure>
												<div className="product_thumb">
													<a href="product-1.html">
														<img src={Product5} alt="" />
													</a>
													<div className="action_links">
														<ul className="d-flex justify-content-center">
															<li className="quick_button">
																<a
																	href="#"
																	title="Quick View"
																	data-bs-toggle="modal"
																	data-bs-target="#modal_box"
																>
																	<span className="pe-7s-look"></span>
																</a>
															</li>
														</ul>
													</div>
												</div>
												<figcaption className="product_content text-center">
													<h4>
														<a href="product-1.html">Atque earum ullam non.</a>
													</h4>
													<div className="price_box">
														<span className="current_price">$35.00</span>
													</div>
												</figcaption>
											</figure>
										</article>
									</div>
									<div className="col-lg-3 col-md-4 col-sm-6">
										<article className="single_product">
											<figure>
												<div className="product_thumb">
													<a href="product-1.html">
														<img src={Product6} alt="" />
													</a>
													<div className="action_links">
														<ul className="d-flex justify-content-center">
															<li className="quick_button">
																<a
																	href="#"
																	title="Quick View"
																	data-bs-toggle="modal"
																	data-bs-target="#modal_box"
																>
																	<span className="pe-7s-look"></span>
																</a>
															</li>
														</ul>
													</div>
												</div>
												<figcaption className="product_content text-center">
													<h4>
														<a href="product-1.html">Modi excepturi ut ipsam.</a>
													</h4>
													<div className="price_box">
														<span className="current_price">$38.00</span>
													</div>
												</figcaption>
											</figure>
										</article>
									</div>
									<div className="col-lg-3 col-md-4 col-sm-6">
										<article className="single_product">
											<figure>
												<div className="product_thumb">
													<a href="product-1.html">
														<img src={Product7} alt="" />
													</a>
													<div className="action_links">
														<ul className="d-flex justify-content-center">
															<li className="quick_button">
																<a
																	href="#"
																	title="Quick View"
																	data-bs-toggle="modal"
																	data-bs-target="#modal_box"
																>
																	<span className="pe-7s-look"></span>
																</a>
															</li>
														</ul>
													</div>
												</div>
												<figcaption className="product_content text-center">
													<h4>
														<a href="product-1.html">Provident odio, are Unde.</a>
													</h4>
													<div className="price_box">
														<span className="current_price">$28.00</span>
													</div>
												</figcaption>
											</figure>
										</article>
									</div>
									<div className="col-lg-3 col-md-4 col-sm-6">
										<article className="single_product">
											<figure>
												<div className="product_thumb">
													<a href="product-1.html">
														<img src={Product1} alt="" />
													</a>
													<div className="action_links">
														<ul className="d-flex justify-content-center">
															<li className="quick_button">
																<a
																	href="#"
																	title="Quick View"
																	data-bs-toggle="modal"
																	data-bs-target="#modal_box"
																>
																	<span className="pe-7s-look"></span>
																</a>
															</li>
														</ul>
													</div>
												</div>
												<figcaption className="product_content text-center">
													<h4>
														<a href="product-1.html">Products Name Here</a>
													</h4>
													<div className="price_box">
														<span className="current_price">$22.00</span>
													</div>
												</figcaption>
											</figure>
										</article>
									</div>
								</div>
							</div>
						</div>
						<div className="tab-pane fade" id="seller" role="tabpanel">
							<div className="product_gallery">
								<div className="row">
									<div className="col-lg-3 col-md-4 col-sm-6">
										<article className="single_product">
											<figure>
												<div className="product_thumb">
													<a href="product-1.html">
														<img src={Product5} alt="" />
													</a>
													<div className="action_links">
														<ul className="d-flex justify-content-center">
															<li className="quick_button">
																<a
																	href="#"
																	title="Quick View"
																	data-bs-toggle="modal"
																	data-bs-target="#modal_box"
																>
																	<span className="pe-7s-look"></span>
																</a>
															</li>
														</ul>
													</div>
												</div>
												<figcaption className="product_content text-center">
													<h4>
														<a href="product-1.html">Atque earum ullam non.</a>
													</h4>
													<div className="price_box">
														<span className="current_price">$35.00</span>
													</div>
												</figcaption>
											</figure>
										</article>
									</div>
									<div className="col-lg-3 col-md-4 col-sm-6">
										<article className="single_product">
											<figure>
												<div className="product_thumb">
													<a href="product-1.html">
														<img src={Product6} alt="" />
													</a>
													<div className="action_links">
														<ul className="d-flex justify-content-center">
															<li className="quick_button">
																<a
																	href="#"
																	title="Quick View"
																	data-bs-toggle="modal"
																	data-bs-target="#modal_box"
																>
																	<span className="pe-7s-look"></span>
																</a>
															</li>
														</ul>
													</div>
												</div>
												<figcaption className="product_content text-center">
													<h4>
														<a href="product-1.html">Modi excepturi ut ipsam.</a>
													</h4>
													<div className="price_box">
														<span className="current_price">$38.00</span>
													</div>
												</figcaption>
											</figure>
										</article>
									</div>
									<div className="col-lg-3 col-md-4 col-sm-6">
										<article className="single_product">
											<figure>
												<div className="product_thumb">
													<a href="product-1.html">
														<img src={Product7} alt="" />
													</a>
													<div className="action_links">
														<ul className="d-flex justify-content-center">
															<li className="quick_button">
																<a
																	href="#"
																	title="Quick View"
																	data-bs-toggle="modal"
																	data-bs-target="#modal_box"
																>
																	<span className="pe-7s-look"></span>
																</a>
															</li>
														</ul>
													</div>
												</div>
												<figcaption className="product_content text-center">
													<h4>
														<a href="product-1.html">Provident odio, are Unde.</a>
													</h4>
													<div className="price_box">
														<span className="current_price">$28.00</span>
													</div>
												</figcaption>
											</figure>
										</article>
									</div>
									<div className="col-lg-3 col-md-4 col-sm-6">
										<article className="single_product">
											<figure>
												<div className="product_thumb">
													<a href="product-1.html">
														<img src={Product1} alt="" />
													</a>
													<div className="action_links">
														<ul className="d-flex justify-content-center">
															<li className="quick_button">
																<a
																	href="#"
																	title="Quick View"
																	data-bs-toggle="modal"
																	data-bs-target="#modal_box"
																>
																	<span className="pe-7s-look"></span>
																</a>
															</li>
														</ul>
													</div>
												</div>
												<figcaption className="product_content text-center">
													<h4>
														<a href="product-1.html">Products Name Here</a>
													</h4>
													<div className="price_box">
														<span className="current_price">$22.00</span>
													</div>
												</figcaption>
											</figure>
										</article>
									</div>
									<div className="col-lg-3 col-md-4 col-sm-6">
										<article className="single_product">
											<figure>
												<div className="product_thumb">
													<a href="product-1.html">
														<img src={Product1} alt="" />
													</a>
													<div className="action_links">
														<ul className="d-flex justify-content-center">
															<li className="quick_button">
																<a
																	href="#"
																	title="Quick View"
																	data-bs-toggle="modal"
																	data-bs-target="#modal_box"
																>
																	<span className="pe-7s-look"></span>
																</a>
															</li>
														</ul>
													</div>
												</div>
												<figcaption className="product_content text-center">
													<h4>
														<a href="product-1.html">Products Name Here</a>
													</h4>
													<div className="price_box">
														<span className="current_price">$22.00</span>
													</div>
												</figcaption>
											</figure>
										</article>
									</div>
									<div className="col-lg-3 col-md-4 col-sm-6">
										<article className="single_product">
											<figure>
												<div className="product_thumb">
													<a href="product-1.html">
														<img src={Product2} alt="" />
													</a>
													<div className="action_links">
														<ul className="d-flex justify-content-center">
															<li className="quick_button">
																<a
																	href="#"
																	title="Quick View"
																	data-bs-toggle="modal"
																	data-bs-target="#modal_box"
																>
																	<span className="pe-7s-look"></span>
																</a>
															</li>
														</ul>
													</div>
												</div>
												<figcaption className="product_content text-center">
													<h4>
														<a href="product-1.html">Lorem, ipsum dolor.</a>
													</h4>
													<div className="price_box">
														<span className="current_price">$24.00</span>
													</div>
												</figcaption>
											</figure>
										</article>
									</div>
									<div className="col-lg-3 col-md-4 col-sm-6">
										<article className="single_product">
											<figure>
												<div className="product_thumb">
													<a href="product-1.html">
														<img src={Product7} alt="" />
													</a>
													<div className="action_links">
														<ul className="d-flex justify-content-center">
															<li className="quick_button">
																<a
																	href="#"
																	title="Quick View"
																	data-bs-toggle="modal"
																	data-bs-target="#modal_box"
																>
																	<span className="pe-7s-look"></span>
																</a>
															</li>
														</ul>
													</div>
												</div>
												<figcaption className="product_content text-center">
													<h4>
														<a href="product-1.html">Praesentium vero nesciu.</a>
													</h4>
													<div className="price_box">
														<span className="current_price">$28.00</span>
													</div>
												</figcaption>
											</figure>
										</article>
									</div>
									<div className="col-lg-3 col-md-4 col-sm-6">
										<article className="single_product">
											<figure>
												<div className="product_thumb">
													<a href="product-1.html">
														<img src={Product4} alt="" />
													</a>
													<div className="action_links">
														<ul className="d-flex justify-content-center">
															<li className="quick_button">
																<a
																	href="#"
																	title="Quick View"
																	data-bs-toggle="modal"
																	data-bs-target="#modal_box"
																>
																	<span className="pe-7s-look"></span>
																</a>
															</li>
														</ul>
													</div>
												</div>
												<figcaption className="product_content text-center">
													<h4>
														<a href="product-1.html">Sit amet consectetur elit.</a>
													</h4>
													<div className="price_box">
														<span className="current_price">$32.00</span>
													</div>
												</figcaption>
											</figure>
										</article>
									</div>
								</div>
							</div>
						</div>
						<div className="tab-pane fade" id="sales" role="tabpanel">
							<div className="product_gallery">
								<div className="row">
									<div className="col-lg-3 col-md-4 col-sm-6">
										<article className="single_product">
											<figure>
												<div className="product_thumb">
													<a href="product-1.html">
														<img src={Product3} alt="" />
													</a>
													<div className="action_links">
														<ul className="d-flex justify-content-center">
															<li className="quick_button">
																<a
																	href="#"
																	title="Quick View"
																	data-bs-toggle="modal"
																	data-bs-target="#modal_box"
																>
																	<span className="pe-7s-look"></span>
																</a>
															</li>
														</ul>
													</div>
												</div>
												<figcaption className="product_content text-center">
													<h4>
														<a href="product-1.html">Praesentium vero nesciu.</a>
													</h4>
													<div className="price_box">
														<span className="current_price">$28.00</span>
													</div>
												</figcaption>
											</figure>
										</article>
									</div>
									<div className="col-lg-3 col-md-4 col-sm-6">
										<article className="single_product">
											<figure>
												<div className="product_thumb">
													<a href="product-1.html">
														<img src={Product4} alt="" />
													</a>
													<div className="action_links">
														<ul className="d-flex justify-content-center">
															<li className="quick_button">
																<a
																	href="#"
																	title="Quick View"
																	data-bs-toggle="modal"
																	data-bs-target="#modal_box"
																>
																	<span className="pe-7s-look"></span>
																</a>
															</li>
														</ul>
													</div>
												</div>
												<figcaption className="product_content text-center">
													<h4>
														<a href="product-1.html">Sit amet consectetur elit.</a>
													</h4>
													<div className="price_box">
														<span className="current_price">$32.00</span>
													</div>
												</figcaption>
											</figure>
										</article>
									</div>
									<div className="col-lg-3 col-md-4 col-sm-6">
										<article className="single_product">
											<figure>
												<div className="product_thumb">
													<a href="product-1.html">
														<img src={Product5} alt="" />
													</a>
													<div className="action_links">
														<ul className="d-flex justify-content-center">
															<li className="quick_button">
																<a
																	href="#"
																	title="Quick View"
																	data-bs-toggle="modal"
																	data-bs-target="#modal_box"
																>
																	<span className="pe-7s-look"></span>
																</a>
															</li>
														</ul>
													</div>
												</div>
												<figcaption className="product_content text-center">
													<h4>
														<a href="product-1.html">Atque earum ullam non.</a>
													</h4>
													<div className="price_box">
														<span className="current_price">$35.00</span>
													</div>
												</figcaption>
											</figure>
										</article>
									</div>
									<div className="col-lg-3 col-md-4 col-sm-6">
										<article className="single_product">
											<figure>
												<div className="product_thumb">
													<a href="product-1.html">
														<img src={Product1} alt="" />
													</a>
													<div className="action_links">
														<ul className="d-flex justify-content-center">
															<li className="quick_button">
																<a
																	href="#"
																	title="Quick View"
																	data-bs-toggle="modal"
																	data-bs-target="#modal_box"
																>
																	<span className="pe-7s-look"></span>
																</a>
															</li>
														</ul>
													</div>
												</div>
												<figcaption className="product_content text-center">
													<h4>
														<a href="product-1.html">Products Name Here</a>
													</h4>
													<div className="price_box">
														<span className="current_price">$22.00</span>
													</div>
												</figcaption>
											</figure>
										</article>
									</div>
									<div className="col-lg-3 col-md-4 col-sm-6">
										<article className="single_product">
											<figure>
												<div className="product_thumb">
													<a href="product-1.html">
														<img src={Product2} alt="" />
													</a>
													<div className="action_links">
														<ul className="d-flex justify-content-center">
															<li className="quick_button">
																<a
																	href="#"
																	title="Quick View"
																	data-bs-toggle="modal"
																	data-bs-target="#modal_box"
																>
																	<span className="pe-7s-look"></span>
																</a>
															</li>
														</ul>
													</div>
												</div>
												<figcaption className="product_content text-center">
													<h4>
														<a href="product-1.html">Lorem, ipsum dolor.</a>
													</h4>
													<div className="price_box">
														<span className="current_price">$24.00</span>
													</div>
												</figcaption>
											</figure>
										</article>
									</div>

									<div className="col-lg-3 col-md-4 col-sm-6">
										<article className="single_product">
											<figure>
												<div className="product_thumb">
													<a href="product-1.html">
														<img src={Product6} alt="" />
													</a>
													<div className="action_links">
														<ul className="d-flex justify-content-center">
															<li className="quick_button">
																<a
																	href="#"
																	title="Quick View"
																	data-bs-toggle="modal"
																	data-bs-target="#modal_box"
																>
																	<span className="pe-7s-look"></span>
																</a>
															</li>
														</ul>
													</div>
												</div>
												<figcaption className="product_content text-center">
													<h4>
														<a href="product-1.html">Modi excepturi ut ipsam.</a>
													</h4>
													<div className="price_box">
														<span className="current_price">$38.00</span>
													</div>
												</figcaption>
											</figure>
										</article>
									</div>
									<div className="col-lg-3 col-md-4 col-sm-6">
										<article className="single_product">
											<figure>
												<div className="product_thumb">
													<a href="product-1.html">
														<img src={Product7} alt="" />
													</a>
													<div className="action_links">
														<ul className="d-flex justify-content-center">
															<li className="quick_button">
																<a
																	href="#"
																	title="Quick View"
																	data-bs-toggle="modal"
																	data-bs-target="#modal_box"
																>
																	<span className="pe-7s-look"></span>
																</a>
															</li>
														</ul>
													</div>
												</div>
												<figcaption className="product_content text-center">
													<h4>
														<a href="product-1.html">Provident odio, are Unde.</a>
													</h4>
													<div className="price_box">
														<span className="current_price">$28.00</span>
													</div>
												</figcaption>
											</figure>
										</article>
									</div>
									<div className="col-lg-3 col-md-4 col-sm-6">
										<article className="single_product">
											<figure>
												<div className="product_thumb">
													<a href="product-1.html">
														<img src={Product1} alt="" />
													</a>
													<div className="action_links">
														<ul className="d-flex justify-content-center">
															<li className="quick_button">
																<a
																	href="#"
																	title="Quick View"
																	data-bs-toggle="modal"
																	data-bs-target="#modal_box"
																>
																	<span className="pe-7s-look"></span>
																</a>
															</li>
														</ul>
													</div>
												</div>
												<figcaption className="product_content text-center">
													<h4>
														<a href="product-1.html">Products Name Here</a>
													</h4>
													<div className="price_box">
														<span className="current_price">$22.00</span>
													</div>
												</figcaption>
											</figure>
										</article>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="banner_fullwidth_section mb-105"
				style={{ backgroundColor: "#f9f9f9" }}
				data-bgimg="assets/img/bg/banner-fullwidth1.png"
			>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="banner_discount_text text-center">
								<h3 className="wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1.1s">
									<span>45% </span> Sale Off
								</h3>
								<h2 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1.2s">
									Best Quality Bakery Products
								</h2>
								<p className="wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1.3s">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
									<br />
									tempor incididunt ut labore et dolore magna
								</p>
								<a
									className="btn btn-link wow fadeInUp"
									href="shop.html"
									data-wow-delay="0.3s"
									data-wow-duration="1.3s"
								>
									View Products
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
