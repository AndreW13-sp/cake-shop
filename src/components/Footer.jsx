import Logo from "../assets/img/logo/logo.png";

function Footer() {
	return (
		<footer className="footer_widgets">
			<div className="container">
				<div className="main_footer">
					<div className="row">
						<div className="col-12">
							<div className="main_footer_inner d-flex">
								<div className="footer_menu_widget footer_list_width middle d-flex">
									<div className="footer_widget_list">
										<div className="footer_menu">
											<img
												className="footer-logo"
												style={{ width: "10em", height: "auto" }}
												src={Logo}
												alt="logo"
											/>
										</div>
									</div>
									<div className="footer_widget_list">
										<h3>Information</h3>
										<div className="footer_menu">
											<ul>
												<li>
													<a href="about.html"> About us</a>
												</li>
												<li>
													<a href="shop.html"> Our Products</a>
												</li>
												<li>
													<a href="blogs.html"> Blogs</a>
												</li>
												<li>
													<a href="contact.html">Privacy Policy</a>
												</li>
												<li>
													<a href="contact.html">Terms & Conditions</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="footer_widget_list contact footer_list_width">
									<h3>Contact Us</h3>
									<div className="footer_contact_desc">
										<p>
											If you have any question.please contact us at
											<a href="#">demo@example.com</a>
										</p>
									</div>
									<div className="footer_contact_info">
										<div className="footer_contact_info_list d-flex align-items-center">
											<div className="footer_contact_info_icon">
												<span className="pe-7s-map-marker"></span>
											</div>
											<div className="footer_contact_info_text">
												<p>Your address goes here. 123, Address.</p>
											</div>
										</div>
										<div className="footer_contact_info_list d-flex align-items-center">
											<div className="footer_contact_info_icon">
												<span className="pe-7s-phone"></span>
											</div>
											<div className="footer_contact_info_text">
												<ul>
													<li>
														<a href="tel:+0123456789">+ 0 123 456 789</a>
													</li>
													<li>
														<a href="tel:+0123456789">+ 0 123 456 789</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>

								<div className="footer_widget_list footer_list_width">
									<h3>newsletter</h3>
									<div className="footer_newsletter">
										<div className="newsletter_desc">
											<p>
												If you have any question.please contact us at
												<a href="contact.html">Send Us a Email</a>
											</p>
										</div>

										<div className="newsletter_subscribe">
											<form id="mc-form">
												<input
													id="mc-email"
													type="email"
													autoComplete={false}
													placeholder="Email Address"
												/>
												<button id="mc-submit">
													<i className="ion-arrow-right-c"></i>
												</button>
											</form>
											<div className="mailchimp-alerts text-centre">
												<div className="mailchimp-submitting"></div>
												<div className="mailchimp-success"></div>
												<div className="mailchimp-error"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer_bottom">
					<div className="copyright_right text-center">
						<p>
							© 2024 <a href="index.html"> Bucker.</a> Made by
							<span style={{ color: "#e68734" }}>RV NETWORKING</span>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
